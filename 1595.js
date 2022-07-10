exports.handlePress = function (n) {
  var u = n.onPress,
    l = n.value,
    c = n.onValueChange;
  if (c) c(l);
  else if (!(null == u)) u();
};

exports.isChecked = function (n) {
  var u = n.value,
    l = n.status,
    c = n.contextValue;
  return undefined !== c && null !== c ? (c === u ? 'checked' : 'unchecked') : l;
};
