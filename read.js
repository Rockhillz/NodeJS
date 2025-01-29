// // To read files in txt format and output to the console 
// const fs = require("fs")
// // console.log(fs)

// // Task 1; Create the file.txt and the content inside 
// const file = "welcome.txt"
// const content = "Hello from Node"

// // Use fs to write the content in the file 
// fs.writeFile(file, content, (err) => {
//     if(err) {
//         console.error('Error writing to file:', err);
//     } else {
//         console.log(`The file ${file} has been created and the content is: ${content}`)
//     }
// })

// // Task 2: Read a file already created 
// fs.readFile('hello.txt', (err, output) => {
//     if (err) {
//         console.error(`Error reading file:`, err)
//     } else {
//         console.log(output.toString())
//     }
// } )