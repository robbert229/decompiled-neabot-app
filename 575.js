exports.default = function (t, c) {
  var l = module576.default(c);

  switch (c) {
    case 'vertical':
    case 'vertical-inverted':
      return t.height * l;

    case 'horizontal':
    case 'horizontal-inverted':
      return t.width * l;
  }
};

var module576 = require('./576');
