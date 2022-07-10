var module20 = require('./20'),
  module24 = require('./24'),
  module25 = require('./25'),
  module39 = require('./39'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  module1457 = require('./1457'),
  module1458 = require('./1458'),
  ReactNative = require('react-native'),
  module1459 = require('./1459');

function b() {
  if ('undefined' == typeof Reflect || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if ('function' == typeof Proxy) return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (t) {
    return false;
  }
}

var _ = ReactNative.NativeModules.UdpSockets,
  w = 0,
  k = {
    UNBOUND: 0,
    BINDING: 1,
    BOUND: 2,
  },
  B = (function (t) {
    module35.default(M, t);

    var B = M,
      E = b(),
      N = function () {
        var t,
          n = module34.default(B);

        if (E) {
          var o = module34.default(this).constructor;
          t = Reflect.construct(n, arguments, o);
        } else t = n.apply(this, arguments);

        return module37.default(this, t);
      };

    function M(t, n) {
      var s;
      if (
        (module24.default(this, M),
        (s = N.call(this)),
        module1457.EventEmitter.call(module39.default(s)),
        'string' == typeof t &&
          (t = {
            type: t,
          }),
        'udp4' !== t.type && 'udp6' !== t.type)
      )
        throw new Error('invalid udp socket type');
      s.type = t.type;
      s.reusePort = t && t.reusePort;
      s.debugEnabled = t && t.debug;
      s._destroyed = false;
      s._id = w++;
      s._state = k.UNBOUND;
      s._address = '';
      s._port = -1;
      s._subscription = ReactNative.DeviceEventEmitter.addListener('udp-' + s._id + '-data', s._onReceive.bind(module39.default(s)));
      if (n) s.on('message', n);

      _.createSocket(s._id, {
        type: s.type,
      });

      return s;
    }

    module25.default(M, [
      {
        key: '_debug',
        value: function () {
          if (this.debugEnabled) {
            var t,
              o = [].slice.call(arguments);
            o.unshift('socket-' + this._id);
            (t = console).log.apply(t, module20.default(o));
          }
        },
      },
      {
        key: 'bind',
        value: function () {
          var t = this;
          if (this._state !== k.UNBOUND) throw new Error('Socket is already bound');
          var n = module1459.default.apply(undefined, arguments),
            o = n.port,
            s = n.address,
            u = n.callback;
          if (!s) s = '0.0.0.0';
          if (!o) o = 0;
          if (!u) u = function () {};
          this.once('listening', u.bind(this));
          this._state = k.BINDING;

          this._debug('binding, address:', s, 'port:', o);

          _.bind(
            this._id,
            o,
            s,
            {
              reusePort: this.reusePort,
            },
            function (n, o) {
              if ((n = S(n))) {
                t._state = k.UNBOUND;

                t._debug('failed to bind', n);

                if (u) u(n);
                return t.emit('error', n);
              }

              t._debug('bound to address:', o.address, 'port:', o.port);

              t._address = o.address;
              t._port = o.port;
              t._state = k.BOUND;
              t.emit('listening');
            }
          );
        },
      },
      {
        key: 'close',
        value: function () {
          var t = this,
            n = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : function () {};
          if (this._destroyed) return setImmediate(n);
          this.once('close', n);

          this._debug('closing');

          this._subscription.remove();

          _.close(this._id, function (n) {
            if (n) return t.emit('error', n);
            t._destroyed = true;

            t._debug('closed');

            t.emit('close');
          });
        },
      },
      {
        key: 'connect',
        value: function (t, n, o) {
          console.warn('react-native-udp: connect() is not implemented');
        },
      },
      {
        key: 'disconnect',
        value: function () {
          console.warn('react-native-udp: disconnect() is not implemented');
        },
      },
      {
        key: '_onReceive',
        value: function (t) {
          var n = module1458.Buffer.from(t.data, 'base64'),
            o = {
              address: t.address,
              port: t.port,
              family: 'IPv4',
              size: n.length,
              ts: Number(t.ts),
            };
          this.emit('message', n, o);
        },
      },
      {
        key: 'send',
        value: function (t, n, o, s, u, c) {
          var f = this;
          if (this._state === k.UNBOUND) throw new Error('ERR_SOCKET_BAD_PORT');
          if ((u || (u = 'udp4' === this.type ? '127.0.0.1' : '::1'), undefined === s || undefined === u))
            throw new Error('socket.send(): address and port parameters must be provided');
          if (Array.isArray(t) && (undefined !== n || undefined !== o)) throw new Error('socket.send(): offset and length must be undefined for a msg of type Array');

          var l = this._generateSendBuffer(t).slice(n, o).toString('base64');

          _.send(this._id, l, s, u, function (t) {
            if ((t = S(t))) c ? c(t) : f.emit('error', t);
            else if (c) c();
          });
        },
      },
      {
        key: '_generateSendBuffer',
        value: function (t) {
          var n = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : 'utf-8';
          if ('string' == typeof t) return module1458.Buffer.from(t, n);
          if (module1458.Buffer.isBuffer(t)) return t;
          if (t instanceof Uint8Array || Array.isArray(t)) return module1458.Buffer.from(t);
          throw new TypeError('Invalid type for msg, found ' + typeof t);
        },
      },
      {
        key: 'address',
        value: function () {
          if (this._state !== k.BOUND) throw new Error('socket is not bound yet');
          return {
            address: this._address,
            port: this._port,
            family: 'IPv4',
          };
        },
      },
      {
        key: 'setBroadcast',
        value: function (t) {
          var n = this;
          if (this._state !== k.BOUND) throw new Error('EBADF');

          _.setBroadcast(this._id, t, function (t) {
            if ((t = S(t))) {
              n._debug('failed to set broadcast', t);

              n.emit('error', t);
            }
          });
        },
      },
      {
        key: 'setMulticastInterface',
        value: function (t) {
          console.warn('react-native-udp: setMulticastInterface() is not implemented');
        },
      },
      {
        key: 'setMulticastLoopback',
        value: function (t) {
          console.warn('react-native-udp: setMulticastLoopback() is not implemented');
        },
      },
      {
        key: 'setMulticastTTL',
        value: function (t) {
          console.warn('react-native-udp: setMulticastTTL() is not implemented');
        },
      },
      {
        key: 'setRecvBufferSize',
        value: function (t) {
          console.warn('react-native-udp: setRecvBufferSize() is not implemented');
        },
      },
      {
        key: 'setSendBufferSize',
        value: function (t) {
          console.warn('react-native-udp: setSendBufferSize() is not implemented');
        },
      },
      {
        key: 'setTTL',
        value: function (t) {
          console.warn('react-native-udp: setTTL() is not implemented');
        },
      },
      {
        key: 'unref',
        value: function () {
          console.warn('react-native-udp: unref() is not implemented');
        },
      },
      {
        key: 'addMembership',
        value: function (t, n) {
          if (this._state !== k.BOUND) throw new Error('you must bind before addMembership()');
          if (n) console.warn('react-native-udp: addMembership() ignores `multicastInterface` parameter');

          _.addMembership(this._id, t);
        },
      },
      {
        key: 'addSourceSpecificMembership',
        value: function (t, n, o) {
          console.warn('react-native-udp: addSourceSpecificMembership() is not implemented');
        },
      },
      {
        key: 'dropMembership',
        value: function (t, n) {
          if (this._state !== k.BOUND) throw new Error('you must bind before addMembership()');
          if (n) console.warn('react-native-udp: dropMembership() ignores `multicastInterface` parameter');

          _.dropMembership(this._id, t);
        },
      },
      {
        key: 'dropSourceSpecificMembership',
        value: function (t, n, o) {
          console.warn('react-native-udp: dropSourceSpecificMembership() is not implemented');
        },
      },
      {
        key: 'getRecvBufferSize',
        value: function () {
          console.warn('react-native-udp: getRecvBufferSize() is not implemented');
        },
      },
      {
        key: 'getSendBufferSize',
        value: function () {
          console.warn('react-native-udp: getSendBufferSize() is not implemented');
        },
      },
      {
        key: 'ref',
        value: function () {
          console.warn('react-native-udp: ref() is not implemented');
        },
      },
      {
        key: 'remoteAddress',
        value: function () {
          console.warn('react-native-udp: remoteAddress() is not implemented');
        },
      },
    ]);
    return M;
  })(module1457.EventEmitter);

function S(t) {
  if (t) {
    if ('string' == typeof t) t = new Error(t);
    return t;
  }
}

exports.default = B;
