exports.__esModule = true;

var t =
    'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
      ? function (t) {
          return typeof t;
        }
      : function (t) {
          return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t;
        },
  o =
    Object.assign ||
    function (t) {
      for (var o = 1; o < arguments.length; o++) {
        var n = arguments[o];

        for (var c in n) Object.prototype.hasOwnProperty.call(n, c) && (t[c] = n[c]);
      }

      return t;
    };

exports.default = ot;
exports.preEnhancer = nt;

exports.composeWithDevTools = function () {
  if (0 === arguments.length) return ot();
  if (1 === arguments.length && 'object' === t(arguments.length <= 0 ? undefined : arguments[0])) return it(arguments.length <= 0 ? undefined : arguments[0]);
  return it({}).apply(undefined, arguments);
};

var module616 = require('./616'),
  module620 = require('./620'),
  module646 = require('./646'),
  module730 = require('./730'),
  module731 = require('./731'),
  module732 = require('./732'),
  module738 = require('./738'),
  module739 = require('./739');

var y = undefined,
  S = undefined,
  T = undefined,
  A = {},
  O = undefined,
  E = undefined,
  b = undefined,
  C = {},
  R = undefined,
  I = undefined,
  P = undefined,
  x = undefined,
  N = undefined,
  _ = undefined,
  k = undefined,
  D = undefined,
  L = undefined,
  M = undefined,
  w = undefined,
  j = undefined,
  H = undefined,
  U = undefined,
  W = undefined,
  z = undefined;

function B() {
  return module739.filterStagedActions(C.liftedStore.getState(), I);
}

function F() {
  if (!y) y = (E && E.id) || Math.random().toString(36).substr(2);

  try {
    fetch(M, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        type: 'STATE',
        id: y,
        name: S,
        payload: module616.stringify(B()),
      }),
    }).catch(function (t) {
      console.log(t);
    });
  } catch (t) {
    console.log(t);
  }
}

function G(t, o, c, s) {
  var u = {
    type: t,
    id: E.id,
    name: S,
  };
  if (o) u.payload = 'ERROR' === t ? o : module616.stringify(module739.filterState(o, t, I, W, z, s));

  if ('ACTION' === t) {
    u.action = module616.stringify(z ? z(c.action, s - 1) : c);
    u.isExcess = P;
    u.nextActionId = s;
  } else if (c) u.action = c;

  E.emit(E.id ? 'log' : 'log-noid', u);
}

function J(t) {
  try {
    var o = module732.evalAction(t, U);
    C.dispatch(o);
  } catch (t) {
    G('ERROR', t.message);
  }
}

function K(t) {
  if ('IMPORT' === t.type || ('SYNC' === t.type && E.id && t.id !== E.id))
    C.liftedStore.dispatch({
      type: 'IMPORT_STATE',
      nextLiftedState: module616.parse(t.state),
    });
  else if ('UPDATE' === t.type) G('STATE', B());
  else if ('START' === t.type) {
    x = true;
    if ('function' == typeof U) U = U();
    G('STATE', B(), U);
  } else if ('STOP' === t.type || 'DISCONNECTED' === t.type) {
    x = false;
    G('STOP');
  } else if ('ACTION' === t.type) J(t.action);
  else if ('DISPATCH' === t.type) C.liftedStore.dispatch(t.action);
}

function Y(t) {
  setTimeout(t, 0);
}

function q(t) {
  if (!(t.message && t.message === w)) {
    w = t.message;
    Y(function () {
      C.dispatch(t);
      if (!N) F();
    });
  }
}

function Q(t) {
  return 'string' == typeof t ? [t] : t && t.length;
}

function V(t) {
  S = t.name;
  var o = t.filters || {},
    n = o.blacklist,
    c = o.whitelist;
  I = module739.getLocalFilter({
    actionsBlacklist: n || t.actionsBlacklist,
    actionsWhitelist: c || t.actionsWhitelist,
  });
  O = t.port
    ? {
        port: t.port,
        hostname: t.hostname || 'localhost',
        secure: t.secure,
      }
    : module730.defaultSocketOptions;
  T = undefined === t.suppressConnectErrors || t.suppressConnectErrors;
  _ = Q(t.startOn);
  k = Q(t.stopOn);
  D = Q(t.sendOn);
  L = t.sendOnError;

  if (D || L) {
    M = t.sendTo || (O.secure ? 'https' : 'http') + '://' + O.hostname + ':' + O.port;
    y = t.id;
  }

  if (1 === L) module738.default(q);
  if (t.actionCreators)
    U = function () {
      return module732.getActionsArray(t.actionCreators);
    };
  W = t.stateSanitizer;
  z = t.actionSanitizer;
}

function X(t) {
  N = false;
  x = false;

  if (E) {
    E.destroyChannel(b);
    if (t) E.off(b, K);
    else {
      E.off();
      E.disconnect();
    }
  }
}

function Z() {
  if (!(N || (E && E.getState() === E.CONNECTING))) {
    (E = module620.default.connect(O)).on('error', function (t) {
      A[t.name] = A.hasOwnProperty(t.name) ? A[t.name] + 1 : 1;
      if (T) {
        if (1 === A[t.name]) {
          console.log("remote-redux-devtools: Socket connection errors are being suppressed. \nThis can be disabled by setting suppressConnectErrors to 'false'.");
          console.log(t);
        }
      } else console.log(t);
    });
    E.on('connect', function () {
      console.log('connected to remotedev-server');
      A = {};
      E.emit('login', 'master', function (t, o) {
        if (t) console.log(t);
        else {
          b = o;
          E.subscribe(o).watch(K);
          E.on(o, K);
        }
      });
      N = true;
      G('START');
    });
    E.on('disconnect', function () {
      X(true);
    });
  }
}

function $() {
  var t = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : C.liftedStore.getState();
  return !!t.computedStates[t.currentStateIndex].error && (N ? G('STATE', module739.filterStagedActions(t, I)) : F(), true);
}

function tt() {
  var t = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {},
    o = arguments[1];
  R = o.type;
  if (!N && 2 === L && C.liftedStore) Y($);
  else if (o.action) _ && !N && -1 !== _.indexOf(o.action.type) ? Y(Z) : k && N && -1 !== k.indexOf(o.action.type) ? Y(X) : D && !N && -1 !== D.indexOf(o.action.type) && Y(F);
  return t;
}

function et(t, o, n) {
  if (!$(o))
    if ('PERFORM_ACTION' === R) {
      var c = o.nextActionId,
        s = o.actionsById[c - 1];
      if (module739.isFiltered(s.action, I)) return;
      G('ACTION', t, s, c);
      if (!P && n) P = o.stagedActionIds.length >= n;
    } else {
      if ('JUMP_TO_STATE' === R) return;

      if (('PAUSE_RECORDING' === R ? (H = o.isPaused) : 'LOCK_CHANGES' === R && (j = o.isLocked), H || j)) {
        if (!R) return;
        R = undefined;
      }

      G('STATE', module739.filterStagedActions(o, I));
    }
}

function ot() {
  var t = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {};
  V(
    o({}, t, {
      hostname: module731.default(t.hostname || 'localhost'),
    })
  );
  var n = undefined !== t.realtime && t.realtime;
  if (!n && !(_ || D || L))
    return function (t) {
      return t;
    };
  var c = t.maxAge || 30;
  return function (o) {
    return function (u, l) {
      C = module646.default(o, tt, {
        maxAge: c,
        trace: t.trace,
        traceLimit: t.traceLimit,
        shouldCatchErrors: !!L,
        shouldHotReload: t.shouldHotReload,
        shouldRecordChanges: t.shouldRecordChanges,
        shouldStartLocked: t.shouldStartLocked,
        pauseActionType: t.pauseActionType || '@@PAUSED',
      })(u, l);
      if (n) Z();
      C.subscribe(function () {
        if (x) et(C.getState(), C.liftedStore.getState(), c);
      });
      return C;
    };
  };
}

function nt(t) {
  return function (n, c, s) {
    C = t(n, c, s);
    return o({}, C, {
      dispatch: function (t) {
        return j ? t : C.dispatch(t);
      },
    });
  };
}

ot.updateStore = function (t) {
  console.warn('devTools.updateStore is deprecated use composeWithDevTools instead: https://github.com/zalmoxisus/remote-redux-devtools#use-devtools-compose-helper');
  C = t;
};

var it = function (t) {
  return function (...args) {
    return function () {
      return [nt].concat(args).reduceRight(function (t, o) {
        return o(t);
      }, ot(t).apply(undefined, arguments));
    };
  };
};
