'usr strict';

import React, {Component, PropTypes} from 'react';


import {doLogin, change, getOneBabyid, changeSaveBabyStatus, getMap, getCurrentPower, exportMap} from '../action/index'

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {Router, Route, IndexRoute, browserHistory, Link} from 'react-router';

import Foot from './Foot';


import like from '../../src/images/index/like.png'
import alms from '../../src/images/index/alms.png'





class IndexFocus extends React.Component {
    constructor() {
        super();

        this.state={
            swiper:[]
        }

    }

    componentDidMount(){


        this.initBannerSwiper();


    }

    initBannerSwiper () {
        //下面是在table render完成后执行的js
        this.state.swiper = new Swiper('.swiper-container', {
            pagination: '.swiper-pagination',
            paginationClickable: true,
            //loop: true,
            autoplay: 5000
        });
        //初始化banner图的swiper
    };


    render(){
        return (
            <div className="app-container">

                <div className="index-container">
                    <Link to="/TempleDetail" className="app-a">
                        <div className="temple-content">
                            <div className="con-img">
                                <div className="img-content"><img className="app-wh100-all" src="http://scimg.jb51.net/allimg/140708/11-140FQ53531Q9.jpg"/></div>
                                <div className="con-bar step">


                                </div>
                                <div className="con-bar-content step">
                                    <div className="s-flex1 bar-left">杭州灵隐寺</div>
                                    <div className="s-flex1 s-j-end">

                                        <img className="img" src={alms}/>
                                        <div className="number padding-right-32">3333</div>



                                        <img className="img" src={like}/>
                                        <div className="number">33333</div>

                                    </div>
                                </div>
                            </div>

                            <div className="con-content step">
                                <div className="s-flex1 app-333-font28">灵隐寺最新消息</div>
                                <div className="s-flex1 s-j-end app-666-font24">
                                    <spn>
                                        20km
                                    </spn>
                                </div>
                            </div>
                        </div>
                    </Link>


                    <div className="app-margin-tb20"></div>
                    <Link to="/TempleDetail" className="app-a">
                        <div className="temple-content">
                            <div className="con-img">
                                <div className="img-content"><img className="app-wh100-all"  src="http://img0.imgtn.bdimg.com/it/u=2152422253,1846971893&fm=23&gp=0.jpg"/></div>
                                <div className="con-bar step">


                                </div>
                                <div className="con-bar-content step">
                                    <div className="s-flex1 bar-left">杭州灵隐寺</div>
                                    <div className="s-flex1 s-j-end">

                                        <img className="img" src={alms}/>
                                        <div className="number padding-right-32"></div>



                                        <img className="img" src={like}/>
                                        <div className="number"></div>

                                    </div>
                                </div>
                            </div>

                            <div className="con-content step">
                                <div className="s-flex1 app-333-font28">灵隐寺最新消息</div>
                                <div className="s-flex1 s-j-end app-666-font24">
                                    <spn>
                                        20km
                                    </spn>
                                </div>
                            </div>
                        </div>
                    </Link>


                    <div className="app-margin-tb20"></div>
                </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(IndexFocus);