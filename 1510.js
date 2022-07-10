exports.default = function () {
  var u = new Map();
  return {
    setValue: function (n, o) {
      return u.set(n, {
        type: t,
        data: o,
      });
    },
    setError: function (t, o) {
      return u.set(t, {
        type: n,
        data: o,
      });
    },
    has: function (t) {
      return u.has(t);
    },
    get: function (t) {
      if (u.has(t)) {
        var o = u.get(t),
          f = o.type,
          s = o.data;
        if (f === n) throw s;
        return s;
      }
    },
  };
};

var t = 'value',
  n = 'error';
