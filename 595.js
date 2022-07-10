var t, n;
t = this;

n = function (t) {
  'use strict';

  var n = (t && t.I18n) || {},
    o = Array.prototype.slice,
    l = function (t) {
      return ('0' + t.toString()).substr(-2);
    },
    s = function (t, n) {
      return y('round', t, -n).toFixed(n);
    },
    u = function (t) {
      var n = typeof t;
      return 'function' === n || 'object' === n;
    },
    c = function (t) {
      return 'function' === typeof t;
    },
    p = function (t) {
      return undefined !== t && null !== t;
    },
    f = function (t) {
      return Array.isArray ? Array.isArray(t) : '[object Array]' === Object.prototype.toString.call(t);
    },
    h = function (t) {
      return 'number' == typeof t || '[object Number]' === Object.prototype.toString.call(t);
    },
    b = function (t) {
      return true === t || false === t;
    },
    v = function (t) {
      return null === t;
    },
    y = function (t, n, o) {
      if (undefined === o || 0 == +o) return Math[t](n);
      else {
        n = +n;
        o = +o;
        if (isNaN(n) || 'number' != typeof o || o % 1 != 0) return NaN;
        else {
          n = n.toString().split('e');
          return +((n = (n = Math[t](+(n[0] + 'e' + (n[1] ? +n[1] - o : -o)))).toString().split('e'))[0] + 'e' + (n[1] ? +n[1] + o : o));
        }
      }
    },
    S = function (t, n) {
      return c(t) ? t(n) : t;
    },
    k = function t(n, o) {
      var l, s, u;

      for (l in o)
        o.hasOwnProperty(l) &&
          ((s = o[l]),
          'string' == typeof (u = s) || '[object String]' === Object.prototype.toString.call(u) || h(s) || b(s) || f(s) || v(s)
            ? (n[l] = s)
            : (null == n[l] && (n[l] = {}), t(n[l], s)));

      return n;
    },
    _ = {
      day_names: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      abbr_day_names: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      month_names: [null, 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      abbr_month_names: [null, 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      meridian: ['AM', 'PM'],
    },
    z = {
      precision: 3,
      separator: '.',
      delimiter: ',',
      strip_insignificant_zeros: false,
    },
    O = {
      unit: '$',
      precision: 2,
      format: '%u%n',
      sign_first: true,
      delimiter: ',',
      separator: '.',
    },
    T = {
      unit: '%',
      precision: 3,
      format: '%n%u',
      separator: '.',
      delimiter: '',
    },
    M = [null, 'kb', 'mb', 'gb', 'tb'],
    j = {
      defaultLocale: 'en',
      locale: 'en',
      defaultSeparator: '.',
      placeholder: /(?:\{\{|%\{)(.*?)(?:\}\}?)/gm,
      fallbacks: false,
      translations: {},
      missingBehaviour: 'message',
      missingTranslationPrefix: '',
    };

  n.reset = function () {
    var t;

    for (t in j) this[t] = j[t];
  };

  n.initializeOptions = function () {
    var t;

    for (t in j) p(this[t]) || (this[t] = j[t]);
  };

  n.initializeOptions();
  n.locales = {};

  n.locales.get = function (t) {
    var o = this[t] || this[n.locale] || this.default;
    if (c(o)) o = o(t);
    if (false === f(o)) o = [o];
    return o;
  };

  n.locales.default = function (t) {
    var o = [],
      l = [];
    if (t) o.push(t);
    if (!t && n.locale) o.push(n.locale);
    if (n.fallbacks && n.defaultLocale) o.push(n.defaultLocale);
    o.forEach(function (t) {
      var o = t.split('-'),
        s = null,
        u = null;

      if (3 === o.length) {
        s = [o[0], o[1]].join('-');
        u = o[0];
      } else if (2 === o.length) s = o[0];

      if (-1 === l.indexOf(t)) l.push(t);
      if (n.fallbacks)
        [s, u].forEach(function (n) {
          if (undefined !== n && null !== n && n !== t && -1 === l.indexOf(n)) l.push(n);
        });
    });
    if (!o.length) o.push('en');
    return l;
  };

  n.pluralization = {};

  n.pluralization.get = function (t) {
    return this[t] || this[n.locale] || this.default;
  };

  n.pluralization.default = function (t) {
    switch (t) {
      case 0:
        return ['zero', 'other'];

      case 1:
        return ['one'];

      default:
        return ['other'];
    }
  };

  n.currentLocale = function () {
    return this.locale || this.defaultLocale;
  };

  n.isSet = p;

  n.lookup = function (t, n) {
    n = n || {};
    var o,
      l,
      s,
      u,
      c = this.locales.get(n.locale).slice();

    for (s = this.getFullScope(t, n); c.length; )
      if (((o = c.shift()), (l = s.split(n.separator || this.defaultSeparator)), (u = this.translations[o]))) {
        for (; l.length && undefined !== (u = u[l.shift()]) && null !== u; );

        if (undefined !== u && null !== u) return u;
      }

    if (p(n.defaultValue)) return S(n.defaultValue, t);
  };

  n.pluralizationLookupWithoutFallback = function (t, n, o) {
    var l,
      s,
      c = this.pluralization.get(n)(t);
    if (u(o))
      for (; c.length; )
        if (((l = c.shift()), p(o[l]))) {
          s = o[l];
          break;
        }
    return s;
  };

  n.pluralizationLookup = function (t, n, o) {
    o = o || {};
    var l,
      s,
      c,
      f,
      h = this.locales.get(o.locale).slice();

    for (n = this.getFullScope(n, o); h.length; )
      if (((l = h.shift()), (s = n.split(o.separator || this.defaultSeparator)), (c = this.translations[l]))) {
        for (; s.length && ((c = c[s.shift()]), u(c)); ) 0 === s.length && (f = this.pluralizationLookupWithoutFallback(t, l, c));

        if (undefined !== f && null !== f) break;
      }

    if (!(undefined !== f && null !== f))
      p(o.defaultValue) && ((f = u(o.defaultValue) ? this.pluralizationLookupWithoutFallback(t, o.locale, o.defaultValue) : o.defaultValue), (c = o.defaultValue));
    return {
      message: f,
      translations: c,
    };
  };

  n.meridian = function () {
    var t = this.lookup('time'),
      n = this.lookup('date');
    return t && t.am && t.pm ? [t.am, t.pm] : n && n.meridian ? n.meridian : _.meridian;
  };

  n.prepareOptions = function () {
    for (var t, n = o.call(arguments), l = {}; n.length; ) if ('object' == typeof (t = n.shift())) for (var s in t) t.hasOwnProperty(s) && (p(l[s]) || (l[s] = t[s]));

    return l;
  };

  n.createTranslationOptions = function (t, n) {
    var o = [
      {
        scope: t,
      },
    ];
    if (p(n.defaults)) o = o.concat(n.defaults);
    if (p(n.defaultValue))
      o.push({
        message: n.defaultValue,
      });
    return o;
  };

  n.translate = function (t, n) {
    n = n || {};
    var o,
      l = this.createTranslationOptions(t, n),
      s = t,
      c = this.prepareOptions(n);
    delete c.defaultValue;

    if (
      l.some(function (n) {
        if ((p(n.scope) ? ((s = n.scope), (o = this.lookup(s, c))) : p(n.message) && (o = S(n.message, t)), undefined !== o && null !== o)) return true;
      }, this)
    ) {
      if ('string' == typeof o) o = this.interpolate(o, n);
      else if (f(o))
        o = o.map(function (t) {
          return 'string' == typeof t ? this.interpolate(t, n) : t;
        }, this);
      else if (u(o) && p(n.count)) o = this.pluralize(n.count, s, n);
      return o;
    } else return this.missingTranslation(t, n);
  };

  n.interpolate = function (t, n) {
    if (null == t) return t;
    n = n || {};
    var o,
      l,
      s,
      u,
      c = t.match(this.placeholder);
    if (!c) return t;

    for (; c.length; ) {
      s = (o = c.shift()).replace(this.placeholder, '$1');
      l = p(n[s]) ? n[s].toString().replace(/\$/gm, '_#$#_') : s in n ? this.nullPlaceholder(o, t, n) : this.missingPlaceholder(o, t, n);
      u = new RegExp(o.replace(/{/gm, '\\{').replace(/}/gm, '\\}'));
      t = t.replace(u, l);
    }

    return t.replace(/_#\$#_/g, '$');
  };

  n.pluralize = function (t, n, o) {
    var l, s;
    o = this.prepareOptions(
      {
        count: String(t),
      },
      o
    );
    return undefined === (s = this.pluralizationLookup(t, n, o)).translations || null == s.translations
      ? this.missingTranslation(n, o)
      : undefined !== s.message && null != s.message
      ? this.interpolate(s.message, o)
      : ((l = this.pluralization.get(o.locale)), this.missingTranslation(n + '.' + l(t)[0], o));
  };

  n.missingTranslation = function (t, n) {
    if ('guess' === this.missingBehaviour) {
      var o = t.split('.').slice(-1)[0];
      return (
        (this.missingTranslationPrefix.length > 0 ? this.missingTranslationPrefix : '') +
        o.replace(/_/g, ' ').replace(/([a-z])([A-Z])/g, function (t, n, o) {
          return n + ' ' + o.toLowerCase();
        })
      );
    }

    return '[missing "' + [null != n && null != n.locale ? n.locale : this.currentLocale(), this.getFullScope(t, n)].join(n.separator || this.defaultSeparator) + '" translation]';
  };

  n.missingPlaceholder = function (t, n, o) {
    return '[missing ' + t + ' value]';
  };

  n.nullPlaceholder = function () {
    return n.missingPlaceholder.apply(n, arguments);
  };

  n.toNumber = function (t, n) {
    n = this.prepareOptions(n, this.lookup('number.format'), z);
    var o,
      l,
      u = t < 0,
      c = s(Math.abs(t), n.precision).toString().split('.'),
      p = [],
      f = n.format || '%n',
      h = u ? '-' : '';

    for (t = c[0], o = c[1]; t.length > 0; ) {
      p.unshift(t.substr(0 ** (t.length - 3), 3));
      t = t.substr(0, t.length - 3);
    }

    l = p.join(n.delimiter);
    if (n.strip_insignificant_zeros && o) o = o.replace(/0+$/, '');
    if (n.precision > 0 && o) l += n.separator + o;
    l = (f = n.sign_first ? '%s' + f : f.replace('%n', '%s%n')).replace('%u', n.unit).replace('%n', l).replace('%s', h);
    return l;
  };

  n.toCurrency = function (t, n) {
    n = this.prepareOptions(n, this.lookup('number.currency.format', n), this.lookup('number.format', n), O);
    return this.toNumber(t, n);
  };

  n.localize = function (t, n, o) {
    switch ((o || (o = {}), t)) {
      case 'currency':
        return this.toCurrency(n, o);

      case 'number':
        t = this.lookup('number.format', o);
        return this.toNumber(n, t);

      case 'percentage':
        return this.toPercentage(n, o);

      default:
        var l;
        l = t.match(/^(date|time)/) ? this.toTime(t, n, o) : n.toString();
        return this.interpolate(l, o);
    }
  };

  n.parseDate = function (t) {
    var n, o, l;
    if (null == t) return t;
    if ('object' == typeof t) return t;

    if ((n = t.toString().match(/(\d{4})-(\d{2})-(\d{2})(?:[ T](\d{2}):(\d{2}):(\d{2})([\.,]\d{1,3})?)?(Z|\+00:?00)?/))) {
      for (var s = 1; s <= 6; s++) n[s] = parseInt(n[s], 10) || 0;

      n[2] -= 1;
      l = n[7] ? 1e3 * ('0' + n[7]) : null;
      o = n[8] ? new Date(Date.UTC(n[1], n[2], n[3], n[4], n[5], n[6], l)) : new Date(n[1], n[2], n[3], n[4], n[5], n[6], l);
    } else
      'number' == typeof t
        ? (o = new Date()).setTime(t)
        : t.match(/([A-Z][a-z]{2}) ([A-Z][a-z]{2}) (\d+) (\d+:\d+:\d+) ([+-]\d+) (\d+)/)
        ? (o = new Date()).setTime(Date.parse([RegExp.$1, RegExp.$2, RegExp.$3, RegExp.$6, RegExp.$4, RegExp.$5].join(' ')))
        : (t.match(/\d+ \d+:\d+:\d+ [+-]\d+ \d+/), (o = new Date()).setTime(Date.parse(t)));

    return o;
  };

  n.strftime = function (t, o, s) {
    s = this.lookup('date', s);
    var u = n.meridian();
    if ((s || (s = {}), (s = this.prepareOptions(s, _)), isNaN(t.getTime()))) throw new Error('I18n.strftime() requires a valid date object, but received an invalid date.');
    var c = t.getDay(),
      p = t.getDate(),
      f = t.getFullYear(),
      h = t.getMonth() + 1,
      b = t.getHours(),
      v = b,
      y = b > 11 ? 1 : 0,
      S = t.getSeconds(),
      k = t.getMinutes(),
      z = t.getTimezoneOffset(),
      O = Math.floor(Math.abs(z / 60)),
      T = Math.abs(z) - 60 * O,
      M = (z > 0 ? '-' : '+') + (O.toString().length < 2 ? '0' + O : O) + (T.toString().length < 2 ? '0' + T : T);
    if (v > 12) v -= 12;
    else if (0 === v) v = 12;
    o = (o = (o = (o = (o = (o = (o = (o = (o = (o = (o = (o = (o = (o = (o = (o = (o = (o = (o = (o = (o = (o = (o = (o = (o = (o = (o = o.replace(
      '%a',
      s.abbr_day_names[c]
    )).replace('%A', s.day_names[c])).replace('%b', s.abbr_month_names[h])).replace('%B', s.month_names[h])).replace('%d', l(p))).replace('%e', p)).replace('%-d', p)).replace(
      '%H',
      l(b)
    )).replace('%-H', b)).replace('%k', b)).replace('%I', l(v))).replace('%-I', v)).replace('%l', v)).replace('%m', l(h))).replace('%-m', h)).replace('%M', l(k))).replace(
      '%-M',
      k
    )).replace('%p', u[y])).replace('%P', u[y].toLowerCase())).replace('%S', l(S))).replace('%-S', S)).replace('%w', c)).replace('%y', l(f))).replace(
      '%-y',
      l(f).replace(/^0+/, '')
    )).replace('%Y', f)).replace('%z', M)).replace('%Z', M);
    return o;
  };

  n.toTime = function (t, n, o) {
    var l = this.parseDate(n),
      s = this.lookup(t, o);
    if (null == l) return l;
    var u = l.toString();
    return u.match(/invalid/i) ? u : s ? this.strftime(l, s, o) : u;
  };

  n.toPercentage = function (t, n) {
    n = this.prepareOptions(n, this.lookup('number.percentage.format', n), this.lookup('number.format', n), T);
    return this.toNumber(t, n);
  };

  n.toHumanSize = function (t, n) {
    for (var o, l, s, u = t, c = 0; u >= 1024 && c < 4; ) {
      u /= 1024;
      c += 1;
    }

    if (0 === c) {
      s = this.getFullScope('number.human.storage_units.units.byte', n);
      o = this.t(s, {
        count: u,
      });
      l = 0;
    } else {
      s = this.getFullScope('number.human.storage_units.units.' + M[c], n);
      o = this.t(s);
      l = u - Math.floor(u) == 0 ? 0 : 1;
    }

    n = this.prepareOptions(n, {
      unit: o,
      precision: l,
      format: '%n%u',
      delimiter: '',
    });
    return this.toNumber(u, n);
  };

  n.getFullScope = function (t, n) {
    n = n || {};
    if (f(t)) t = t.join(n.separator || this.defaultSeparator);
    if (n.scope) t = [n.scope, t].join(n.separator || this.defaultSeparator);
    return t;
  };

  n.extend = function (t, n) {
    return undefined === t && undefined === n ? {} : k(t, n);
  };

  n.t = n.translate.bind(n);
  n.l = n.localize.bind(n);
  n.p = n.pluralize.bind(n);
  return n;
};

if ('function' == typeof define && define.amd)
  define('i18n', function () {
    return n(t);
  });
else if ('object' == typeof module && module.exports) module.exports = n(t);
else t.I18n = n(t);
