const readline = require('readline');

const reader = readline.createInterface({
     input: process.stdin,
     output: process.stdout
});

let name = "Tuli"
console.log(`Welcome to the password validator, ${name}.`)

reader.question("Please validate your password.", function(input){
	characters = input.split('');
    

if (characters.length >= 10) {  
    console.log('Success!')
} else if (characters.length < 10) {
    console.log("Login Failed.")
} else {
    console.log('invalid')
 }
reader.close()
});
