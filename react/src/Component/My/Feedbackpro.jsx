'use strict';

import React from 'react';

import {HttpService,Toast} from '../../utils'

import LocalStorage from '../../LocalStorage'
import jsBridge from '../../jsBridge'


class Feedbackpro extends React.Component {
    constructor() {
        super();
       // jsBridge.getBrideg();

    }

    componentWillMount(){
        jsBridge.getBrideg(()=>{
            this.title();
            this.listenEvent();
        });


    }


    async suggestion(){

        const suggestion=this.refs.suggestion.value;

        if(!suggestion){
            Toast.toast('请输入内容',3000);
            return;
        }

        const code= await HttpService.saveJson({
            url:'/v1/p/user/suggestion?accessToken='+LocalStorage.get('token')+'',
            data:{
                suggestion:suggestion
            }
        });

        if(!!code){
            jsBridge.getBrideg(()=>{
                jsBridge.goBack();
            })
        }



    }




    title(){
        window.g_bridge.callHandler('sendMessageToApp', {
                type: 15, data: {title:'反馈问题',
                    rightNavigationBarItems:[{type: 10004, title:'提交'}]}},
            (response)=>{

                if(response==1004){
                    this.suggestion();
                }

            })
    }


    listenEvent() {
        window.g_bridge.registerHandler('sendMessageToHTML',  (msg,cb)  => {

            if(msg=='10004'){
                this.suggestion();
            }

        })



    }

    render(){
        return (
            <div className="app-padding-lr24 ">
                <form>
                    <div className="step app-padding-tb20">
                        <textarea ref="suggestion"  className="s-flex1 app-999-font28 app-setting-textarea"  placeholder="请输入你的问题">

                        </textarea>
                    </div>
                </form>
            </div>
        )
    }
}


export default Feedbackpro