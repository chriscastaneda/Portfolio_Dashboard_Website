var express = require('express');
var router = express.Router();
var product_controller = require('../controllers/product.controller');// Require controllers


//test url to check files are communicating
router.get('/test', product_controller.test);

//Create- post: localhost:..../products/create
router.post('/create', product_controller.product_create);

//Read- get: from database ObjectId: "5c6b564e3139a71a8c00d451"
router.get('/:id', product_controller.product_details);

//Update- put: an existing product.
router.put('/:id/update', product_controller.product_update);

//Delete- delete: delete an existing product
router.delete('/:id/delete', product_controller.product_delete)


module.exports = router;