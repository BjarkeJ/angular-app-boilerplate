# Angular app boilerplate
A simple boilerplate used for starting angular-based web apps utilizing front-end tools like bootstrap and gulp

## Dependencies
- Node & npm
- Bower
- gulp

## Install
```
git clone git@github.com:BjarkeJ/angular-app-boilerplate.git **your-project-name**
bower install
npm install
```

## Reinitiate your own git repo
```
rm -rf .git
git init
```

## Build
Building the app is done using *gulp*. Gulp builds the app and moves files from the folder */source* to */build*. Changes to build actions can be made in *gulpfile.js*
```
gulp
```

## Adjust

### Add favicon
Replace the favicons found in */source/theme/favicon*


### Add brand logo
Replace the brand logo found at */source/img/logo.png*



### Customize Bootstrap
Customize the look and feel of bootstrap from the files in folder: */source/theme/less/*. Customize the basic stuff in _variables.less, such as brand colors.



