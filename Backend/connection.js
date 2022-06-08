const mongoose = require('mongoose');

exports.connectDatabase = function () {
    mongoose.connect('mongodb+srv://Amrit:5QPKLYMwwivnBqoT@storish.m41ouws.mongodb.net/?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
        .then((data) => {
            console.log(`Mongodb connected with server: ${data.connection.host}`);
        }).catch((e) => {
            console.log(`no connection`);
        });
}

