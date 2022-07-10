var module886 = require('./886'),
  module892 = require('./892'),
  module905 = require('./905'),
  module893 = require('./893');

function c(t) {
  if (t.cancelToken) t.cancelToken.throwIfRequested();
}

module.exports = function (h) {
  c(h);
  h.headers = h.headers || {};
  h.data = module892.call(h, h.data, h.headers, h.transformRequest);
  h.headers = module886.merge(h.headers.common || {}, h.headers[h.method] || {}, h.headers);
  module886.forEach(['delete', 'get', 'head', 'post', 'put', 'patch', 'common'], function (t) {
    delete h.headers[t];
  });
  return (h.adapter || module893.adapter)(h).then(
    function (t) {
      c(h);
      t.data = module892.call(h, t.data, t.headers, h.transformResponse);
      return t;
    },
    function (t) {
      if (!module905(t)) {
        c(h);
        if (t && t.response) t.response.data = module892.call(h, t.response.data, t.response.headers, h.transformResponse);
      }

      return Promise.reject(t);
    }
  );
};
