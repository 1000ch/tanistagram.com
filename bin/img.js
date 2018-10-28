const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp');
const globby = require('globby');
const cp = require('child_process');
const cwebp = require('cwebp-bin');

function copy(src, dest) {
  mkdirp.sync(path.dirname(dest));
  const rs = fs.createReadStream(src);
  const ws = fs.createWriteStream(dest);
  rs.pipe(ws);
  console.log(`${src} copied`);
}

function convert(src, dest) {
  return new Promise((resolve, reject) => {
    cp.execFile(cwebp, [src, '-o', dest], error => {
      if (error) {
        console.error(`${src} not converted`);
        reject(error);
      } else {
        console.log(`${src} converted`);
        resolve();
      }
    });
  });
}

(async () => {
  await globby([
    'src/img/**/*.{jpg,png}'
  ]).then(files => {
    for (const file of files) {
      copy(file, file.replace('src', 'public'));
    }
  });

  await globby([
    'src/img/tani/*.jpg'
  ]).then(files => {
    return Promise.all(files.map(file => {
      const dest = file.replace('src', 'public').replace('jpg', 'webp');
      return convert(file, dest);
    }));
  });
})();
