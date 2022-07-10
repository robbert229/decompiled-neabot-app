require('./625').Response;

var module622 = require('./622'),
  module623 = require('./623').SCChannel,
  module628 = require('./628').AuthEngine,
  module629 = require('./629'),
  module630 = require('./630').SCTransport,
  module631 = require('./631'),
  module636 = require('./636'),
  module637 = require('./637').Buffer,
  module639 = require('./639'),
  module626 = require('./626'),
  S = module626.InvalidArgumentsError,
  b = module626.InvalidMessageError,
  T = module626.InvalidActionError,
  y = module626.SocketProtocolError,
  E = module626.TimeoutError,
  C = module626.BadConnectionError,
  v = 'undefined' != typeof window,
  _ = function (n) {
    var c = this;
    module622.call(this);
    this.id = null;
    this.state = this.CLOSED;
    this.authState = this.UNAUTHENTICATED;
    this.signedAuthToken = null;
    this.authToken = null;
    this.pendingReconnect = false;
    this.pendingReconnectTimeout = null;
    this.preparingPendingSubscriptions = false;
    this.clientId = n.clientId;
    this.connectTimeout = n.connectTimeout;
    this.ackTimeout = n.ackTimeout;
    this.channelPrefix = n.channelPrefix || null;
    this.disconnectOnUnload = null == n.disconnectOnUnload || n.disconnectOnUnload;
    this.authTokenName = n.authTokenName;
    this.pingTimeout = this.ackTimeout;
    this.pingTimeoutDisabled = !!n.pingTimeoutDisabled;
    this.active = true;
    this._clientMap = n.clientMap || {};

    var p = 2 ** 31 - 1,
      l = function (t) {
        if (c[t] > p) throw new S('The ' + t + ' value provided exceeded the maximum amount allowed');
      };

    if (
      (l('connectTimeout'),
      l('ackTimeout'),
      (this._localEvents = {
        connect: 1,
        connectAbort: 1,
        close: 1,
        disconnect: 1,
        message: 1,
        error: 1,
        raw: 1,
        kickOut: 1,
        subscribe: 1,
        unsubscribe: 1,
        subscribeStateChange: 1,
        authStateChange: 1,
        authenticate: 1,
        deauthenticate: 1,
        removeAuthToken: 1,
        subscribeRequest: 1,
      }),
      (this.connectAttempts = 0),
      (this._emitBuffer = new module636()),
      (this.channels = {}),
      (this.options = n),
      (this._cid = 1),
      (this.options.callIdGenerator = function () {
        return c._cid++;
      }),
      this.options.autoReconnect)
    ) {
      if (null == this.options.autoReconnectOptions) this.options.autoReconnectOptions = {};
      var f = this.options.autoReconnectOptions;
      if (null == f.initialDelay) f.initialDelay = 1e4;
      if (null == f.randomness) f.randomness = 1e4;
      if (null == f.multiplier) f.multiplier = 1.5;
      if (null == f.maxDelay) f.maxDelay = 6e4;
    }

    if (
      (null == this.options.subscriptionRetryOptions && (this.options.subscriptionRetryOptions = {}),
      this.options.authEngine ? (this.auth = this.options.authEngine) : (this.auth = new module628()),
      this.options.codecEngine ? (this.codec = this.options.codecEngine) : (this.codec = module629),
      this.options.protocol)
    ) {
      var b = new S('The "protocol" option does not affect socketcluster-client. If you want to utilize SSL/TLS - use "secure" option instead');

      this._onSCError(b);
    }

    this.options.path = this.options.path.replace(/\/$/, '') + '/';
    this.options.query = n.query || {};
    if ('string' == typeof this.options.query) this.options.query = module631.parse(this.options.query);
    this._channelEmitter = new module622();

    this._unloadHandler = function () {
      c.disconnect();
    };

    if (v && this.disconnectOnUnload && globals.addEventListener) globals.addEventListener('beforeunload', this._unloadHandler, false);
    this._clientMap[this.clientId] = this;
    if (this.options.autoConnect) this.connect();
  };

_.prototype = Object.create(module622.prototype);
_.CONNECTING = _.prototype.CONNECTING = module630.prototype.CONNECTING;
_.OPEN = _.prototype.OPEN = module630.prototype.OPEN;
_.CLOSED = _.prototype.CLOSED = module630.prototype.CLOSED;
_.AUTHENTICATED = _.prototype.AUTHENTICATED = 'authenticated';
_.UNAUTHENTICATED = _.prototype.UNAUTHENTICATED = 'unauthenticated';
_.PENDING = _.prototype.PENDING = 'pending';
_.ignoreStatuses = module626.socketProtocolIgnoreStatuses;
_.errorStatuses = module626.socketProtocolErrorStatuses;
_.prototype._privateEventHandlerMap = {
  '#publish': function (t) {
    var n = this._undecorateChannelName(t.channel);

    if (this.isSubscribed(n, true)) this._channelEmitter.emit(n, t.data);
  },
  '#kickOut': function (n) {
    var o = this._undecorateChannelName(n.channel),
      s = this.channels[o];

    if (s) {
      module622.prototype.emit.call(this, 'kickOut', n.message, o);
      s.emit('kickOut', n.message, o);

      this._triggerChannelUnsubscribe(s);
    }
  },
  '#setAuthToken': function (t, n) {
    var o = this;

    if (t) {
      this.auth.saveToken(this.authTokenName, t.token, {}, function (s) {
        if (s) {
          n.error(s);

          o._onSCError(s);
        } else {
          o._changeToAuthenticatedState(t.token);

          n.end();
        }
      });
    } else n.error(new b('No token data provided by #setAuthToken event'));
  },
  '#removeAuthToken': function (n, o) {
    var s = this;
    this.auth.removeToken(this.authTokenName, function (n, c) {
      if (n) {
        o.error(n);

        s._onSCError(n);
      } else {
        module622.prototype.emit.call(s, 'removeAuthToken', c);

        s._changeToUnauthenticatedStateAndClearTokens();

        o.end();
      }
    });
  },
  '#disconnect': function (t) {
    this.transport.close(t.code, t.data);
  },
};

_.prototype.getState = function () {
  return this.state;
};

_.prototype.getBytesReceived = function () {
  return this.transport.getBytesReceived();
};

_.prototype.deauthenticate = function (n) {
  var o = this;
  this.auth.removeToken(this.authTokenName, function (s, c) {
    if (s) o._onSCError(s);
    else {
      module622.prototype.emit.call(o, 'removeAuthToken', c);
      if (o.state !== o.CLOSED) o.emit('#removeAuthToken');

      o._changeToUnauthenticatedStateAndClearTokens();
    }
    if (n) n(s);
  });
};

_.prototype.connect = _.prototype.open = function () {
  var n = this;
  if (this.active)
    this.state === this.CLOSED &&
      ((this.pendingReconnect = false),
      (this.pendingReconnectTimeout = null),
      clearTimeout(this._reconnectTimeoutRef),
      (this.state = this.CONNECTING),
      module622.prototype.emit.call(this, 'connecting'),
      this.transport && this.transport.off(),
      (this.transport = new module630(this.auth, this.codec, this.options)),
      this.transport.on('open', function (t) {
        n.state = n.OPEN;

        n._onSCOpen(t);
      }),
      this.transport.on('error', function (t) {
        n._onSCError(t);
      }),
      this.transport.on('close', function (t, o) {
        n.state = n.CLOSED;

        n._onSCClose(t, o);
      }),
      this.transport.on('openAbort', function (t, o) {
        n.state = n.CLOSED;

        n._onSCClose(t, o, true);
      }),
      this.transport.on('event', function (t, o, s) {
        n._onSCEvent(t, o, s);
      }));
  else {
    var o = new T('Cannot connect a destroyed client');

    this._onSCError(o);
  }
};

_.prototype.reconnect = function (t, n) {
  this.disconnect(t, n);
  this.connect();
};

_.prototype.disconnect = function (t, n) {
  if ('number' != typeof (t = t || 1e3)) throw new S('If specified, the code argument must be a number');
  if (this.state === this.OPEN || this.state === this.CONNECTING) this.transport.close(t, n);
  else {
    this.pendingReconnect = false;
    this.pendingReconnectTimeout = null;
    clearTimeout(this._reconnectTimeoutRef);
  }
};

_.prototype.destroy = function (t, n) {
  if (v && globals.removeEventListener) globals.removeEventListener('beforeunload', this._unloadHandler, false);
  this.active = false;
  this.disconnect(t, n);
  delete this._clientMap[this.clientId];
};

_.prototype._changeToUnauthenticatedStateAndClearTokens = function () {
  if (this.authState !== this.UNAUTHENTICATED) {
    var n = this.authState,
      o = this.signedAuthToken;
    this.authState = this.UNAUTHENTICATED;
    this.signedAuthToken = null;
    this.authToken = null;
    var s = {
      oldState: n,
      newState: this.authState,
    };
    module622.prototype.emit.call(this, 'authStateChange', s);
    module622.prototype.emit.call(this, 'deauthenticate', o);
  }
};

_.prototype._changeToAuthenticatedState = function (n) {
  if (((this.signedAuthToken = n), (this.authToken = this._extractAuthTokenData(n)), this.authState !== this.AUTHENTICATED)) {
    var o = this.authState;
    this.authState = this.AUTHENTICATED;
    var s = {
      oldState: o,
      newState: this.authState,
      signedAuthToken: n,
      authToken: this.authToken,
    };
    if (!this.preparingPendingSubscriptions) this.processPendingSubscriptions();
    module622.prototype.emit.call(this, 'authStateChange', s);
  }

  module622.prototype.emit.call(this, 'authenticate', n);
};

_.prototype.decodeBase64 = function (t) {
  return module637.from(t, 'base64').toString('utf8');
};

_.prototype.encodeBase64 = function (t) {
  return module637.from(t, 'utf8').toString('base64');
};

_.prototype._extractAuthTokenData = function (t) {
  var n = (t || '').split('.')[1];

  if (null != n) {
    var module628 = n;

    try {
      module628 = this.decodeBase64(module628);
      return JSON.parse(module628);
    } catch (t) {
      return module628;
    }
  }

  return null;
};

_.prototype.getAuthToken = function () {
  return this.authToken;
};

_.prototype.getSignedAuthToken = function () {
  return this.signedAuthToken;
};

_.prototype.authenticate = function (t, n) {
  var o = this;
  this.emit('#authenticate', t, function (s, c) {
    if (c && null != c.isAuthenticated) {
      if (c.authError) c.authError = module626.hydrateError(c.authError);
    } else
      c = {
        isAuthenticated: o.authState,
        authError: null,
      };

    if (s) {
      if ('BadConnectionError' !== s.name && 'TimeoutError' !== s.name) o._changeToUnauthenticatedStateAndClearTokens();
      if (n) n(s, c);
    } else
      o.auth.saveToken(o.authTokenName, t, {}, function (s) {
        if (s) o._onSCError(s);
        if (c.isAuthenticated) o._changeToAuthenticatedState(t);
        else o._changeToUnauthenticatedStateAndClearTokens();
        if (n) n(s, c);
      });
  });
};

_.prototype._tryReconnect = function (t) {
  var n,
    o = this,
    s = this.connectAttempts++,
    c = this.options.autoReconnectOptions;

  if (null == t || s > 0) {
    var h = Math.round(c.initialDelay + (c.randomness || 0) * Math.random());
    n = Math.round(h * c.multiplier ** s);
  } else n = t;

  if (n > c.maxDelay) n = c.maxDelay;
  clearTimeout(this._reconnectTimeoutRef);
  this.pendingReconnect = true;
  this.pendingReconnectTimeout = n;
  this._reconnectTimeoutRef = setTimeout(function () {
    o.connect();
  }, n);
};

_.prototype._onSCOpen = function (n) {
  var o = this;
  this.preparingPendingSubscriptions = true;

  if (n) {
    this.id = n.id;
    this.pingTimeout = n.pingTimeout;
    this.transport.pingTimeout = this.pingTimeout;
    if (n.isAuthenticated) this._changeToAuthenticatedState(n.authToken);
    else this._changeToUnauthenticatedStateAndClearTokens();
  } else this._changeToUnauthenticatedStateAndClearTokens();

  this.connectAttempts = 0;
  if (this.options.autoSubscribeOnConnect) this.processPendingSubscriptions();
  module622.prototype.emit.call(this, 'connect', n, function () {
    o.processPendingSubscriptions();
  });
  if (this.state === this.OPEN) this._flushEmitBuffer();
};

_.prototype._onSCError = function (n) {
  var o = this;
  setTimeout(function () {
    if (o.listeners('error').length < 1) throw n;
    module622.prototype.emit.call(o, 'error', n);
  }, 0);
};

_.prototype._suspendSubscriptions = function () {
  var t, n;

  for (var o in this.channels)
    this.channels.hasOwnProperty(o) &&
      ((n = (t = this.channels[o]).state === t.SUBSCRIBED || t.state === t.PENDING ? t.PENDING : t.UNSUBSCRIBED), this._triggerChannelUnsubscribe(t, n));
};

_.prototype._abortAllPendingEventsDueToBadConnection = function (t) {
  for (var n, o = this._emitBuffer.head; o; ) {
    n = o.next;
    var s = o.data;
    clearTimeout(s.timeout);
    delete s.timeout;
    o.detach();
    o = n;
    var c = s.callback;

    if (c) {
      delete s.callback;
      var h = "Event '" + s.event + "' was aborted due to a bad connection",
        u = new C(h, t);
      c.call(s, u, s);
    }

    if (s.cid) this.transport.cancelPendingResponse(s.cid);
  }
};

_.prototype._onSCClose = function (n, o, s) {
  if (
    ((this.id = null),
    this.transport && this.transport.off(),
    (this.pendingReconnect = false),
    (this.pendingReconnectTimeout = null),
    clearTimeout(this._reconnectTimeoutRef),
    this._suspendSubscriptions(),
    this._abortAllPendingEventsDueToBadConnection(s ? 'connectAbort' : 'disconnect'),
    this.options.autoReconnect && (4e3 === n || 4001 === n || 1005 === n ? this._tryReconnect(0) : 1e3 !== n && n < 4500 && this._tryReconnect()),
    s ? module622.prototype.emit.call(this, 'connectAbort', n, o) : module622.prototype.emit.call(this, 'disconnect', n, o),
    module622.prototype.emit.call(this, 'close', n, o),
    !_.ignoreStatuses[n])
  ) {
    var c;
    c = o ? 'Socket connection closed with status code ' + n + ' and reason: ' + o : 'Socket connection closed with status code ' + n;
    var h = new y(_.errorStatuses[n] || c, n);

    this._onSCError(h);
  }
};

_.prototype._onSCEvent = function (n, o, s) {
  var c = this._privateEventHandlerMap[n];
  if (c) c.call(this, o, s);
  else
    module622.prototype.emit.call(this, n, o, function () {
      if (s) s.callback.apply(s, arguments);
    });
};

_.prototype.decode = function (t) {
  return this.transport.decode(t);
};

_.prototype.encode = function (t) {
  return this.transport.encode(t);
};

_.prototype._flushEmitBuffer = function () {
  for (var t, n = this._emitBuffer.head; n; ) {
    t = n.next;
    var o = n.data;
    n.detach();
    this.transport.emitObject(o);
    n = t;
  }
};

_.prototype._handleEventAckTimeout = function (t, n) {
  if (n) n.detach();
  delete t.timeout;
  var o = t.callback;

  if (o) {
    delete t.callback;
    var s = new E("Event response for '" + t.event + "' timed out");
    o.call(t, s, t);
  }

  if (t.cid) this.transport.cancelPendingResponse(t.cid);
};

_.prototype._emit = function (t, n, o) {
  var s = this;
  if (this.state === this.CLOSED) this.connect();
  var c = {
      event: t,
      callback: o,
    },
    h = new module636.Item();
  if (this.options.cloneData) c.data = module639(n);
  else c.data = n;
  h.data = c;
  c.timeout = setTimeout(function () {
    s._handleEventAckTimeout(c, h);
  }, this.ackTimeout);

  this._emitBuffer.append(h);

  if (this.state === this.OPEN) this._flushEmitBuffer();
};

_.prototype.send = function (t) {
  this.transport.send(t);
};

_.prototype.emit = function (n, o, s) {
  if (null == this._localEvents[n]) this._emit(n, o, s);
  else if ('error' === n) module622.prototype.emit.call(this, n, o);
  else {
    var c = new T('The "' + n + '" event is reserved and cannot be emitted on a client socket');

    this._onSCError(c);
  }
};

_.prototype.publish = function (t, n, o) {
  var s = {
    channel: this._decorateChannelName(t),
    data: n,
  };
  this.emit('#publish', s, o);
};

_.prototype._triggerChannelSubscribe = function (n, o) {
  var s = n.name;

  if (n.state !== n.SUBSCRIBED) {
    var c = n.state;
    n.state = n.SUBSCRIBED;
    var h = {
      channel: s,
      oldState: c,
      newState: n.state,
      subscriptionOptions: o,
    };
    n.emit('subscribeStateChange', h);
    n.emit('subscribe', s, o);
    module622.prototype.emit.call(this, 'subscribeStateChange', h);
    module622.prototype.emit.call(this, 'subscribe', s, o);
  }
};

_.prototype._triggerChannelSubscribeFail = function (n, o, s) {
  var c = o.name,
    h = !o.waitForAuth || this.authState === this.AUTHENTICATED;

  if (o.state !== o.UNSUBSCRIBED && h) {
    o.state = o.UNSUBSCRIBED;
    o.emit('subscribeFail', n, c, s);
    module622.prototype.emit.call(this, 'subscribeFail', n, c, s);
  }
};

_.prototype._cancelPendingSubscribeCallback = function (t) {
  if (null != t._pendingSubscriptionCid) {
    this.transport.cancelPendingResponse(t._pendingSubscriptionCid);
    delete t._pendingSubscriptionCid;
  }
};

_.prototype._decorateChannelName = function (t) {
  if (this.channelPrefix) t = this.channelPrefix + t;
  return t;
};

_.prototype._undecorateChannelName = function (t) {
  return this.channelPrefix && 0 === t.indexOf(this.channelPrefix) ? t.replace(this.channelPrefix, '') : t;
};

_.prototype._trySubscribe = function (n) {
  var o = this,
    s = !n.waitForAuth || this.authState === this.AUTHENTICATED;

  if (this.state === this.OPEN && !this.preparingPendingSubscriptions && null == n._pendingSubscriptionCid && s) {
    var c = {
        noTimeout: true,
      },
      h = {
        channel: this._decorateChannelName(n.name),
      };

    if (n.waitForAuth) {
      c.waitForAuth = true;
      h.waitForAuth = c.waitForAuth;
    }

    if (n.data) h.data = n.data;

    if (n.batch) {
      c.batch = true;
      h.batch = true;
    }

    n._pendingSubscriptionCid = this.transport.emit('#subscribe', h, c, function (t) {
      delete n._pendingSubscriptionCid;
      if (t) o._triggerChannelSubscribeFail(t, n, h);
      else o._triggerChannelSubscribe(n, h);
    });
    module622.prototype.emit.call(this, 'subscribeRequest', n.name, h);
  }
};

_.prototype.subscribe = function (t, o) {
  var s = this.channels[t];
  if (s) {
    if (o) s.setOptions(o);
  } else {
    s = new module623(t, this, o);
    this.channels[t] = s;
  }

  if (s.state === s.UNSUBSCRIBED) {
    s.state = s.PENDING;

    this._trySubscribe(s);
  }

  return s;
};

_.prototype._triggerChannelUnsubscribe = function (n, o) {
  var s = n.name,
    c = n.state;

  if (((n.state = o || n.UNSUBSCRIBED), this._cancelPendingSubscribeCallback(n), c === n.SUBSCRIBED)) {
    var h = {
      channel: s,
      oldState: c,
      newState: n.state,
    };
    n.emit('subscribeStateChange', h);
    n.emit('unsubscribe', s);
    module622.prototype.emit.call(this, 'subscribeStateChange', h);
    module622.prototype.emit.call(this, 'unsubscribe', s);
  }
};

_.prototype._tryUnsubscribe = function (t) {
  if (this.state === this.OPEN) {
    var n = {
      noTimeout: true,
    };
    if (t.batch) n.batch = true;

    this._cancelPendingSubscribeCallback(t);

    var o = this._decorateChannelName(t.name);

    this.transport.emit('#unsubscribe', o, n);
  }
};

_.prototype.unsubscribe = function (t) {
  var n = this.channels[t];

  if (n && n.state !== n.UNSUBSCRIBED) {
    this._triggerChannelUnsubscribe(n);

    this._tryUnsubscribe(n);
  }
};

_.prototype.channel = function (t, o) {
  var s = this.channels[t];

  if (!s) {
    s = new module623(t, this, o);
    this.channels[t] = s;
  }

  return s;
};

_.prototype.destroyChannel = function (t) {
  var n = this.channels[t];

  if (n) {
    n.unwatch();
    n.unsubscribe();
    delete this.channels[t];
  }
};

_.prototype.subscriptions = function (t) {
  var n,
    o = [];

  for (var s in this.channels)
    this.channels.hasOwnProperty(s) && ((n = this.channels[s]), (t ? n && (n.state === n.SUBSCRIBED || n.state === n.PENDING) : n && n.state === n.SUBSCRIBED) && o.push(s));

  return o;
};

_.prototype.isSubscribed = function (t, n) {
  var o = this.channels[t];
  return n ? !!o && (o.state === o.SUBSCRIBED || o.state === o.PENDING) : !!o && o.state === o.SUBSCRIBED;
};

_.prototype.processPendingSubscriptions = function () {
  var t = this;
  this.preparingPendingSubscriptions = false;
  var n = [];

  for (var o in this.channels)
    if (this.channels.hasOwnProperty(o)) {
      var s = this.channels[o];
      if (s.state === s.PENDING) n.push(s);
    }

  n.sort(function (t, n) {
    var o = t.priority || 0,
      s = n.priority || 0;
    return o > s ? -1 : o < s ? 1 : 0;
  });
  n.forEach(function (n) {
    t._trySubscribe(n);
  });
};

_.prototype.watch = function (t, n) {
  if ('function' != typeof n) throw new S('No handler function was provided');

  this._channelEmitter.on(t, n);
};

_.prototype.unwatch = function (t, n) {
  if (n) this._channelEmitter.removeListener(t, n);
  else this._channelEmitter.removeAllListeners(t);
};

_.prototype.watchers = function (t) {
  return this._channelEmitter.listeners(t);
};

module.exports = _;
