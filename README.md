# parcel-starter
Parcel template

You also can switch html to pug template

```
git checkout pug
```


## 1. npm run dev

This command will start the app from the source files (/src).

```
http://localhost:3000/
```

## 2. Build

- Build the app:

```
$ npm run build
```

## 3. compress your images with [tinypng](https://tinypng.com/)

- go to config/tinify.config.js and add tinify api key, then run script:

```
$ npm run tinify
```
## 4. [purify css](https://github.com/purifycss/purifycss)

- go to config/purify.config.js and change cssfile name, then run script:

```
$ npm run purify
```
## 5. you also can structure your build files (like dist/style.css => dist/css/style.css). For this run structure.js

```
$ npm run structure
```
## 6. [yaspeller](https://github.com/hcodes/yaspeller)

- go to config/speller_dict.json and change rules, then run script:

```
$ npm run spell
```
