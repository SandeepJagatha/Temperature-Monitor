/**
 * PLUNKER VERSION
 * (based on systemjs.config.js in angular.io)
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function(global) {

  var ngVer = '@2.4.0'; // lock in the angular package version; do not let it float to current!
  var routerVer = '@3.4.0'; // lock router version
  var formsVer = '@2.4.0'; // lock forms version
  var routerDeprecatedVer = '@2.0.0-rc.2'; // temporarily until we update all the guides

  //map tells the System loader where to look for things
  var map = {
    'app':                                         'app',

    '@angular':                                    'https://npmcdn.com/@angular', // sufficient if we didn't pin the version
    '@angular/common':                             'https://npmcdn.com/@angular/common@2.4.0/bundles/common.umd.js',
    '@angular/core':                               'https://npmcdn.com/@angular/core@2.4.0/bundles/core.umd.js',
    '@angular/core/testing':                       'https://npmcdn.com/@angular/core@2.4.0/bundles/core-testing.umd.js',
    '@angular/platform-browser-dynamic':           'https://npmcdn.com/@angular/platform-browser-dynamic@2.4.0/bundles/platform-browser-dynamic.umd.js',
    '@angular/platform-browser-dynamic/testing':   'https://npmcdn.com/@angular/platform-browser-dynamic@2.4.0/bundles/platform-browser-dynamic-testing.umd.js',
    '@angular/platform-browser':                   'https://npmcdn.com/@angular/platform-browser@2.4.0/bundles/platform-browser.umd.js',
    '@angular/platform-browser/testing':           'https://npmcdn.com/@angular/platform-browser@2.4.0/bundles/platform-browser-testing.umd.js',
    '@angular/compiler':                           'https://npmcdn.com/@angular/compiler@2.4.0/bundles/compiler.umd.js',
    '@angular/compiler/testing':                   'https://npmcdn.com/@angular/compiler@2.4.0/bundles/compiler-testing.umd.js',
    '@angular/forms':                              'https://npmcdn.com/@angular/forms' + formsVer,
    '@angular/router':                             'https://npmcdn.com/@angular/router' + routerVer,
    '@angular/router-deprecated':                  'https://npmcdn.com/@angular/router-deprecated' + routerDeprecatedVer,
    'angular2-in-memory-web-api':                  'https://npmcdn.com/angular2-in-memory-web-api', // get latest
    'rxjs':                                        'https://npmcdn.com/rxjs@5.3.0',
    'ts':                                          'https://npmcdn.com/plugin-typescript@7.0.6/lib/plugin.js',
    'typescript':                                  'https://npmcdn.com/typescript@2.2.0/lib/typescript.js',
 };

  //packages tells the System loader how to load when no filename and/or no extension
  var packages = {
    'app':                        { main: 'main.ts',  defaultExtension: 'ts' },
    'rxjs':                       { defaultExtension: 'js' },
    'angular2-in-memory-web-api': { main: 'index.js', defaultExtension: 'js' },
  };

  var ngPackageNames = [
    //'common',
    //'compiler',
    //'core',
    'http',
    //'platform-browser',
   // 'platform-browser-dynamic',
    'upgrade',
  ];

  // Add map entries for each angular package
  // only because we're pinning the version with `ngVer`.
  ngPackageNames.forEach(function(pkgName) {
    map['@angular/'+pkgName] = 'https://npmcdn.com/@angular/' + pkgName + ngVer;
  });

  // Add package entries for angular packages with special versions
  ngPackageNames = ngPackageNames.concat(['forms', 'router', 'router-deprecated']);

  // Individual files (~300 requests):
  function packIndex(pkgName) {
    packages['@angular/'+pkgName] = { main: 'index.js', defaultExtension: 'js' };
  }

  // Bundled (~40 requests):
  function packUmd(pkgName) {
    packages['@angular/'+pkgName] = { main: '/bundles/' + pkgName + '.umd.js', defaultExtension: 'js' };
  }

  // Most environments should use UMD; some (e.g. Karma) need the individual index files
  var setPackageConfig = packUmd;

  // Add package entries for angular packages
  ngPackageNames.forEach(setPackageConfig);

  var config = {
    // DEMO ONLY! REAL CODE SHOULD NOT TRANSPILE IN THE BROWSER
    transpiler: 'ts',
    typescriptOptions: {
      tsconfig: true
    },
    meta: {
      'typescript': {
        "exports": "ts"
      }
    },
    map: map,
    packages: packages
  };

  System.config(config);

})(this);


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/