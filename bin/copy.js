const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp');
const globby = require('globby');

function copy(src, dest) {
  mkdirp.sync(path.dirname(dest));
  const rs = fs.createReadStream(src);
  const ws = fs.createWriteStream(dest);
  rs.pipe(ws);
  console.log(`${src} copied`);
}

(async () => {
  await globby([
    'src/CNAME',
    'src/index.html',
    'src/manifest.json',
    'src/service-worker.js',
    'src/tani-image.js',
    'src/book-affiliate.js'
  ]).then(files => {
    for (const file of files) {
      copy(file, file.replace('src', 'dist'));
    }
  });
})();

