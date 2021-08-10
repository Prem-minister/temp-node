//GLOBALS - No Windows
//__dirname - path to current directory
//__filename - filename
// require - function to use modules (CommonJS)
//module -  info about current module (filename)
// process - info about env where the program is being executed 

/*
console.log(__dirname)
setInterval(() => {
console.log('hey')
}, 100)
*/

//Modules that


const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavor')
console.log(data)

require('./7-mind-grenade')

sayHi('Zoro')
sayHi(names.Levi)
sayHi(names.Luffy)