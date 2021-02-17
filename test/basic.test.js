/* eslint-disable no-undef */
const { pause, printMenu } = require('../src/helpers/message');

const sendTest = (element) => `Hola ${element}`;

describe('simple test', () => {
  it('greetings', () => {
    expect(sendTest('carlos')).toBe('Hola carlos');
  });

  it('function pause', () => {
    expect(typeof pause).toBe('function');
  });

  it('function printMenu', () =>{
    expect(typeof printMenu).toBe('function');
  });
});
