var module704 = require('./704'),
  module705 = require('./705'),
  l = Object.prototype,
  c = l.hasOwnProperty,
  o = l.propertyIsEnumerable,
  p = module704(
    (function () {
      return arguments;
    })()
  )
    ? module704
    : function (t) {
        return module705(t) && c.call(t, 'callee') && !o.call(t, 'callee');
      };

module.exports = p;
