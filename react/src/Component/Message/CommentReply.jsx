'use strict';

import React from 'react';

import {HttpService,Toast} from '../../utils'

import LocalStorage from '../../LocalStorage'
import jsBridge from '../../jsBridge'


class CommentReply extends React.Component {
    constructor() {
        super();

    }

    componentWillMount(){
        jsBridge.getBrideg(()=>{
            jsBridge.setTitle('回复评论')
        })
    }


    async _reply(){
      //  alert(document.getElementById('reply-content').value)
        const replyContent=this.refs.replyContent.value;
        if(!replyContent){
            Toast.toast('请输入内容',3000);
            return;

        }
        const code=await HttpService.saveJson({
            url:'/v1/p/comment/reply?accessToken='+LocalStorage.get('token')+'',
            data:{
                content:replyContent,
                commentId:this.props.params.id
            }
        });

        if(!!code){
            this.refs.replyContent.value='';
            jsBridge.getBrideg(()=>{
                jsBridge.goBack();
            })
        }
    }



    //
    // title(){
    //     window.g_bridge.callHandler('sendMessageToApp', {
    //             type: 15, data: {title:'反馈问题',
    //                 rightNavigationBarItems:[{type: 10003, title:'提交'}]}},
    //         (response)=>{
    //
    //         })
    // }
    //
    //
    // listenEvent() {
    //     window.g_bridge.registerHandler('sendMessageToHTML',  (msg,cb)  => {
    //
    //         if(msg=='10003'){
    //             this.suggestion();
    //         }
    //
    //     })
    //
    //
    //
    // }

    render(){
        return (
            <div className="app-padding-lr24 ">
                <form action="">
                    <div className="step app-padding-tb20">
                        <textarea ref="replyContent"  className="s-flex1 app-999-font28 app-setting-textarea"  placeholder="回复评论">

                        </textarea>


                    </div>

                    <div className="step app-yellow-radius-check-button login-btn" style={{height:'5rem'}}>
                        {/*<input className="s-center" type="submit" readOnly="readOnly" value="登录"/>*/}
                        <div className="s-center" onClick={this._reply.bind(this)}>评论</div>
                    </div>
                </form>
            </div>
        )
    }
}


export default CommentReply