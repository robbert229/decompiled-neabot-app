exports.default = f;

exports.hideLoading = function () {
  module813.default.hide(t);
};

exports.showLoading = function () {
  var o = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : '';
  t = module813.default.showLoading(o, {
    position: 0,
    containerStyle: {
      padding: 30,
      backgroundColor: 'rgba(0,0,0, 0.7)',
    },
    textColor: 'white',
    textstyle: {
      fontSize: 16,
    },
  });
};

exports.showErrorToast = function (o) {
  f(o, 'error');
};

exports.showSuccessToast = function (o) {
  f(o, 'success');
};

exports.showInfoToast = function (o) {
  f(o, 'info');
};

require('react');

var t,
  module813 = require('./813'),
  module820 = require('./820');

function f(o, t) {
  var f = arguments.length > 2 && undefined !== arguments[2] ? arguments[2] : 2e3;
  module813.default.show(o, {
    position: 0,
    duration: f,
    textColor: '#fff',
    containerStyle: {
      backgroundColor: 'success' == t ? module820.default.androidGreen : 'error' == t ? module820.default.rustyRed : 'info' == t ? module820.default.tiffanyBlue : '#000',
      borderRadius: 10,
      padding: 20,
      margin: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
}
