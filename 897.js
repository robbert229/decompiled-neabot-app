var module898 = require('./898');

module.exports = function (s, u, n) {
  var c = n.config.validateStatus;
  if (n.status && c && !c(n.status)) u(module898('Request failed with status code ' + n.status, n.config, null, n.request, n));
  else s(n);
};
