exports.liftAction = w;
exports.liftReducerWith = P;
exports.unliftState = x;
exports.unliftStore = L;

exports.default = function () {
  var t =
      arguments.length > 0 && undefined !== arguments[0]
        ? arguments[0]
        : function () {
            return null;
          },
    n = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : {};
  if ('number' == typeof n.maxAge && n.maxAge < 2) throw new Error('DevTools.instrument({ maxAge }) option, if specified, may not be less than 2.');
  return function (o) {
    return function (c, s) {
      function u(o) {
        if ('function' != typeof o) {
          if (o && 'function' == typeof o.default)
            throw new Error(
              'Expected the reducer to be a function. Instead got an object with a "default" field. Did you pass a module instead of the default export? Try passing require(...).default instead.'
            );
          throw new Error('Expected the reducer to be a function.');
        }

        return P(o, s, t, n);
      }

      var f = o(u(c));
      if (f.liftedStore) throw new Error('DevTools instrumentation should not be applied more than once. Check your store configuration.');
      return L(f, u, n);
    };
  };
};

var module648 = require('./648'),
  module719 = require('./719'),
  module725 = require('./725'),
  module728 = require('./728');

function u(t) {
  return A(t) || p(t) || l(t) || f();
}

function f() {
  throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
}

function l(t, n) {
  if (t) {
    if ('string' == typeof t) return T(t, n);
    var o = Object.prototype.toString.call(t).slice(8, -1);
    if ('Object' === o && t.constructor) o = t.constructor.name;
    return 'Map' === o || 'Set' === o ? Array.from(t) : 'Arguments' === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o) ? T(t, n) : undefined;
  }
}

function p(t) {
  if ('undefined' != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t);
}

function A(t) {
  if (Array.isArray(t)) return T(t);
}

function T(t, n) {
  if (null == n || n > t.length) n = t.length;

  for (var o = 0, c = new Array(n); o < n; o++) c[o] = t[o];

  return c;
}

function y(t, n) {
  var o = Object.keys(t);

  if (Object.getOwnPropertySymbols) {
    var c = Object.getOwnPropertySymbols(t);
    if (n)
      c = c.filter(function (n) {
        return Object.getOwnPropertyDescriptor(t, n).enumerable;
      });
    o.push.apply(o, c);
  }

  return o;
}

function O(t) {
  for (var n = 1; n < arguments.length; n++) {
    var o = null != arguments[n] ? arguments[n] : {};
    if (n % 2)
      y(Object(o), true).forEach(function (n) {
        I(t, n, o[n]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(o));
    else
      y(Object(o)).forEach(function (n) {
        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(o, n));
      });
  }

  return t;
}

function I(t, n, o) {
  if (n in t)
    Object.defineProperty(t, n, {
      value: o,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  else t[n] = o;
  return t;
}

function E(t) {
  '@babel/helpers - typeof';

  return (E =
    'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
      ? function (t) {
          return typeof t;
        }
      : function (t) {
          return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t;
        })(t);
}

var S = {
  PERFORM_ACTION: 'PERFORM_ACTION',
  RESET: 'RESET',
  ROLLBACK: 'ROLLBACK',
  COMMIT: 'COMMIT',
  SWEEP: 'SWEEP',
  TOGGLE_ACTION: 'TOGGLE_ACTION',
  SET_ACTIONS_ACTIVE: 'SET_ACTIONS_ACTIVE',
  JUMP_TO_STATE: 'JUMP_TO_STATE',
  JUMP_TO_ACTION: 'JUMP_TO_ACTION',
  REORDER_ACTION: 'REORDER_ACTION',
  IMPORT_STATE: 'IMPORT_STATE',
  LOCK_CHANGES: 'LOCK_CHANGES',
  PAUSE_RECORDING: 'PAUSE_RECORDING',
};
exports.ActionTypes = S;
var b =
    'object' === ('undefined' == typeof window ? 'undefined' : E(window)) && (undefined !== window.chrome || (undefined !== window.process && 'renderer' === window.process.type)),
  h = b || ('undefined' != typeof process && process.release && 'node' === process.release.name),
  v = {
    performAction: function (t, n, c, s) {
      if (!module725.default(t)) throw new Error('Actions must be plain objects. Use custom middleware for async actions.');
      if (undefined === t.type) throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
      var u;

      if (n) {
        var f = 0;
        if ('function' == typeof n) u = n(t);
        else {
          var l,
            p = Error();

          if (
            (Error.captureStackTrace && h ? (c && Error.stackTraceLimit < c && ((l = Error.stackTraceLimit), (Error.stackTraceLimit = c)), Error.captureStackTrace(p, s)) : (f = 3),
            (u = p.stack),
            l && (Error.stackTraceLimit = l),
            (f || 'number' != typeof Error.stackTraceLimit || (c && Error.stackTraceLimit > c)) && null != u)
          ) {
            var A = u.split('\n');
            if (c && A.length > c) u = A.slice(0, c + f + (A[0].startsWith('Error') ? 1 : 0)).join('\n');
          }
        }
      }

      return {
        type: S.PERFORM_ACTION,
        action: t,
        timestamp: Date.now(),
        stack: u,
      };
    },
    reset: function () {
      return {
        type: S.RESET,
        timestamp: Date.now(),
      };
    },
    rollback: function () {
      return {
        type: S.ROLLBACK,
        timestamp: Date.now(),
      };
    },
    commit: function () {
      return {
        type: S.COMMIT,
        timestamp: Date.now(),
      };
    },
    sweep: function () {
      return {
        type: S.SWEEP,
      };
    },
    toggleAction: function (t) {
      return {
        type: S.TOGGLE_ACTION,
        id: t,
      };
    },
    setActionsActive: function (t, n) {
      var o = !(arguments.length > 2 && undefined !== arguments[2]) || arguments[2];
      return {
        type: S.SET_ACTIONS_ACTIVE,
        start: t,
        end: n,
        active: o,
      };
    },
    reorderAction: function (t, n) {
      return {
        type: S.REORDER_ACTION,
        actionId: t,
        beforeActionId: n,
      };
    },
    jumpToState: function (t) {
      return {
        type: S.JUMP_TO_STATE,
        index: t,
      };
    },
    jumpToAction: function (t) {
      return {
        type: S.JUMP_TO_ACTION,
        actionId: t,
      };
    },
    importState: function (t, n) {
      return {
        type: S.IMPORT_STATE,
        nextLiftedState: t,
        noRecompute: n,
      };
    },
    lockChanges: function (t) {
      return {
        type: S.LOCK_CHANGES,
        status: t,
      };
    },
    pauseRecording: function (t) {
      return {
        type: S.PAUSE_RECORDING,
        status: t,
      };
    },
  };
exports.ActionCreators = v;
var C = {
  type: '@@INIT',
};

function _(t, n, o) {
  var c,
    s = o;

  try {
    s = t(o, n);
  } catch (t) {
    c = t.toString();
    if (b)
      setTimeout(function () {
        throw t;
      });
    else console.error(t);
  }

  return {
    state: s,
    error: c,
  };
}

function R(t, n, o, c) {
  return c
    ? _(t, n, o)
    : {
        state: t(o, n),
      };
}

function k(t, n, o, c, s, u, f, l) {
  if (!t || -1 === n || (n >= t.length && t.length === u.length)) return t;

  for (var p = t.slice(0, n), A = n; A < u.length; A++) {
    var T = u[A],
      y = s[T].action,
      O = p[A - 1],
      I = O ? O.state : c,
      E = undefined;
    E =
      f.indexOf(T) > -1
        ? O
        : l && O && O.error
        ? {
            state: I,
            error: 'Interrupted by an error up the chain',
          }
        : R(o, y, I, l);
    p.push(E);
  }

  return p;
}

function w(t, n, o, c) {
  return v.performAction(t, n, o, c);
}

function P(o, c, s, f) {
  var l = {
    monitorState: s(undefined, {}),
    nextActionId: 1,
    actionsById: {
      0: w(C),
    },
    stagedActionIds: [0],
    skippedActionIds: [],
    committedState: c,
    currentStateIndex: 0,
    computedStates: [],
    isLocked: true === f.shouldStartLocked,
    isPaused: false === f.shouldRecordChanges,
  };
  return function (p, A) {
    var T = p || l,
      y = T.monitorState,
      E = T.actionsById,
      b = T.nextActionId,
      h = T.stagedActionIds,
      v = T.skippedActionIds,
      _ = T.committedState,
      P = T.currentStateIndex,
      x = T.computedStates,
      L = T.isLocked,
      N = T.isPaused;

    function M(t) {
      for (var n = t, o = h.slice(1, n + 1), c = 0; c < o.length; c++) {
        if (x[c + 1].error) {
          n = c;
          o = h.slice(1, n + 1);
          break;
        }

        delete E[o[c]];
      }

      v = v.filter(function (t) {
        return -1 === o.indexOf(t);
      });
      h = [0].concat(u(h.slice(n + 1)));
      _ = x[n].state;
      x = x.slice(n);
      P = P > n ? P - n : 0;
    }

    function j(t) {
      var n;

      if (t) {
        n = x[P];
        y = s(y, A);
      } else n = R(o, A.action, x[P].state, false);

      if (f.pauseActionType && 1 !== b) {
        if (t) {
          if (P === h.length - 1) P++;
          h = [].concat(u(h), [b]);
          b++;
        }

        return {
          monitorState: y,
          actionsById: O(
            O({}, E),
            {},
            I(
              {},
              b - 1,
              w({
                type: f.pauseActionType,
              })
            )
          ),
          nextActionId: b,
          stagedActionIds: h,
          skippedActionIds: v,
          committedState: _,
          currentStateIndex: P,
          computedStates: [].concat(u(x.slice(0, h.length - 1)), [n]),
          isLocked: L,
          isPaused: true,
        };
      } else
        return {
          monitorState: y,
          actionsById: {
            0: w(C),
          },
          nextActionId: 1,
          stagedActionIds: [0],
          skippedActionIds: [],
          committedState: n.state,
          currentStateIndex: 0,
          computedStates: [n],
          isLocked: L,
          isPaused: true,
        };
    }

    if (!p) E = O({}, E);
    var D,
      G = 0,
      U = f.maxAge;

    if (('function' == typeof U && (U = U(A, p)), /^@@redux\/(INIT|REPLACE)/.test(A.type))) {
      if (false === f.shouldHotReload) {
        E = {
          0: w(C),
        };
        b = 1;
        h = [0];
        v = [];
        _ = 0 === x.length ? c : x[P].state;
        P = 0;
        x = [];
      }

      G = 0;

      if (U && h.length > U) {
        x = k(x, G, o, _, E, h, v, f.shouldCatchErrors);
        M(h.length - U);
        G = 1 / 0;
      }
    } else
      switch (A.type) {
        case S.PERFORM_ACTION:
          if (L) return p || l;
          if (N) return j();
          if (U && h.length >= U) M(h.length - U + 1);
          if (P === h.length - 1) P++;
          var B = b++;
          E[B] = A;
          G = (h = [].concat(u(h), [B])).length - 1;
          break;

        case S.RESET:
          E = {
            0: w(C),
          };
          b = 1;
          h = [0];
          v = [];
          _ = c;
          P = 0;
          x = [];
          break;

        case S.COMMIT:
          E = {
            0: w(C),
          };
          b = 1;
          h = [0];
          v = [];
          _ = x[P].state;
          P = 0;
          x = [];
          break;

        case S.ROLLBACK:
          E = {
            0: w(C),
          };
          b = 1;
          h = [0];
          v = [];
          P = 0;
          x = [];
          break;

        case S.TOGGLE_ACTION:
          var J = A.id,
            K = v.indexOf(J);
          v =
            -1 === K
              ? [J].concat(u(v))
              : v.filter(function (t) {
                  return t !== J;
                });
          G = h.indexOf(J);
          break;

        case S.SET_ACTIONS_ACTIVE:
          for (var H = A.start, W = A.end, F = A.active, V = [], q = H; q < W; q++) V.push(q);

          v = F ? module648.default(v, V) : module719.default(v, V);
          G = h.indexOf(H);
          break;

        case S.JUMP_TO_STATE:
          P = A.index;
          G = 1 / 0;
          break;

        case S.JUMP_TO_ACTION:
          var $ = h.indexOf(A.actionId);
          if (-1 !== $) P = $;
          G = 1 / 0;
          break;

        case S.SWEEP:
          h = module648.default(h, v);
          v = [];
          P = P ** (h.length - 1);
          break;

        case S.REORDER_ACTION:
          var z = A.actionId,
            Q = h.indexOf(z);
          if (Q < 1) break;
          var X = A.beforeActionId,
            Y = h.indexOf(X);

          if (Y < 1) {
            var Z = h.length;
            Y = X > h[Z - 1] ? Z : 1;
          }

          var tt = Q - Y;

          if (tt > 0) {
            h = [].concat(u(h.slice(0, Y)), [z], u(h.slice(Y, Q)), u(h.slice(Q + 1)));
            G = Y;
          } else if (tt < 0) {
            h = [].concat(u(h.slice(0, Q)), u(h.slice(Q + 1, Y)), [z], u(h.slice(Y)));
            G = Q;
          }

          break;

        case S.IMPORT_STATE:
          if (((D = A.nextLiftedState), Array.isArray(D))) {
            E = {
              0: w(C),
            };
            b = 1;
            h = [0];
            v = [];
            P = A.nextLiftedState.length;
            x = [];
            _ = A.preloadedState;
            G = 0;
            A.nextLiftedState.forEach(function (t) {
              E[b] = w(t, f.trace || f.shouldIncludeCallstack);
              h.push(b);
              b++;
            });
          } else {
            var et = A.nextLiftedState;
            y = et.monitorState;
            E = et.actionsById;
            b = et.nextActionId;
            h = et.stagedActionIds;
            v = et.skippedActionIds;
            _ = et.committedState;
            P = et.currentStateIndex;
            x = et.computedStates;
            if (A.noRecompute) G = 1 / 0;
          }

          break;

        case S.LOCK_CHANGES:
          L = A.status;
          G = 1 / 0;
          break;

        case S.PAUSE_RECORDING:
          if ((N = A.status)) return j(true);
          E = {
            0: w(C),
          };
          b = 1;
          h = [0];
          v = [];
          _ = x[P].state;
          P = 0;
          x = [];
          break;

        default:
          G = 1 / 0;
      }

    x = k(x, G, o, _, E, h, v, f.shouldCatchErrors);
    return {
      monitorState: (y = s(y, A)),
      actionsById: E,
      nextActionId: b,
      stagedActionIds: h,
      skippedActionIds: v,
      committedState: _,
      currentStateIndex: P,
      computedStates: x,
      isLocked: L,
      isPaused: N,
    };
  };
}

function x(t) {
  return t.computedStates[t.currentStateIndex].state;
}

function L(t, n, o) {
  var s,
    u = o.trace || o.shouldIncludeCallstack,
    f = o.traceLimit || 10;

  function l() {
    var n = x(t.getState());
    if (undefined !== n) s = n;
    return s;
  }

  return O(
    O({}, t),
    {},
    I(
      {
        liftedStore: t,
        dispatch: function n(o) {
          t.dispatch(w(o, u, f, n));
          return o;
        },
        getState: l,
        replaceReducer: function (o) {
          t.replaceReducer(n(o));
        },
      },
      module728.default,
      function () {
        return O(
          O({}, t[module728.default]()),
          {},
          I(
            {
              subscribe: function (n) {
                if ('object' !== E(n)) throw new TypeError('Expected the observer to be an object.');

                function o() {
                  if (n.next) n.next(l());
                }

                o();
                return {
                  unsubscribe: t.subscribe(o),
                };
              },
            },
            module728.default,
            function () {
              return this;
            }
          )
        );
      }
    )
  );
}

exports.INIT_ACTION = C;
