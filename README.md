<p align="center">
<img src="https://github.com/chriscastaneda/Portfolio_Dashboard_Website/blob/master/assets/img/dashboard.png">
</p>

# Angular Dashboard
A self taught/first attempt in learing a MEAN Stack application. The Dashboard Project is a representation of a real time data analytics dashboard building towards a **Production Ready** software/app.

Technologies: Mongodb, ExpressJS, AngularJS, NodeJS, Robomongo, Postman, Gulp, Bower, Browserify, ChartsJS

Live Demo: Coming soon

#### Both server and client sides are fully separate. Hosted on Heroku

###### currently underconstruction, view project and see current progress!

## Setup
- Install NodeJS 10.15.3
- `npm install -g gulp gulp-cli`
- First download a CORS extension in browser such as "Allow-Control-Allow-Origin:" for chrome
- then run server, after run client

## Server - Express JS
- Create database via robomongo `dashboard_app`
- Navigate to server/
- `npm install` to install project dependencies
- `nodemon` to run the app

```bash
.
├── app.js # Main node server 
├── controllers # project controller schema definitions
│   └── product.controller.js
├── models
│   └── product.model.js # schema object
├── package.json
├── assets # assets folder
│   └── css
│       └── style.css
├── routes # contains route endpoints & express index page
│   ├── index.js
    └── product.route.js
├── test # A configuration for running tests
│   └── utils.js
└── views # Express page pug views
    ├── index.pug
    └── layout.pug
 ```

## Client - Angular JS
- Navigate to client/
- `npm install`
- Turn on 'CORS' extention in browser
- `gulp server` to run the app
- `gulp` to run in dev mode

```bash
.
├── gulpfile.js # Main gulp config
├── package.json
├── bower_components # Contains device data dependencies
└── gulp # Contains gulp configurations 
└── app
    ├── src
    │   ├── directives # Components
    │   │   └── posts
    │   │       ├── posts.directive.js
    │   │       ├── posts.directive.spec.js
    │   │       └── posts.html
    │   ├── controllers # Controllers
    │   │   ├── home
    │   │   │   ├── home.html
    │   │   │   └── home.js
    │   │   ├── maps
    │   │   │   ├── maps.html
    │   │   │   └── maps.js
    │   │   └── table
    │   │       ├── table.html
    │   │       └── table.js
    │   ├── filters # Custom filters
    │   │   ├── generator.js
    │   │   └── notification.js
    │   ├── index_module.js # Angular modules
    │   ├── index_route.js # Angular routes
    │   ├── views # Currently not in use
    │   ├── partials # Static HTMLs
    │   │   ├── footer.html
    │   │   ├── nav.html
    │   │   └── sidebar.html
    │   └── services # Angular services
    │       ├── database.js
    │       ├── geolocation.js
    │       └── pages.js
    ├── assets # App assets
    │   └── img
    │       ├── construction.jpg
    │       └── default-avatar.png
	│   └── css
    │       ├── mapbox.css
    │       ├── responsive.css
    │       └── style.css
    └── index.html # Main index file
```


If you have any questions or comments, please create an issue.
