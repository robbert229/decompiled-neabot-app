var module886 = require('./886'),
  module887 = require('./887'),
  module888 = require('./888'),
  module906 = require('./906');

function u(s) {
  var u = new module888(s),
    c = module887(module888.prototype.request, u);
  module886.extend(c, module888.prototype, u);
  module886.extend(c, u);
  return c;
}

var module893 = u(require('./893'));
module893.Axios = module888;

module893.create = function (t) {
  return u(module906(module893.defaults, t));
};

module893.Cancel = require('./909');
module893.CancelToken = require('./910');
module893.isCancel = require('./905');

module893.all = function (t) {
  return Promise.all(t);
};

module893.spread = require('./911');
module893.isAxiosError = require('./912');
module.exports = module893;
module.exports.default = module893;
