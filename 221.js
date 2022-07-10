exports.isHoverEnabled = function () {
  return t;
};

var t = false;

if ('web' === require('./48').default.OS && Boolean('undefined' != typeof window && window.document && window.document.createElement)) {
  var o = 0,
    u = function () {
      o = Date.now();
      if (t) t = false;
    };

  document.addEventListener('touchstart', u, true);
  document.addEventListener('touchmove', u, true);
  document.addEventListener(
    'mousemove',
    function () {
      if (!(t || Date.now() - o < 1e3)) t = true;
    },
    true
  );
}
