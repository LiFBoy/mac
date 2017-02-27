'usr strict';

import React from 'react';

import {HttpService} from '../../utils'

import LocalStorage from '../../LocalStorage'
import jsBridge from '../../jsBridge'


class reply extends React.Component {
    constructor() {
        super();
        // jsBridge.getBrideg();

    }

    componentWillMount(){
        jsBridge.getBrideg(()=>{
            jsBridge.setTitle('评论')
        })
    }


    async _reply(){
        await HttpService.saveJson({
            url:'/v1/p/comment/reply?accessToken='+LocalStorage.get('token')+'',
            data:{
                content:document.getElementById('reply-content').value,
                commentId:this.props.params.id
            }
        })
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
                        <textarea id="reply-content"  className="s-flex1 app-999-font28 app-setting-textarea"  placeholder="请输入评论">

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


export default reply