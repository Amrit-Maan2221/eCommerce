const mongoose = require('mongoose');

exports.connectDatabase = function () {
    mongoose.connect('mongodb://localhost:27017/Storish-eCommerce', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
        .then((data) => {
            console.log(`Mongodb connected with server: ${data.connection.host}`);
        }).catch((e) => {
            console.log(`no connection`);
        });
}