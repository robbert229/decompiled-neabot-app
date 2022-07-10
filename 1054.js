var n = {
  Mixin: {
    componentDidMount: function () {
      this._subscribableSubscriptions = [];
    },
    componentWillUnmount: function () {
      this._subscribableSubscriptions.forEach(function (n) {
        return n.remove();
      });

      this._subscribableSubscriptions = null;
    },
    addListenerOn: function (n, s, t, u) {
      this._subscribableSubscriptions.push(n.addListener(s, t, u));
    },
  },
};
module.exports = n;
