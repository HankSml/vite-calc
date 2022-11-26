// parse string passed from state to create arrays with nums and operators
// use while + switch statements to perform listed operations, then return result at the end

function handleMath(equationString) {
    let operatorArray = [];
    let numsArray = [];
    let currNum = "";

    const equationArray = equationString.split("");

    equationArray.forEach(digit => {
        if (digit.match(/[\d.]+/)) {
            currNum += digit
        } else {
            operatorArray.push(digit)
            numsArray.push(currNum)
            currNum = ""
        }
    });

    let res = parseFloat(numsArray.shift());
    while (operatorArray != []) {
        const operator = operatorArray.shift();
        const newNum = parseFloat(numsArray.shift());

        switch(operator) {
            case "%":
                res = res % newNum;
                break;
            case "/":
                res = res / newNum;
                break;
            case "*":
                res = res * newNum;
                break;
            case "-":
                res = res - newNum;
                break;
            case "+":
                res = res + newNum;
                break;
            default:
                res = "Error"
                break;
        }
    }

    return res;
}

console.log(parseFloat("12"))
console.log(handleMath("12+1"))

export default handleMath