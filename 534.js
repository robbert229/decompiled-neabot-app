var module20 = require('./20'),
  module529 = require('./529'),
  module528 = require('./528'),
  s = [].concat(module20.default(module528.baseProps), ['shouldActivateOnStart', 'disallowInterruption']);

exports.nativeViewProps = s;
var v = module529.default({
  name: 'NativeViewGestureHandler',
  allowedProps: s,
  config: {},
});
exports.NativeViewGestureHandler = v;
