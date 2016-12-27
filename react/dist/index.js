webpackJsonp([1,0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(15);


/***/ },
/* 1 */
/***/ function(module, exports) {

	/**
	 * Created by next on 16/10/8.
	 */
	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var USER_EXISTS = exports.USER_EXISTS = 'USER_EXISTS';
	var SET_USER = exports.SET_USER = 'SET_USER';
	var ADD_USER = exports.ADD_USER = 'ADD_USER';
	var SET_SNACKBAR = exports.SET_SNACKBAR = 'SET_SNACKBAR';

	var GET_TOKEN = exports.GET_TOKEN = 'GET_TOKEN';
	var GetDeviceList = exports.GetDeviceList = 'GetDeviceList';
	var GetCurrentPower = exports.GetCurrentPower = 'GetCurrentPower';
	var Change = exports.Change = 'Change';
	var GetCurrentTrack = exports.GetCurrentTrack = 'GetCurrentTrack';
	var AddDevice = exports.AddDevice = 'AddDevice';
	var GetGuardians = exports.GetGuardians = 'GetGuardians';
	var GetGuardianss = exports.GetGuardianss = 'GetGuardianss';
	var GetChecked = exports.GetChecked = 'GetChecked';
	var ChangeDevice = exports.ChangeDevice = 'ChangeDevice';
	var aaa = exports.aaa = 'aaa';
	var GetAddr = exports.GetAddr = 'GetAddr';
	var isLogin = exports.isLogin = 'isLogin';
	var exportMap = exports.exportMap = 'exportMap';

	var Safetyarea = exports.Safetyarea = 'Safetyarea';
	var GetSafeRegions1 = exports.GetSafeRegions1 = 'GetSafeRegions1';

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = Redux;

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = ReactRedux;

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = ReactRouter;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var target = exports.target =  false ? '' : 'http://222.46.27.218:8800'; //目标网站

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';

	/**
	 * Created by next on 16/9/13.
	 */

	(function () {
	    var docEl = document.documentElement;
	    var clientWidth = docEl.clientWidth;
	    if (!clientWidth) return;
	    docEl.style.fontSize = 20 * (clientWidth / 640) + 'px';
	})();

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by next on 16/10/8.
	 */
	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _redux = __webpack_require__(3);

	var _reduxThunk = __webpack_require__(9);

	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

	var _reducers = __webpack_require__(16);

	var _reducers2 = _interopRequireDefault(_reducers);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	exports.default = function () {
	    var store = (0, _redux.compose)((0, _redux.applyMiddleware)(_reduxThunk2.default))(_redux.createStore)(_reducers2.default);

	    return store;
	};

/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	function createThunkMiddleware(extraArgument) {
	  return function (_ref) {
	    var dispatch = _ref.dispatch;
	    var getState = _ref.getState;
	    return function (next) {
	      return function (action) {
	        if (typeof action === 'function') {
	          return action(dispatch, getState, extraArgument);
	        }

	        return next(action);
	      };
	    };
	  };
	}

	var thunk = createThunkMiddleware();
	thunk.withExtraArgument = createThunkMiddleware;

	exports['default'] = thunk;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	'usr strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _index = __webpack_require__(14);

	var _reactRedux = __webpack_require__(4);

	var _redux = __webpack_require__(3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Index = function (_React$Component) {
	    _inherits(Index, _React$Component);

	    function Index() {
	        _classCallCheck(this, Index);

	        return _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).call(this));
	    }

	    _createClass(Index, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                null,
	                'sbsssssssssssss'
	            );
	        }
	    }]);

	    return Index;
	}(_react2.default.Component);

	var mapStateToProps = function mapStateToProps(state) {
	    return {
	        list: state.login.list,
	        babyName: state.login.babyName,
	        babyid: state.login.babyid,
	        babytelephone: state.login.babytelephone,
	        headimg: state.login.headimg,
	        values: state.login.values,
	        lng: state.login.lng,
	        lat: state.login.lat,
	        gpstime: state.login.gpstime,
	        getGuardiansList: state.login.getGuardiansList,
	        _checked: state.login.checked,
	        abc: state.login.abc,
	        address: state.login.addr,
	        datasource: state.login.datasource,
	        isLogin: state.login.isLogin,
	        exportMap: state.login.exportMap

	    };
	};
	var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	    return (0, _redux.bindActionCreators)({
	        doLogin: _index.doLogin,
	        change: _index.change,
	        getOneBabyid: _index.getOneBabyid,
	        changeSaveBabyStatus: _index.changeSaveBabyStatus,
	        getMap: _index.getMap,
	        getCurrentPower: _index.getCurrentPower,
	        exportMap: _index.exportMap
	    }, dispatch);
	};
	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Index);

/***/ },
/* 11 */
/***/ function(module, exports) {

	'use strict';
	'usr strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var HttpService = exports.HttpService = function () {
	    function HttpService() {
	        _classCallCheck(this, HttpService);
	    }

	    _createClass(HttpService, null, [{
	        key: 'query',
	        value: function query(config) {
	            console.log();
	            config = config || {};
	            var params = HttpService.formatParams(config.data);

	            var request = new XMLHttpRequest();
	            request.onreadystatechange = function () {
	                if (request.readyState == 4) {
	                    var status = request.status;
	                    if (status >= 200 && status < 300) {
	                        var res = JSON.parse(request.responseText);

	                        if (res) {
	                            config.success && config.success(res);
	                        }
	                        // if (res.result == 0) {
	                        //     config.success && config.success(res.data);
	                        // } else if (res.result == 1013) {
	                        //     window.localStorage.referer = window.location.href;
	                        //     window.location.href = 'login.html'
	                        // } else {
	                        //     return config.error && config.error(res.result, res.msg)
	                        // }
	                    } else {
	                        return config.fail && config.fail(status);
	                    }
	                }
	            };
	            request.open('GET', config.url + "?" + params, true);
	            request.send(null);

	            // setTimeout(CheckRequest,"0");
	            //
	            //
	            // function CheckRequest() {
	            //
	            //     console.log(request.readyState);
	            //     if(request.readyState!=4){
	            //         request.abort()
	            //     }
	            // }

	        }
	    }, {
	        key: 'save',
	        value: function save(config) {
	            config = config || {};

	            var params = HttpService.formatParams(config.data);

	            var request = new XMLHttpRequest();
	            request.onreadystatechange = function () {
	                if (request.readyState == 4) {
	                    var status = request.status;
	                    if (status >= 200 && status < 300) {
	                        var res = JSON.parse(request.responseText);

	                        if (res) {
	                            config.success && config.success(res);
	                        }

	                        //  console.log(res.msg)
	                        // // Toast.toaster(res.msg);
	                        //  if (res.result == 0) {
	                        //      config.success && config.success(res.data);
	                        //  } else if (res.result == 1013) {
	                        //      window.localStorage.referer = window.location.href;
	                        //      window.location.href = 'login.html'
	                        //  } else {
	                        //      config.error && config.error(res.result, res.msg)
	                        //  }
	                    } else {
	                        config.fail && config.fail(status);
	                    }
	                }
	            };
	            request.open("POST", config.url, true);
	            request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	            request.send(params);
	        }
	    }, {
	        key: 'formatParams',
	        value: function formatParams(data) {
	            var arr = [];
	            for (var name in data) {
	                arr.push(encodeURIComponent(name) + "=" + encodeURIComponent(data[name]));
	            }
	            arr.push(("v=" + Math.random()).replace(".", ""));
	            return arr.join("&");
	        }
	    }]);

	    return HttpService;
	}();

	var Toast = exports.Toast = function () {
	    function Toast() {
	        _classCallCheck(this, Toast);
	    }

	    _createClass(Toast, null, [{
	        key: 'toast',
	        value: function toast(msg, duration) {
	            duration = isNaN(duration) ? 3000 : duration;
	            var m = document.createElement('div');
	            m.innerHTML = msg;
	            m.style.cssText = "width:20rem;opacity:0.5; height:40px; color:#fff; line-height:40px; " + "text-align:center; border-radius:1rem; position:fixed; bottom:5rem; left:50%; z-index:999999; " + "font-weight:bold; filter: alpha(opacity=80); background: #000;margin-left: -10rem;";
	            document.body.appendChild(m);
	            setTimeout(function () {
	                var d = 0.5;
	                m.style.webkitTransition = '-webkit-transform ' + d + 's ease-in, opacity ' + d + 's ease-in';
	                m.style.opacity = '0';
	                setTimeout(function () {
	                    document.body.removeChild(m);
	                }, d * 1000);
	            }, duration);
	        }
	    }]);

	    return Toast;
	}();

	var GetCurrentDate = exports.GetCurrentDate = function () {
	    function GetCurrentDate() {
	        _classCallCheck(this, GetCurrentDate);
	    }

	    _createClass(GetCurrentDate, null, [{
	        key: 'time',
	        value: function time() {
	            var datetime = new Date();
	            datetime.setDate(datetime.getDate());
	            var year = datetime.getFullYear();
	            var month = datetime.getMonth() + 1 < 10 ? "0" + (datetime.getMonth() + 1) : datetime.getMonth() + 1;
	            var date = datetime.getDate() < 10 ? "0" + datetime.getDate() : datetime.getDate();
	            var hour = datetime.getHours() < 10 ? "0" + datetime.getHours() : datetime.getHours();
	            var minute = datetime.getMinutes() < 10 ? "0" + datetime.getMinutes() : datetime.getMinutes();
	            var second = datetime.getSeconds();
	            return hour + ":" + minute;
	        }
	    }]);

	    return GetCurrentDate;
	}();

	var Md5 = exports.Md5 = function () {
	    function Md5() {
	        _classCallCheck(this, Md5);
	    }

	    _createClass(Md5, null, [{
	        key: 'MD5',
	        value: function MD5(s) {
	            var hexcase = 0;
	            var b64pad = "";
	            var chrsz = 8;
	            return binl2hex(core_md5(str2binl(s), s.length * chrsz));
	            function b64_md5(s) {
	                return binl2b64(core_md5(str2binl(s), s.length * chrsz));
	            }

	            function hex_hmac_md5(key, data) {
	                return binl2hex(core_hmac_md5(key, data));
	            }

	            function b64_hmac_md5(key, data) {
	                return binl2b64(core_hmac_md5(key, data));
	            }

	            function calcMD5(s) {
	                return binl2hex(core_md5(str2binl(s), s.length * chrsz));
	            }

	            function md5_vm_test() {
	                return hex_md5("abc") == "900150983cd24fb0d6963f7d28e17f72";
	            }

	            function core_md5(x, len) {
	                x[len >> 5] |= 0x80 << len % 32;
	                x[(len + 64 >>> 9 << 4) + 14] = len;

	                var a = 1732584193;
	                var b = -271733879;
	                var c = -1732584194;
	                var d = 271733878;

	                for (var i = 0; i < x.length; i += 16) {
	                    var olda = a;
	                    var oldb = b;
	                    var oldc = c;
	                    var oldd = d;
	                    a = md5_ff(a, b, c, d, x[i + 0], 7, -680876936);
	                    d = md5_ff(d, a, b, c, x[i + 1], 12, -389564586);
	                    c = md5_ff(c, d, a, b, x[i + 2], 17, 606105819);
	                    b = md5_ff(b, c, d, a, x[i + 3], 22, -1044525330);
	                    a = md5_ff(a, b, c, d, x[i + 4], 7, -176418897);
	                    d = md5_ff(d, a, b, c, x[i + 5], 12, 1200080426);
	                    c = md5_ff(c, d, a, b, x[i + 6], 17, -1473231341);
	                    b = md5_ff(b, c, d, a, x[i + 7], 22, -45705983);
	                    a = md5_ff(a, b, c, d, x[i + 8], 7, 1770035416);
	                    d = md5_ff(d, a, b, c, x[i + 9], 12, -1958414417);
	                    c = md5_ff(c, d, a, b, x[i + 10], 17, -42063);
	                    b = md5_ff(b, c, d, a, x[i + 11], 22, -1990404162);
	                    a = md5_ff(a, b, c, d, x[i + 12], 7, 1804603682);
	                    d = md5_ff(d, a, b, c, x[i + 13], 12, -40341101);
	                    c = md5_ff(c, d, a, b, x[i + 14], 17, -1502002290);
	                    b = md5_ff(b, c, d, a, x[i + 15], 22, 1236535329);
	                    a = md5_gg(a, b, c, d, x[i + 1], 5, -165796510);
	                    d = md5_gg(d, a, b, c, x[i + 6], 9, -1069501632);
	                    c = md5_gg(c, d, a, b, x[i + 11], 14, 643717713);
	                    b = md5_gg(b, c, d, a, x[i + 0], 20, -373897302);
	                    a = md5_gg(a, b, c, d, x[i + 5], 5, -701558691);
	                    d = md5_gg(d, a, b, c, x[i + 10], 9, 38016083);
	                    c = md5_gg(c, d, a, b, x[i + 15], 14, -660478335);
	                    b = md5_gg(b, c, d, a, x[i + 4], 20, -405537848);
	                    a = md5_gg(a, b, c, d, x[i + 9], 5, 568446438);
	                    d = md5_gg(d, a, b, c, x[i + 14], 9, -1019803690);
	                    c = md5_gg(c, d, a, b, x[i + 3], 14, -187363961);
	                    b = md5_gg(b, c, d, a, x[i + 8], 20, 1163531501);
	                    a = md5_gg(a, b, c, d, x[i + 13], 5, -1444681467);
	                    d = md5_gg(d, a, b, c, x[i + 2], 9, -51403784);
	                    c = md5_gg(c, d, a, b, x[i + 7], 14, 1735328473);
	                    b = md5_gg(b, c, d, a, x[i + 12], 20, -1926607734);
	                    a = md5_hh(a, b, c, d, x[i + 5], 4, -378558);
	                    d = md5_hh(d, a, b, c, x[i + 8], 11, -2022574463);
	                    c = md5_hh(c, d, a, b, x[i + 11], 16, 1839030562);
	                    b = md5_hh(b, c, d, a, x[i + 14], 23, -35309556);
	                    a = md5_hh(a, b, c, d, x[i + 1], 4, -1530992060);
	                    d = md5_hh(d, a, b, c, x[i + 4], 11, 1272893353);
	                    c = md5_hh(c, d, a, b, x[i + 7], 16, -155497632);
	                    b = md5_hh(b, c, d, a, x[i + 10], 23, -1094730640);
	                    a = md5_hh(a, b, c, d, x[i + 13], 4, 681279174);
	                    d = md5_hh(d, a, b, c, x[i + 0], 11, -358537222);
	                    c = md5_hh(c, d, a, b, x[i + 3], 16, -722521979);
	                    b = md5_hh(b, c, d, a, x[i + 6], 23, 76029189);
	                    a = md5_hh(a, b, c, d, x[i + 9], 4, -640364487);
	                    d = md5_hh(d, a, b, c, x[i + 12], 11, -421815835);
	                    c = md5_hh(c, d, a, b, x[i + 15], 16, 530742520);
	                    b = md5_hh(b, c, d, a, x[i + 2], 23, -995338651);
	                    a = md5_ii(a, b, c, d, x[i + 0], 6, -198630844);
	                    d = md5_ii(d, a, b, c, x[i + 7], 10, 1126891415);
	                    c = md5_ii(c, d, a, b, x[i + 14], 15, -1416354905);
	                    b = md5_ii(b, c, d, a, x[i + 5], 21, -57434055);
	                    a = md5_ii(a, b, c, d, x[i + 12], 6, 1700485571);
	                    d = md5_ii(d, a, b, c, x[i + 3], 10, -1894986606);
	                    c = md5_ii(c, d, a, b, x[i + 10], 15, -1051523);
	                    b = md5_ii(b, c, d, a, x[i + 1], 21, -2054922799);
	                    a = md5_ii(a, b, c, d, x[i + 8], 6, 1873313359);
	                    d = md5_ii(d, a, b, c, x[i + 15], 10, -30611744);
	                    c = md5_ii(c, d, a, b, x[i + 6], 15, -1560198380);
	                    b = md5_ii(b, c, d, a, x[i + 13], 21, 1309151649);
	                    a = md5_ii(a, b, c, d, x[i + 4], 6, -145523070);
	                    d = md5_ii(d, a, b, c, x[i + 11], 10, -1120210379);
	                    c = md5_ii(c, d, a, b, x[i + 2], 15, 718787259);
	                    b = md5_ii(b, c, d, a, x[i + 9], 21, -343485551);
	                    a = safe_add(a, olda);
	                    b = safe_add(b, oldb);
	                    c = safe_add(c, oldc);
	                    d = safe_add(d, oldd);
	                }
	                return Array(a, b, c, d);
	            }

	            function md5_cmn(q, a, b, x, s, t) {
	                return safe_add(bit_rol(safe_add(safe_add(a, q), safe_add(x, t)), s), b);
	            }

	            function md5_ff(a, b, c, d, x, s, t) {
	                return md5_cmn(b & c | ~b & d, a, b, x, s, t);
	            }

	            function md5_gg(a, b, c, d, x, s, t) {
	                return md5_cmn(b & d | c & ~d, a, b, x, s, t);
	            }

	            function md5_hh(a, b, c, d, x, s, t) {
	                return md5_cmn(b ^ c ^ d, a, b, x, s, t);
	            }

	            function md5_ii(a, b, c, d, x, s, t) {
	                return md5_cmn(c ^ (b | ~d), a, b, x, s, t);
	            }

	            function core_hmac_md5(key, data) {
	                var bkey = str2binl(key);
	                if (bkey.length > 16) bkey = core_md5(bkey, key.length * chrsz);

	                var ipad = Array(16),
	                    opad = Array(16);
	                for (var i = 0; i < 16; i++) {
	                    ipad[i] = bkey[i] ^ 0x36363636;
	                    opad[i] = bkey[i] ^ 0x5C5C5C5C;
	                }

	                var hash = core_md5(ipad.concat(str2binl(data)), 512 + data.length * chrsz);
	                return core_md5(opad.concat(hash), 512 + 128);
	            }

	            function safe_add(x, y) {
	                var lsw = (x & 0xFFFF) + (y & 0xFFFF);
	                var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
	                return msw << 16 | lsw & 0xFFFF;
	            }

	            function bit_rol(num, cnt) {
	                return num << cnt | num >>> 32 - cnt;
	            }

	            function str2binl(str) {
	                var bin = Array();
	                var mask = (1 << chrsz) - 1;
	                for (var i = 0; i < str.length * chrsz; i += chrsz) {
	                    bin[i >> 5] |= (str.charCodeAt(i / chrsz) & mask) << i % 32;
	                }return bin;
	            }

	            function binl2hex(binarray) {
	                var hex_tab = hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
	                var str = "";
	                for (var i = 0; i < binarray.length * 4; i++) {
	                    str += hex_tab.charAt(binarray[i >> 2] >> i % 4 * 8 + 4 & 0xF) + hex_tab.charAt(binarray[i >> 2] >> i % 4 * 8 & 0xF);
	                }
	                return str;
	            }

	            function binl2b64(binarray) {
	                var tab = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
	                var str = "";
	                for (var i = 0; i < binarray.length * 4; i += 3) {
	                    var triplet = (binarray[i >> 2] >> 8 * (i % 4) & 0xFF) << 16 | (binarray[i + 1 >> 2] >> 8 * ((i + 1) % 4) & 0xFF) << 8 | binarray[i + 2 >> 2] >> 8 * ((i + 2) % 4) & 0xFF;
	                    for (var j = 0; j < 4; j++) {
	                        if (i * 8 + j * 6 > binarray.length * 32) str += b64pad;else str += tab.charAt(triplet >> 6 * (3 - j) & 0x3F);
	                    }
	                }
	                return str;
	            }
	        }
	    }]);

	    return Md5;
	}();

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(5);

	var _index = __webpack_require__(10);

	var _index2 = _interopRequireDefault(_index);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	//首页


	/**
	 * (路由根目录组件，显示当前符合条件的组件)
	 * 
	 * @class Roots
	 * @extends {Component}
	 */
	var Roots = function (_Component) {
	    _inherits(Roots, _Component);

	    function Roots() {
	        _classCallCheck(this, Roots);

	        return _possibleConstructorReturn(this, (Roots.__proto__ || Object.getPrototypeOf(Roots)).apply(this, arguments));
	    }

	    _createClass(Roots, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                null,
	                this.props.children
	            );
	        }
	    }]);

	    return Roots;
	}(_react.Component);

	var history = _reactRouter.hashHistory;

	var RouteConfig = _react2.default.createElement(
	    _reactRouter.Router,
	    { history: history },
	    _react2.default.createElement(
	        _reactRouter.Route,
	        { path: '/', component: Roots },
	        _react2.default.createElement(_reactRouter.Route, { path: '/index', component: _index2.default })
	    )
	);

	exports.default = RouteConfig;

	// var history = process.env.NODE_ENV !== 'production' ? browserHistory : hashHistory;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.config = exports.Tool = undefined;

	var _Config = __webpack_require__(6);

	var config = _interopRequireWildcard(_Config);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	var target = config.target;

	var Tool = {};
	/**
	 * 发送ajax请求和服务器交互
	 * @param {object} mySetting 配置ajax的配置
	 */
	Tool.ajax = function (mySetting) {

	    var setting = {
	        url: window.location.pathname, //默认ajax请求地址
	        async: true, //true。默认设置下，所有请求均为异步请求。如果需要发送同步请求，请将此选项设置为 false
	        type: 'GET', //请求的方式
	        data: {}, //发给服务器的数据
	        dataType: 'json',
	        success: function success(text) {}, //请求成功执行方法
	        error: function error() {} //请求失败执行方法
	    };

	    var aData = []; //存储数据
	    var sData = ''; //拼接数据
	    //属性覆盖
	    for (var attr in mySetting) {
	        setting[attr] = mySetting[attr];
	    }
	    for (var attr in setting.data) {
	        aData.push(attr + '=' + filter(setting.data[attr]));
	    }
	    sData = aData.join('&');
	    setting.type = setting.type.toUpperCase();

	    var xhr = new XMLHttpRequest();
	    try {
	        if (setting.type == 'GET') {
	            //get方式请求
	            sData = setting.url + '?' + sData;
	            xhr.open(setting.type, sData + '&' + new Date().getTime(), setting.async);
	            xhr.send();
	        } else {
	            //post方式请求
	            xhr.open(setting.type, setting.url, setting.async);
	            xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	            xhr.send(sData);
	        }
	    } catch (e) {
	        return httpEnd();
	    }

	    if (setting.async) {
	        xhr.addEventListener('readystatechange', httpEnd, false);
	    } else {
	        httpEnd();
	    }

	    function httpEnd() {
	        if (xhr.readyState == 4) {
	            var head = xhr.getAllResponseHeaders();
	            var response = xhr.responseText;
	            //将服务器返回的数据，转换成json

	            if (/application\/json/.test(head) || setting.dataType === 'json' && /^(\{|\[)([\s\S])*?(\]|\})$/.test(response)) {
	                response = JSON.parse(response);
	            }

	            if (xhr.status == 200) {
	                setting.success(response, setting, xhr);
	            } else {
	                setting.error(setting, xhr);
	            }
	        }
	    }
	    xhr.end = function () {
	        xhr.removeEventListener('readystatechange', httpEnd, false);
	    };

	    function filter(str) {
	        //特殊字符转义
	        str += ''; //隐式转换
	        str = str.replace(/%/g, '%25');
	        str = str.replace(/\+/g, '%2B');
	        str = str.replace(/ /g, '%20');
	        str = str.replace(/\//g, '%2F');
	        str = str.replace(/\?/g, '%3F');
	        str = str.replace(/&/g, '%26');
	        str = str.replace(/\=/g, '%3D');
	        str = str.replace(/#/g, '%23');
	        return str;
	    }
	    return xhr;
	};
	/**
	 * 封装ajax post请求
	 * @param {string} pathname 服务器请求地址
	 * @param {object} data     发送给服务器的数据
	 * @param {function} success  请求成功执行方法
	 * @param {function} error    请求失败执行方法
	 */
	Tool.post = function (pathname, data, success, error) {
	    var setting = {
	        url: target + pathname, //默认ajax请求地址
	        type: 'POST', //请求的方式
	        data: data, //发给服务器的数据
	        success: success || function () {}, //请求成功执行方法
	        error: error || function () {} //请求失败执行方法
	    };
	    return Tool.ajax(setting);
	};
	/**
	 * 封装ajax get请求
	 * @param {string} pathname 服务器请求地址
	 * @param {object} data     发送给服务器的数据
	 * @param {function} success  请求成功执行方法
	 * @param {function} error    请求失败执行方法
	 */
	Tool.get = function (pathname, data, success, error) {
	    var setting = {
	        url: target + pathname, //默认ajax请求地址
	        type: 'GET', //请求的方式
	        data: data, //发给服务器的数据
	        success: success || function () {}, //请求成功执行方法
	        error: error || function () {} //请求失败执行方法
	    };
	    return Tool.ajax(setting);
	};

	/**
	 * 格式化时间
	 *
	 * @param {any} t
	 * @returns
	 */
	Tool.formatDate = function (str) {
	    var date = new Date(str);
	    var time = new Date().getTime() - date.getTime(); //现在的时间-传入的时间 = 相差的时间（单位 = 毫秒）
	    if (time < 0) {
	        return '';
	    } else if (time / 1000 < 60) {
	        return '刚刚';
	    } else if (time / 60000 < 60) {
	        return parseInt(time / 60000) + '分钟前';
	    } else if (time / 3600000 < 24) {
	        return parseInt(time / 3600000) + '小时前';
	    } else if (time / 86400000 < 31) {
	        return parseInt(time / 86400000) + '天前';
	    } else if (time / 2592000000 < 12) {
	        return parseInt(time / 2592000000) + '月前';
	    } else {
	        return parseInt(time / 31536000000) + '年前';
	    }
	};

	/**
	 * 本地数据存储或读取
	 *
	 * @param {any} key
	 * @param {any} value
	 * @returns
	 */
	Tool.localItem = function (key, value) {
	    if (arguments.length == 1) {
	        return localStorage.getItem(key);
	    } else {
	        return localStorage.setItem(key, value);
	    }
	};

	/**
	 * 删除本地数据
	 *
	 * @param {any} key
	 * @returns
	 */
	Tool.removeLocalItem = function (key) {
	    if (key) {
	        return localStorage.removeItem(key);
	    }
	    return localStorage.removeItem();
	};

	Tool.assign = function () {
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	    }

	    /*if(Object.assign){
	     return Object.assign({},...args)
	     }*/
	    var from = void 0,
	        target = args[0] || {},
	        length = args.length;
	    for (var i = 0; i < length; i++) {
	        if ((from = args[i]) != null) {
	            for (var key in from) {
	                target[key] = from[key];
	            }
	        }
	    }
	    return target;
	};

	exports.Tool = Tool;
	exports.config = config;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by ChinaHp on 2016/8/28.
	 */
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.changeSaveBabyStatus = changeSaveBabyStatus;
	exports.change = change;
	exports.getUsers = getUsers;
	exports.setSnackbar = setSnackbar;
	exports.getChecked = getChecked;
	exports.getSafeRegions1 = getSafeRegions1;
	exports.A = A;
	exports.doLogin = doLogin;
	exports.getMap = getMap;
	exports.getOneBabyid = getOneBabyid;
	exports.getDeviceList = getDeviceList;
	exports.getCurrentPower = getCurrentPower;
	exports.getGuardianss = getGuardianss;
	exports.scanDevice = scanDevice;
	exports.getSafeRegions = getSafeRegions;

	var _Http = __webpack_require__(11);

	var _ActionTypes = __webpack_require__(1);

	var types = _interopRequireWildcard(_ActionTypes);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	var dataUser = {
	    "users": [{
	        "id": 1,
	        "name": "小撸1",
	        'email': '11@qq.com'
	    }, {
	        "id": 2,
	        "name": "小撸2",
	        'email': '22@qq.com'
	    }, {
	        "id": 3,
	        "name": "小撸3",
	        'email': '33@qq.com'
	    }]
	};

	function fetchUsers() {
	    return dataUser;
	}

	function get() {

	    var dataUser = {
	        "token": [{
	            "id": 1,
	            "name": "2222",
	            'email': '333'
	        }]
	    };
	    return dataUser;
	}

	function setUsers(data) {
	    return {
	        type: types.SET_USER,
	        data: data
	    };
	}

	function getToken(res) {
	    return {
	        type: types.GET_TOKEN,
	        res: res
	    };
	}

	function GetDeviceList(res) {
	    return {
	        type: types.GetDeviceList,
	        res: res
	    };
	}

	function GetCurrentPower(res) {
	    return {
	        type: types.GetCurrentPower,
	        res: res
	    };
	}

	function Change(res) {
	    return {
	        type: types.Change,
	        res: res
	    };
	}

	function GetCurrentTrack(res) {
	    return {
	        type: types.GetCurrentTrack,
	        res: res
	    };
	}

	function AddDevice(res) {
	    return {
	        type: types.AddDevice,
	        res: res
	    };
	}
	function GetGuardians(res) {
	    return {
	        type: types.GetGuardians,
	        res: res
	    };
	}
	function GetGuardianss(res) {
	    return {
	        type: types.GetGuardianss,
	        res: res
	    };
	}

	function ChangeDevice(res) {
	    return {
	        type: types.ChangeDevice,
	        res: res
	    };
	}

	function GetAddr(msg) {
	    return {
	        type: types.GetAddr,
	        msg: msg
	    };
	}

	function isLong(msg) {
	    return {
	        type: types.isLogin,
	        msg: msg
	    };
	}

	function exportMap(res) {
	    return {
	        type: types.exportMap,
	        res: res
	    };
	}

	function changeSaveBabyStatus(msg) {
	    return function (dispatch, getState) {
	        //dispatch(ChangeDevice(data));
	        dispatch(A(msg));
	    };
	}

	function change(res) {

	    // window.localStorage.babyid = res.babyid;

	    var data = {
	        babyName: res.babyname,
	        babyid: res.babyid,
	        babytelephone: res.babytelephone,
	        headimg: res.headimg
	    };
	    console.log(data);

	    return function (dispatch, getState) {
	        //dispatch(ChangeDevice(data));
	        dispatch(Change(data));
	        dispatch(getCurrentPower(data.babyid));
	        dispatch(getCurrentTrack(data.babyid));
	    };
	}

	function getUsers() {
	    return function (dispatch) {

	        dispatch(setUsers(fetchUsers()));
	    };
	}
	function setSnackbar(message) {
	    return {
	        type: types.SET_SNACKBAR,
	        message: message
	    };
	}

	function getChecked(msg) {
	    return {
	        type: types.GetChecked,
	        msg: msg
	    };
	}

	function getSafeRegions1(res) {
	    return {
	        type: types.GetSafeRegions1,
	        res: res
	    };
	}

	function A(msg) {
	    return {
	        type: types.aaa,
	        msg: msg
	    };
	}

	/**
	 * login
	 * @param sid
	 * @returns {Function}
	 */
	function doLogin(sid) {
	    return function (dispatch) {
	        return _Http.HttpService.query({
	            url: '/apph5/user/login',
	            data: { sid: sid },
	            success: function success(res) {
	                if (res.code == '30010') {
	                    //dispatch(getToken(res.data));
	                    window.localStorage.appToken = res.data.token;
	                    window.localStorage.userid = res.data.userid;
	                    dispatch(getDeviceList());
	                } else {
	                    dispatch(isLong(false));
	                }
	            }
	        });
	    };
	}

	/**
	 * 获取位置
	 * @param babyid
	 * @returns {Function}
	 */
	function getMap(babyid) {
	    return function (dispatch) {
	        return _Http.HttpService.query({
	            url: '/app/map/getCurrentTrack',

	            data: { token: localStorage.appToken, babyid: babyid },

	            success: function success(res) {

	                console.log('来了');

	                console.log(res);
	                if (res.code == '10059') {

	                    var data = {

	                        lng: 0,
	                        lat: 0

	                    };

	                    dispatch(init(116.397428, 39.90923));

	                    //  dispatch(getAddree(data.lng, data.lat));

	                } else {

	                    dispatch(init(res.data.lng - 0.0065, res.data.lat - 0.0060));
	                }
	            }

	        });
	    };
	}

	/**
	 * 选取成员关系
	 * @returns {Function}
	 */
	function getOneBabyid() {
	    return function (dispatch) {
	        return _Http.HttpService.query({
	            url: '/app/object/getBabys',
	            data: { token: localStorage.appToken },
	            success: function success(res) {

	                console.log(res);

	                if (res.code == 10020) {

	                    dispatch(getA(res.data[0].babyid, res.data));

	                    dispatch(getCurrentPower(res.data[0].babyid));

	                    dispatch(getCurrentTrack(res.data[0].babyid));

	                    dispatch(getChecked('false'));

	                    dispatch(GetDeviceList(res.data));
	                } else {

	                    dispatch(getChecked('true'));
	                }
	            }
	        });
	    };
	}

	//获取设备list
	function getDeviceList() {

	    return function (dispatch) {
	        return _Http.HttpService.query({
	            url: '/app/object/getBabys',
	            data: { token: localStorage.appToken },
	            success: function success(res) {

	                console.log(res);

	                if (res.code == 10020) {

	                    //dispatch(getChecked('false'));


	                    dispatch(GetDeviceList(res.data));

	                    dispatch(getCurrentPower(res.data[0].babyid));

	                    //window.localStorage.babyid = res.data[0].babyid;

	                    //alert(localStorage.babyid)

	                    dispatch(getChecked('false'));

	                    dispatch(getCurrentTrack(res.data[0].babyid));
	                } else {

	                    dispatch(getChecked('true'));
	                }
	            }
	        });
	    };
	}

	/**
	 * 是否含有家长
	 * @param babyid
	 * @param data
	 * @returns {Function}
	 */

	function getA(babyid, data) {
	    return function (dispatch) {
	        return _Http.HttpService.query({
	            url: '/app/object/getGuardians',
	            data: {
	                token: localStorage.appToken,
	                babyid: babyid
	            },
	            success: function success(res) {
	                console.log(res);

	                if (res.code == '10068') {

	                    //获取监护人
	                    dispatch(_getGuardians(babyid));

	                    var getGuardiansList = res.data;

	                    for (var a in getGuardiansList) {
	                        if (getGuardiansList[a].familystatus == '家长') {

	                            //宝贝列表
	                            dispatch(GetDeviceList(data));

	                            // dispatch(GetDeviceList(data));
	                            dispatch(A(true));

	                            break;
	                        } else {
	                            dispatch(A(false));
	                        }
	                    }
	                }
	            }
	        });
	    };
	}

	//获取设备电量
	function getCurrentPower(babyid) {
	    return function (dispatch) {

	        return _Http.HttpService.query({
	            url: '/app/alarm/getCurrentPower',
	            data: { token: localStorage.appToken, babyid: babyid },
	            success: function success(res) {

	                console.log(res);

	                //dispatch(_getGuardians(babyid));


	                if (res.code == 10011) {
	                    //$scope.powervalue = 0;
	                    dispatch(GetCurrentPower('0'));

	                    window.localStorage.powerValue = '0';
	                } else {

	                    dispatch(GetCurrentPower(res.data.powerValue));

	                    window.localStorage.powerValue = res.data.powerValue;
	                }
	            }
	        });
	    };
	}

	/**
	 * 获取监护人
	 * @param babyid
	 * @returns {Function}
	 */
	function getGuardianss(babyid) {
	    return function (dispatch) {
	        return _Http.HttpService.query({
	            url: '/app/object/getGuardians',
	            data: {
	                token: localStorage.appToken,
	                babyid: babyid
	            },
	            success: function success(res) {
	                console.log(res);

	                if (res.code == '10068') {

	                    console.log(res.data);

	                    var checked = false;

	                    var getGuardiansList = res.data;

	                    for (var y in list) {

	                        var ab = 'isOpen';
	                        var status = 'check';
	                        var id = 'guardianid';
	                        list[y][status] = false;
	                        list[y][id] = '';
	                        for (var x in getGuardiansList) {

	                            if (getGuardiansList[x].familystatus == list[y].familystatus) {
	                                list[y][status] = true;
	                                list[y][id] = getGuardiansList[x].guardianid;
	                                console.log(list);

	                                break;
	                            }
	                        }
	                    }

	                    dispatch(GetGuardianss(list));
	                }
	            }
	        });
	    };
	}

	/**
	 * 获取监护人
	 * @param babyid
	 * @returns {Function}
	 * @private
	 */
	function _getGuardians(babyid) {

	    return function (dispatch) {
	        return _Http.HttpService.query({
	            url: '/app/object/getGuardians',
	            data: {
	                token: localStorage.appToken,
	                babyid: babyid
	            },
	            success: function success(res) {
	                console.log(res);

	                if (res.code == '10068') {

	                    console.log(res.data);

	                    console.log('++' + list);

	                    var getGuardiansList = res.data;

	                    for (var y in list) {

	                        var ab = 'isOpen';
	                        var status = 'check';
	                        var id = 'guardianid';
	                        list[y][status] = false;
	                        list[y][id] = '';
	                        for (var x in getGuardiansList) {

	                            if (getGuardiansList[x].familystatus == list[y].familystatus) {
	                                list[y][status] = true;
	                                list[y][id] = getGuardiansList[x].guardianid;
	                                console.log(list);

	                                break;
	                            }
	                        }
	                    }

	                    dispatch(GetGuardians(list));
	                }
	            }
	        });
	    };
	}

	//获取设备坐标
	function getCurrentTrack(babyid) {
	    return function (dispatch) {
	        return _Http.HttpService.query({
	            url: '/app/map/getCurrentTrack',

	            data: { token: localStorage.appToken, babyid: babyid },

	            success: function success(res) {

	                console.log(res);
	                if (res.code == '10059') {

	                    var data = {

	                        lng: 0,
	                        lat: 0

	                    };
	                    dispatch(GetCurrentTrack(data));
	                    dispatch(init(116.397428, 39.90923));

	                    //  dispatch(getAddree(data.lng, data.lat));

	                } else {
	                    dispatch(GetCurrentTrack(res.data));
	                    //dispatch(init(res.data.lng,res.data.lat))
	                    dispatch(init(res.data.lng - 0.0065, res.data.lat - 0.0060));
	                    dispatch(getAddree(res.data.lng - 0.0065, res.data.lat - 0.0060));
	                }
	            }

	        });
	    };
	}

	/**
	 * 获取地理
	 * @param lng
	 * @param lat
	 * @returns {Function}
	 */
	function getAddree(lng, lat) {
	    return function (dispatch) {
	        console.log(lng);

	        var lnglatXY = [lng, lat]; //已知点坐标


	        var geocoder = new AMap.Geocoder({
	            radius: 1000,
	            extensions: "all"
	        });
	        geocoder.getAddress(lnglatXY, function (status, result) {
	            if (status === 'complete' && result.info === 'OK') {

	                console.log(result);

	                var address = result.regeocode.formattedAddress; //返回地址描述
	                dispatch(GetAddr(address));
	            }
	        });
	    };
	}

	/**
	 * 初始化地图
	 * @param lng
	 * @param lat
	 * @returns {Function}
	 */
	function init(lng, lat) {
	    return function (dispatch) {

	        var map, marker;
	        map = new AMap.Map('container', {
	            zoom: 15,
	            center: [lng, lat],
	            resizeEnable: true
	        });

	        dispatch(exportMap(map));

	        if (lng == 116.397428 && lat == 39.90923) {
	            return;
	        }

	        marker = new AMap.Marker({
	            map: map,
	            icon: dian,
	            // icon: new AMap.Icon({  //复杂图标
	            //     // size: new AMap.Size(27, 36),//图标大小
	            //     //  image: '../../src/img/dian.png', //大图地址
	            //   //  imageOffset: new AMap.Pixel(-28, 0)//相对于大图的取图位置
	            // }),
	            position: [lng, lat]
	        });

	        marker.setMap(map);

	        var circle = new AMap.Circle({
	            center: new AMap.LngLat(lng, lat), // 圆心位置
	            radius: 200, //半径
	            strokeColor: "#00b4ed", //线颜色
	            strokeOpacity: 1, //线透明度
	            fillColor: "#00b4ed", //填充颜色
	            strokeWeight: 1, //线宽
	            fillOpacity: 0.2 //填充透明度
	        });
	        circle.setMap(map);
	    };
	}

	function scanDevice(mdtcode) {
	    return function (dispatch) {

	        return _Http.HttpService.query({
	            url: '/app/device/scanDevice',

	            data: { token: localStorage.appToken, mdtcode: mdtcode, mdtid: mdtcode },

	            success: function success(res) {

	                if (res.code == 100783) {

	                    var telephone = res.data.telephone;
	                    var mdtid = res.data.mdtid;

	                    window.location.href = '/#Gotoactive/' + telephone + '/' + mdtid + '';
	                } else if (res.code == 10078) {

	                    var admintelephone = res.data.admintelephone;
	                    var _mdtid = res.data.mdtid;
	                    var deviceid = res.data.deviceid;
	                    var _telephone = res.data.telephone;

	                    window.location.href = '/#VerifyText/' + admintelephone + '/' + _mdtid + '/' + deviceid + '/' + _telephone + '';
	                } else {

	                    //window.location.href = '/#Gotoactive/13657086451/111';
	                    _Http.Toast.toast(res.msg, 3000);
	                }
	            }
	        });
	    };
	}

	function getSafeRegions(babyid) {
	    return function (dispatch) {
	        return _Http.HttpService.query({
	            url: '/app/map/getSafeRegions',
	            data: {
	                token: localStorage.appToken,
	                babyid: babyid,
	                pageindex: 1,
	                pagesize: 50
	            },
	            success: function success(res) {

	                if (res.code == '10048') {

	                    // this.setState({
	                    //     list: res.data.safeRegions,
	                    //
	                    // });


	                    console.log('------' + res.data.safeRegions);

	                    dispatch(getSafeRegions1(res.data.safeRegions));

	                    // this.props._list=res.data.safeRegions;


	                    // /    localStorage.setItem("json_data",JSON.stringify(res.data.safeRegions));

	                    //this.S_init(this.state.list);

	                    // this.inits();

	                }
	            }
	        });
	    };
	}

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(19);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _reactRouter = __webpack_require__(5);

	var _reactRedux = __webpack_require__(4);

	var _store = __webpack_require__(8);

	var _store2 = _interopRequireDefault(_store);

	var _Route = __webpack_require__(12);

	var _Route2 = _interopRequireDefault(_Route);

	__webpack_require__(7);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var store = (0, _store2.default)(); /**
	                                     * Created by ChinaHp on 2016/8/11.
	                                     */

	//路由配置

	(0, _reactDom.render)(_react2.default.createElement(
	    _reactRedux.Provider,
	    { store: store },
	    _react2.default.createElement(_reactRouter.Router, { routes: _Route2.default, history: _reactRouter.hashHistory })
	), document.getElementById('content'));

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by ChinaHp on 2016/8/28.
	 */
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _redux = __webpack_require__(3);

	var _user = __webpack_require__(18);

	var _user2 = _interopRequireDefault(_user);

	var _safetyarea = __webpack_require__(17);

	var _safetyarea2 = _interopRequireDefault(_safetyarea);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var rootReducer = (0, _redux.combineReducers)({
	  login: _user2.default, safe: _safetyarea2.default
	});
	exports.default = rootReducer;

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	'usr strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = safe;

	var _ActionTypes = __webpack_require__(1);

	var types = _interopRequireWildcard(_ActionTypes);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	var initialState = {

	    list: []

	};
	function safe() {
	    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	    var action = arguments[1];

	    switch (action.type) {
	        case types.Safetyarea:
	            return {
	                list: action.res
	            };

	        case types.ChangeDevice:

	        default:
	            return state;

	    }
	}

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	'usr strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = login;

	var _ActionTypes = __webpack_require__(1);

	var types = _interopRequireWildcard(_ActionTypes);

	var _Tool = __webpack_require__(13);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	var initialState = {
	    users: [],
	    user: {},
	    token: [],
	    list: [],
	    babyName: '',
	    babyid: '',
	    babytelephone: '',
	    headimg: '',
	    values: '',
	    lng: '',
	    lat: '',
	    getGuardiansList: [],
	    getGuardiansLists: [],

	    gpstime: '',

	    checked: 'false',

	    abc: false,
	    addr: '',
	    isLong: [],
	    datasource: [],
	    GetSafeRegions: [],
	    exportMap: []

	};
	function login() {
	    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	    var action = arguments[1];

	    switch (action.type) {
	        case types.SET_USER:
	            return {
	                users: action.data.users
	            };

	        case types.GET_TOKEN:
	            return {
	                token: action.res.token
	            };

	        case types.GetDeviceList:

	            return _Tool.Tool.assign({}, state, {
	                list: action.res,
	                babyName: action.res[0].babyname,
	                babyid: action.res[0].babyid,
	                babytelephone: action.res[0].babytelephone,
	                headimg: action.res[0].headimg,
	                getGuardiansList: [],
	                addr: ''
	            });

	        case types.GetChecked:

	            return _Tool.Tool.assign({}, state, {
	                checked: action.msg,
	                getGuardiansList: [],
	                addr: ''

	            });
	        case types.Change:
	            return _Tool.Tool.assign({}, state, {
	                babyName: action.res.babyName,
	                babyid: action.res.babyid,
	                babytelephone: action.res.babytelephone,
	                headimg: action.res.headimg,
	                getGuardiansList: [],
	                addr: ''
	            });

	        case types.GetGuardians:
	            return _Tool.Tool.assign({}, state, {
	                getGuardiansList: action.res
	            });

	        case types.GetGuardianss:
	            return _Tool.Tool.assign({}, state, {
	                getGuardiansLists: action.res
	            });
	        //     return {
	        //         getGuardiansList:action.res
	        //     };

	        case types.GetCurrentTrack:
	            return _Tool.Tool.assign({}, state, {
	                lng: action.res.lng,
	                lat: action.res.lat,
	                gpstime: action.res.gpstime,
	                addr: '',
	                datasource: action.res.datasource

	            });
	        case types.GetAddr:
	            return _Tool.Tool.assign({}, state, {
	                addr: action.msg
	            });
	        case types.aaa:
	            return _Tool.Tool.assign({}, state, {
	                abc: action.msg
	            });
	        case types.isLogin:
	            return _Tool.Tool.assign({}, state, {
	                isLogin: action.msg
	            });

	        case types.GetCurrentPower:
	            return _Tool.Tool.assign({}, state, {
	                values: action.res,
	                getGuardiansList: [],
	                addr: ''
	            });
	        case types.GetSafeRegions1:
	            return _Tool.Tool.assign({}, state, {
	                GetSafeRegions: action.res
	            });
	        case types.exportMap:
	            return _Tool.Tool.assign({}, state, {
	                exportMap: action.res
	            });

	        // case types.ADD_USER :
	        //     return Object.assign({},state,{
	        //         users: [
	        //             action.user,
	        //             ...state.users
	        //         ],
	        //         postForm: Object.assign({}, initialState.user) // clear form
	        //     });
	        default:
	            return state;
	    }
	}

/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = ReactDOM;

/***/ }
]);