// controllers/assetController.js
const Asset = require('../models/AssetModel');

async function getAllAssets(req, res) {
  try {
    const assets = await Asset.findAll();
    res.json(assets);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function getAssetById(req, res) {
  const id = req.params.id;
  try {
    const asset = await Asset.findByPk(id);
    if (asset) {
      res.json(asset);
    } else {
      res.status(404).json({ error: 'Asset not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function createAsset(req, res) {
  const newAsset = req.body;
  try {
    const createdAsset = await Asset.create(newAsset);
    res.json({ message: 'Asset created successfully', asset: createdAsset });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function updateAsset(req, res) {
  const id = req.params.id;
  const newData = req.body;
  try {
    const updatedRows = await Asset.update(newData, { where: { id } });
    if (updatedRows[0] === 1) {
      res.json({ message: 'Asset updated successfully' });
    } else {
      res.status(404).json({ error: 'Asset not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function deleteAsset(req, res) {
  const id = req.params.id;
  try {
    const deletedRows = await Asset.destroy({ where: { id } });
    if (deletedRows === 1) {
      res.json({ message: 'Asset deleted successfully' });
    } else {
      res.status(404).json({ error: 'Asset not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  getAllAssets,
  getAssetById,
  createAsset,
  updateAsset,
  deleteAsset,
};