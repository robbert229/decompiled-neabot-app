module.exports = function (n) {
  for (var o, t = []; !(o = n.next()).done; ) t.push(o.value);

  return t;
};
