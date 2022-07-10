module.exports = {
  get BatchedBridge() {
    return require('./18');
  },

  get ExceptionsManager() {
    return require('./92');
  },

  get Platform() {
    return require('./48');
  },

  get RCTEventEmitter() {
    return require('./171');
  },

  get ReactNativeViewConfigRegistry() {
    return require('./172');
  },

  get TextInputState() {
    return require('./173');
  },

  get UIManager() {
    return require('./44');
  },

  get deepDiffer() {
    return require('./191');
  },

  get deepFreezeAndThrowOnMutationInDev() {
    return require('./28');
  },

  get flattenStyle() {
    return require('./80');
  },

  get ReactFiberErrorDialog() {
    return require('./192');
  },
};
