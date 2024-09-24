/* eslint-env jest */
const inversor = require('./index');
  
describe('inversor', () => {
    test('invierte un array de números', () => {
        const input = [1,2,3,4,5];
        const expectedOutput = [5,4,3,2,1];
        expect(inversor(input)).toEqual(expectedOutput);
    });
    
    test('invierte un array de letras', () => {
        const input = ['a','b','c','d','e'];
        const expectedOutput = ['e','d', 'c', 'b','a'];
        expect(inversor(input)).toEqual(expectedOutput);
    });
    
    test('invierte un array con un solo elemento', () => {
        const input = [1];
        const expectedOutput = [1];
        expect(inversor(input)).toEqual(expectedOutput);
    });
    
    test('invierte un array vacío', () => {
        const input = [];
        const expectedOutput = [];
        expect(inversor(input)).toEqual(expectedOutput);
    });
    
    test('invierte un array con dos elementos', () => {
        const input = [1, 2];
        const expectedOutput = [2,1];
        expect(inversor(input)).toEqual(expectedOutput);
    });
});
  