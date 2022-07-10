var module828 = require('./828'),
  module836 = require('./836'),
  module837 = require('./837'),
  module845 = require('./845');

module.exports = function () {
  if (0 === arguments.length) throw new Error('pipeP requires at least one argument');
  return module828(arguments[0].length, module837(module836, arguments[0], module845(arguments)));
};
