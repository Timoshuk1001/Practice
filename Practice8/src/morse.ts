import { mappings } from './mappings';


export function encodeMorse(str){
    const arr = str.toUpperCase().split('');
    let result = '';

    arr.forEach(x => {
        mappings.forEach(el => {
            if(el.translation === x) {
                result += el.symbol + ' ';
            }
        })
    })
    return result.trim();
}

console.log(encodeMorse('HEY DUDE'))


export function decodeMorse(str) {
    const arr = str.split('  ');
    let result = '';

    arr.forEach(item => {
        let el = item.split(' ');
        el.forEach(x => {
            mappings.forEach(elem => {
                if (elem.symbol === x) {
                    result += elem.translation;
                }
            })
        })
        result += ' ';
    })
    return result.trim();
}

console.log(decodeMorse('.... . -.--   .--- ..- -.. .'))
