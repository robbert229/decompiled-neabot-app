module.exports = function (n) {
  var t = String(n).match(/^function (\w*)/);
  return null == t ? '' : t[1];
};
