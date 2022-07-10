var module746 = require('./746'),
  module754 = require('./754'),
  module717 = require('./717');

module.exports = function (u) {
  return module717(u) ? module746(u) : module754(u);
};
