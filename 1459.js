exports.default = function (...args) {
  var f = args[0],
    u = args[1],
    c = args[args.length - 1],
    l = {};
  if ('object' == typeof f) l = f;
  else if ('number' == typeof f) l.port = f;
  else if ('string' == typeof f) l.address = f;
  if ('string' == typeof u) l.address = u;
  if ('function' == typeof c) l.callback = c;
  return l;
};
