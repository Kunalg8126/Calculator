document.addEventListener("DOMContentLoaded", function () {
    const display = document.getElementById("display");
    const buttons = document.querySelectorAll("button");
    let currInput = "";
    let operator = "";
    let prevInput = "";

    buttons.forEach((button) => {
        button.addEventListener("click", handleButtonClick);
    });

    function handleButtonClick(e) {
        const buttonValue = e.target.textContent;

        if (!isNaN(buttonValue) || buttonValue === ".") {
            currInput += buttonValue;
        } else if (buttonValue === "C") {
            clearCalculator();
        } else if (buttonValue === "=") {
            performCalculation();
        } else {
            handleOperator(buttonValue);
        }

        updateDisplay();
    }

    function handleOperator(op) {
        if (operator && currInput) {
            performCalculation();
            prevInput = currInput;
            currInput = "";
        } else {
            prevInput = currInput || "0";
            currInput = "";
        }

        operator = op;
    }

    function performCalculation() {
        const num1 = parseFloat(prevInput);
        const num2 = parseFloat(currInput);

        if (!isNaN(num1) && !isNaN(num2)) {
            switch (operator) {
                case "+":
                    currInput = (num1 + num2).toString();
                    break;
                case "-":
                    currInput = (num1 - num2).toString();
                    break;
                case "*":
                    currInput = (num1 * num2).toString();
                    break;
                case "/":
                    currInput = (num1 / num2).toString();
                    break;
                default:
                    break;
            }
        }

        operator = "";
    }

    function clearCalculator() {
        currInput = "";
        operator = "";
        prevInput = "";
    }

    function updateDisplay() {
        display.textContent = currInput || "0";
    }
});