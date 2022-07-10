var module830 = require('./830')(function (n) {
  return null === n ? 'Null' : undefined === n ? 'Undefined' : Object.prototype.toString.call(n).slice(8, -1);
});

module.exports = module830;
