var module627 = require('./627'),
  o = (function () {
    return !this;
  })();

function c(t, c) {
  this.name = 'AuthTokenExpiredError';
  this.message = t;
  this.expiry = c;
  if (Error.captureStackTrace && !o) Error.captureStackTrace(this, arguments.callee);
  else this.stack = new Error().stack;
}

function s(t) {
  this.name = 'AuthTokenInvalidError';
  this.message = t;
  if (Error.captureStackTrace && !o) Error.captureStackTrace(this, arguments.callee);
  else this.stack = new Error().stack;
}

function n(t, c) {
  this.name = 'AuthTokenNotBeforeError';
  this.message = t;
  this.date = c;
  if (Error.captureStackTrace && !o) Error.captureStackTrace(this, arguments.callee);
  else this.stack = new Error().stack;
}

function p(t) {
  this.name = 'AuthTokenError';
  this.message = t;
  if (Error.captureStackTrace && !o) Error.captureStackTrace(this, arguments.callee);
  else this.stack = new Error().stack;
}

function E(t) {
  this.name = 'AuthError';
  this.message = t;
  if (Error.captureStackTrace && !o) Error.captureStackTrace(this, arguments.callee);
  else this.stack = new Error().stack;
}

function h(t, c) {
  this.name = 'SilentMiddlewareBlockedError';
  this.message = t;
  this.type = c;
  if (Error.captureStackTrace && !o) Error.captureStackTrace(this, arguments.callee);
  else this.stack = new Error().stack;
}

function k(t) {
  this.name = 'InvalidActionError';
  this.message = t;
  if (Error.captureStackTrace && !o) Error.captureStackTrace(this, arguments.callee);
  else this.stack = new Error().stack;
}

function u(t) {
  this.name = 'InvalidArgumentsError';
  this.message = t;
  if (Error.captureStackTrace && !o) Error.captureStackTrace(this, arguments.callee);
  else this.stack = new Error().stack;
}

function l(t) {
  this.name = 'InvalidOptionsError';
  this.message = t;
  if (Error.captureStackTrace && !o) Error.captureStackTrace(this, arguments.callee);
  else this.stack = new Error().stack;
}

function S(t) {
  this.name = 'InvalidMessageError';
  this.message = t;
  if (Error.captureStackTrace && !o) Error.captureStackTrace(this, arguments.callee);
  else this.stack = new Error().stack;
}

function T(t, c) {
  this.name = 'SocketProtocolError';
  this.message = t;
  this.code = c;
  if (Error.captureStackTrace && !o) Error.captureStackTrace(this, arguments.callee);
  else this.stack = new Error().stack;
}

function y(t) {
  this.name = 'ServerProtocolError';
  this.message = t;
  if (Error.captureStackTrace && !o) Error.captureStackTrace(this, arguments.callee);
  else this.stack = new Error().stack;
}

function f(t) {
  this.name = 'HTTPServerError';
  this.message = t;
  if (Error.captureStackTrace && !o) Error.captureStackTrace(this, arguments.callee);
  else this.stack = new Error().stack;
}

function v(t) {
  this.name = 'ResourceLimitError';
  this.message = t;
  if (Error.captureStackTrace && !o) Error.captureStackTrace(this, arguments.callee);
  else this.stack = new Error().stack;
}

function w(t) {
  this.name = 'TimeoutError';
  this.message = t;
  if (Error.captureStackTrace && !o) Error.captureStackTrace(this, arguments.callee);
  else this.stack = new Error().stack;
}

function b(t, c) {
  this.name = 'BadConnectionError';
  this.message = t;
  this.type = c;
  if (Error.captureStackTrace && !o) Error.captureStackTrace(this, arguments.callee);
  else this.stack = new Error().stack;
}

function j(t) {
  this.name = 'BrokerError';
  this.message = t;
  if (Error.captureStackTrace && !o) Error.captureStackTrace(this, arguments.callee);
  else this.stack = new Error().stack;
}

function O(t, c) {
  this.name = 'ProcessExitError';
  this.message = t;
  this.code = c;
  if (Error.captureStackTrace && !o) Error.captureStackTrace(this, arguments.callee);
  else this.stack = new Error().stack;
}

function A(t) {
  this.name = 'UnknownError';
  this.message = t;
  if (Error.captureStackTrace && !o) Error.captureStackTrace(this, arguments.callee);
  else this.stack = new Error().stack;
}

c.prototype = Object.create(Error.prototype);
s.prototype = Object.create(Error.prototype);
n.prototype = Object.create(Error.prototype);
p.prototype = Object.create(Error.prototype);
E.prototype = Object.create(Error.prototype);
h.prototype = Object.create(Error.prototype);
k.prototype = Object.create(Error.prototype);
u.prototype = Object.create(Error.prototype);
l.prototype = Object.create(Error.prototype);
S.prototype = Object.create(Error.prototype);
T.prototype = Object.create(Error.prototype);
y.prototype = Object.create(Error.prototype);
f.prototype = Object.create(Error.prototype);
v.prototype = Object.create(Error.prototype);
w.prototype = Object.create(Error.prototype);
b.prototype = Object.create(Error.prototype);
j.prototype = Object.create(Error.prototype);
O.prototype = Object.create(Error.prototype);
A.prototype = Object.create(Error.prototype);
module.exports = {
  AuthTokenExpiredError: c,
  AuthTokenInvalidError: s,
  AuthTokenNotBeforeError: n,
  AuthTokenError: p,
  AuthError: E,
  SilentMiddlewareBlockedError: h,
  InvalidActionError: k,
  InvalidArgumentsError: u,
  InvalidOptionsError: l,
  InvalidMessageError: S,
  SocketProtocolError: T,
  ServerProtocolError: y,
  HTTPServerError: f,
  ResourceLimitError: v,
  TimeoutError: w,
  BadConnectionError: b,
  BrokerError: j,
  ProcessExitError: O,
  UnknownError: A,
};
module.exports.socketProtocolErrorStatuses = {
  1001: 'Socket was disconnected',
  1002: 'A WebSocket protocol error was encountered',
  1003: 'Server terminated socket because it received invalid data',
  1005: 'Socket closed without status code',
  1006: 'Socket hung up',
  1007: 'Message format was incorrect',
  1008: 'Encountered a policy violation',
  1009: 'Message was too big to process',
  1010: 'Client ended the connection because the server did not comply with extension requirements',
  1011: 'Server encountered an unexpected fatal condition',
  4000: 'Server ping timed out',
  4001: 'Client pong timed out',
  4002: 'Server failed to sign auth token',
  4003: 'Failed to complete handshake',
  4004: 'Client failed to save auth token',
  4005: 'Did not receive #handshake from client before timeout',
  4006: 'Failed to bind socket to message broker',
  4007: 'Client connection establishment timed out',
  4008: 'Server rejected handshake from client',
  4009: 'Server received a message before the client handshake',
};
module.exports.socketProtocolIgnoreStatuses = {
  1000: 'Socket closed normally',
  1001: 'Socket hung up',
};
var x = {
  domain: 1,
  domainEmitter: 1,
  domainThrown: 1,
};

module.exports.dehydrateError = function (o, c) {
  var s;
  if (o && 'object' == typeof o)
    for (var n in ((s = {
      message: o.message,
    }),
    c && (s.stack = o.stack),
    o))
      x[n] || (s[n] = o[n]);
  else s = 'function' == typeof o ? '[function ' + (o.name || 'anonymous') + ']' : o;
  return module627(s);
};

module.exports.hydrateError = function (t) {
  var o = null;
  if (null != t)
    if ('object' == typeof t) for (var c in ((o = new Error(t.message)), t)) t.hasOwnProperty(c) && (o[c] = t[c]);
    else o = t;
  return o;
};

module.exports.decycle = module627;
