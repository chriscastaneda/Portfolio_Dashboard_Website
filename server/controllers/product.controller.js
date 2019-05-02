var Product = require('../models/product.model');

//test without validation or sanitation
exports.test = function (req, res) {
    res.send('Test controller is working!');
};

//Create- new product using data 
exports.product_create = function (req, res, next) {
    var product = new Product(
        {
            name: req.body.name,
            price: req.body.price
        }
    );

    product.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Product Created successfully')
    })
};

//Read- reads existing product from product id being sent in the request.
exports.product_details = function (req, res) {
    Product.findById(req.params.id, function (err, product) {
        if (err) {
            return next(err);
        }
        res.send(product);
    })
};

//Update- finds existing product using id.
exports.product_update = function (req, res) {
    Product.findByIdAndUpdate(req.params.id, { $set: req.body }, function (err, product) {
        if (err) return next(err);
        res.send('Product udpated.');
    });
};

//Delete- deletes an existing product
exports.product_delete = function (req, res) {
    Product.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};