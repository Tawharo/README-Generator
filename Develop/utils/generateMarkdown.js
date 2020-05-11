function generateMarkdown(data) {
    const profilePic = `https://avatars3.githubusercontent.com/u/60530904?s=460&u=02b4a03876d6d128c2e6b20efa3e3603b7e081a9&v=4`;
    const repoName = "README-Generator";
    const badgeHTTPOne = `[![License: ${data.badgeChoice}](https://img.shields.io/badge/License-${data.badgeChoice}-blue.svg)](https://opensource.org/licenses/${data.badgeChoice})`;
    const badgeHTTP = `
     https://img.shields.io/github/license/${data.githubUsername}/${repoName}`;
      return `
    ## Badge 
      ${badgeHTTPOne}
    ## Title
      * ${data.title}
    ## Description
      * ${data.projectDescription}
    ## Install
      * ${data.appInstall}
    ## Table of Contents
      * ${data.tableOfContents}
    ## Usage
      * ${data.usage}
    ## License
      * ${data.badgeChoice}
    ## Contributions
      * ${data.contributing}
    ## Tests
      * ${data.tests}
    ## Questions
      * Profile Pic
        - ${profilePic}
      * ${data.questions}
      * Username
        - ${data.githubUsername}
      * E-mail Address
        - ${data.userEmail}
    ## Badge
      * ${badgeHTTP}
    `
    ;
    }
    
    module.exports = generateMarkdown;
      