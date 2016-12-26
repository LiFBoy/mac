webpackJsonp([1,0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(13);


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = Redux;

/***/ },
/* 3 */
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

	var _redux = __webpack_require__(2);

	var _reduxThunk = __webpack_require__(9);

	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

	var _reducers = __webpack_require__(14);

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

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(4);

	var _redux = __webpack_require__(2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Index = function (_React$Component) {
	    _inherits(Index, _React$Component);

	    function Index(props) {
	        _classCallCheck(this, Index);

	        var _this = _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).call(this, props));

	        _this.state = {};

	        return _this;
	    }

	    _createClass(Index, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                null,
	                'sb'
	            );
	        }
	    }]);

	    return Index;
	}(_react2.default.Component);

	var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	    return (0, _redux.bindActionCreators)({}, dispatch);
	};
	exports.default = (0, _reactRedux.connect)(mapDispatchToProps)(Index);

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

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
/* 12 */
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
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(17);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _reactRouter = __webpack_require__(5);

	var _reactRedux = __webpack_require__(4);

	var _store = __webpack_require__(8);

	var _store2 = _interopRequireDefault(_store);

	var _Route = __webpack_require__(11);

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
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by ChinaHp on 2016/8/28.
	 */
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _redux = __webpack_require__(2);

	var _user = __webpack_require__(16);

	var _user2 = _interopRequireDefault(_user);

	var _safetyarea = __webpack_require__(15);

	var _safetyarea2 = _interopRequireDefault(_safetyarea);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var rootReducer = (0, _redux.combineReducers)({
	  login: _user2.default, safe: _safetyarea2.default
	});
	exports.default = rootReducer;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	'usr strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = safe;

	var _ActionTypes = __webpack_require__(3);

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
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	'usr strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = login;

	var _ActionTypes = __webpack_require__(3);

	var types = _interopRequireWildcard(_ActionTypes);

	var _Tool = __webpack_require__(12);

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
/* 17 */
/***/ function(module, exports) {

	module.exports = ReactDOM;

/***/ }
]);