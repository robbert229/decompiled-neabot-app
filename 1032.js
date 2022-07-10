var ReactNative = require('react-native'),
  t = {
    componentWillUnmount: function () {
      for (; this._interactionMixinHandles.length; ) ReactNative.InteractionManager.clearInteractionHandle(this._interactionMixinHandles.pop());
    },
    _interactionMixinHandles: [],
    createInteractionHandle: function () {
      var t = ReactNative.InteractionManager.createInteractionHandle();

      this._interactionMixinHandles.push(t);

      return t;
    },
    clearInteractionHandle: function (t) {
      ReactNative.InteractionManager.clearInteractionHandle(t);
      this._interactionMixinHandles = this._interactionMixinHandles.filter(function (n) {
        return n !== t;
      });
    },
    runAfterInteractions: function (t) {
      ReactNative.InteractionManager.runAfterInteractions(t);
    },
  };

module.exports = t;
