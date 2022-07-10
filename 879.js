module.exports = function (n) {
  return 'function' == typeof n['@@transducer/step'];
};
