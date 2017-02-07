'usr strict';

import React, {Component, PropTypes} from 'react';


import {doLogin, change, getOneBabyid, changeSaveBabyStatus, getMap, getCurrentPower, exportMap} from '../action/index'

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {Router, Route, IndexRoute, browserHistory, Link} from 'react-router';

import Foot from './Foot';


import like from '../../src/images/index/like.png'
import alms from '../../src/images/index/alms.png'
import {HttpService} from '../Http'


class Index extends React.Component {
    constructor() {
        super();

        this.state = {
            swiper: [],
            temples:[]
        }

    }

    componentWillMount() {

        this.hot();

    }


    componentDidMount() {


        this.initBannerSwiper();


    }


    hot() {

        HttpService.query({
            url: '/v1/temple/get/hot/temples',
        }).then((res) => {
            console.log(res);
            this.setState({
                temples:res.temples
            })
        }, (error) => {
            console.log(error)
        });
    }

    initBannerSwiper() {
        //下面是在table render完成后执行的js
        this.state.swiper = new Swiper('.swiper-container', {
            pagination: '.swiper-pagination',
            paginationClickable: true,
            //loop: true,
            autoplay: 5000
        });
        //初始化banner图的swiper
    };

    render() {

        let {temples} = this.state;

        console.log(temples);
        return (
            <div className="app-container">

                <div className="index-container">
                    <div className="banner">
                        <div className="swiper-container">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                    <img src="http://img0.imgtn.bdimg.com/it/u=2152422253,1846971893&fm=23&gp=0.jpg"/>
                                </div>
                                <div className="swiper-slide">
                                    <img src="http://pic6.huitu.com/res/20130116/84481_20130116142820494200_1.jpg"/>
                                </div>
                                <div className="swiper-slide">
                                    <img src="http://img.taopic.com/uploads/allimg/120222/34250-12022209414087.jpg"/>
                                </div>
                            </div>

                            <div className="swiper-pagination"></div>
                        </div>
                    </div>




                    <div className="app-margin-tb20"></div>

                    {
                        temples.map((json,index)=>{
                            return (
                                <Link to="/TempleDetail" className="app-a" key={index}>
                                    <div className="temple-content">
                                        <div className="con-img">
                                            <div className="img-content"><img className="app-wh100-all" src={json.picture}/>
                                            </div>
                                            <div className="con-bar step">


                                            </div>
                                            <div className="con-bar-content step">
                                                <div className="s-flex1 bar-left">杭州灵隐寺</div>
                                                <div className="s-flex1 s-j-end">

                                                    <img className="img" src={alms}/>
                                                    <div className="number padding-right-32">{json.dailyNumber}</div>


                                                    <img className="img" src={like}/>
                                                    <div className="number">{json.fansNumber}</div>

                                                </div>
                                            </div>
                                        </div>

                                        <div className="con-content step">
                                            <div className="s-flex1 app-333-font28">灵隐寺最新消息</div>
                                            <div className="s-flex1 s-j-end app-666-font24">
                                                <spn>
                                                    {json.distance}
                                                </spn>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            )
                        })
                    }



                    <div className="app-margin-tb20"></div>
                    <Link to="/TempleDetail" className="app-a">
                        <div className="temple-content">
                            <div className="con-img">
                                <div className="img-content"><img className="app-wh100-all"
                                                                  src="http://img0.imgtn.bdimg.com/it/u=2152422253,1846971893&fm=23&gp=0.jpg"/>
                                </div>
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

                {/*<Foot type="1"></Foot>*/}
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