for (var o = '-_', t = 36; t--; ) o += t.toString(36);

for (t = 36; t-- - 10; ) o += t.toString(36).toUpperCase();

module.exports = function (n) {
  var f = '';

  for (t = n || 21; t--; ) f += o[(64 * Math.random()) | 0];

  return f;
};
