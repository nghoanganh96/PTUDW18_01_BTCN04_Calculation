const express = require('express');
var router = express.Router();
const NUM_TO_ROUND = 100000000;

router.get('/', (req, res) => {
    res.render('calculation');
});

router.post('/', (req, res, next) => {
    let firstNum = parseFloat(req.body.sothunhat);
    let secondNum = parseFloat(req.body.sothuhai);
    let operator = req.body.operator;
    let result;
    switch (operator) {
        case 'plus': {
            result = firstNum + secondNum;
            let isPlus = true;
            res.render('calculation', {firstNum, secondNum, result, isPlus});
            break;
        };
        case 'minus': {
            result = firstNum - secondNum;
            let isMinus = true;
            res.render('calculation', {firstNum, secondNum, result, isMinus});
            break;
        };
        case 'multi': {
            result = firstNum * secondNum;
            let isMulti = true;
            res.render('calculation', {firstNum, secondNum, result, isMulti});
            break;
        };
        case 'devide': {
            result = firstNum / secondNum;
            let isDevide = true;
            res.render('calculation', {firstNum, secondNum, result, isDevide});
            break;
        };
        default:
            break;
    }
});

module.exports = router;