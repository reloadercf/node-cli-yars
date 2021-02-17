const sendTest = (element) => `Hola ${element}`;

describe('simple test', () => {
  it('greetings', () => {
    expect(sendTest('carlos')).toBe('Hola carlos');
  });
});
