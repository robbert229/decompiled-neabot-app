module.exports = function () {
  return 'f' + (1073741824 * Math.random()).toString(16).replace('.', '');
};
