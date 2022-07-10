var module24 = require('./24'),
  module25 = require('./25'),
  module59 = require('./59'),
  o = (function () {
    function o() {
      module24(this, o);
    }

    module25(o, null, [
      {
        key: 'get',
        value: function () {
          return module59.get('window').scale;
        },
      },
      {
        key: 'getFontScale',
        value: function () {
          return module59.get('window').fontScale || o.get();
        },
      },
      {
        key: 'getPixelSizeForLayoutSize',
        value: function (t) {
          return Math.round(t * o.get());
        },
      },
      {
        key: 'roundToNearestPixel',
        value: function (t) {
          var n = o.get();
          return Math.round(t * n) / n;
        },
      },
      {
        key: 'startDetecting',
        value: function () {},
      },
    ]);
    return o;
  })();

module.exports = o;
