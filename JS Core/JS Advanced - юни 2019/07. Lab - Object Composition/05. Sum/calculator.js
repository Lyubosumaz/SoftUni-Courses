// function solve() {
//     let firstSelector, secondSelector, resultSelector;
//     return {
//         init:  function(selector1,selector2,resultSelectorAsStr){
//             firstSelector = $(selector1);
//             secondSelector = $(selector2);
//             resultSelector = $(resultSelectorAsStr);
//         },
//         handleAddClick: function () {
//             let firstVal = Number(firstSelector.val());
//             let secondVal = Number(secondSelector.val());
//             resultSelector.val(firstVal + secondVal);
//         },
//         handleSubtractClick: function () {
//             let firstVal = Number(firstSelector.val());
//             let secondVal = Number(secondSelector.val());
//             resultSelector.val(firstVal - secondVal);
//         }
//     }
// }

const SELECTORS = {
    NUM1: "#num1",
    NUM2: "#num2",
    RESULT: "#result",
    SUM_BUTTON: "#sumButton",
    SUBTRACT_BUTTON: "#subtractButton",
};

class Calculator {
    constructor() {
        this.handleAddClick = this.handleAddClick.bind(this);
        this.handleSubtractClick = this.handleSubtractClick.bind(this);

        this.num1 = document.querySelector(SELECTORS.NUM1);
        this.num2 = document.querySelector(SELECTORS.NUM2);
        this.result = document.querySelector(SELECTORS.RESULT);
        this.btnAdd = document.querySelector(SELECTORS.SUM_BUTTON);
        this.btnSubtract = document.querySelector(SELECTORS.SUBTRACT_BUTTON);

        this._initEvents();
    }

    handleAddClick() {
        const x = this.num1.value;
        const y = this.num2.value;
        this.result.value = Number(x) + Number(y);
    }
    handleSubtractClick() {
        const x = this.num1.value;
        const y = this.num2.value;
        this.result.value = Number(x) - Number(y);
    }

    _initEvents() {
        this.btnAdd.addEventListener("click", this.handleAddClick);
        this.btnSubtract.addEventListener("click", this.handleSubtractClick);
    }
}
new Calculator();