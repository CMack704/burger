const connection = require('../config/connection');

const dal = {
    all: function (table, cb) {
        let queryString = 'SELECT * FROM ' + table + ';';
        connection.query(queryString, function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    create: function(table, col1, val1, col2, val2, cb) {
        let queryString = 'INSERT INTO ' + table + ' (' + col1 + ', ' + col2 + ') VALUES (' + val1 + ', '  + val2 + ');'
        connection.query(queryString, val, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    update: function(table, col1, val1, col2, val2) {
        let queryString = 'UPDATE ' + table + ' SET ' + col1 + ' = ' + val1 + ' WHERE ' + col2 + ' = ' + val2 + ';';
        connection.query(queryString, val, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    }
};

module.exports = dal;