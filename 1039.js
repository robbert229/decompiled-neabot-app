var module24 = require('./24'),
  module25 = require('./25'),
  n = (function () {
    function n(s) {
      module24(this, n);
      this.subscriber = s;
    }

    module25(n, [
      {
        key: 'remove',
        value: function () {
          this.subscriber.removeSubscription(this);
        },
      },
    ]);
    return n;
  })();

module.exports = n;
