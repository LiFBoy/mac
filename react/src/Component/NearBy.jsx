'usr strict';

import React, {Component, PropTypes} from 'react';


import {doLogin, change, getOneBabyid, changeSaveBabyStatus, getMap, getCurrentPower, exportMap} from '../action/index'

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {Router, Route, IndexRoute, browserHistory, Link} from 'react-router';

import Foot from './Foot';


import like from '../../src/images/index/like.png'
import alms from '../../src/images/index/alms.png'





class NearBy extends React.Component {
    constructor() {
        super();

        this.state = {
            swiper: []
        }

    }

    render(){

        return (
            <div className="app-container near-by">

                <div className="step">
                    <div className="s-flex1" style={{flexWrap:'wrap'}}>
                        <div className="near-by-content">
                            <div className="near-by-img"><img className="app-wh100-all" src="http://img.taopic.com/uploads/allimg/120222/34250-12022209414087.jpg"/></div>
                            <div className="detail step app-padding-lr24 app-white">
                                <div className="s-flex1 app-333-font28">灵隐寺</div>
                                <div className="s-flex1 s-j-end app-333-font24">20km</div>

                            </div>
                        </div>
                        <div className="near-by-content">
                            <div className="near-by-img"><img className="app-wh100-all" src="http://img.taopic.com/uploads/allimg/120222/34250-12022209414087.jpg"/></div>
                            <div className="detail step app-padding-lr24 app-white">
                                <div className="s-flex1 app-333-font28">灵隐寺</div>
                                <div className="s-flex1 s-j-end app-333-font24">20km</div>

                            </div>
                        </div>
                        <div className="near-by-content">
                            <div className="near-by-img"><img className="app-wh100-all" src="http://img.taopic.com/uploads/allimg/120222/34250-12022209414087.jpg"/></div>
                            <div className="detail step app-padding-lr24 app-white">
                                <div className="s-flex1 app-333-font28">灵隐寺</div>
                                <div className="s-flex1 s-j-end app-333-font24"> 20km</div>

                            </div>
                        </div>
                    </div>

                </div>

            </div>
        )
    }
}

export default NearBy