var module752 = require('./752'),
  module698 = require('./698'),
  module753 = require('./753'),
  s = module753 && module753.isTypedArray,
  t = s ? module698(s) : module752;

module.exports = t;
