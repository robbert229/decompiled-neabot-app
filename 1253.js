var module24 = require('./24'),
  module25 = require('./25'),
  module56 = require('./56'),
  c = 0,
  o = 1,
  s = 2,
  h = 5,
  f = 3,
  l = 4,
  p = {
    style: o,
    segment: false,
    heteronym: false,
  },
  y = 'b,p,m,f,d,t,n,l,g,k,h,j,q,x,r,zh,ch,sh,z,c,s'.split(','),
  module1254 = require('./1254'),
  _ = new RegExp('([' + Object.keys(module1254).join('') + '])', 'g'),
  T = /([aeoiuvnm])([0-4])$/;

function k(t) {
  for (var n = 0, u = y.length; n < u; n++) if (0 === t.indexOf(y[n])) return y[n];

  return '';
}

var E = (function () {
  function y(n) {
    module24(this, y);
    this._dict = n;
  }

  module25(
    y,
    [
      {
        key: 'convert',
        value: function (t, n) {
          if ('string' != typeof t) return [];
          n = module56({}, p, n);

          for (var c, o, s = [], h = '', f = 0, l = t.length; f < l; f++) {
            c = (o = t[f]).charCodeAt(0);

            if (this._dict[c]) {
              if (h.length > 0) {
                s.push([h]);
                h = '';
              }

              s.push(this.single_pinyin(o, n));
            } else h += o;
          }

          if (h.length > 0) {
            s.push([h]);
            h = '';
          }

          return s;
        },
      },
      {
        key: 'single_pinyin',
        value: function (t, n) {
          if ('string' != typeof t) return [];
          if (1 !== t.length) return this.single_pinyin(t.charAt(0), n);
          var u = t.charCodeAt(0);
          if (!this._dict[u]) return [t];

          var c = this._dict[u].split(',');

          if (!n.heteronym) return [y.toFixed(c[0], n.style)];

          for (var o, s = {}, h = [], f = 0, l = c.length; f < l; f++) {
            o = y.toFixed(c[f], n.style);

            if (!s.hasOwnProperty(o)) {
              s[o] = o;
              h.push(o);
            }
          }

          return h;
        },
      },
      {
        key: 'compare',
        value: function (t, n) {
          var u = this.convert(t, p),
            c = this.convert(n, p);
          return String(u).localeCompare(String(c));
        },
      },
    ],
    [
      {
        key: 'toFixed',
        value: function (t, n) {
          var module56,
            p = '';

          switch (n) {
            case f:
              return k(t);

            case l:
              module56 = t.charAt(0);
              if (module1254.hasOwnProperty(module56)) module56 = module1254[module56].charAt(0);
              return module56;

            case c:
              return t.replace(_, function (t, n) {
                return module1254[n].replace(T, '$1');
              });

            case h:
              return t.replace(_, function (t, n) {
                return module1254[n];
              });

            case s:
              return (
                t.replace(_, function (t, n) {
                  p = module1254[n].replace(T, '$2');
                  return module1254[n].replace(T, '$1');
                }) + p
              );

            case o:
            default:
              return t;
          }
        },
      },
      {
        key: 'STYLE_NORMAL',
        get: function () {
          return c;
        },
      },
      {
        key: 'STYLE_TONE',
        get: function () {
          return o;
        },
      },
      {
        key: 'STYLE_TONE2',
        get: function () {
          return s;
        },
      },
      {
        key: 'STYLE_TO3NE',
        get: function () {
          return h;
        },
      },
      {
        key: 'STYLE_INITIALS',
        get: function () {
          return f;
        },
      },
      {
        key: 'STYLE_FIRST_LETTER',
        get: function () {
          return l;
        },
      },
      {
        key: 'DEFAULT_OPTIONS',
        get: function () {
          return p;
        },
      },
    ]
  );
  return y;
})();

module.exports = E;
