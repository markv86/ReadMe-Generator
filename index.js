// Read Me 

// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled XDescription, XInstallation, XUsage, XContributing, and XTests
// WHEN I choose a Xlicense for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README

// dependencies/modules
const inquirer = require("inquirer"); // asks questions
const fs = require("fs"); // module for working with files


// inquirer prompts/questions for user

inquirer.prompt([
        {
			type: 'input',
			name: 'title',
			message: 'Project Title:',
		},
		{
			type: 'input',
			name: 'description',
			message: 'Project Description:',
        },
        {
			type: 'input',
			name: 'installation',
			message: 'Installation Instructions:'
        },
        {
			type: 'input',
			name: 'usage',
			message: 'What is this used for?'
        },
        {
			type: 'input',
			name: 'contribution',
			message: 'Project Contributors:'
        },
        {
			type: 'input',
			name: 'tests',
			message: 'Testing Instructions:'
        },
        {
			type: 'list',
			name: 'license',
			prefix: 'License',
			message: 'License Type:',
			choices: [
				'None',
				'Apache License 2.0', 
				'GNU General Public License v3.0', 
				'MIT License', 
				'BSD 2-Clause "Simplified" License',
				'BSD 3-Clause "New" or "Revised" License',
				'Boost Software License 1.0',
				'Creative Commons Zero v1.0 Universal',
				'Eclipse Public License 1.0',
				'GNU Affero General Public License v3.0',
				'GNU General Public License v2.0',
				'GNU Lesser General Public License v2.1',
				'Mozilla Public License 2.0',
				'The Unlicense'
			]
        },
		{
			type: 'checkbox',
			name: 'languages',
			message: 'Languages Used:',
			choices: [
				'HTML', 
				'CSS', 
				'JavaScript', 
				'API',
				'Node.JS',
			],
		},
		{
			type: 'input',
			name: 'email',
			message: 'Email:'
		},
		{
			type: 'input',
			name: 'website',
			message: 'Portfolio Website:'
		},
		{
			type: 'input',
			name: 'github',
			message: 'Github Username:'
		}
    ]
).then (({
    title,
    description,
    installation,
    usage,
    contribution,
    tests,
    license,
    language,
    email,
    website,
    github
})=>{

    const mdTemp = `# ${title}
    * [Description]{#description}
    * [Installation](#installation)
    * [Usage]{#usage}
    * [Contribution]{#contribution}
    * [Tests]{#tests}
    * [License]{#license}
    * [Language]{#language}
    # Installation
    ${installation}
    ## Usage
    ${usage}
    ## Contribution
    ${contribution}
    ### Instructions
    ${instructions}
    ## Language
    ${language}
    ## License
    ${license}

    # Contact
    * GitHub :${git}


}
)
