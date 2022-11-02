"use strict";
function weightCalculation(weight) {
    let result = 0;
    if (typeof weight == 'number')
        result = weight * 1.5;
    else
        result = parseInt(weight) * 1.5;
    return result;
}
console.log('number', weightCalculation(50));
console.log('string', weightCalculation('100kg'));
//# sourceMappingURL=index.js.map