function solve() {
    let expression = [[], "", []];
    let keyboard = document.querySelectorAll("div.keys button");
    for (let i = 0; i < keyboard.length; i++) {

        keyboard[i].addEventListener("click", function (e) {
            const currentTarget = e.currentTarget;
            currentTarget.type = "button";
            const currentValue = currentTarget.value;

            switch (currentValue) {
                case '/':
                case '*':
                case '-':
                case '+':
                    expression[1] = currentValue;
                    break;
                case '7':
                case '8':
                case '9':
                case '4':
                case '5':
                case '6':
                case '1':
                case '2':
                case '3':
                case '0':
                    if (!expression[1].length > 0) {
                        expression[0].push(currentValue);
                    } else {
                        expression[2].push(currentValue);
                    }
                    break;
                case '.':
                    if ((!expression[1].length > 0) && (!expression[0].includes('.'))) {
                        expression[0].push(currentValue);
                    } else if (expression[1].length > 0 && (!expression[2].includes('.'))) {
                        expression[2].push(currentValue);
                    }
                    break;
                case '=':
                    let firstNumber = Number(expression[0].join(''));
                    let operant = expression[1];
                    let secondNumber = Number(expression[2].join(''));


                    let output = 0;
                    if (expression[2].length !== 0) {
                        switch (operant) {
                            case '/':
                                output = firstNumber / secondNumber;
                                break;
                            case '*':
                                output = firstNumber * secondNumber;
                                break;
                            case '-':
                                output = firstNumber - secondNumber;
                                break;
                            case '+':
                                output = firstNumber + secondNumber;
                                break;
                        }
                    } else {
                        output = 'NaN';
                    }
                    let resultOutput = document.getElementById("resultOutput");
                    resultOutput.textContent = output;
                    break;
            }
            let expressionOutput = document.getElementById("expressionOutput");
            // expressionOutput.textContent = expression.flat(1).join('');
            expressionOutput.textContent = `${expression[0].join('')} ${expression[1]} ${expression[2].join('')}`;
        });
        let clear = document.getElementsByClassName("clear")[0];
        clear.addEventListener("click", function () {
            let resultOutput = document.getElementById("resultOutput");
            resultOutput.textContent = "";
            let expressionOutput = document.getElementById("expressionOutput");
            expressionOutput.textContent = "";

            expression = [[], "", []];
        });
    }
}