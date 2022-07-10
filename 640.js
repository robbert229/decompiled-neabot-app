var module621 = require('./621'),
  module626 = require('./626'),
  module641 = require('./641'),
  h = module626.InvalidArgumentsError,
  s = {};

function u(t) {
  var o = t.secure ? 'https://' : 'http://',
    n = '';
  if (t.query)
    if ('string' == typeof t.query) n = t.query;
    else {
      var h = [],
        s = t.query;

      for (var u in s) s.hasOwnProperty(u) && h.push(u + '=' + s[u]);

      if (h.length) n = '?' + h.join('&');
    }
  return o + (t.host ? t.host : t.hostname + ':' + t.port) + t.path + n;
}

function c(t, o) {
  var n = null == t.secure ? o : t.secure;
  return t.port || (globals.location && location.port ? location.port : n ? 443 : 80);
}

module.exports = {
  create: function (o) {
    if ((o = o || {}).host && !o.host.match(/[^:]+:\d{2,5}/)) throw new h('The host option should include both the hostname and the port number in the format "hostname:port"');
    if (o.host && o.hostname)
      throw new h(
        'The host option should already include the hostname and the port number in the format "hostname:port" - Because of this, you should never use host and hostname options together'
      );
    if (o.host && o.port)
      throw new h(
        'The host option should already include the hostname and the port number in the format "hostname:port" - Because of this, you should never use host and port options together'
      );
    var l = globals.location && 'https:' === location.protocol,
      p = {
        port: c(o, l),
        hostname: (globals.location && location.hostname) || 'localhost',
        path: '/socketcluster/',
        secure: l,
        autoConnect: true,
        autoReconnect: true,
        autoSubscribeOnConnect: true,
        connectTimeout: 2e4,
        ackTimeout: 1e4,
        timestampRequests: false,
        timestampParam: 't',
        authEngine: null,
        authTokenName: 'socketCluster.authToken',
        binaryType: 'arraybuffer',
        multiplex: true,
        pubSubBatchDuration: null,
        cloneData: false,
      };

    for (var f in o) o.hasOwnProperty(f) && (p[f] = o[f]);

    if (((p.clientMap = s), false === p.multiplex)) {
      p.clientId = module641.v4();
      var y = new module621(p);
      s[p.clientId] = y;
      return y;
    }

    p.clientId = u(p);
    if (s[p.clientId]) {
      if (p.autoConnect) s[p.clientId].connect();
    } else s[p.clientId] = new module621(p);
    return s[p.clientId];
  },
  destroy: function (t) {
    t.destroy();
  },
  clients: s,
};
