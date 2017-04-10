/**
 * Created by ChinaHp on 2016/8/11.
 */
import React, {Component, PropTypes} from 'react';
import ReactDOM, {render} from 'react-dom';
import {Router,hashHistory,browserHistory} from 'react-router';


import routes from './Route'; //路由配置



import './auto-set-rem'
// import './less/my.bootstrap.min.css'
import './less/common.less'
import './less/my.less'
import './less/lCalendar.css'


import HttpService from './utils';
import LocalStorage from './LocalStorage';



render(

        <Router routes={routes} history={hashHistory} />

    ,document.getElementById('content'));