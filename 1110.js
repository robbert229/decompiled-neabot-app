exports.HandlerOnceWithCheckTap = function (n, t) {
  if (t()) return n();
};

var n,
  t = false,
  u = (HandlerOnceTap = function (u) {
    var o = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : 1e3;

    if (!t) {
      t = true;
      clearTimeout(n);
      n = setTimeout(function () {
        t = false;
      }, o);
      return u();
    }
  });

exports.default = u;
