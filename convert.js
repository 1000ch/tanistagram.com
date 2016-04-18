const fs = require('fs');
const path = require('path');
const execFile = require('child_process').execFile;
const cwebp = require('cwebp-bin');

fs.readdirSync('src/img/tani').forEach(file => {
  const extension = path.extname(file);
  const basename = path.basename(file, extension);
  const input = `src/img/tani/${file}`;
  const output = `dist/img/tani/${basename}.webp`;
  execFile(cwebp, [input, '-o', output],  error => {
    if (error) {
      console.error(error);
    } else {
      console.log(`${input} is converted into ${output}!`);
    }
  });
});
