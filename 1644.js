Object.defineProperty(exports, 'FA5Style', {
  enumerable: true,
  get: function () {
    return module1645.FA5Style;
  },
});

var module1645 = require('./1645'),
  module1647 = require('./1647'),
  module1648 = require('./1648'),
  n = module1645.createFA5iconSet(module1647.default, module1648.default, false),
  I = n;

exports.default = I;
var S = n.Button,
  b = n.TabBarItem,
  l = n.TabBarItemIOS,
  B = n.getImageSource,
  f = n.getImageSourceSync;
exports.getImageSourceSync = f;
exports.getImageSource = B;
exports.TabBarItemIOS = l;
exports.TabBarItem = b;
exports.Button = S;
