var React = require('react'),
  module1632 = require('./1632'),
  module1634 = require('./1634'),
  module1636 = require('./1636'),
  module1638 = require('./1638'),
  module1640 = require('./1640'),
  module1642 = require('./1642'),
  module1644 = require('./1644'),
  module1649 = require('./1649'),
  module1651 = require('./1651'),
  module1506 = require('./1506'),
  f = {
    ICONICONS: 'ionicons',
    ANT_ICON: 'ant',
    EVIL_ICONS: 'EVIL',
    FONT_AWESOME: 'FONTAWESOME',
    FONT_AWESOME5: 'fontawwesome5',
    MATERIAL_ICONS: 'MaterialIcons',
    FEATHER_ICONS: 'FEATHER',
    ENTYPO: 'ENTYPO',
    OCTICONS: 'OCTICONS',
    MATERIAL_COMMUNITY: 'MATERIALCOMMUNITY',
  };

exports.ICON_TYPE = f;

exports.IconX = function (O) {
  var u = O.origin,
    s = O.name,
    M = O.color,
    o = O.size,
    S = O.paddingLeft,
    b = O.style,
    L = M || '#aaaaaa',
    k = o || 24,
    F = s || 'right',
    R = S || null,
    Y = module1632.default;

  switch (u) {
    case f.ANT_ICON:
      Y = module1638.default;
      break;

    case f.ENTYPO:
      Y = module1634.default;
      break;

    case f.MATERIAL_ICONS:
      Y = module1640.default;
      break;

    case f.FONT_AWESOME5:
      Y = module1644.default;
      break;

    case f.FEATHER_ICONS:
      Y = module1642.default;
      break;

    case f.EVIL_ICONS:
      Y = module1651.default;
      break;

    case f.FONT_AWESOME:
      Y = module1649.default;
      break;

    case f.OCTICONS:
      Y = module1636.default;
      break;

    case f.MATERIAL_COMMUNITY:
      Y = module1506.default;
      break;

    default:
      Y = module1632.default;
  }

  return React.default.createElement(Y, {
    name: F,
    size: k,
    color: L,
    style: [
      {
        paddingLeft: R,
      },
      b,
    ],
  });
};
