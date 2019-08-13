const dal = require('../config/orm');

const burger = {
    all: function(cb) {
        dal.all('burgers', function(response) {
            cb(response);
        });
    },
    create: function(val1, cb) {
        dal.create('burgers', 'burger_name', val1, 'devoured', false, function(response) {
            cb(response);
        });
    },
    update: function(val1, cb) {
        dal.update('burgers', 'burger_name', val1, 'devoured', true, function(response) {
            cb(response);
        });
    }
};

module.exports = burger;