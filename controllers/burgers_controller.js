const express = require('express');

const router = express.Router();

const burger = require('../models/burger');

router.get('/', function (req, res) {
    burger.all(function (data) {
        let burgerObject = {
            burgers: data
        };
        console.log(burgerObject);
        res.render('index', burgerObject);
    });
});

router.post('/api/burgers', function (req, res) {
    console.log(req.body)

    burger.create([req.body.name, req.body.devoured], function (result) {
        res.json({ id: result.insertID });
    });
});

router.put('/api/burgers/:id', function (req, res) {
    var condition = "id = " + req.params.id;
    console.log("condition", condition);
    burger.update(
        {
            devoured: true
        },
        condition,
        function (result) {
            if (result.changedRows === 0) {
                return res.status(404).end();
            }
            res.status(200).end();

        }
    );
});

module.exports = router;