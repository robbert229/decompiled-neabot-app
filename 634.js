var o =
  (globals =
    'undefined' != typeof WorkerGlobalScope
      ? self
      : ('undefined' != typeof window && window) ||
        (function () {
          return this;
        })()).WebSocket || globals.MozWebSocket;

function n(n, t, f) {
  return t ? new o(n, t) : new o(n);
}

if (o) n.prototype = o.prototype;
module.exports = o ? n : null;
