const fs = require('fs')
const path = require('path')
const readline = require("readline");

const takein = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

takein.question("What is your project title? ", function(projectTitle) {
	const fileName = 'README.md'
    takein.question("What are the prerequisites  ", function(prerequisites) {
    	takein.question("What are the installations? ", function(installations){
    		console.log(`The project title is ${projectTitle}`);
	        fs.writeFileSync(path.join(__dirname,fileName), projectTitle + "\n" + "------------------------------------------")
	        fs.appendFileSync(fileName, "\n" + prerequisites )
	        fs.appendFileSync(fileName, "\n" + installations )
	        takein.close();

    	})
    });
});


