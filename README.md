# APIWeasel
Simple API-Documentation system

![Screenshot](http://img.themihel.me/APIWeasel/apiScreen.jpg)

Easy way to display your API-Routes. Just format them in a simple JSON-File and make the accessible via APIWeasel.

# Installation
1. Download repo
2. Install dependencies
3. Add API-Information
4. Serve or upload application

## 1.Download repo
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
