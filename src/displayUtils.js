require('colors');

function displayHeader() {
  process.stdout.write('\x1Bc');
  console.log('========================================'.cyan);
  console.log('=           Sonic Odyssey BOT          ='.cyan);
  console.log('=     Created by Dangtoan      ='.cyan);
  console.log('=    https://t.me/LTHKT     ='.cyan);
  console.log('========================================'.cyan);
  console.log();
}

module.exports = {
  displayHeader,
};
