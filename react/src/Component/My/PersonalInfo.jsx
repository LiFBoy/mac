'usr strict';

import React from 'react';
import HttpService from '../../Http';
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
                    age:res.age
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
                    <div className="s-right app-666-font32">{userInfo.sex}</div>
                </div>
                <div className="step app-wh120 border-bottom">
                    <div className="s-left app-666-font32">年龄:</div>
                    <div className="s-right app-666-font32">{userInfo.age}</div>
                </div>
                <div className="step app-wh120 border-bottom">
                    <div className="s-left app-666-font32">居住地:</div>
                    <div className="s-right app-666-font32">浙江杭州</div>
                </div>
                <div className="step app-wh120 border-bottom">
                    <div className="s-left app-666-font32">禅语:</div>
                    <div className="s-right app-666-font32">我的禅语</div>
                </div>

            </div>
        )
    }
}


export default PersonalInfo