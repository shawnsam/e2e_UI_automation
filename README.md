# e2e-automation-quickstart
 This test repo is used to automate basic straightforward scenarios for a react-based login form. The repo is developed using puppeteer & jest testing frameworks. It can be forked to enhance its capabilities.

## Concepts Included
* Page Object Model
## Tools
* TypeScript
* Puppeteer
* JEST
* NodeJS
* NPM


## Installation of dependency node modules

 For installing he required dependencies to run the automation Suite, run the below command (from the folder package.json is located). 
`npm install`\n
This will download and install all required dependencies to node modules folder.
# Usage

To run the web automation suite you can use the command :
`npm run test`.

## Testcases
1. Website Title should be Simple Login
2. Login button color is grey upon loading
3. Login button color is red upon clicking login Button without any credentials
4. Application redirects to Success Page when a valid user logs in
5. Success Message is displayed upon login
6. Application redirects to Login Page upon clicking the log out button
## Other Edge Cases(Not Implemented)
1. Login button color should be red after validation while logging in with invalid credentials
2. Back Navigation from Success Page should keep the user in Success Page itself.
3. Proper Validation Error should be shown when user provide an email in incorrect format.

# Framework Enhancements - To Do
- Reporting Tools (e.g: Allure)
- Utillity Classes (for generic methods)
- Data Paramterisation ()
- Logs
- Jenkins file
- Configs (enviornments,browsers,..etc)
- Dockerisation
