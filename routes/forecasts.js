const express = require('express');
const router = express.Router();
const Forecast = require('../models/Forecast');
const verify = require('./verfiyToken');
const apiCache = require('apicache');

const cache = apiCache.middleware;
router.get('/', verify, (req,res) => {
    res.send('Forecasts');
});

router.post('/', (req, res) => {
    const foreCast = new Forecast({
        cityId: req.body.cityId,
        currentStats: req.body.currentStats,
        nextFiveDays: req.body.nextFiveDays
    });
    foreCast.save()
        .then(data=>{res.json(data)})
        .catch(err=>{
            res.json({msg: err});
        });
});

router.get('/:cityId', verify , cache('5 minutes'), async (req, res) => {
    try {
       const foreCast = await Forecast.findOne({"cityId": req.params.cityId});
        res.json(foreCast);
    } catch (err){
        res.json({msg: err});
    }
});

module.exports = router;
