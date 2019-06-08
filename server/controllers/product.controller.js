var Product = require('../models/product.model');

//test without validation or sanitation
exports.test = function (req, res) {
    res.send('Test controller is working!');
};

//Create- new object using data
exports.product_create = function (req, res, next) {
    var product = new Product(
        {
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            device: req.body.device,
            visit: req.body.visit,
            x: req.body.x,
            y: req.body.y
        }
    );

    product.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Product Created successfully')
    })
};
/*
//Read- read objects by id from database
exports.product_id = function (req, res, next) {
    Product.findById(req.params.id, function (err, product) {
        if (err) {
            return next(err);
        }
        res.send(product);
    })
};*/
//Read- read all objects from database
exports.product_objects = function (req, res) {
    Product.find({}, function (err, product) {
        if (err) {
            return next(err);
        }
        res.send(product);
    })
};

//Update- finds existing objects using id.
exports.product_update = function (req, res, next) {
    Product.findByIdAndUpdate(req.params.id, { $set: req.body }, function (err, product) {
        if (err) return next(err);
        res.send('Product udpated.');
    });
};

//Delete- deletes an existing object
exports.product_delete = function (req, res, next) {
    Product.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};