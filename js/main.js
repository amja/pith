
(function() {

  switch (window.location.pathname) {
    case '/pith-site/':
      home();
      break;
  }

  function originify(path) {
    return window.location.origin + '/pith-site' + path;
  }

  function home() {
    var splash = document.querySelector('.home-splash');
    setTimeout(function() {
      splash.style.opacity = 0;
      setTimeout(function() {
        splash.parentNode.removeChild(splash);
      }, 1000);
    }, 1250);
  }

})();
