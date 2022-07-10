var module886 = require('./886'),
  module889 = require('./889'),
  module890 = require('./890'),
  module891 = require('./891'),
  module906 = require('./906'),
  module907 = require('./907'),
  f = module907.validators;

function c(t) {
  this.defaults = t;
  this.interceptors = {
    request: new module890(),
    response: new module890(),
  };
}

c.prototype.request = function (t) {
  if ('string' == typeof t) (t = arguments[1] || {}).url = arguments[0];
  else t = t || {};
  if ((t = module906(this.defaults, t)).method) t.method = t.method.toLowerCase();
  else if (this.defaults.method) t.method = this.defaults.method.toLowerCase();
  else t.method = 'get';
  var o = t.transitional;
  if (undefined !== o)
    module907.assertOptions(
      o,
      {
        silentJSONParsing: f.transitional(f.boolean, '1.0.0'),
        forcedJSONParsing: f.transitional(f.boolean, '1.0.0'),
        clarifyTimeoutError: f.transitional(f.boolean, '1.0.0'),
      },
      false
    );
  var n = [],
    c = true;
  this.interceptors.request.forEach(function (o) {
    if (!('function' == typeof o.runWhen && false === o.runWhen(t))) {
      c = c && o.synchronous;
      n.unshift(o.fulfilled, o.rejected);
    }
  });
  var l,
    p = [];

  if (
    (this.interceptors.response.forEach(function (t) {
      p.push(t.fulfilled, t.rejected);
    }),
    !c)
  ) {
    var y = [module891, undefined];

    for (Array.prototype.unshift.apply(y, n), y = y.concat(p), l = Promise.resolve(t); y.length; ) l = l.then(y.shift(), y.shift());

    return l;
  }

  for (var v = t; n.length; ) {
    var q = n.shift(),
      E = n.shift();

    try {
      v = q(v);
    } catch (t) {
      E(t);
      break;
    }
  }

  try {
    l = module891(v);
  } catch (t) {
    return Promise.reject(t);
  }

  for (; p.length; ) l = l.then(p.shift(), p.shift());

  return l;
};

c.prototype.getUri = function (t) {
  module886 = module906(this.defaults, module886);
  return module889(module886.url, module886.params, module886.paramsSerializer).replace(/^\?/, '');
};

module886.forEach(['delete', 'get', 'head', 'options'], function (t) {
  c.prototype[t] = function (o, n) {
    return this.request(
      module906(n || {}, {
        method: t,
        url: o,
        data: (n || {}).data,
      })
    );
  };
});
module886.forEach(['post', 'put', 'patch'], function (t) {
  c.prototype[t] = function (o, n, s) {
    return this.request(
      module906(s || {}, {
        method: t,
        url: o,
        data: n,
      })
    );
  };
});
module.exports = c;
