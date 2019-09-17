/* eslint-disable */
const fs = require('fs');
const path = require('path');

const dirPath = './dist';

function htmlPath() {

  function getFiles(dirPath, files_) {
    files_ = files_ || [];
    let files = fs.readdirSync(dirPath);
    for (let i in files) {
      let name = dirPath + '/' + files[i];
      if (~name.indexOf('.html')) {
        files_.push(name);
      }
    }
    return files_;
  }

  let htmlFiles = getFiles(dirPath);

  for (let i = htmlFiles.length - 1; i >= 0; i--) {
    let file = htmlFiles[i];
    fs.readFile(file, 'utf-8', function(err, data) {
      if (err) throw err;
  
      let css = 'link rel="stylesheet" href="';
      let js = 'script src="';
      let backgroundImage = 'style="background-image:url(';
      let img = 'img src="';
      let imgClass = '" src="';
      let spriteUse = 'use xlink:href="sprite';
      let mapObj = {
        [css]: 'link rel="stylesheet" href="css/',
        [js]: 'script src="js/',
        [backgroundImage]: 'style="background-image:url(images/',
        [img]: 'img src="images/',
        [imgClass]: '" src="images/',
        [spriteUse]: 'use xlink:href="images/sprite'
      };
  
      let newValue = data.replace(/link rel="stylesheet" href="|script src="|style="background-image:url\(|img src="|" src="|use xlink:href="sprite/gi, function(matched) {
        return mapObj[matched];
      });
  
      fs.writeFile(file, newValue, 'utf-8', function(err) {
        if (err) throw err;
        console.log('htmlPath complete');
      });
    });
  }

}

htmlPath();

function cssPath() {

  function getFiles(files_) {
    files_ = files_ || [];
    let files = fs.readdirSync(dirPath + '/css');
    for (let i in files) {
      let name = './dist/css/' + files[i];
      if (~name.indexOf('.css')) {
        files_.push(name);
      }
    }
    return files_;
  }

  let cssFiles = getFiles();

  for (let i = cssFiles.length - 1; i >= 0; i--) {
    let file = cssFiles[i];

    fs.readFile(file, 'utf-8', function(err, data) {
      if (err) throw err;
  
      let fontSrc = 'src:url(';
      let fontUrl = ',url(';
      let background = ' url(';
      let background2 = 'background:url(';
      let backgroundImage = 'background-image:url(';
  
      let mapObj = {
        [fontSrc]: 'src:url(../fonts/',
        [fontUrl]: ',url(../fonts/',
        [background]: ' url(../images/',
        [background2]: 'background:url(../images/',
        [backgroundImage]: 'background-image:url(../images/'
      };
  
      let newValue = data.replace(/src:url\(|,url\(| url\(|background:url\(|background-image:url\(/gi, function(matched) {
        return mapObj[matched];
      });
  
      fs.writeFile(file, newValue, 'utf-8', function(err) {
        if (err) throw err;
        console.log('cssPath complete');
      });
    });
  }
}

// cssPath();

function moveCss() {
    let cssDir = './dist/css/'; 
    if (!fs.existsSync(cssDir)) {
      fs.mkdirSync(cssDir);

      function getFiles(dirPath, files_) {
        files_ = files_ || [];
        let files = fs.readdirSync(dirPath);
        for (let i in files) {
          let name = dirPath + '/' + files[i];
          if (~name.indexOf('.css')) {
            files_.push(name);
          }
        }
        return files_.join();
      }
    
      let file = getFiles(dirPath);
      let f = path.basename(file);
      let dest = path.resolve(cssDir, f);
    
      fs.rename(file, dest, (err)=>{
        if (err) throw err;
        else console.log('css successfully moved');
      });
    }
    else {
      console.log('css path is already exist')
    }

    cssPath()
}
moveCss();



function moveJs() {
  let jsDir = './dist/js/';

  if (!fs.existsSync(jsDir)) {
    fs.mkdirSync(jsDir);
    function getFiles(dirPath, files_) {
      files_ = files_ || [];
      let files = fs.readdirSync(dirPath);
      for (let i in files) {
        let name = dirPath + '/' + files[i];
        if (~name.indexOf('.js')) {
          files_.push(name);
        }
      }
      return files_.join();
    }
  
    let file = getFiles(dirPath);
    let f = path.basename(file);
    let dest = path.resolve(jsDir, f);
  
    fs.rename(file, dest, (err)=>{
      if (err) throw err;
      else console.log('js successfully moved');
    });
  }
  else {
    console.log('js path is already exist')
  }
}
moveJs();


if (!fs.existsSync('./dist/images/')) {
  fs.mkdirSync('./dist/images/');
}
else {
  console.log('image path is already exist')
}
function imagesMove() {

  function getFiles(dirPath, files_) {
    files_ = files_ || [];
    let files = fs.readdirSync(dirPath);
    for (let i in files) {
      let name = files[i];
      if (~name.indexOf('.webp')|~name.indexOf('.svg')|~name.indexOf('.png') || ~name.indexOf('.jpg') || ~name.indexOf('.jpeg') || ~name.indexOf('.JPG')) {
        files_.push(name);
      }
    }
    return files_;
  }
  
  let files = getFiles(dirPath);
  
  for (let i = files.length - 1; i >= 0; i--) {
    let file = files[i];
    fs.rename('./dist/' + file, './dist/images/' + file, function(err) {
        if (err) throw err;
        console.log('Move complete.');
    });
  }

}

imagesMove()


if (!fs.existsSync('./dist/fonts/')) {
  fs.mkdirSync('./dist/fonts/');
}
else {
  console.log('font path is already exist')
}
function fontsMove() {

  function getFiles(dirPath, files_) {
    files_ = files_ || [];
    let files = fs.readdirSync(dirPath);
    for (let i in files) {
      let name = files[i];
      if (~name.indexOf('.woff')|~name.indexOf('.woff2')) {
        files_.push(name);
      }
    }
    return files_;
  }
  
  let files = getFiles(dirPath);
  
  for (let i = files.length - 1; i >= 0; i--) {
    let file = files[i];
    fs.rename('./dist/' + file, './dist/fonts/' + file, function(err) {
        if (err) throw err;
        console.log('Move complete.');
    });
  }

}

fontsMove()