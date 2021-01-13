const inquirer = require('inquirer');
const fs = require('fs');

// TODO: create a prompt of inquirer Q's
inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is this project named?',
            name: 'name',
        },
        {
            type: 'input',
            message: 'What is the purpose/description of the project?',
            name: 'projP',
        },
        {
            type: 'input',
            message: 'What steps are needed to get this app running?',
            name: 'install',
        },
        {
            type: 'input',
            message: 'Caption for Screenshot 1',
            name: 'ss1',
        },
        {
            type: 'input',
            message: 'Screenshot 1 alt text',
            name: 'ss1alt',
        },
        {
            type: 'input',
            message: 'Screenshot 1 link',
            name: 'ss1link',
        },
        {
            type: 'input',
            message: 'Caption for Screenshot 2',
            name: 'ss2',
        },
        {
            type: 'input',
            message: 'Screenshot 2 alt text',
            name: 'ss2alt',
        },
        {
            type: 'input',
            message: 'Screenshot 2 link',
            name: 'ss2link',
        },
        {
            type: 'input',
            message: 'What year was this app made?',
            name: 'year',
        },
        {
            type: 'input',
            message: 'Live Site link',
            name: 'live',
        },
        {
            type: 'input',
            message: 'GitHub Repo link',
            name: 'github',
        },

    ])
    .then((response) => {
        const mdOutput = `# ${response.name}

## Purpose/Description

${response.projP}

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)

<br>

## Installation

${response.install}

<br>

## Usage 

### ${response.ss1}
![${response.ss1alt}](${response.ss1link})

### ${response.ss2}
![${response.ss2alt}](${response.ss2link})

<br>

## Credits

First Header | Second Header
------------ | -------------
Content from cell 1 | Content from cell 2
Content in the first column | Content in the second column

<br>

## License

MIT License

Copyright (c) [${response.year}] [Douglas Johnson]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

---

<br>

## Deployments

Live Site | GitHub Repo
------------ | -------------
${response.live} | ${response.github}`

        fs.writeFile(`${response.name}README.md`, mdOutput, err => {
            if (err) {
                console.log(err);
            } else {
                console.log("Success!")
            }
        })

    })