var fs = require('fs');

fs.appendFile('mynewfile1.txt', 'Hello content! 2', function (err) {
  if (err) throw err;
  console.log('Saved!');
});