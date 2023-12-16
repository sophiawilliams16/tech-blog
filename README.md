# Mindscape Blog 

## Description

Writing about tech can be just as important as making it. Developers spend plenty of time creating new applications and debugging existing codebases, but most developers also spend at least some of their time reading and writing about technical concepts, recent advancements, and new technologies. A simple Google search for any concept returns thousands of think pieces and tutorials from developers of all skill levels. 

This application is a a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well. This site is built completely from scratch and deployed to Heroku. It follows the MVC paradigm in its architectural structure, and uses Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.

To view the live website click here: [Heroku Link](https://tech-blog-sophiawilliams-93e01027bee7.herokuapp.com/)

## Table of Contents

-   [Installation](#installation)
-   [Credits](#credits)
-   [License](#license)

## Installation

To install the project ...

-   Download the code from the GitHub link [HERE](https://github.com/sophiawilliams16/tech-blog).

-   Open up a terminal from `server.js` and run `npm install` in your terminal to download all of the dependencies.

-   Run `npm run seed` to seed the database.

-   Run `nodemon server.js` to connect to the server.


## Credits

-   [MySQL2](https://www.npmjs.com/package/mysql2)
-   [Sequelize](https://www.npmjs.com/package/sequelize)
-   [dotenv](https://www.npmjs.com/package/dotenv)
-   [express-handlebars](https://www.npmjs.com/package/express-handlebars)
-   [bcrypt package](https://www.npmjs.com/package/bcrypt)
-   [express-session](https://www.npmjs.com/package/express-session)
-   [connect-session-sequelize](https://www.npmjs.com/package/connect-session-sequelize)
-   [Sequelize findAll function](https://www.tabnine.com/code/javascript/functions/sequelize/Model/findAll)
-   Module 14 Student Mini Project

## License

MIT License

Copyright (c) 2023 Sophia Williams

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
