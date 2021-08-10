const path = require('path')

console.log(path.sep)

const filepath = path.join('/githubCus','README.md')
console.log(filepath)

const base = path.basename(filepath)
console.log(base)

const absolute = path.resolve(__dirname, 'githubCus','README.md')
console.log(absolute)