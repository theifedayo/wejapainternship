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
    		takein.question("Any test to run? ", function(tests){
    			takein.question("How to deploy? ", function(deploy){
    				takein.question("Built with what tool? ", function(tools){
    					takein.question("Name those that contributed? ",function(contribute){
    						takein.question("License? ",function(license){
    							console.log(`The project title is ${projectTitle}`);
						        fs.writeFileSync(path.join(__dirname,fileName),"\n"+"# " + projectTitle  + "\n")
						        fs.appendFileSync(fileName, "\n" + "### Prerequisites"+ "\n" +prerequisites +"\n")
						        fs.appendFileSync(fileName, "\n" + "### Installing"+ "\n" + installations +"\n")
						        fs.appendFileSync(fileName, "\n" + "## Running the test"+ "\n" + tests+"\n")
						        fs.appendFileSync(fileName, "\n" + "## Deployment"+ "\n" + deploy +"\n")
						        fs.appendFileSync(fileName, "\n" + "## Built With"+ "\n" + tools+"\n")
						        fs.appendFileSync(fileName, "\n" + "## Contributing"+ "\n" + contribute +"\n")
						        fs.appendFileSync(fileName, "\n" + "## Licensing"+ "\n" + license +"\n")
						        takein.close();
    						})
    					})
    				})
    			})
    		})
    	})
    });
});


