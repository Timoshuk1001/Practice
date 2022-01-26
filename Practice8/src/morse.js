"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decodeMorse = exports.encodeMorse = void 0;
const mappings_1 = require("./mappings");
function encodeMorse(str) {
    const arr = str.toUpperCase().split('');
    let result = '';
    arr.forEach(x => {
        mappings_1.mappings.forEach(el => {
            if (el.translation === x) {
                result += el.symbol + ' ';
            }
        });
    });
    return result.trim();
}
exports.encodeMorse = encodeMorse;
console.log(encodeMorse('HEY DUDE'));
function decodeMorse(str) {
    const arr = str.split('  ');
    let result = '';
    arr.forEach(item => {
        let el = item.split(' ');
        el.forEach(x => {
            mappings_1.mappings.forEach(elem => {
                if (elem.symbol === x) {
                    result += elem.translation;
                }
            });
        });
        result += ' ';
    });
    return result.trim();
}
exports.decodeMorse = decodeMorse;
console.log(decodeMorse('.... . -.--   .--- ..- -.. .'));
//# sourceMappingURL=morse.js.map