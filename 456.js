exports.default = function (n) {
  var u,
    l,
    o = null != (u = n[module457.CHILD_STATE]) ? u : n.state,
    s = n.params;
  return o
    ? o.routes[null != (l = o.index) ? l : 'string' == typeof o.type && 'stack' !== o.type ? 0 : o.routes.length - 1].name
    : 'string' == typeof (null == s ? undefined : s.screen)
    ? s.screen
    : undefined;
};

var module457 = require('./457');
