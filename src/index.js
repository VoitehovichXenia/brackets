module.exports = function check(str, bracketsConfig) {
    let openBrackets = [];
    let bracketsPair = {};
    let stack = [];
    let n; 

    bracketsConfig.forEach( (pair) => {

        if (pair[0] === pair[1]) {
            n = 1;
        }
        
        openBrackets.push(pair[0]);
        bracketsPair[pair[1]] = pair[0];
    });

    for (let i = 0; i < str.length; i++) {

        if (str[i] === bracketsPair[str[i]] && (n % 2)) {
            stack.push(str[i]);
            n++;
            continue;
        } else if (str[i] === bracketsPair[str[i]] && n > 1 && !(n % 0) && str[i] === stack[stack.length - 1]) {
            stack.pop();
            continue;
        }

        if (openBrackets.includes(str[i])) {
            stack.push(str[i]);
        } else {

            if (!stack.length && str[i]) { 
                stack.push(str[i]);
                break;
            }

            if (stack.length && bracketsPair[str[i]] === stack[stack.length - 1]) {
                stack.pop();
            }
        }
    }

    return stack.length === 0;
}