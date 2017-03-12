'use strict';

import React from 'react';

import {HttpService,Toast} from '../../utils'

import LocalStorage from '../../LocalStorage'
import jsBridge from '../../jsBridge'


class MessageReply extends React.Component {
    constructor() {
        super();
        // jsBridge.getBrideg();

    }

    componentWillMount(){
        jsBridge.getBrideg(()=>{
            jsBridge.setTitle('留言评论')
        })
    }


    async commentLeave(){

        const leaveContent=this.refs.leaveContent.value;
        if(!leaveContent){
            Toast.toast('请输入内容',3000);
            return;
        }
        const code=await HttpService.saveJson({
            url:'/v1/p/comment/temple/leave?accessToken='+LocalStorage.get('token')+'',
            data:{
                content:leaveContent,
                contentId:this.props.params.id
            }
        });
        if(!!code){
            jsBridge.getBrideg(()=>{
               jsBridge.goBack();
            })
        }

    }

    render(){
        return (
            <div className="app-padding-lr24 ">
                <form action="">
                    <div className="step app-padding-tb20">
                        <textarea ref="leaveContent"  className="s-flex1 app-999-font28 app-setting-textarea"  placeholder="留言评论">

                        </textarea>


                    </div>

                    <div className="step app-yellow-radius-check-button login-btn" style={{height:'5rem'}}>
                        {/*<input className="s-center" type="submit" readOnly="readOnly" value="登录"/>*/}

                        <div className="s-center" onClick={this.commentLeave.bind(this)}>评论</div>
                    </div>
                </form>
            </div>
        )
    }
}


export default MessageReply