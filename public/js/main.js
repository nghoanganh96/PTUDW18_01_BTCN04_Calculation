
    const CALCULATE_BTN = 'CALCULATE_BUTTON';
    const STRING_EMPTY = '';

    // function plusOperation(first, second) {
    //     return parseFloat(first) + parseFloat(second);
    // }
    // function minusOperation(first, second) {
    //     return parseFloat(first) - parseFloat(second);
    // }
    // function multiOperation(first, second) {
    //     return parseFloat(first) * parseFloat(second);
    // }
    function devideOperation(first, second) {
        return parseFloat(first) / parseFloat(second);
    }

    function calculate() {
        let firstNum = document.getElementById('first-number').value;
        let secondNum = document.getElementById('second-number').value;
        let resultField = document.getElementById('result-number');
        let result;
        // check Is the value invalid.

        if (checkFocusOut(CALCULATE_BTN) <= 0) {
            // failure in check value in So thu 1 and So thu 2.
            resultField.value = STRING_EMPTY;
            notifyError('Hai số không hợp lệ để thực hiện phép tính.');
            return false;
        } 
        switch (getOperator()) {
            case 1:
            case 2:
            case 3: {
                break;
            };
            case 4: {
                result = devideOperation(firstNum, secondNum);
                if (result === Infinity || result === -Infinity) {
                    notifyError('Khi thực hiện phép chia, mẫu số ở ô <span>Số thứ hai</span> phải khác 0.');
                    resultField.value = STRING_EMPTY;
                    return false;
                }
                break;
            };
            default:
                // not choose operation
                notifyError('Chưa chọn phép tính.');
                resultField.value = STRING_EMPTY;
                return false;
        }
        // success and then hidden error
        setErrorVisibility('content-error', 'hidden');
        return true;
    }

    // make an Error
    function notifyError(contentError) {
        let error = document.getElementById('content-error');
        error.innerHTML = contentError;
        error.style.visibility = 'visible';
    }
    // check focusout on Input field.
    function checkFocusOut(inputNumber) {
        let valueFirst = document.getElementById('first-number').value;
        let valueSecond = document.getElementById('second-number').value;
    
        if (!isFloat(valueFirst)) {
            if(inputNumber !== CALCULATE_BTN) {
                notifyError('Giá trị nhập ở ô <span>Số thứ nhất</span> không phải số.');
            }
            return -1;
        } else if((inputNumber.id === 'second-number' || inputNumber === CALCULATE_BTN) 
                    && !isFloat(valueSecond)) { // just check So thu 2 once mouse focus on it or press Tính button
            if(inputNumber !== CALCULATE_BTN) {
                notifyError('Giá trị nhập ở ô <span>Số thứ hai</span> không phải số.');
            }
            return -1;
        }
        // success valid value then hidden error
        setErrorVisibility('content-error', 'hidden');
        return 1;
    }

    // get htmlElement has id is idName and set visibility = strValue agrument
    function setErrorVisibility(idName, strValue = 'hidden') {
        let error = document.getElementById(idName);
        error.style.visibility = strValue;
    }

    var mapOperators = new Map([
        ['plus', 1],
        ['minus', 2],
        ['multi', 3],
        ['devide', 4]
    ]);
    function getOperator() {
        let valueOper;
        let radios = document.getElementsByName('operator');
        for(let i = 0; i < radios.length; i++) {
            if (radios[i].checked) {
                valueOper = radios[i].value;
            }
        }
        return valueOper? mapOperators.get(valueOper) : 0;
    }

    // check whether input String is a Float
    function isFloat(str) {
        let pattern = /^[+-]?[0-9]*(\.[0-9]+)?$/;
        return str && pattern.test(str);
    }