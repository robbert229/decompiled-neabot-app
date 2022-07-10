var n, t;
n = this;

t = function () {
  return (function (n) {
    function t(o) {
      if (u[o]) return u[o].exports;
      var c = (u[o] = {
        exports: {},
        id: o,
        loaded: false,
      });
      n[o].call(c.exports, c, c.exports, t);
      c.loaded = true;
      return c.exports;
    }

    var u = {};
    t.m = n;
    t.c = u;
    t.p = '';
    return t(0);
  })({
    0: function (n, t, u) {
      n.exports = u(90);
    },
    1: function (n, t) {
      function u() {
        v = false;
        if (f.length) h = f.concat(h);
        else p = -1;
        if (h.length) o();
      }

      function o() {
        if (!v) {
          var n = setTimeout(u);
          v = true;

          for (var t = h.length; t; ) {
            for (f = h, h = []; ++p < t; ) f && f[p].run();

            p = -1;
            t = h.length;
          }

          f = null;
          v = false;
          clearTimeout(n);
        }
      }

      function c(n, t) {
        this.fun = n;
        this.array = t;
      }

      function s() {}

      var f,
        l = (n.exports = {}),
        h = [],
        v = false,
        p = -1;

      l.nextTick = function (n) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1) for (var u = 1; u < arguments.length; u++) t[u - 1] = arguments[u];
        h.push(new c(n, t));
        if (!(1 !== h.length || v)) setTimeout(o, 0);
      };

      c.prototype.run = function () {
        this.fun.apply(null, this.array);
      };

      l.title = 'browser';
      l.browser = true;
      l.env = {};
      l.argv = [];
      l.version = '';
      l.versions = {};
      l.on = s;
      l.addListener = s;
      l.once = s;
      l.off = s;
      l.removeListener = s;
      l.removeAllListeners = s;
      l.emit = s;

      l.binding = function (n) {
        throw new Error('process.binding is not supported');
      };

      l.cwd = function () {
        return '/';
      };

      l.chdir = function (n) {
        throw new Error('process.chdir is not supported');
      };

      l.umask = function () {
        return 0;
      };
    },
    90: function (n, t, u) {
      'use strict';

      Object.defineProperty(t, '__esModule', {
        value: true,
      });
      var c = u(165),
        f = u(91),
        l = c.easeInOutQuad,
        h = {
          ADDITIVE: 'ADDITIVE',
          DESTRUCTIVE: 'DESTRUCTIVE',
        },
        v = {
          _rafID: null,
          getInitialState: function () {
            return {
              tweenQueue: [],
            };
          },
          componentWillUnmount: function () {
            f.default.cancel(this._rafID);
            this._rafID = -1;
          },
          tweenState: function (n, t) {
            var u = this,
              o = t.easing,
              c = t.duration,
              s = t.delay,
              v = t.beginValue,
              p = t.endValue,
              I = t.onEnd,
              w = t.stackBehavior;
            this.setState(function (t) {
              var M = t,
                O = undefined,
                b = undefined;

              if ('string' == typeof n) {
                O = n;
                b = n;
              } else {
                for (var x = 0; x < n.length - 1; x++) M = M[n[x]];

                O = n[n.length - 1];
                b = n.join('|');
              }

              var D = {
                  easing: o || l,
                  duration: null == c ? 300 : c,
                  delay: null == s ? 0 : s,
                  beginValue: null == v ? M[O] : v,
                  endValue: p,
                  onEnd: I,
                  stackBehavior: w || 'ADDITIVE',
                },
                T = t.tweenQueue;
              if (D.stackBehavior === h.DESTRUCTIVE)
                T = t.tweenQueue.filter(function (n) {
                  return n.pathHash !== b;
                });
              T.push({
                pathHash: b,
                config: D,
                initTime: Date.now() + D.delay,
              });
              M[O] = D.endValue;
              if (1 === T.length) u._rafID = f.default(u._rafCb);
              return {
                tweenQueue: T,
              };
            });
          },
          getTweeningValue: function (n) {
            var t = this.state,
              u = undefined,
              o = undefined;

            if ('string' == typeof n) {
              u = t[n];
              o = n;
            } else {
              u = t;

              for (var c = 0; c < n.length; c++) u = u[n[c]];

              o = n.join('|');
            }

            var s = Date.now();

            for (c = 0; c < t.tweenQueue.length; c++) {
              var f = t.tweenQueue[c],
                l = f.pathHash,
                h = f.initTime,
                v = f.config;

              if (l === o) {
                var p = s - h > v.duration ? v.duration : 0 ** (s - h);
                u += (0 === v.duration ? v.endValue : v.easing(p, v.beginValue, v.endValue, v.duration)) - v.endValue;
              }
            }

            return u;
          },
          _rafCb: function () {
            var n = this.state;

            if (0 !== n.tweenQueue.length) {
              for (var t = Date.now(), u = [], o = 0; o < n.tweenQueue.length; o++) {
                var c = n.tweenQueue[o],
                  s = c.initTime,
                  l = c.config;
                if (t - s < l.duration) u.push(c);
                else if (l.onEnd) l.onEnd();
              }

              if (-1 !== this._rafID) {
                this.setState({
                  tweenQueue: u,
                });
                this._rafID = f.default(this._rafCb);
              }
            }
          },
        };
      t.default = {
        Mixin: v,
        easingTypes: c.default,
        stackBehavior: h,
      };
      n.exports = t.default;
    },
    91: function (n, t, u) {
      for (
        var o = u(92),
          c = 'undefined' == typeof window ? {} : window,
          s = ['moz', 'webkit'],
          f = 'AnimationFrame',
          l = c.requestAnimationFrame,
          h = c.cancelAnimationFrame || c.cancelRequestAnimationFrame,
          v = 0;
        v < s.length && !l;
        v++
      ) {
        l = c[s[v] + 'Request' + f];
        h = c[s[v] + 'Cancel' + f] || c[s[v] + 'CancelRequest' + f];
      }

      if (!l || !h) {
        var p = 0,
          I = 0,
          w = [];

        l = function (n) {
          if (0 === w.length) {
            var t = o(),
              u = 0 ** (16.666666666666668 - (t - p));
            p = u + t;
            setTimeout(function () {
              var n = w.slice(0);
              w.length = 0;

              for (var t = 0; t < n.length; t++)
                if (!n[t].cancelled)
                  try {
                    n[t].callback(p);
                  } catch (n) {
                    setTimeout(function () {
                      throw n;
                    }, 0);
                  }
            }, Math.round(u));
          }

          w.push({
            handle: ++I,
            callback: n,
            cancelled: false,
          });
          return I;
        };

        h = function (n) {
          for (var t = 0; t < w.length; t++) w[t].handle === n && (w[t].cancelled = true);
        };
      }

      n.exports = function (n) {
        return l.call(c, n);
      };

      n.exports.cancel = function () {
        h.apply(c, arguments);
      };
    },
    92: function (n, t, u) {
      (function (t) {
        (function () {
          var u, o, c;
          if ('undefined' != typeof performance && null !== performance && performance.now)
            n.exports = function () {
              return performance.now();
            };
          else if (undefined !== t && null !== t && t.hrtime) {
            n.exports = function () {
              return (u() - c) / 1e6;
            };

            o = t.hrtime;

            c = (u = function () {
              var n;
              return 1e9 * (n = o())[0] + n[1];
            })();
          } else if (Date.now) {
            n.exports = function () {
              return Date.now() - c;
            };

            c = Date.now();
          } else {
            n.exports = function () {
              return new Date().getTime() - c;
            };

            c = new Date().getTime();
          }
        }.call(this));
      }.call(t, u(1)));
    },
    165: function (n, t) {
      'use strict';

      var u = {
        linear: function (n, t, u, o) {
          return ((u - t) * n) / o + t;
        },
        easeInQuad: function (n, t, u, o) {
          return (u - t) * (n /= o) * n + t;
        },
        easeOutQuad: function (n, t, u, o) {
          return -(u - t) * (n /= o) * (n - 2) + t;
        },
        easeInOutQuad: function (n, t, u, o) {
          var c = u - t;
          return (n /= o / 2) < 1 ? (c / 2) * n * n + t : (-c / 2) * (--n * (n - 2) - 1) + t;
        },
        easeInCubic: function (n, t, u, o) {
          return (u - t) * (n /= o) * n * n + t;
        },
        easeOutCubic: function (n, t, u, o) {
          return (u - t) * ((n = n / o - 1) * n * n + 1) + t;
        },
        easeInOutCubic: function (n, t, u, o) {
          var c = u - t;
          return (n /= o / 2) < 1 ? (c / 2) * n * n * n + t : (c / 2) * ((n -= 2) * n * n + 2) + t;
        },
        easeInQuart: function (n, t, u, o) {
          return (u - t) * (n /= o) * n * n * n + t;
        },
        easeOutQuart: function (n, t, u, o) {
          return -(u - t) * ((n = n / o - 1) * n * n * n - 1) + t;
        },
        easeInOutQuart: function (n, t, u, o) {
          var c = u - t;
          return (n /= o / 2) < 1 ? (c / 2) * n * n * n * n + t : (-c / 2) * ((n -= 2) * n * n * n - 2) + t;
        },
        easeInQuint: function (n, t, u, o) {
          return (u - t) * (n /= o) * n * n * n * n + t;
        },
        easeOutQuint: function (n, t, u, o) {
          return (u - t) * ((n = n / o - 1) * n * n * n * n + 1) + t;
        },
        easeInOutQuint: function (n, t, u, o) {
          var c = u - t;
          return (n /= o / 2) < 1 ? (c / 2) * n * n * n * n * n + t : (c / 2) * ((n -= 2) * n * n * n * n + 2) + t;
        },
        easeInSine: function (n, t, u, o) {
          var c = u - t;
          return -c * Math.cos((n / o) * (Math.PI / 2)) + c + t;
        },
        easeOutSine: function (n, t, u, o) {
          return (u - t) * Math.sin((n / o) * (Math.PI / 2)) + t;
        },
        easeInOutSine: function (n, t, u, o) {
          return (-(u - t) / 2) * (Math.cos((Math.PI * n) / o) - 1) + t;
        },
        easeInExpo: function (n, t, u, o) {
          return 0 == n ? t : (u - t) * 2 ** (10 * (n / o - 1)) + t;
        },
        easeOutExpo: function (n, t, u, o) {
          var c = u - t;
          return n == o ? t + c : c * (1 - 2 ** ((-10 * n) / o)) + t;
        },
        easeInOutExpo: function (n, t, u, o) {
          var c = u - t;
          return 0 === n ? t : n === o ? t + c : (n /= o / 2) < 1 ? (c / 2) * 2 ** (10 * (n - 1)) + t : (c / 2) * (2 - 2 ** (-10 * --n)) + t;
        },
        easeInCirc: function (n, t, u, o) {
          return -(u - t) * (Math.sqrt(1 - (n /= o) * n) - 1) + t;
        },
        easeOutCirc: function (n, t, u, o) {
          return (u - t) * Math.sqrt(1 - (n = n / o - 1) * n) + t;
        },
        easeInOutCirc: function (n, t, u, o) {
          var c = u - t;
          return (n /= o / 2) < 1 ? (-c / 2) * (Math.sqrt(1 - n * n) - 1) + t : (c / 2) * (Math.sqrt(1 - (n -= 2) * n) + 1) + t;
        },
        easeInElastic: function (n, t, u, o) {
          var c,
            s,
            f,
            l = u - t;
          f = 1.70158;
          s = 0;
          c = l;
          return 0 === n
            ? t
            : 1 == (n /= o)
            ? t + l
            : (s || (s = 0.3 * o),
              c < Math.abs(l) ? ((c = l), (f = s / 4)) : (f = (s / (2 * Math.PI)) * Math.asin(l / c)),
              -c * 2 ** (10 * (n -= 1)) * Math.sin(((n * o - f) * (2 * Math.PI)) / s) + t);
        },
        easeOutElastic: function (n, t, u, o) {
          var c,
            s,
            f,
            l = u - t;
          f = 1.70158;
          s = 0;
          c = l;
          return 0 === n
            ? t
            : 1 == (n /= o)
            ? t + l
            : (s || (s = 0.3 * o),
              c < Math.abs(l) ? ((c = l), (f = s / 4)) : (f = (s / (2 * Math.PI)) * Math.asin(l / c)),
              c * 2 ** (-10 * n) * Math.sin(((n * o - f) * (2 * Math.PI)) / s) + l + t);
        },
        easeInOutElastic: function (n, t, u, o) {
          var c,
            s,
            f,
            l = u - t;
          f = 1.70158;
          s = 0;
          c = l;
          return 0 === n
            ? t
            : 2 == (n /= o / 2)
            ? t + l
            : (s || (s = 0.44999999999999996 * o),
              c < Math.abs(l) ? ((c = l), (f = s / 4)) : (f = (s / (2 * Math.PI)) * Math.asin(l / c)),
              1 > n
                ? c * 2 ** (10 * (n -= 1)) * Math.sin(((n * o - f) * (2 * Math.PI)) / s) * -0.5 + t
                : c * 2 ** (-10 * (n -= 1)) * Math.sin(((n * o - f) * (2 * Math.PI)) / s) * 0.5 + l + t);
        },
        easeInBack: function (n, t, u, o, c) {
          if (undefined === c) c = 1.70158;
          return (u - t) * (n /= o) * n * ((c + 1) * n - c) + t;
        },
        easeOutBack: function (n, t, u, o, c) {
          if (undefined === c) c = 1.70158;
          return (u - t) * ((n = n / o - 1) * n * ((c + 1) * n + c) + 1) + t;
        },
        easeInOutBack: function (n, t, u, o, c) {
          var s = u - t;
          if (undefined === c) c = 1.70158;
          return (n /= o / 2) < 1 ? (s / 2) * (n * n * ((1 + (c *= 1.525)) * n - c)) + t : (s / 2) * ((n -= 2) * n * ((1 + (c *= 1.525)) * n + c) + 2) + t;
        },
        easeInBounce: function (n, t, o, c) {
          var s = o - t;
          return s - u.easeOutBounce(c - n, 0, s, c) + t;
        },
        easeOutBounce: function (n, t, u, o) {
          var c = u - t;
          return (n /= o) < 0.36363636363636365
            ? c * (7.5625 * n * n) + t
            : 0.7272727272727273 > n
            ? c * (7.5625 * (n -= 0.5454545454545454) * n + 0.75) + t
            : 0.9090909090909091 > n
            ? c * (7.5625 * (n -= 0.8181818181818182) * n + 0.9375) + t
            : c * (7.5625 * (n -= 0.9545454545454546) * n + 0.984375) + t;
        },
        easeInOutBounce: function (n, t, o, c) {
          var s = o - t;
          return c / 2 > n ? 0.5 * u.easeInBounce(2 * n, 0, s, c) + t : 0.5 * u.easeOutBounce(2 * n - c, 0, s, c) + 0.5 * s + t;
        },
      };
      n.exports = u;
    },
  });
};

if ('object' == typeof exports && 'object' == typeof module) module.exports = t();
else if ('function' == typeof define && define.amd) define([], t);
else if ('object' == typeof exports) exports.tweenState = t();
else n.tweenState = t();
