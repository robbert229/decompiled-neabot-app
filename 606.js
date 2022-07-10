var module607 = require('./607'),
  module806 = require('./806'),
  module823 = require('./823'),
  v = null;

exports.store = v;
var f = null;
exports.ApiService = f;

var o = function () {
  exports.ApiService = f = module823.default.createApiClient();
  exports.store = v = module607.default(module806.default, f);
  return v;
};

exports.default = o;
