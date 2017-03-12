'use strict';

import React, {Component, PropTypes} from 'react';


import {doLogin, change, getOneBabyid, changeSaveBabyStatus, getMap, getCurrentPower, exportMap} from '../action/index'

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {Router, Route, IndexRoute, browserHistory, Link} from 'react-router';

import Foot from './Foot';
import App from './app';


import like from '../../src/images/index/like.png'
import alms from '../../src/images/index/alms.png'
import {HttpService, Toast} from '../utils'
import jsBridge from '../jsBridge'
import LocalStorage from '../LocalStorage'


class Index extends React.Component {
    constructor() {
        super();

        this.state = {
            temples: [],
            banners: [],
            fans:[]
        };

        //jsBridge.getBrideg();

    }

    componentWillMount() {


        this.hot();
        this.banners();

        if(!!LocalStorage.get('toke')){
            this.temples();
        }




    }


    componentDidMount() {
        setTimeout(()=> {
            this.initBannerSwiper();

        }, 300)


    }

    TempleDetail(id, name) {
        jsBridge.sendMessageToApp_type_2('TempleDetail', id, name)
    }

     fans(id,event){


        event.stopPropagation();

        const z=this.state.fans.length;

        this.removeByValue(this.state.fans,id);

         console.log(this.state.fans.length);
         const h=this.state.fans.length;
         console.log(this.state.fans);
         if(z>h){
             this._fans(id,'0');

         }else{
             this._fans(id,'1');

         }

    }

    async _fans(id,focusStatus){
        const code= await HttpService.saveJson({
            url:'/v1/p/user/focus/temple?accessToken='+LocalStorage.get('token')+'',
            data:{
                focusStatus:focusStatus,
                templeId:id
            }
        });


        if(!!code&&focusStatus=='0'){
            Toast.toast('取消关注成功',300,'bottom');
            this.hot();
            this.temples();
        }else{
            Toast.toast('关注成功',300,'bottom');
            this.hot();
            this.temples();
        }
    }

    sendMessageToApp_type_2(link){
        jsBridge.getBrideg(()=>{
            window.g_bridge.callHandler('sendMessageToApp', {
                    type: 2, data: {url: link}
                },
                (response)=> {

                })
        })
    }



    async temples() {

        this.setState({
            fans:[]
        });

        let code = await HttpService.query({
            url: '/v1/p/user/get/focus/temples',
            data: {accessToken: LocalStorage.get('token')}
        });
        code.temples.forEach((json)=>{
            this.state.fans.push(json.id);



        });


        console.log(this.state.fans);


    }

    removeByValue(arr, val) {
        for (var i = 0; i < arr.length; i++) {

            if (arr[i] == val) {
                arr.splice(i, 1);
                this.setState({
                    fans:arr
                });
                break;
                //return true;
            }else{
                // arr.push(val);
                // this.setState({
                //     fans:arr
                // });
                // break;
                //return false;
            }
        }
    }

    async banners() {

        let banners = await HttpService.query({
            url: '/v1/public/get/banners',
        });
        this.setState({
            banners: banners.banners

        })
    }


    async hot() {

        let hot = await HttpService.query({
            url: '/v1/temple/get/hot/temples',
        });
        this.setState({
            temples: hot.temples

        })
    }

    initBannerSwiper() {
        //下面是在table render完成后执行的js
        new Swiper('.swiper-container', {
            pagination: '.swiper-pagination',
            paginationClickable: true,
            //loop: true,
            autoplay: 5000
        });
        //初始化banner图的swiper
    };

    render() {

        let {temples, banners} = this.state;
        return (
            <div className="app-container">

                <div className="index-container">

                    <div className="banner">
                        <div className="swiper-container">



                            <div className="swiper-wrapper">


                                {
                                    this.state.banners.length != 0 ? this.state.banners.map((json, index)=>(
                                        <div className="swiper-slide" key={index} onClick={this.sendMessageToApp_type_2.bind(this,json.link)}>
                                            <img src={json.picture} className="app-wh100-all"/>
                                        </div>


                                    )) : ''
                                }
                            </div>


                            <div className="swiper-pagination"></div>
                        </div>
                    </div>


                    {
                        temples.map((json, index) => {
                            return (

                                <div key={index}>
                                    {/*<div className="app-margin-t20"></div>*/}


                                    <App cb={this.TempleDetail.bind(this, json.id, json.name)}>
                                        <div className="temple-content">
                                            <div className="con-img">
                                                <div className="img-content"><img className="app-wh100-all"
                                                                                  src={json.headImgUrl}/>
                                                </div>
                                                <div className="con-bar step">


                                                </div>
                                                <div className="con-bar-content step">
                                                    <div className="s-flex1 bar-left">{json.name}</div>
                                                    <div className="s-flex1 s-j-end">

                                                            <img className="img" src={alms}/>
                                                            <div
                                                                className="number padding-right-32">{json.dailyNumber}</div>

                                                    <div className="step" style={{alignItems:'center'}}
                                                         onClick={this.fans.bind(this, json.id)}>
                                                        <img className="img" src={like}/>
                                                        <div className="number">{json.fansNumber}</div>
                                                    </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="con-content step">
                                                <div className="s-flex1 app-333-font28">{json.name}最新消息</div>
                                                <div className="s-flex1 s-j-end app-666-font24">
                                                    <span>
                                                        {json.distance}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </App>
                                </div>
                            )
                        })
                    }
                </div>

                {/*<Foot type="1"></Foot>*/}

                <div  style={{height:'100px'}}></div>
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