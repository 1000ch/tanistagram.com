if (navigator.serviceWorker) {
  navigator.serviceWorker
    .register('service-worker.js')
    .catch(error => console.error(error));
}

import Rx from 'rx';
import Delegate from 'dom-delegate';

Rx.Observable
  .fromEvent(document, 'DOMContentLoaded')
  .subscribe(() => {
    const backdrop = document.querySelector('#backdrop');
    const image = backdrop.querySelector('img');

    Rx.Observable
      .fromEvent(backdrop, 'click')
      .filter(e => e.target.tagName.toLowerCase() !== 'img')
      .subscribe(() => {
        backdrop.classList.add('Backdrop--hidden');
        history.pushState(null, null, '#');
      });

    const container = document.querySelector('#container');
    const delegate = new Delegate(container);

    Rx.Observable
      .fromEvent(delegate, 'click')
      .subscribe(e => {
        backdrop.classList.remove('Backdrop--hidden');
        image.src = e.target.src;
        location.hash = e.target.dataset.id;
      });

    const images = container.querySelectorAll('img');
    const ids = Array.prototype.map.call(images, image => image.dataset.id);

    Rx.Observable
      .fromEvent(window, 'hashchange')
      .filter(e => {
        const targetId = location.hash.replace('#', '');
        const targetIndex = ids.indexOf(targetId);
        return targetId !== '' && targetIndex !== -1;
      })
      .subscribe(e => {
        backdrop.classList.remove('Backdrop--hidden');
        const targetId = location.hash.replace('#', '');
        const targetIndex = ids.indexOf(targetId);
        image.dataset.id = images[targetIndex].dataset.id;
        image.src = images[targetIndex].src;
      });

    const KEYCODE_ESC        = 27;
    const KEYCODE_LEFTARROW  = 37;
    const KEYCODE_RIGHTARROW = 39;

    const keydown = Rx.Observable
      .fromEvent(document, 'keydown')
      .filter(e => !backdrop.classList.contains('Backdrop--hidden'));

    keydown
      .filter(e => e.keyCode === KEYCODE_ESC)
      .subscribe(() => {
        backdrop.classList.add('Backdrop--hidden');
        history.pushState(null, null, '#');
      });

    keydown
      .filter(e => e.keyCode === KEYCODE_LEFTARROW)
      .filter(() => ids.indexOf(image.dataset.id) !== 0)
      .subscribe(() => {
        const index = ids.indexOf(image.dataset.id);
        location.hash = ids[index - 1];
      });

    keydown
      .filter(e => e.keyCode === KEYCODE_RIGHTARROW)
      .filter(() => ids.indexOf(image.dataset.id) !== ids.length - 1)
      .subscribe(() => {
        const index = ids.indexOf(image.dataset.id);
        location.hash = ids[index + 1];
      });

    const targetId = location.hash.replace('#', '');
    for (let image of images) {
      if (image.dataset.id === targetId) {
        image.click();
      }
    }
  });
