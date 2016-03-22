document.addEventListener('DOMContentLoaded', function() {
  var backdrop = document.querySelector('#backdrop');
  var image = backdrop.querySelector('img');
  backdrop.addEventListener('click', function(e) {
    if (e.target.tagName.toLowerCase() === 'img') {
      return;
    }
    backdrop.classList.add('Backdrop--hidden');
    location.hash = '';
  });

  var container = document.querySelector('#container');
  var delegate = new Delegate(container);
  delegate.on('click', 'img', function(e) {
    backdrop.classList.remove('Backdrop--hidden');
    image.src = e.target.src;
    location.hash = e.target.dataset.id;
  });

  var images = container.querySelectorAll('img');
  var ids = Array.prototype.map.call(images, function(image) {
    return image.dataset.id;
  });

  window.addEventListener('hashchange', function(e) {
    var targetId = location.hash.replace('#', '');
    var targetIndex = ids.indexOf(targetId);
    if (targetId === '' || targetIndex === -1) {
      backdrop.classList.add('Backdrop--hidden');
    } else {
      backdrop.classList.remove('Backdrop--hidden');
      image.dataset.id = images[targetIndex].dataset.id;
      image.src = images[targetIndex].src;
    }
  });

  var KEYCODE_ESC        = 27;
  var KEYCODE_LEFTARROW  = 37;
  var KEYCODE_RIGHTARROW = 39;
  document.addEventListener('keydown', function(e) {
    if (backdrop.classList.contains('Backdrop--hidden')) {
      return;
    }

    var index = ids.indexOf(image.dataset.id);

    switch (e.keyCode) {
      case KEYCODE_ESC:
        location.hash = '';
        break;
      case KEYCODE_LEFTARROW:
        if (index !== 0) {
          location.hash = ids[index - 1];
        }
        break;
      case KEYCODE_RIGHTARROW:
        if (index !== ids.length - 1) {
          location.hash = ids[index + 1];
        }
        break;
    }
  });

  var targetId = location.hash.replace('#', '');
  for (var i = 0, l = images.length; i < l; i++) {
    if (images[i].dataset.id === targetId) {
      images[i].click();
    }
  }
});
