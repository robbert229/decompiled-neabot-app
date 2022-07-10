var module1507 = require('./1507'),
  module1650 = require('./1650'),
  I = module1507.default(module1650.default, 'FontAwesome', 'FontAwesome.ttf'),
  S = I;

exports.default = S;
var c = I.Button,
  n = I.TabBarItem,
  B = I.TabBarItemIOS,
  b = I.getImageSource,
  f = I.getImageSourceSync;
exports.getImageSourceSync = f;
exports.getImageSource = b;
exports.TabBarItemIOS = B;
exports.TabBarItem = n;
exports.Button = c;
