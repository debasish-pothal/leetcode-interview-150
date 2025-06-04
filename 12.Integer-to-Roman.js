/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    const romanMap = new Map([
        ['I', 1],
        ['IV', 4],
        ['V', 5],
        ['IX', 9],
        ['X', 10],
        ['XL', 40],
        ['L', 50],
        ['XC', 90],
        ['C', 100],
        ['CD', 400],
        ['D', 500],
        ['CM', 900],
        ['M', 1000]
    ]);

    let result = '';

    for (const [symbol, value] of Array.from(romanMap).reverse()) {
        if (num / value >= 1) {
            result += symbol.repeat(Math.floor(num / value));
            num %= value;
        }
    }

    return result;
};