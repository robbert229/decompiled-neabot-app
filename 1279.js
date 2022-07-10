var t, n;
t = this;

n = function (t) {
  if (!t.lib.Cipher)
    (function (n) {
      o.StreamCipher = l.extend({
        _doFinalize: function () {
          return this._process(true);
        },
        blockSize: 1,
      });
      o.BlockCipher = l.extend({
        cfg: l.cfg.extend({
          mode: k,
          padding: x,
        }),
        reset: function () {
          var t;
          l.reset.call(this);
          var n = this.cfg,
            c = n.iv,
            o = n.mode;
          if (this._xformMode == this._ENC_XFORM_MODE) t = o.createEncryptor;
          else {
            t = o.createDecryptor;
            this._minBufferSize = 1;
          }
          if (this._mode && this._mode.__creator == t) this._mode.init(this, c && c.words);
          else {
            this._mode = t.call(o, this, c && c.words);
            this._mode.__creator = t;
          }
        },
        _doProcessBlock: function (t, n) {
          this._mode.processBlock(t, n);
        },
        _doFinalize: function () {
          var t,
            n = this.cfg.padding;

          if (this._xformMode == this._ENC_XFORM_MODE) {
            n.pad(this._data, this.blockSize);
            t = this._process(true);
          } else {
            t = this._process(true);
            n.unpad(t);
          }

          return t;
        },
        blockSize: 4,
      });

      var c = t,
        o = c.lib,
        s = o.Base,
        f = o.WordArray,
        p = o.BufferedBlockAlgorithm,
        h = c.enc,
        u = h.Base64,
        _ = c.algo.EvpKDF,
        l = (o.Cipher = p.extend({
          cfg: s.extend(),
          createEncryptor: function (t, n) {
            return this.create(this._ENC_XFORM_MODE, t, n);
          },
          createDecryptor: function (t, n) {
            return this.create(this._DEC_XFORM_MODE, t, n);
          },
          init: function (t, n, c) {
            this.cfg = this.cfg.extend(c);
            this._xformMode = t;
            this._key = n;
            this.reset();
          },
          reset: function () {
            p.reset.call(this);

            this._doReset();
          },
          process: function (t) {
            this._append(t);

            return this._process();
          },
          finalize: function (t) {
            if (t) this._append(t);
            return this._doFinalize();
          },
          keySize: 4,
          ivSize: 4,
          _ENC_XFORM_MODE: 1,
          _DEC_XFORM_MODE: 2,
          _createHelper: (function () {
            function t(t) {
              return 'string' == typeof t ? C : z;
            }

            return function (n) {
              return {
                encrypt: function (c, o, s) {
                  return t(o).encrypt(n, c, o, s);
                },
                decrypt: function (c, o, s) {
                  return t(o).decrypt(n, c, o, s);
                },
              };
            };
          })(),
        })),
        y = (c.mode = {}),
        v = (o.BlockCipherMode = s.extend({
          createEncryptor: function (t, n) {
            return this.Encryptor.create(t, n);
          },
          createDecryptor: function (t, n) {
            return this.Decryptor.create(t, n);
          },
          init: function (t, n) {
            this._cipher = t;
            this._iv = n;
          },
        })),
        k = (y.CBC = (function () {
          var t = v.extend();

          function c(t, c, o) {
            var s,
              f = this._iv;

            if (f) {
              s = f;
              this._iv = n;
            } else s = this._prevBlock;

            for (var p = 0; p < o; p++) t[c + p] ^= s[p];
          }

          t.Encryptor = t.extend({
            processBlock: function (t, n) {
              var o = this._cipher,
                s = o.blockSize;
              c.call(this, t, n, s);
              o.encryptBlock(t, n);
              this._prevBlock = t.slice(n, n + s);
            },
          });
          t.Decryptor = t.extend({
            processBlock: function (t, n) {
              var o = this._cipher,
                s = o.blockSize,
                f = t.slice(n, n + s);
              o.decryptBlock(t, n);
              c.call(this, t, n, s);
              this._prevBlock = f;
            },
          });
          return t;
        })()),
        x = ((c.pad = {}).Pkcs7 = {
          pad: function (t, n) {
            for (var c = 4 * n, o = c - (t.sigBytes % c), s = (o << 24) | (o << 16) | (o << 8) | o, p = [], h = 0; h < o; h += 4) p.push(s);

            var u = f.create(p, o);
            t.concat(u);
          },
          unpad: function (t) {
            var n = 255 & t.words[(t.sigBytes - 1) >>> 2];
            t.sigBytes -= n;
          },
        }),
        S = (o.CipherParams = s.extend({
          init: function (t) {
            this.mixIn(t);
          },
          toString: function (t) {
            return (t || this.formatter).stringify(this);
          },
        })),
        B = ((c.format = {}).OpenSSL = {
          stringify: function (t) {
            var n = t.ciphertext,
              c = t.salt;
            return (c ? f.create([1398893684, 1701076831]).concat(c).concat(n) : n).toString(u);
          },
          parse: function (t) {
            var n,
              c = u.parse(t),
              o = c.words;

            if (1398893684 == o[0] && 1701076831 == o[1]) {
              n = f.create(o.slice(2, 4));
              o.splice(0, 4);
              c.sigBytes -= 16;
            }

            return S.create({
              ciphertext: c,
              salt: n,
            });
          },
        }),
        z = (o.SerializableCipher = s.extend({
          cfg: s.extend({
            format: B,
          }),
          encrypt: function (t, n, c, o) {
            o = this.cfg.extend(o);
            var s = t.createEncryptor(c, o),
              f = s.finalize(n),
              p = s.cfg;
            return S.create({
              ciphertext: f,
              key: c,
              iv: p.iv,
              algorithm: t,
              mode: p.mode,
              padding: p.padding,
              blockSize: t.blockSize,
              formatter: o.format,
            });
          },
          decrypt: function (t, n, c, o) {
            o = this.cfg.extend(o);
            n = this._parse(n, o.format);
            return t.createDecryptor(c, o).finalize(n.ciphertext);
          },
          _parse: function (t, n) {
            return 'string' == typeof t ? n.parse(t, this) : t;
          },
        })),
        E = ((c.kdf = {}).OpenSSL = {
          execute: function (t, n, c, o) {
            if (!o) o = f.random(8);

            var s = _.create({
                keySize: n + c,
              }).compute(t, o),
              p = f.create(s.words.slice(n), 4 * c);

            s.sigBytes = 4 * n;
            return S.create({
              key: s,
              iv: p,
              salt: o,
            });
          },
        }),
        C = (o.PasswordBasedCipher = z.extend({
          cfg: z.cfg.extend({
            kdf: E,
          }),
          encrypt: function (t, n, c, o) {
            var s = (o = this.cfg.extend(o)).kdf.execute(c, t.keySize, t.ivSize);
            o.iv = s.iv;
            var f = z.encrypt.call(this, t, n, s.key, o);
            f.mixIn(s);
            return f;
          },
          decrypt: function (t, n, c, o) {
            o = this.cfg.extend(o);
            n = this._parse(n, o.format);
            var s = o.kdf.execute(c, t.keySize, t.ivSize, n.salt);
            o.iv = s.iv;
            return z.decrypt.call(this, t, n, s.key, o);
          },
        }));
    })();
};

if ('object' == typeof exports) module.exports = exports = n(require('crypto-js'), require('./1278'));
else if ('function' == typeof define && define.amd) define(['./core', './evpkdf'], n);
else n(t.CryptoJS);
