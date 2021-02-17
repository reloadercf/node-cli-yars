/* eslint-disable linebreak-style */
require('colors');

const { printMenu, pause } = require('./helpers/message');

const main = async () => {
  console.log('Hola mundo');
  printMenu();
  pause();
};

main();
