// Importing modules
var timestamps = require('mongoose-timestamp');


// Creating user schema
var schema = new mongoose.Schema({
    userid: {
        type: String
    },
    password: {
        type: String
    },
    lastlogin: {
        type: Date,
    },
})

schema.plugin(timestamps);


var tbl_user = new mongoose.model('tbl_user', schema);

module.exports = tbl_user;