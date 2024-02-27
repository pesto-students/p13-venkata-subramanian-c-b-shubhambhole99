const express = require('express')
const router = express.Router()
const assetController = require('../controller/assetController');
// Get all assets
router.get('/', assetController.getAllAssets);

// Get asset by ID
router.get('/:id', assetController.getAssetById);

// Create a new asset
router.post('/', assetController.createAsset);

// Update an existing asset
router.put('/:id', assetController.updateAsset);

// Delete an asset
router.delete('/:id', assetController.deleteAsset);

module.exports=router