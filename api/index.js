const router = require('express').Router();
const {models: {Task}} = require('../db/index');

router.get('/tasks', async(req, res, next) => {
    try {
        res.send(await Task.findAll());
    }
    catch(ex){
        next(ex)
    }
});

module.exports = router;