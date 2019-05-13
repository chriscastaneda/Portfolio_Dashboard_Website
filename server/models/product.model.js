var mongoose = require('mongoose');
var Schema = mongoose.Schema;

let ProductSchema = new Schema({
    name: { type: String, required: true, max: 100 },
    price: { type: Number, required: true },

    firstname: { type: String, required: true, trim:'', max: 100 },
    lastname: { type: String, required: true, trim:'', max: 100  },
    device: { type: String, default: '' },

    x: {type: Number},
    y: {type: Number}

});


// Export the model
module.exports = mongoose.model('Product', ProductSchema);