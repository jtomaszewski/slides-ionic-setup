# Ionic Poland #1 (01.06.2015)
## Ionic Setup

#### by Jacek Tomaszewski ([jtom.me](http://jtom.me))

---

# driftyco/ionic-cli

---

## How to?

---

### Installation

http://ionicframework.com/docs/cli/install.html
http://ionicframework.com/docs/cli/sass.html

```sh
npm install -g ionic
ionic start ionicpoland-sampleapp-ionic-cli \
  --appname "IonicPoland CLI" \
  --id com.ionicpoland.ionic-cli-sample \
  --sass
cd ionicpoland-sampleapp-ionic-cli
ionic setup sass
```

---

### Run in a browser

http://ionicframework.com/docs/cli/start.html
http://ionicframework.com/docs/cli/test.html

```sh
ionic serve --consolelogs --serverlogs
```

---

### Run on a native platform (Android/iOS)

http://ionicframework.com/docs/cli/run.html

```sh
ionic platform ios
ionic run ios --livereload \
  --consolelogs --serverlogs \
  --debug
```

---

### Add a logo & splashscreen

http://ionicframework.com/docs/cli/icon-splashscreen.html

```sh
mkdir resources
cp ~/src/ionicpoland-ionic-setup/icon.psd \
  ~/src/ionicpoland-ionic-setup/splash.psd \
  ./resources/
ionic resources
```

---

### Deploy to Ionic View (ionic.io)

http://ionicframework.com/docs/cli/uploading_viewing.html
http://docs.ionic.io/v1.0/docs/view-usage

```sh
ionic login
ionic upload
ionic share jacek@jtom.me
```

---

### Add some plugin

```sh
ionic plugin add \
  https://github.com/EddyVerbruggen/Flashlight-PhoneGap-Plugin
```

---

### Debugging

1. Via cable: http://docs.ionic.io/v1.0/docs/chrome-inspector

---

## Additional features

- [http://docs.ionic.io/v1.0/docs/push-from-scratch](Ionic Push) - Push notifications in the cloud [as a service]

  Alternatives:
  - [UrbanAirship](http://urbanairship.com/)
  - [Parse.com](https://parse.com/)
  - custom solution with our own backend (f.e. [rpush ruby gem](https://github.com/rpush/rpush))

---

## Additional features

- [Ionic Deploy](http://docs.ionic.io/v1.0/docs/deploy-from-scratch) - update html, css, js code asynchronously while launching the app - usable on dev/staging environments
  - propably not usable on production (we cannot update our runtime source code when the app is in the Play/iTunes app store, as it needs to be reviewed every time we change it)

---

## Additional features

- [Ionic Analytics](http://docs.ionic.io/v1.0/docs/analytics-install)

  Alternative: https://github.com/danwilson/google-analytics-plugin

---

## Pros?

- very clear documentation
- very easy to start
- livereload is well configured and is very helpful when testing the app on native platforms

---

## Cons?

- I want to install a plugin only for specific device - not possible atm
- Ionic View is useless in a long run - it has support only for some basic plugins - it won't work with the rest of them (f.e. flashlight)
- what if we have different environments? different plugin constants for given env? different js constants for given cordova platform?

---

# jtomaszewski/ionic-cordova-gulp-seed

---

## How to?

---

### Installation

https://github.com/jtomaszewski/ionic-cordova-gulp-seed

```sh
git clone \
  https://github.com/jtomaszewski/ionic-cordova-gulp-seed \
  ionicpoland-sampleapp-jtom
cd ionicpoland-sampleapp-jtom
git submodule update --init --recursive

npm install
npm install -g gulp
brew install imagemagick

vi gulp/config.coffee assets/config.xml.ejs
```

---

### Run in a browser

```sh
gulp
```

---

### Run on a native platform (Android/iOS)

```sh
gulp cordova:run:android
gulp cordova:emulate:ios
```

---

### Add a logo & splashscreen

```sh
cp ~/src/ionicpoland-ionic-setup/icon.png \
  ./assets/img/logo-square.png
cp ~/src/ionicpoland-ionic-setup/splash-landscape.png \
  ~/src/ionicpoland-ionic-setup/splash-portrait.png \
  ./assets/img/
```

---

### Deploy to Testfairy

http://testfairy.com/

1. Add TestFairy API keys to `gulp/config.coffee`

2. 
  ```sh
  gulp release:ios
  gulp release:android
  gulp release:android --env=production
  ```

---

### Add some plugin

```sh
g submodule add \
  https://github.com/EddyVerbruggen/Flashlight-PhoneGap-Plugin
vi hooks/after_platform_add/030_install_plugins.sh
```

---

### Debugging

1. Via cable: http://docs.ionic.io/v1.0/docs/chrome-inspector
2. Via weinre

---

## Additional features

---

### Syntax languages

  - views: jade -> html
  - templates: jade -> html
  - stylesheets: sass -> css
  - scripts: coffee -> js

See _gulp build_ task for more info.

---

### Multiple environments support

... and GLOBALS constants.

See _gulp/config.coffee_ for more info.

---

### Rollbar support

Log errors, notify about deploys, deploy source maps to Rollbar.

---

### Use bower librariers

- scripts can be added by modifying `GulpConfig.PATHS.scripts.vendor`
- assets can be added by modifying `GulpConfig.PATHS.assets`

---

### Unit tests (Karma)

```sh
gulp test:unit
```

---

### e2e tests (Protractor)

```sh
# build www/ directory
gulp 

# run selenium server in the background
node_modules/.bin/webdriver-manager start & 

# run e2e tests
gulp test:e2e
```

---

## Pros

- easy to extend in whatever way you want
- u can inherit other projects from it
- js code already split up in _config, common, features_ directories

---

## Cons

- obviously, not as big support and documentation as ionic-cli
- ... maybe in future ionic-cordova-gulp-seed will use ionic-cli ? (v3.0)

---

Questions?
