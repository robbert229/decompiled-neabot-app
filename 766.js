var module767 = require('./767'),
  module705 = require('./705');

module.exports = function l(t, o, c, f, _) {
  return t === o || (null == t || null == o || (!module705(t) && !module705(o)) ? t != t && o != o : module767(t, o, c, f, l, _));
};
