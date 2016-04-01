// import serviceWorker toolbox
importScripts('bower_components/sw-toolbox/sw-toolbox.js');

// precache files
toolbox.precache([
  '/',
  '/styles/app.css',
  '/images/icons/ic_search_black_24px.svg',
  '/manifest.json',
  '/api.json',
  '/bower_components/angular/angular.min.js',
  '/scripts/app.js'
]);

// set routes
toolbox.router.get('/', toolbox.fastest);
toolbox.router.get('/styles/app.css', toolbox.fastest);
toolbox.router.get('/images/icons/ic_search_black_24px.svg', toolbox.fastest);
toolbox.router.get('/manifest.json', toolbox.fastest);
toolbox.router.get('/api.json', toolbox.networkFirst);
toolbox.router.get('/bower_components/angular/angular.min.js', toolbox.fastest);
toolbox.router.get('/scripts/app.js', toolbox.fastest);
