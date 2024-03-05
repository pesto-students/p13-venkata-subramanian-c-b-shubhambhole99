const db = require('../database/db');



// // models/assetModel.js
// const db = require('../config/db');

// class AssetModel {
//   getAllAssets() {
//     return db.promise().query('SELECT * FROM assets');
//   }

//   updateAsset(id, newData) {
//     return db.promise().query('UPDATE assets SET ? WHERE id = ?', [newData, id]);
//   }

//   deleteAsset(id) {
//     return db.promise().query('DELETE FROM assets WHERE id = ?', [id]);
//   }
// }

// module.exports = new AssetModel();




function getAllAssets() {
  return db.promise().query('SELECT * FROM assets');
}

function getAssetById(id) {
  return db.promise().query('SELECT * FROM assets WHERE id = ?', [id]);
}

function createAsset(newAsset) {
  return db.promise().query('INSERT INTO assets SET ?', [newAsset]);
}

function updateAsset(id, newData) {
  return db.promise().query('UPDATE assets SET ? WHERE id = ?', [newData, id]);
}

function deleteAsset(id) {
  return db.promise().query('DELETE FROM assets WHERE id = ?', [id]);
}

module.exports = {
  getAllAssets,
  getAssetById,
  createAsset,
  updateAsset,
  deleteAsset,
};