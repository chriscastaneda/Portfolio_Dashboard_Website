<p align="center">
<img src="https://github.com/chriscastaneda/Portfolio_Dashboard_Website/blob/master/assets/img/angular.png">
</p>

# Angular Dashboard
A MEAN Stack boilerplate to get you started with building **Production Ready** software/app.

Live Demo: https://

#### Both server and client sides are fully separate

## Setup
- Install NodeJS 10.15.3
- `npm install -g gulp gulp-cli`
- First run server, then run client

## Server - Express JS
-  Create database via robomongo `dashboard_app`
- Navigate to server/
- `npm install` to install project dependencies
- `nodemon` to run the app

```bash
.
├── app.js # Main node server folder
├── config
│   └── index.js # Configurations go here
├── controllers
│   └── posts # example controller with it's test files
│       ├── TEST
│       │   └── runner.js
│       └── index.js
├── models
│   └── post # example model
│       └── index.js
├── package.json
├── public # assets folder
│   └── stylesheets
│       └── style.css
├── routes # contains all route endpoints
│   └── endpoints
│       └── index.js
├── test # A configuration for running tests
│   └── utils.js
└── views # Frontend view (not used)
    ├── error.jade
    ├── index.jade
    └── layout.jade
 ```

## Client - Angular JS
- Navigate to client/
- `npm install`
- `gulp` to run the app

```bash
.
├── bower.json
├── gulpfile.js # Main gulp config
├── karma.conf.js # Karma test runner configurations
├── package.json
└── gulp # Contains gulp configurations 
└── src
    ├── app
    │   ├── components # Directives
    │   │   └── posts
    │   │       ├── posts.directive.js
    │   │       ├── posts.directive.spec.js
    │   │       └── posts.html
    │   ├── controllers # Controllers (views)
    │   │   ├── edit
    │   │   │   ├── edit.controller.js
    │   │   │   ├── edit.controller.spec.js
    │   │   │   └── edit.html
    │   │   ├── main
    │   │   │   ├── main.controller.js
    │   │   │   ├── main.controller.spec.js
    │   │   │   └── main.html
    │   │   ├── post
    │   │   │   ├── post.controller.js
    │   │   │   ├── post.controller.spec.js
    │   │   │   └── post.html
    │   │   └── publish
    │   │       ├── publish.controller.js
    │   │       ├── publish.controller.spec.js
    │   │       └── publish.html
    │   ├── filters # Custom filters
    │   │   └── sanitize
    │   │       └── sanitize.filter.js
    │   ├── index.config.js # Angular configurations
    │   ├── index.constants.js # Angular global constants
    │   ├── index.module.js # Angular modules
    │   ├── index.route.js # Angular routes
    │   ├── index.run.js # Main runblock of angular
    │   ├── index.scss # Main SASS file
    │   ├── partials # Static HTMLs
    │   │   ├── nav.html
    │   │   └── sidebar.html
    │   └── services # Angular services
    │       └── posts
    │           ├── posts.service.js
    │           └── posts.service.spec.js
    ├── assets # App assets
    │   └── img
    │       ├── favicon.ico
    │       ├── favicon.png
    │       └── macchiato.png
    └── index.html # Main index file
```


If you have any questions or comments, please create an issue.
