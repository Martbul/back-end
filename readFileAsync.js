const fs = require('fs')

 fs.readFile('./input.txt', 'utf8', (err,text) => {
   if (err) {
      console.error(err)
      return
   }

   console.log(text);
})

console.log('reading has ended')