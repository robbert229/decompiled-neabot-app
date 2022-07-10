exports.get = o;

exports.getEnforcing = function (n) {
  var u = o(n);
  module3.default(null != u, "TurboModuleRegistry.getEnforcing(...): '" + n + "' could not be found. Verify that a module by this name is registered in the native binary.");
  return u;
};

var module3 = require('./3'),
  module10 = require('./10'),
  l = globals.__turboModuleProxy;

function o(n) {
  if (!globals.RN$Bridgeless) {
    var t = module10[n];
    if (null != t) return t;
  }

  return null != l ? l(n) : null;
}
