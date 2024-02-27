// routes/assetRoutes.js
const express = require('express');
const assetController = require('../controller/assetController');

const router = express.Router();

router.get('/', assetController.getAllAssets);
router.get('/:id', assetController.getAssetById);
router.post('/', assetController.createAsset);
router.put('/:id', assetController.updateAsset);
router.delete('/:id', assetController.deleteAsset);

module.exports = router;