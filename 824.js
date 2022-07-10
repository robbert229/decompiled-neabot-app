function n(n) {
  return n && 'object' == typeof n && 'default' in n ? n.default : n;
}

var module825 = n(require('./825')),
  module832 = n(require('./832')),
  module835 = n(require('./835')),
  module848 = n(require('./848')),
  module851 = n(require('./851')),
  module852 = n(require('./852')),
  module853 = n(require('./853')),
  module856 = n(require('./856')),
  module858 = n(require('./858')),
  module859 = n(require('./859')),
  module860 = n(require('./860')),
  module870 = n(require('./870')),
  module833 = n(require('./833')),
  module871 = n(require('./871')),
  module872 = n(require('./872')),
  module873 = n(require('./873')),
  module875 = n(require('./875')),
  module876 = n(require('./876')),
  module885 = n(require('./885')),
  U = function () {
    return (U =
      Object.assign ||
      function (n) {
        for (var t, u = 1, o = arguments.length; u < o; u++) for (var R in (t = arguments[u])) Object.prototype.hasOwnProperty.call(t, R) && (n[R] = t[R]);

        return n;
      }).apply(this, arguments);
  },
  I = function (n, t, u, o) {
    return new (u || (u = Promise))(function (R, s) {
      function c(n) {
        try {
          E(o.next(n));
        } catch (n) {
          s(n);
        }
      }

      function l(n) {
        try {
          E(o.throw(n));
        } catch (n) {
          s(n);
        }
      }

      function E(n) {
        if (n.done) R(n.value);
        else
          new u(function (t) {
            t(n.value);
          }).then(c, l);
      }

      E((o = o.apply(n, t || [])).next());
    });
  },
  w = function (n, t) {
    var u,
      o,
      R,
      module851,
      c = {
        label: 0,
        sent: function () {
          if (1 & R[0]) throw R[1];
          return R[1];
        },
        trys: [],
        ops: [],
      };
    module851 = {
      next: l(0),
      throw: l(1),
      return: l(2),
    };
    if ('function' == typeof Symbol)
      module851[Symbol.iterator] = function () {
        return this;
      };
    return module851;

    function l(s) {
      return function (l) {
        return (function (s) {
          if (u) throw new TypeError('Generator is already executing.');

          for (; c; )
            try {
              if (((u = 1), o && (R = 2 & s[0] ? o.return : s[0] ? o.throw || ((R = o.return) && R.call(o), 0) : o.next) && !(R = R.call(o, s[1])).done)) return R;

              switch (((o = 0), R && (s = [2 & s[0], R.value]), s[0])) {
                case 0:
                case 1:
                  R = s;
                  break;

                case 4:
                  c.label++;
                  return {
                    value: s[1],
                    done: false,
                  };

                case 5:
                  c.label++;
                  o = s[1];
                  s = [0];
                  continue;

                case 7:
                  s = c.ops.pop();
                  c.trys.pop();
                  continue;

                default:
                  if (!(R = (R = c.trys).length > 0 && R[R.length - 1]) && (6 === s[0] || 2 === s[0])) {
                    c = 0;
                    continue;
                  }

                  if (3 === s[0] && (!R || (s[1] > R[0] && s[1] < R[3]))) {
                    c.label = s[1];
                    break;
                  }

                  if (6 === s[0] && c.label < R[1]) {
                    c.label = R[1];
                    R = s;
                    break;
                  }

                  if (R && c.label < R[2]) {
                    c.label = R[2];
                    c.ops.push(s);
                    break;
                  }

                  if (R[2]) c.ops.pop();
                  c.trys.pop();
                  continue;
              }

              s = t.call(n, c);
            } catch (n) {
              s = [6, n];
              o = 0;
            } finally {
              u = R = 0;
            }

          if (5 & s[0]) throw s[1];
          return {
            value: s[0] ? s[1] : undefined,
            done: true,
          };
        })([s, l]);
      };
    }
  },
  L = module876([
    [module875, module873],
    [module872(Number), module873],
    [
      module871,
      function (n) {
        return Number(n);
      },
    ],
  ]),
  k = module833(3, function (n, t, u) {
    var o = module872(Number);
    return o(n) && o(t) && o(u) && module870(u, n) && module870(t, u);
  }),
  K = module833(2, function (n, t) {
    return module860(t, n);
  }),
  S = function (n) {
    return !!n && ('object' == typeof n || 'function' == typeof n) && 'function' == typeof n.then;
  },
  W = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  A = {
    timeout: 0,
  },
  D = ['ECONNABORTED'],
  x = ['ENOTFOUND', 'ECONNREFUSED', 'ECONNRESET'],
  j = k(200, 299),
  M = k(400, 499),
  F = k(500, 599),
  q = module859(module875, module858(undefined), module856('status')),
  H = function (n) {
    return 'Network Error' === n.message
      ? 'NETWORK_ERROR'
      : module885.isCancel(n)
      ? 'CANCEL_ERROR'
      : module876([
          [
            module875,
            function () {
              return P(q(n.response));
            },
          ],
          [K(D), module858('TIMEOUT_ERROR')],
          [K(x), module858('CONNECTION_ERROR')],
          [module871, module858('UNKNOWN_ERROR')],
        ])(n.code);
  },
  P = function (n) {
    return module876([
      [module875, module858('UNKNOWN_ERROR')],
      [j, module858(null)],
      [M, module858('CLIENT_ERROR')],
      [F, module858('SERVER_ERROR')],
      [module871, module858('UNKNOWN_ERROR')],
    ])(n);
  },
  V = function (n) {
    var E,
      f = module853(W, n.headers || {});
    if (n.axiosInstance) E = n.axiosInstance;
    else {
      var O = module853(A, module852('headers', n));
      E = module885.create(O);
    }

    var N = [],
      p = [],
      h = [],
      T = [],
      _ = [],
      b = function (n, t) {
        f[n] = t;
        return E;
      },
      C = function (n, t, u, o) {
        if (undefined === u) u = {};
        if (undefined === o) o = {};
        return k(
          module853(
            {
              url: t,
              params: u,
              method: n,
            },
            o
          )
        );
      },
      y = function (n, t, u, o) {
        if (undefined === u) u = null;
        if (undefined === o) o = {};
        return k(
          module853(
            {
              url: t,
              method: n,
              data: u,
            },
            o
          )
        );
      },
      k = function (n) {
        return I(undefined, undefined, undefined, function () {
          var module825, u, module848;
          return w(this, function (c) {
            switch (c.label) {
              case 0:
                if (
                  ((n.headers = U({}, f, n.headers)),
                  p.length > 0 &&
                    module851(function (t) {
                      return t(n);
                    }, p),
                  !(h.length > 0))
                )
                  return [3, 6];
                module825 = 0;
                c.label = 1;

              case 1:
                if (module825 < h.length) {
                  u = h[module825](n);
                  return S(u) ? [4, u] : [3, 3];
                } else return [3, 6];

              case 2:
                c.sent();
                return [3, 5];

              case 3:
                return [4, u(n)];

              case 4:
                c.sent();
                c.label = 5;

              case 5:
                module825++;
                return [3, 1];

              case 6:
                module848 = module835(D(L(new Date())), K);
                return [2, E.request(n).then(module848).catch(module848)];
            }
          });
        });
      },
      K = function (n) {
        N.forEach(function (t) {
          try {
            t(n);
          } catch (n) {}
        });
        return n;
      },
      D = module832(function (n, t) {
        return I(undefined, undefined, undefined, function () {
          var u, o, R, c, l, E, f, O, N, p, h, b, C, y, U, I;
          return w(this, function (w) {
            switch (w.label) {
              case 0:
                if (
                  ((u = L(new Date())),
                  (o = u - n),
                  (R = t instanceof Error || module885.isCancel(t)),
                  (c = t),
                  (l = t),
                  (E = R ? l.response : c),
                  (f = (E && E.status) || null),
                  (O = R ? H(t) : P(f)),
                  (N = R ? l : null),
                  (p = j(f)),
                  (h = t.config || null),
                  (b = (E && E.headers) || null),
                  (C = (E && E.data) || null),
                  (y = {
                    duration: o,
                    problem: O,
                    originalError: N,
                    ok: p,
                    status: f,
                    headers: b,
                    config: h,
                    data: C,
                  }),
                  T.length > 0 &&
                    module851(function (n) {
                      return n(y);
                    }, T),
                  !(_.length > 0))
                )
                  return [3, 6];
                U = 0;
                w.label = 1;

              case 1:
                if (U < _.length) {
                  I = _[U](y);
                  return S(I) ? [4, I] : [3, 3];
                } else return [3, 6];

              case 2:
                w.sent();
                return [3, 5];

              case 3:
                return [4, I(y)];

              case 4:
                w.sent();
                w.label = 5;

              case 5:
                U++;
                return [3, 1];

              case 6:
                return [2, y];
            }
          });
        });
      });

    return {
      axiosInstance: E,
      monitors: N,
      addMonitor: function (n) {
        N.push(n);
      },
      requestTransforms: p,
      asyncRequestTransforms: h,
      responseTransforms: T,
      asyncResponseTransforms: _,
      addRequestTransform: function (n) {
        return p.push(n);
      },
      addAsyncRequestTransform: function (n) {
        return h.push(n);
      },
      addResponseTransform: function (n) {
        return T.push(n);
      },
      addAsyncResponseTransform: function (n) {
        return _.push(n);
      },
      setHeader: b,
      setHeaders: function (n) {
        module851(function (t) {
          return b(t, n[t]);
        }, module848(n));
        return E;
      },
      deleteHeader: function (n) {
        delete f[n];
        return E;
      },
      headers: f,
      setBaseURL: function (n) {
        E.defaults.baseURL = n;
        return E;
      },
      getBaseURL: function () {
        return E.defaults.baseURL;
      },
      any: k,
      get: module825(C, ['get']),
      delete: module825(C, ['delete']),
      head: module825(C, ['head']),
      post: module825(y, ['post']),
      put: module825(y, ['put']),
      patch: module825(y, ['patch']),
      link: module825(C, ['link']),
      unlink: module825(C, ['unlink']),
    };
  },
  B = module885.isCancel,
  G = module885.CancelToken,
  z = {
    DEFAULT_HEADERS: W,
    NONE: null,
    CLIENT_ERROR: 'CLIENT_ERROR',
    SERVER_ERROR: 'SERVER_ERROR',
    TIMEOUT_ERROR: 'TIMEOUT_ERROR',
    CONNECTION_ERROR: 'CONNECTION_ERROR',
    NETWORK_ERROR: 'NETWORK_ERROR',
    UNKNOWN_ERROR: 'UNKNOWN_ERROR',
    create: V,
    isCancel: B,
    CancelToken: G,
  };

exports.DEFAULT_HEADERS = W;
exports.NONE = null;
exports.CLIENT_ERROR = 'CLIENT_ERROR';
exports.SERVER_ERROR = 'SERVER_ERROR';
exports.TIMEOUT_ERROR = 'TIMEOUT_ERROR';
exports.CONNECTION_ERROR = 'CONNECTION_ERROR';
exports.NETWORK_ERROR = 'NETWORK_ERROR';
exports.UNKNOWN_ERROR = 'UNKNOWN_ERROR';
exports.CANCEL_ERROR = 'CANCEL_ERROR';
exports.getProblemFromError = H;
exports.getProblemFromStatus = P;
exports.create = V;
exports.isCancel = B;
exports.CancelToken = G;
exports.default = z;
