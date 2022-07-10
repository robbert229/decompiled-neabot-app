var module886 = require('./886');

module.exports = function (t, o) {
  o = o || {};
  var s = {},
    c = ['url', 'method', 'data'],
    f = ['headers', 'auth', 'proxy', 'params'],
    u = [
      'baseURL',
      'transformRequest',
      'transformResponse',
      'paramsSerializer',
      'timeout',
      'timeoutMessage',
      'withCredentials',
      'adapter',
      'responseType',
      'xsrfCookieName',
      'xsrfHeaderName',
      'onUploadProgress',
      'onDownloadProgress',
      'decompress',
      'maxContentLength',
      'maxBodyLength',
      'maxRedirects',
      'transport',
      'httpAgent',
      'httpsAgent',
      'cancelToken',
      'socketPath',
      'responseEncoding',
    ],
    h = ['validateStatus'];

  function p(t, o) {
    return module886.isPlainObject(t) && module886.isPlainObject(o)
      ? module886.merge(t, o)
      : module886.isPlainObject(o)
      ? module886.merge({}, o)
      : module886.isArray(o)
      ? o.slice()
      : o;
  }

  function l(c) {
    if (module886.isUndefined(o[c])) {
      if (!module886.isUndefined(t[c])) s[c] = p(undefined, t[c]);
    } else s[c] = p(t[c], o[c]);
  }

  module886.forEach(c, function (t) {
    if (!module886.isUndefined(o[t])) s[t] = p(undefined, o[t]);
  });
  module886.forEach(f, l);
  module886.forEach(u, function (c) {
    if (module886.isUndefined(o[c])) {
      if (!module886.isUndefined(t[c])) s[c] = p(undefined, t[c]);
    } else s[c] = p(undefined, o[c]);
  });
  module886.forEach(h, function (n) {
    if (n in o) s[n] = p(t[n], o[n]);
    else if (n in t) s[n] = p(undefined, t[n]);
  });
  var v = c.concat(f).concat(u).concat(h),
    x = Object.keys(t)
      .concat(Object.keys(o))
      .filter(function (n) {
        return -1 === v.indexOf(n);
      });
  module886.forEach(x, l);
  return s;
};
