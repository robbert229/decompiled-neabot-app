var module708 = require('./708'),
  module709 = require('./709'),
  module711 = require('./711');

module.exports = function (u, c) {
  return module711(module709(u, c, module708), u + '');
};
