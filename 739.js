exports.__esModule = true;

var t =
  Object.assign ||
  function (t) {
    for (var n = 1; n < arguments.length; n++) {
      var o = arguments[n];

      for (var c in o) Object.prototype.hasOwnProperty.call(o, c) && (t[c] = o[c]);
    }

    return t;
  };

exports.arrToRegex = function (t) {
  return 'string' == typeof t ? t : t.join('|');
};

exports.getLocalFilter = function (t) {
  if (t.actionsBlacklist || t.actionsWhitelist)
    return {
      whitelist: t.actionsWhitelist && t.actionsWhitelist.join('|'),
      blacklist: t.actionsBlacklist && t.actionsBlacklist.join('|'),
    };
  return;
};

exports.isFiltered = I;

exports.filterStagedActions = function (n, o) {
  if (!o) return n;
  var c = [],
    s = [];
  n.stagedActionIds.forEach(function (t, u) {
    if (!I(n.actionsById[t], o)) {
      c.push(t);
      s.push(n.computedStates[u]);
    }
  });
  return t({}, n, {
    stagedActionIds: c,
    computedStates: s,
  });
};

exports.filterState = function (n, o, c, p, S, T, _) {
  if ('ACTION' === o) return p ? p(n, T - 1) : n;
  if ('STATE' !== o) return n;
  var h = l().filter;

  if (_ || c || (h && h !== s.DO_NOT_FILTER)) {
    var v = [],
      E = [],
      O = S && {},
      F = n.actionsById,
      y = n.computedStates;
    n.stagedActionIds.forEach(function (n, o) {
      var s = F[n],
        u = s.action,
        f = y[o],
        l = f.state;

      if (o) {
        if (_ && !_(l, u)) return;
        if (I(u, c)) return;
      }

      v.push(n);
      E.push(
        p
          ? t({}, f, {
              state: p(l, o),
            })
          : f
      );
      if (S)
        O[n] = t({}, s, {
          action: S(u, n),
        });
    });
    return t({}, n, {
      actionsById: O || F,
      stagedActionIds: v,
      computedStates: E,
    });
  }

  return p || S
    ? t({}, n, {
        actionsById: u(n.actionsById, S),
        computedStates: f(n.computedStates, p),
      })
    : n;
};

var module740 = require('./740');

var s = (exports.FilterState = {
  DO_NOT_FILTER: 'DO_NOT_FILTER',
  BLACKLIST_SPECIFIC: 'BLACKLIST_SPECIFIC',
  WHITELIST_SPECIFIC: 'WHITELIST_SPECIFIC',
});

function u(n, o) {
  return o
    ? o.default(n, function (n, c) {
        return t({}, n, {
          action: o(n.action, c),
        });
      })
    : n;
}

function f(n, o) {
  return o
    ? n.map(function (n, c) {
        return t({}, n, {
          state: o(n.state, c),
        });
      })
    : n;
}

function l() {
  return 'undefined' != typeof window ? window.devToolsOptions : {};
}

function I(t, n) {
  var o = (t.action || t).type,
    c = l();
  if ((!n && c.filter && c.filter === s.DO_NOT_FILTER) || (o && 'function' != typeof o.match)) return false;
  var u = n || c,
    f = u.whitelist,
    I = u.blacklist;
  return f ? !o.match(f) : I && o.match(I);
}
