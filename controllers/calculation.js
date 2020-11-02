const express = require('express');
var router = express.Router();
const NUM_TO_ROUND = 100000000;

router.get('/', (req, res) => {
    res.render('calculation', {title: 'BTCN03 - Calculation'});
});

router.post('/', (req, res, next) => {
    let firstNum = parseFloat(req.body.sothunhat);
    let secondNum = parseFloat(req.body.sothuhai);
    let operator = req.body.operator;
    let result;
    let title = 'BTCN03 - Calculation';
    switch (operator) {
        case 'plus': {
            result = firstNum + secondNum;
            let isPlus = true;
            res.render('calculation', {title, firstNum, secondNum, result, isPlus});
            break;
        };
        case 'minus': {
            result = firstNum - secondNum;
            let isMinus = true;
            res.render('calculation', {title, firstNum, secondNum, result, isMinus});
            break;
        };
        case 'multi': {
            result = firstNum * secondNum;
            let isMulti = true;
            res.render('calculation', {title, firstNum, secondNum, result, isMulti});
            break;
        };
        case 'devide': {
            result = firstNum / secondNum;
            let isDevide = true;
            res.render('calculation', {title, firstNum, secondNum, result, isDevide});
            break;
        };
        default:
            break;
    }
});
router.get('/error', (req, res, next) => {
    next();
});

module.exports = router;