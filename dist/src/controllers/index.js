"use strict";
const getInfoData = require('../models/index');
const getInfo = (req, res) => {
    const data = getInfoData();
    res.send(data);
};
module.exports = {
    getInfo,
};
