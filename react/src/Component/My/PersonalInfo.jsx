'usr strict';

import React from 'react';
import {HttpService,Toast} from '../../utils';
import LocalStorage from '../../LocalStorage'


class PersonalInfo extends React.Component {
    constructor() {
        super();
        this.state={
            userInfo:{}
        }
    }

    componentWillMount(){

        this.getInfo();
        this.listenEvent();
        this.title()
    }


    title(t){
        window.g_bridge.callHandler('sendMessageToApp', {
                type: 15, data: {title:'个人',
                    rightNavigationBarItems:[{type: t||10000, title: !t ? '编辑' : 'baocun'}]}},
            (response)=>{

            })
    }


    listenEvent() {
        window.g_bridge.registerHandler('sendMessageToHTML',  (msg,cb)  => {
                Toast.toast(msg,2000);
                if(msg=='10000'){
                    this.title(10001)
                }else {
                    this.title()
                }
        })



    }

    

    getInfo(){
        HttpService.query({
            url:'/v1/p/user/info',
            data:{accessToken:LocalStorage.get('token')}
        }).then((res)=>{
            console.log(res);

            this.setState({
                userInfo:{
                    username:res.username,
                    sex:res.sex,
                    age:res.age,
                    residence:res.residence,
                    zen:res.zen
                }
            })

        },(error)=>{

        })

    }


    render(){
        const {userInfo}=this.state;
        return (
            <div className="app-padding-lr24" style={{paddingTop:'60px'}}>
                <div className="step app-wh120 border-bottom">
                    <div className="s-left app-666-font32">用户名:</div>
                    <div className="s-right app-666-font32">{userInfo.username}</div>
                </div>
                <div className="step app-wh120 border-bottom">
                    <div className="s-left app-666-font32">性别:</div>
                    <div className="s-right app-666-font32">

                        {
                            userInfo.sex=='0'?'未知':userInfo.sex=='1'?'男':userInfo.sex=='2'?'女':''
                        }
                    </div>
                </div>
                <div className="step app-wh120 border-bottom">
                    <div className="s-left app-666-font32">年龄:</div>
                    <div className="s-right app-666-font32">{userInfo.age}</div>
                </div>
                <div className="step app-wh120 border-bottom">
                    <div className="s-left app-666-font32">居住地:</div>
                    <div className="s-right app-666-font32">{userInfo.residence}</div>
                </div>
                <div className="step app-wh120 border-bottom">
                    <div className="s-left app-666-font32">禅语:</div>
                    <div className="s-right app-666-font32">{userInfo.zen}</div>
                </div>

            </div>
        )
    }
}


export default PersonalInfo