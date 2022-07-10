var t,
  o,
  module622 = require('./622'),
  module625 = require('./625').Response,
  module631 = require('./631');

if (globals.WebSocket) {
  t = globals.WebSocket;

  o = function (o, n) {
    return new t(o);
  };
} else {
  t = require('./634');

  o = function (o, n) {
    return new t(o, null, n);
  };
}

var module626 = require('./626'),
  l = module626.TimeoutError,
  p = module626.BadConnectionError,
  u = function (t, n, s) {
    var c = this;
    this.state = this.CLOSED;
    this.auth = t;
    this.codec = n;
    this.options = s;
    this.connectTimeout = s.connectTimeout;
    this.pingTimeout = s.ackTimeout;
    this.pingTimeoutDisabled = !!s.pingTimeoutDisabled;
    this.callIdGenerator = s.callIdGenerator;
    this.authTokenName = s.authTokenName;
    this._pingTimeoutTicker = null;
    this._callbackMap = {};
    this._batchSendList = [];
    this.state = this.CONNECTING;
    var h = this.uri(),
      l = o(h, this.options);
    l.binaryType = this.options.binaryType;
    this.socket = l;

    l.onopen = function () {
      c._onOpen();
    };

    l.onclose = function (t) {
      var o;
      o = null == t.code ? 1005 : t.code;

      c._onClose(o, t.reason);
    };

    l.onmessage = function (t, o) {
      c._onMessage(t.data);
    };

    l.onerror = function (t) {
      if (c.state === c.CONNECTING) c._onClose(1006);
    };

    this._connectTimeoutRef = setTimeout(function () {
      c._onClose(4007);

      c.socket.close(4007);
    }, this.connectTimeout);
  };

u.prototype = Object.create(module622.prototype);
u.CONNECTING = u.prototype.CONNECTING = 'connecting';
u.OPEN = u.prototype.OPEN = 'open';
u.CLOSED = u.prototype.CLOSED = 'closed';

u.prototype.uri = function () {
  var t,
    o = this.options.query || {},
    n = this.options.secure ? 'wss' : 'ws';
  if ((this.options.timestampRequests && (o[this.options.timestampParam] = new Date().getTime()), (o = module631.encode(o)).length && (o = '?' + o), this.options.host))
    t = this.options.host;
  else {
    var s = '';
    if (this.options.port && (('wss' === n && 443 !== this.options.port) || ('ws' === n && 80 !== this.options.port))) s = ':' + this.options.port;
    t = this.options.hostname + s;
  }
  return n + '://' + t + this.options.path + o;
};

u.prototype._onOpen = function () {
  var t = this;
  clearTimeout(this._connectTimeoutRef);

  this._resetPingTimeout();

  this._handshake(function (o, s) {
    var c;

    if (o) {
      c = s && s.code ? s.code : 4003;

      t._onError(o);

      t._onClose(c, o.toString());

      t.socket.close(c);
    } else {
      t.state = t.OPEN;
      module622.prototype.emit.call(t, 'open', s);

      t._resetPingTimeout();
    }
  });
};

u.prototype._handshake = function (t) {
  var o = this;
  this.auth.loadToken(this.authTokenName, function (n, s) {
    if (n) t(n);
    else {
      o.emit(
        '#handshake',
        {
          authToken: s,
        },
        {
          force: true,
        },
        function (o, n) {
          if (n) {
            n.authToken = s;
            if (n.authError) n.authError = module626.hydrateError(n.authError);
          }

          t(o, n);
        }
      );
    }
  });
};

u.prototype._abortAllPendingEventsDueToBadConnection = function (t) {
  for (var o in this._callbackMap)
    if (this._callbackMap.hasOwnProperty(o)) {
      var n = this._callbackMap[o];
      delete this._callbackMap[o];
      clearTimeout(n.timeout);
      delete n.timeout;
      var s = "Event '" + n.event + "' was aborted due to a bad connection",
        c = new p(s, t),
        h = n.callback;
      delete n.callback;
      h.call(n, c, n);
    }
};

u.prototype._onClose = function (t, o) {
  delete this.socket.onopen;
  delete this.socket.onclose;
  delete this.socket.onmessage;
  delete this.socket.onerror;
  clearTimeout(this._connectTimeoutRef);
  clearTimeout(this._pingTimeoutTicker);
  clearTimeout(this._batchTimeout);

  if (this.state === this.OPEN) {
    this.state = this.CLOSED;
    module622.prototype.emit.call(this, 'close', t, o);

    this._abortAllPendingEventsDueToBadConnection('disconnect');
  } else if (this.state === this.CONNECTING) {
    this.state = this.CLOSED;
    module622.prototype.emit.call(this, 'openAbort', t, o);

    this._abortAllPendingEventsDueToBadConnection('connectAbort');
  }
};

u.prototype._handleEventObject = function (t, o) {
  if (t && null != t.event) {
    var c = new module625(this, t.cid);
    module622.prototype.emit.call(this, 'event', t.event, t.data, c);
  } else if (t && null != t.rid) {
    var l = this._callbackMap[t.rid];

    if (l && (clearTimeout(l.timeout), delete l.timeout, delete this._callbackMap[t.rid], l.callback)) {
      var p = module626.hydrateError(t.error);
      l.callback(p, t.data);
    }
  } else module622.prototype.emit.call(this, 'event', 'raw', o);
};

u.prototype._onMessage = function (t) {
  module622.prototype.emit.call(this, 'event', 'message', t);
  var o = this.decode(t);

  if ('#1' === o) {
    this._resetPingTimeout();

    if (this.socket.readyState === this.socket.OPEN) this.sendObject('#2');
  } else if (Array.isArray(o)) for (var s = o.length, c = 0; c < s; c++) this._handleEventObject(o[c], t);
  else this._handleEventObject(o, t);
};

u.prototype._onError = function (t) {
  module622.prototype.emit.call(this, 'error', t);
};

u.prototype._resetPingTimeout = function () {
  if (!this.pingTimeoutDisabled) {
    var t = this;
    new Date().getTime();
    clearTimeout(this._pingTimeoutTicker);
    this._pingTimeoutTicker = setTimeout(function () {
      t._onClose(4e3);

      t.socket.close(4e3);
    }, this.pingTimeout);
  }
};

u.prototype.getBytesReceived = function () {
  return this.socket.bytesReceived;
};

u.prototype.close = function (t, o) {
  if (((t = t || 1e3), this.state === this.OPEN)) {
    var n = {
      code: t,
      data: o,
    };
    this.emit('#disconnect', n);

    this._onClose(t, o);

    this.socket.close(t);
  } else this.state === this.CONNECTING && (this._onClose(t, o), this.socket.close(t));
};

u.prototype.emitObject = function (t, o) {
  var n = {
    event: t.event,
    data: t.data,
  };

  if (t.callback) {
    n.cid = t.cid = this.callIdGenerator();
    this._callbackMap[t.cid] = t;
  }

  this.sendObject(n, o);
  return t.cid || null;
};

u.prototype._handleEventAckTimeout = function (t) {
  if (t.cid) delete this._callbackMap[t.cid];
  delete t.timeout;
  var o = t.callback;

  if (o) {
    delete t.callback;
    var n = new l("Event response for '" + t.event + "' timed out");
    o.call(t, n, t);
  }
};

u.prototype.emit = function (t, o, n, s) {
  var c,
    h,
    l = this;

  if (s) {
    h = n;
    c = s;
  } else if (n instanceof Function) {
    h = {};
    c = n;
  } else h = n;

  var p = {
    event: t,
    data: o,
    callback: c,
  };
  if (c && !h.noTimeout)
    p.timeout = setTimeout(function () {
      l._handleEventAckTimeout(p);
    }, this.options.ackTimeout);
  var u = null;
  if (this.state === this.OPEN || h.force) u = this.emitObject(p, h);
  return u;
};

u.prototype.cancelPendingResponse = function (t) {
  delete this._callbackMap[t];
};

u.prototype.decode = function (t) {
  return this.codec.decode(t);
};

u.prototype.encode = function (t) {
  return this.codec.encode(t);
};

u.prototype.send = function (t) {
  if (this.socket.readyState !== this.socket.OPEN) this._onClose(1005);
  else this.socket.send(t);
};

u.prototype.serializeObject = function (t) {
  var o, n;

  try {
    o = this.encode(t);
  } catch (t) {
    n = t;

    this._onError(n);
  }

  return n ? null : o;
};

u.prototype.sendObjectBatch = function (t) {
  var o = this;

  this._batchSendList.push(t);

  if (!this._batchTimeout)
    this._batchTimeout = setTimeout(function () {
      if ((delete o._batchTimeout, o._batchSendList.length)) {
        var t = o.serializeObject(o._batchSendList);
        if (null != t) o.send(t);
        o._batchSendList = [];
      }
    }, this.options.pubSubBatchDuration || 0);
};

u.prototype.sendObjectSingle = function (t) {
  var o = this.serializeObject(t);
  if (null != o) this.send(o);
};

u.prototype.sendObject = function (t, o) {
  if (o && o.batch) this.sendObjectBatch(t);
  else this.sendObjectSingle(t);
};

module.exports.SCTransport = u;
