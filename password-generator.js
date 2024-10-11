// This will be used to generate random passwords when called 

const generator = require("generate-password");
// console.log(generator)

const password = generator.generate({
    length: 12,
    number: true,
    uppercase: true,
    symbols: true,
    


})

console.log(password)