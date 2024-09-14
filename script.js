const display = document.getElementById("display");
let isLastInputOperator = false;
let isDecimalAdded = false;

function appendToDisplay(input){
    if (input === "." && isDecimalAdded) {
        return;
    }
        if ("+-*/".includes(input)) {
            if (isLastInputOperator) {
                initialValue = display.value;
                updatedValue = initialValue.substring(0, initialValue.length - 1) + input;
                display.value = updatedValue;
                return;
            }
            isLastInputOperator = true; 
            isDecimalAdded = false;
        } 
        else {
            isLastInputOperator = false; 
            if (input === ".") {
                isDecimalAdded = true;
            }
        }
    display.value += input; 
    display.scrollLeft = display.scrollWidth;
}

function clearAll(){
    display.value = '';
    isDecimalAdded = false;
}

function calculate(){
    display.value = eval(display.value);
}

function deleteHandler(){
    initialValue = display.value;
    updatedValue = initialValue.substring(0, initialValue.length - 1);
    display.value = updatedValue;
}