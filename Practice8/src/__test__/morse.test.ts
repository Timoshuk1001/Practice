import {decodeMorse} from "../morse";
import {encodeMorse} from "../morse";

describe('decodeMorse', () => {
    test('should return HEY JUDE', () => {
        expect(decodeMorse('.... . -.--   .--- ..- -.. .')).toEqual('HEY JUDE');
    });
});

describe('encodeMorse', () => {
    test('should return on morse', ()=> {
        expect(encodeMorse('HEY JUDE')).toEqual('.... . -.--   .--- ..- -.. .');
    });
});
