var module1139 = require('./1139'),
  n = (function () {
    function t() {}

    t.DeploymentSucceeded = 'DeploymentSucceeded';
    t.DeploymentFailed = 'DeploymentFailed';
    return t;
  })();

exports.AcquisitionStatus = n;

var o = (function () {
  function o(t, n) {
    this._publicPrefixUrl = 'v0.1/public/codepush/';
    this._httpRequester = t;
    this._serverUrl = n.serverUrl;
    if ('/' !== this._serverUrl.slice(-1)) this._serverUrl += '/';
    this._appVersion = n.appVersion;
    this._clientUniqueId = n.clientUniqueId;
    this._deploymentKey = n.deploymentKey;
    this._ignoreAppVersion = n.ignoreAppVersion;
  }

  o.prototype.queryUpdateWithCurrentPackage = function (n, o) {
    var l = this;
    if (!n || !n.appVersion) throw new module1139.CodePushPackageError('Calling common acquisition SDK with incorrect package');
    var u = {
        deployment_key: this._deploymentKey,
        app_version: n.appVersion,
        package_hash: n.packageHash,
        is_companion: this._ignoreAppVersion,
        label: n.label,
        client_unique_id: this._clientUniqueId,
      },
      p = this._serverUrl + this._publicPrefixUrl + 'update_check?' + s(u);

    this._httpRequester.request(0, p, function (n, s) {
      if (n) o(n, null);
      else {
        if (200 !== s.statusCode) {
          var u = undefined;
          u =
            0 === s.statusCode
              ? "Couldn't send request to " +
                p +
                ', xhr.statusCode = 0 was returned. One of the possible reasons for that might be connection problems. Please, check your internet connection.'
              : s.statusCode + ': ' + s.body;
          return void o(new module1139.CodePushHttpError(u), null);
        }

        try {
          var c = JSON.parse(s.body).update_info;
        } catch (n) {
          return void o(n, null);
        }

        if (c) {
          if (c.update_app_version)
            o(null, {
              updateAppVersion: true,
              appVersion: c.target_binary_range,
            });
          else if (c.is_available) {
            var _ = {
              deploymentKey: l._deploymentKey,
              description: c.description,
              label: c.label,
              appVersion: c.target_binary_range,
              isMandatory: c.is_mandatory,
              packageHash: c.package_hash,
              packageSize: c.package_size,
              downloadUrl: c.download_url,
            };
            o(null, _);
          } else o(null, null);
        } else o(n, null);
      }
    });
  };

  o.prototype.reportStatusDeploy = function (o, s, l, u, p) {
    var c = this._serverUrl + this._publicPrefixUrl + 'report_status/deploy',
      _ = {
        app_version: this._appVersion,
        deployment_key: this._deploymentKey,
      };
    if ((this._clientUniqueId && (_.client_unique_id = this._clientUniqueId), o))
      switch (((_.label = o.label), (_.app_version = o.appVersion), s)) {
        case n.DeploymentSucceeded:
        case n.DeploymentFailed:
          _.status = s;
          break;

        default:
          return void (
            p && p(s ? new module1139.CodePushDeployStatusError('Unrecognized status "' + s + '".') : new module1139.CodePushDeployStatusError('Missing status argument.'), null)
          );
      }
    if (l) _.previous_label_or_app_version = l;
    if (u) _.previous_deployment_key = u;
    p = 'function' == typeof arguments[arguments.length - 1] && arguments[arguments.length - 1];

    this._httpRequester.request(2, c, JSON.stringify(_), function (n, o) {
      if (p) {
        if (n) return void p(n, null);
        if (200 !== o.statusCode) return void p(new module1139.CodePushHttpError(o.statusCode + ': ' + o.body), null);
        p(null, null);
      }
    });
  };

  o.prototype.reportStatusDownload = function (n, o) {
    var s = this._serverUrl + this._publicPrefixUrl + 'report_status/download',
      l = {
        client_unique_id: this._clientUniqueId,
        deployment_key: this._deploymentKey,
        label: n.label,
      };

    this._httpRequester.request(2, s, JSON.stringify(l), function (n, s) {
      if (o) {
        if (n) return void o(n, null);
        if (200 !== s.statusCode) return void o(new module1139.CodePushHttpError(s.statusCode + ': ' + s.body), null);
        o(null, null);
      }
    });
  };

  return o;
})();

function s(t) {
  var n = '',
    o = true;

  for (var s in t)
    if (t.hasOwnProperty(s)) {
      var l = t[s];

      if (null !== l && undefined !== l) {
        if (!o) n += '&';
        n += encodeURIComponent(s) + '=';
        n += encodeURIComponent(l);
      }

      o = false;
    }

  return n;
}

exports.AcquisitionManager = o;
