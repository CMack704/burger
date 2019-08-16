const dal = require('../config/orm');

const burger = {
    all: function (cb) {
        dal.all('burgers', function (response) {
            cb(response);
        });
    },
    create: function (val1, cb) {
        console.log(val1)
        dal.create('burgers', 'burger_name', val1[0], 'devoured',val1[1], function (response) {
            cb(response);
        });
    },
    update: function (objColVals, condition, cb) {
        dal.update('burgers', objColVals, condition, function (response) {
            cb(response);
        });
    }
};

module.exports = burger;