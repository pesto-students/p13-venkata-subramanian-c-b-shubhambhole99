// controllers/assetController.js
const assetModel = require('../models/assetModel');


// class AssetController {
//   getAllAssets(req, res) {
//     assetModel.getAllAssets()
//       .then(([rows]) => res.json(rows))
//       .catch((err) => res.status(500).json({ error: err.message }));
//   }

//   updateAsset(req, res) {
//     const id = req.params.id;
//     const newData = req.body;

//     assetModel.updateAsset(id, newData)
//       .then(() => res.json({ message: 'Asset updated successfully' }))
//       .catch((err) => res.status(500).json({ error: err.message }));
//   }

//   deleteAsset(req, res) {
//     const id = req.params.id;

//     assetModel.deleteAsset(id)
//       .then(() => res.json({ message: 'Asset deleted successfully' }))
//       .catch((err) => res.status(500).json({ error: err.message }));
//   }
// }

// module.exports = new AssetController();
function getAllAssets(req, res) {
  assetModel.getAllAssets()
    .then(([rows]) => res.json(rows))
    .catch((err) => res.status(500).json({ error: err.message }));
}

function getAssetById(req, res) {
  const id = req.params.id;
  assetModel.getAssetById(id)
    .then(([rows]) => {
      if (rows.length === 0) {
        res.status(404).json({ error: 'Asset not found' });
      } else {
        res.json(rows[0]);
      }
    })
    .catch((err) => res.status(500).json({ error: err.message }));
}

function createAsset(req, res) {
  const newAsset = req.body;
  assetModel.createAsset(newAsset)
    .then(() => res.json({ message: 'Asset created successfully' }))
    .catch((err) => res.status(500).json({ error: err.message }));
}

function updateAsset(req, res) {
  const id = req.params.id;
  const newData = req.body;
  assetModel.updateAsset(id, newData)
    .then(() => res.json({ message: 'Asset updated successfully' }))
    .catch((err) => res.status(500).json({ error: err.message }));
}

function deleteAsset(req, res) {
  const id = req.params.id;
  assetModel.deleteAsset(id)
    .then(() => res.json({ message: 'Asset deleted successfully' }))
    .catch((err) => res.status(500).json({ error: err.message }));
}

module.exports = {
  getAllAssets,
  getAssetById,
  createAsset,
  updateAsset,
  deleteAsset,
};

