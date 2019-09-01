var fs = require('fs');

fs.writeFile('mynewfile3.txt', 'Hello content data!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});