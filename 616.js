var module617 = require('./617');

exports.stringify = function (t, y, f, s) {
  if (arguments.length < 4)
    try {
      return 1 === arguments.length ? JSON.stringify(t) : JSON.stringify.apply(JSON, arguments);
    } catch (n) {}
  var l = s || false;
  if ('boolean' == typeof l)
    l = {
      date: l,
      function: l,
      regex: l,
      undefined: l,
      error: l,
      symbol: l,
      map: l,
      set: l,
      nan: l,
      infinity: l,
    };
  var c = module617.decycle(t, l, y);
  return 1 === arguments.length ? JSON.stringify(c) : JSON.stringify(c, Array.isArray(y) ? y : null, f);
};

exports.parse = function (t, y) {
  var f,
    s = /"\$jsan"/.test(t);
  f = 1 === arguments.length ? JSON.parse(t) : JSON.parse(t, y);
  if (s) f = module617.retrocycle(f);
  return f;
};
