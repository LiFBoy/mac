'usr strict';

import React, {Component, PropTypes} from 'react';


import {doLogin, change, getOneBabyid, changeSaveBabyStatus, getMap, getCurrentPower, exportMap} from '../action/index'

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {Router, Route, IndexRoute, browserHistory, Link} from 'react-router';

import Foot from './Foot';


import like from '../../src/images/index/like.png'
import alms from '../../src/images/index/alms.png'


import {HttpService} from '../utils';
import App from './app';
import LocalStorage from '../LocalStorage'



class IndexFocus extends React.Component {
    constructor() {
        super();
        this.state={
            temples:[]
        }
    }

    componentWillMount(){

        this.temples();
    }

    async temples(){
        console.log(LocalStorage.get('token'))
            let code=await HttpService.query({
                url:'/v1/p/user/get/focus/temples',
                data:{accessToken:LocalStorage.get('token')}
            })

            console.log(code)

            this.setState({
                temples:code.temples
            })


    }

    TempleDetail(id){
        window.g_bridge.callHandler('sendMessageToApp', {
                type: 2, data: {url: 'http://172.27.35.4:3002/index.html#/TempleDetail/'+id+''}},
            (response)=>{

            })
    }



    render(){
        const {temples} =this.state;
        return (
            <div className="app-container">

                <div className="index-container">

                    {
                        temples.length!=0?temples.map((json,index)=>(

                            <div key={index}>
                            <App cb={this.TempleDetail.bind(this,json.id)}>
                                    <div className="temple-content">
                                        <div className="con-img">
                                            <div className="img-content">
                                                <img className="app-wh100-all" src={json.headImgUrl}/></div>
                                            <div className="con-bar step">


                                            </div>
                                            <div className="con-bar-content step">
                                                <div className="s-flex1 bar-left">{json.name}</div>
                                                <div className="s-flex1 s-j-end">

                                                    <img className="img" src={alms}/>
                                                    <div className="number padding-right-32">{json.dailyNumber}</div>



                                                    <img className="img" src={like}/>
                                                    <div className="number">{json.fansNumber}</div>

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
                            )):''
                    }








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