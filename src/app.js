if (navigator.serviceWorker) {
  navigator.serviceWorker
    .register('service-worker.js')
    .catch(error => console.error(error));
}

const tanis = [
  { id : '42bedc59' },
  { id : '249e8a4g' },
  { id : 'bb223109' },
  { id : '315ab5de' },
  { id : 'c93648cg' },
  { id : 'e89a432a' },
  { id : '78d2f3a9' },
  { id : '95825320' },
  { id : 'b573c491' },
  { id : '89337651' },
  { id : 'eccdd96f' },
  { id : '22d3079a' },
  { id : 'a2b80a00' },
  { id : 'd488eda9' },
  { id : 'dceec204' },
  { id : '0daeedd2' },
  { id : '1979143d' },
  { id : '1f71ee22' },
  { id : '20760476' },
  { id : '2398a915' },
  { id : '23e37360' },
  { id : '2c891c52' },
  { id : '30522c15' },
  { id : '3411fa18' },
  { id : '4474e4e6' },
  { id : '4ba81f9c' },
  { id : '5425ff6f' },
  { id : '67fadce6' },
  { id : '6e78893d' },
  { id : '78459acc' },
  { id : '79b6c9e3' },
  { id : '7db2f351' },
  { id : '80573021' },
  { id : '81450afd' },
  { id : '850ea9a6' },
  { id : '913cc759' },
  { id : '9ff2dc60' },
  { id : 'a569cf97' },
  { id : 'ac8330cf' },
  { id : 'b35b3dad' },
  { id : 'c356008c' },
  { id : 'cc3bbf74' },
  { id : 'd477e695' },
  { id : 'e3245d30' },
  { id : 'fbe1b264' },
  { id : '05cd4125' },
  { id : 'fe6bdd1c' },
  { id : '3f501125' }
];

const affiliates = [
  {
    url   : 'https://www.amazon.co.jp/dp/477419400X/?tag=1000ch-22',
    name  : 'webperf-guide',
    title : '超速! Webページ速度改善ガイド ── 使いやすさは「速さ」から始まる'
  }, {
    url   : 'https://www.amazon.co.jp/dp/4844336355/?tag=1000ch-22',
    name  : 'css-architecture',
    title : 'Web制作者のためのCSS設計の教科書 モダンWeb開発に欠かせない「修正しやすいCSS」の設計手法'
  }, {
    url   : 'https://www.amazon.co.jp/gp/product/4862463878/?tag=1000ch-22',
    name  : 'inclusive-design',
    title : 'インクルーシブHTML+CSS & JavaScript 多様なユーザーニーズに応えるフロントエンドデザインパターン'
  }
];

document.addEventListener('DOMContentLoaded', () => {
  const imageContainer = document.querySelector('#image-container');
  const affiliateContainer = document.querySelector('#affiliate-container');
  const backdrop = document.querySelector('#backdrop');
  const ids = tanis.map(tani => tani.id);

  for (let tani of tanis) {
    let cell = document.createElement('div');
    cell.className = 'Cell -4of12';
    let item = document.createElement('tani-image');
    item.id = tani.id;
    cell.appendChild(item);
    imageContainer.appendChild(cell);
  }

  for (let affiliate of affiliates) {
    let cell = document.createElement('div');
    cell.className = 'Cell -4of12';
    let item = document.createElement('book-affiliate');
    item.setAttribute('url', affiliate.url);
    item.setAttribute('name', affiliate.name);
    item.setAttribute('title', affiliate.title);
    cell.appendChild(item);
    affiliateContainer.appendChild(cell);
  }

  const image = backdrop.querySelector('img');
  const images = imageContainer.querySelectorAll('tani-image');

  backdrop.addEventListener('click', e => {
    if (e.target.tagName.toLowerCase() === 'img') {
      return;
    }

    backdrop.classList.add('Backdrop--hidden');
    history.pushState(null, null, '#');
  });

  imageContainer.addEventListener('click', e => {
    backdrop.classList.remove('Backdrop--hidden');
    image.src = e.target.src;
    history.pushState(null, null, `#${e.target.id}`);
  });

  window.addEventListener('hashchange', () => {
    const targetId = location.hash.replace('#', '');
    if (targetId === '') {
      return;
    }

    const targetIndex = ids.indexOf(targetId);
    if (targetIndex === -1) {
      return;
    }

    backdrop.classList.remove('Backdrop--hidden');
    image.dataset.id = images[targetIndex].id;
    image.src = images[targetIndex].src;
  });

  const KEYCODE_ESC = 27;
  const KEYCODE_LEFTARROW = 37;
  const KEYCODE_RIGHTARROW = 39;

  document.addEventListener('keydown', e => {
    if (backdrop.classList.contains('Backdrop--hidden')) {
      return;
    }

    switch (e.keyCode) {
      case KEYCODE_ESC:
        backdrop.classList.add('Backdrop--hidden');
        history.pushState(null, null, '#');
        break;
      case KEYCODE_LEFTARROW:
        if (ids.indexOf(image.dataset.id) === 0) {
          return;
        }

        location.hash = ids[ids.indexOf(image.dataset.id) - 1];
        break;
      case KEYCODE_RIGHTARROW:
        if (ids.indexOf(image.dataset.id) === ids.length - 1) {
          return;
        }

        location.hash = ids[ids.indexOf(image.dataset.id) + 1];
        break;
    }
  });

  const targetId = location.hash.replace('#', '');
  for (let image of images) {
    if (image.id === targetId) {
      image.click();
    }
  }
});
