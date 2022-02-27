function readmeLayout(data) {
    return `
   # ${data.title}

    ${data.badge}

    ## Description
    ${data.description}

    ## Table of Contents
    * [Installation Instructions](#Installation)
    * [Usage Information](#Usage)
    * [License](#license)
    * [Contributing](#contributing)
    * [Tests](#tests)
    
    ## Installation
    ${data.installation}

    ## Usage Information
    ${data.usage}

    ## License
    ${data.license}

    ## Contributing
    ${data.constributing}
    ## Tests
    ${data.tests}

    ## Questions
    ${data.username}
    ${data.email}`
};

module.exports = readmeLayout;