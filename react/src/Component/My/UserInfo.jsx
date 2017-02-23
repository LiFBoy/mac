'usr strict';

import React from 'react';
import kaoqin from '../../../src/images/kaoqin.png'
import {HttpService} from '../../utils';
import jsBridge from '../../jsBridge';
class UserInfo extends React.Component {
    constructor() {
        super();
        this.state={
            userInfo:{}
        }
    }

    componentWillMount(){
        jsBridge.getBrideg(()=>{
            jsBridge.setTitle('用户资料')
        })
        this.userInfo();


    }


   async userInfo(){
       const code=await HttpService.query({
            url:'/v1/public/get/user/info',
            data:{
                userId:this.props.params.id
            }
        })

       this.setState({
           userInfo:code
       })
    }

    render(){
        const {userInfo}=this.state;
        return (
            <div className="app-padding-lr24 user-info">

                <div className="step">
                    <div className="s-center user-title">
                        <div style={{width:'200px',height:'200px'}}>
                            <img src={userInfo.headImgUrl} className="app-wh100-all-radius"/>
                        </div>

                    </div>
                </div>

                <div className="step">
                    <div className="s-center app-666-font28">
                        {userInfo.username}
                    </div>
                </div>



                <div className="step user-two">
                    <div className="s-center">
                        <div className="app-999-font24">日善:</div>
                        <div className="app-333-font24">{userInfo.dailies}</div>

                        <div className="app-padding-lr24"></div>


                        <div className="app-999-font24">捐款:</div>
                        <div className="app-333-font24">{userInfo.donationAmount}</div>
                    </div>

                </div>
                <div className="step app-wh120 border-bottom">
                    <div className="s-left app-666-font32">用户名:</div>
                    <div className="s-right app-333-font32">{userInfo.username}</div>
                </div>
                <div className="step app-wh120 border-bottom">
                    <div className="s-left app-666-font32">性别:</div>
                    <div className="s-right app-333-font32">{userInfo.sex}</div>
                </div>
                <div className="step app-wh120 border-bottom">
                    <div className="s-left app-666-font32">年龄:</div>
                    <div className="s-right app-333-font32">{userInfo.age}</div>
                </div>
                <div className="step app-wh120 border-bottom">
                    <div className="s-left app-666-font32">居住地:</div>
                    <div className="s-right app-333-font32">{userInfo.residence}</div>
                </div>
                <div className="step app-wh120 border-bottom">
                    <div className="s-left app-666-font32">禅语:</div>
                    <div className="s-right app-333-font32">{userInfo.zen}</div>
                </div>

            </div>
        )
    }
}


export default UserInfo