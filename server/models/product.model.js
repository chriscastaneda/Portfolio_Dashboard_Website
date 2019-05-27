var mongoose = require('mongoose');
var Schema = mongoose.Schema;

let ProductSchema = new Schema({
    /*
    //Table List
    scores {},*/

    //Accounts
    firstname: { type: String, trim: '', max: 100 },
    lastname: { type: String, trim: '', max: 100 },
    device: { type: String },
    //location: {},
    visit: { type: Number },
    /*email: { , unique: true },
    password: { , unique: true },
    address zip ect.. */

    //Graph
    x: { type: Number },
    y: { type: Date, default: () => { return new Date() } },

    //account_x: { type: Number },
    //account_y: { type: Date, default: Date.now  }
    
    
    /*_id: { type: mongoose.Schema.ObjectId},
    _id: { type: Schema.types.ObjectId},
    _id:  { type: Number, index: true },
    name: { type: String, required: true, max: 100 },
    price: { type: Number, required: true },
    */
});


// Export the Json model
module.exports = mongoose.model('Product', ProductSchema);