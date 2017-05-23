# APIWeasel

[![Greenkeeper badge](https://badges.greenkeeper.io/themihel/APIWeasel.svg)](https://greenkeeper.io/)

[![Build status](https://api.travis-ci.org/themihel/APIWeasel.svg?branch=master)](https://travis-ci.org/themihel/APIWeasel)
![Dev-Dep](https://david-dm.org/themihel/APIWeasel/dev-status.svg?branch=master)

Simple API-Documentation system | [Demo](https://apiweasel.themihel.me)

![Screenshot](http://img.themihel.me/APIWeasel/apiScreen.jpg)

Easy way to display your API-Routes. Just format them in a simple JSON-File and make it accessible via APIWeasel.

# Features
- [x] Responsive design
- [x] Searchable API-Routes
- [x] Print styles
- [x] Offline mode
- [x] Install to homescreen support
- [x] Service Worker
- [x] Easy to customize

# Installation
1. Download repo
2. Install dependencies
3. Add API-Information
4. Serve or upload application
5. Offline support

## 1. Download repo
Via 'git clone' or 'download .zip'.

## 2. Install dependencies
Run the following commands
```
npm install
bower install
```

## 3. Add API-Information
Change the example api.json file with your specific information.

## 4. Serve or upload application
### Local:
Run the following command to test this package on your local machine:
```
gulp serve
```
### Deployment
For deploying this package first run:
```
gulp dist
```
and upload all files from the /dist directory to your server!

## 5. Offline support
HTTPS Connection is needed for offline support
