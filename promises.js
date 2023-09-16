const fs = require('fs/promises')

const rdPromise = fs.readFile('./input.txt', 'utf-8')
rdPromise.then((data) => {
   console.log(data);
   fs.writeFile('./output.txt',data, 'utf-8')
})