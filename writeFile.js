const fs = require('fs');

const text = 'samo levski'

fs.writeFile('./output.txt', text, 'utf-8', (err) => {
   if (err) {
      console.error('opitai pak')
   }

   console.log('baca');
   })