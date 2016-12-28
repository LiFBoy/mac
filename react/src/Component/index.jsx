'usr strict';

import React, {Component, PropTypes} from 'react';


import {doLogin, change, getOneBabyid, changeSaveBabyStatus, getMap, getCurrentPower, exportMap} from '../action/index'

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {Router, Route, IndexRoute, browserHistory, Link} from 'react-router';

import Foot from './Foot';


import like from '../../src/images/index/like.png'
import alms from '../../src/images/index/alms.png'



class Index extends React.Component {
    constructor() {
        super();
    }

    render(){
        return (
            <div className="app-container">

                <div className="index-container">

                    <div className="swipe-content">

                    </div>
                    <div className="app-margin-tb20"></div>
                    <Link to="/TempleDetail">
                        <div className="temple-content">
                            <div className="con-img">
                                <div className="con-bar step">

                                    <div className="s-flex1 bar-left">杭州灵隐寺</div>
                                    <div className="s-flex1 s-j-end">

                                        <img className="img" src={alms}/>
                                        <div className="number padding-right-32">50562</div>



                                        <img className="img" src={like}/>
                                        <div className="number">789</div>

                                    </div>
                                    {/*<div className="s-flex2 s-j-end">*/}
                                    {/*<img className="img" src={like}/>*/}
                                    {/*<div className="number">789</div>*/}
                                    {/*</div>*/}

                                </div>
                            </div>

                            <div className="con-content step">
                                <div className="s-flex1 app-333-font28">灵隐寺最新消息</div>
                                <div className="s-flex1 s-j-end app-333-font24">
                                    <spn>
                                        2220
                                    </spn>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <div className="app-margin-tb20"></div>
                    <div className="temple-content">
                        <div className="con-img">
                            <div className="con-bar step">

                                <div className="s-flex1 bar-left">杭州灵隐寺</div>
                                <div className="s-flex1 s-j-end">

                                    <img className="img" src={alms}/>
                                    <div className="number padding-right-32">50562</div>



                                    <img className="img" src={like}/>
                                    <div className="number">789</div>

                                </div>
                                {/*<div className="s-flex2 s-j-end">*/}
                                {/*<img className="img" src={like}/>*/}
                                {/*<div className="number">789</div>*/}
                                {/*</div>*/}

                            </div>
                        </div>

                        <div className="con-content step">
                            <div className="s-flex1 app-333-font28">灵隐寺最新消息</div>
                            <div className="s-flex1 s-j-end app-333-font24">
                                <spn>
                                    2220
                                </spn>
                            </div>
                        </div>
                    </div>
                    <div className="app-margin-tb20"></div>
                    <div className="temple-content">
                        <div className="con-img">
                            <div className="con-bar step">

                                <div className="s-flex1 bar-left">杭州灵隐寺</div>
                                <div className="s-flex1 s-j-end">

                                    <img className="img" src={alms}/>
                                    <div className="number padding-right-32">50562</div>



                                    <img className="img" src={like}/>
                                    <div className="number">789</div>

                                </div>
                                {/*<div className="s-flex2 s-j-end">*/}
                                {/*<img className="img" src={like}/>*/}
                                {/*<div className="number">789</div>*/}
                                {/*</div>*/}

                            </div>
                        </div>

                        <div className="con-content step">
                            <div className="s-flex1 app-333-font28">灵隐寺最新消息</div>
                            <div className="s-flex1 s-j-end app-333-font24">
                                <spn>
                                    2220
                                </spn>
                            </div>
                        </div>
                    </div>
                    <div className="app-margin-tb20"></div>
                </div>

                <Foot type="1"></Foot>
            </div>
        )
    }
}




const mapStateToProps = state => {
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
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        doLogin: doLogin,
        change: change,
        getOneBabyid: getOneBabyid,
        changeSaveBabyStatus: changeSaveBabyStatus,
        getMap: getMap,
        getCurrentPower: getCurrentPower,
        exportMap: exportMap,
    }, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(Index);