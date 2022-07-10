var module11 = require('./11'),
  module24 = require('./24'),
  module25 = require('./25'),
  ReactNative = require('react-native'),
  module1344 = require('./1344'),
  module1035 = require('./1035'),
  p = {
    Album: 'Album',
    All: 'All',
    Event: 'Event',
    Faces: 'Faces',
    Library: 'Library',
    PhotoStream: 'PhotoStream',
    SavedPhotos: 'SavedPhotos',
  },
  h = {
    All: 'All',
    Videos: 'Videos',
    Photos: 'Photos',
  },
  c = (function () {
    function t() {
      module24.default(this, t);
    }

    module25.default(t, null, [
      {
        key: 'saveImageWithTag',
        value: function (t) {
          console.warn('`CameraRoll.saveImageWithTag()` is deprecated. Use `CameraRoll.saveToCameraRoll()` instead.');
          return this.saveToCameraRoll(t, 'photo');
        },
      },
      {
        key: 'deletePhotos',
        value: function (t) {
          return module1344.default.deletePhotos(t);
        },
      },
      {
        key: 'save',
        value: function (t) {
          var o = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : {},
            l = o.type,
            s = undefined === l ? 'auto' : l,
            n = o.album,
            p = undefined === n ? '' : n;
          module1035('string' == typeof t, 'CameraRoll.saveToCameraRoll must be a valid string.');
          module1035(
            'photo' === o.type || 'video' === o.type || 'auto' === o.type || undefined === o.type,
            "The second argument to saveToCameraRoll must be 'photo' or 'video' or 'auto'. You passed " + (s || 'unknown')
          );
          if ('auto' === s) s = ['mov', 'mp4'].indexOf(t.split('.').slice(-1)[0]) >= 0 ? 'video' : 'photo';
          return module1344.default.saveToCameraRoll(t, {
            type: s,
            album: p,
          });
        },
      },
      {
        key: 'saveToCameraRoll',
        value: function (o, l) {
          console.warn('CameraRoll.saveToCameraRoll(tag, type) is deprecated.  Use the save function instead');
          return t.save(o, {
            type: l,
          });
        },
      },
      {
        key: 'getAlbums',
        value: function () {
          var t =
            arguments.length > 0 && undefined !== arguments[0]
              ? arguments[0]
              : {
                  assetType: h.All,
                };
          return module1344.default.getAlbums(t);
        },
      },
      {
        key: 'getParamsWithDefaults',
        value: function (t) {
          var l = module11.default({}, t);
          if (!l.assetType) l.assetType = h.All;
          if (!(l.groupTypes || 'android' === ReactNative.Platform.OS)) l.groupTypes = p.All;
          return l;
        },
      },
      {
        key: 'getPhotos',
        value: function (o) {
          o = t.getParamsWithDefaults(o);
          var l = module1344.default.getPhotos(o);

          if (arguments.length > 1) {
            console.warn('CameraRoll.getPhotos(tag, success, error) is deprecated.  Use the returned Promise instead');

            var s = arguments[1],
              n = arguments[2] || function () {};

            l.then(s, n);
          }

          return l;
        },
      },
    ]);
    return t;
  })();

c.GroupTypesOptions = p;
c.AssetTypeOptions = h;
module.exports = c;
