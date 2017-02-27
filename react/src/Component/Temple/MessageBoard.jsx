'usr strict';

import React from 'react';


import myalms from '../../../src/images/temple/myalms.png'


import chunk1 from '../../../src/images/temple/chunk1.png'
import chunk2 from '../../../src/images/temple/chunk2.png'
import chunk3 from '../../../src/images/temple/chunk3.png'
import pac from '../../../src/images/temple/praise－active.png'
import comments from '../../../src/images/temple/comments.png'
import face from '../../../src/images/temple/face.png'
import {HttpService} from '../../utils'
import LocalStorage from '../../LocalStorage'
import jsBridge from '../../jsBridge'
import App from '../app'

class MessageBoard extends React.Component {
    constructor() {
        super();
        this.state = {
            messages: [],
            userInfo: {}
        };

    }

    componentWillMount() {
        jsBridge.getBrideg(()=> {
            jsBridge.setTitle('留言板')
        });
        this.info();
        this.messages();

    }

    async createMessage(){
        const code=await HttpService.saveJson({
            url:'/v1/p/user/create/leave/message?accessToken='+LocalStorage.get('token')+'',
            data:{
                content:document.getElementById('creact-msg').value,
                templeId: this.props.params.id
            }
        });

        document.getElementById('creact-msg').innerHTML='';
        this.messages();

    }

    async leaveMsg(id){
       await HttpService.saveJson({
            url:'/v1/p/user/upvote/leave/message?accessToken='+LocalStorage.get('token')+'',
            data:{
                id:id
            }
        })

        this.messages();
    }

    sendMessageToApp_type_2(type,id){
        jsBridge.sendMessageToApp_type_2(type,id);
    }




    async info() {
        let code = await HttpService.query({
            url: '/v1/p/user/info',
            data: {
                accessToken: LocalStorage.get('token')
            }
        });
        this.setState({
            userInfo: {
                username: code.username,
                residence: code.residence
            }
        })
    }

    async messages() {
        let code = await HttpService.query({
            url: '/v1/public/get/temple/leave/messages',
            data: {
                templeId: this.props.params.id
            }
        });
        this.setState({
            messages: code.messages
        })
    }

    render() {
        const {messages, userInfo}=this.state;
        return (
            <div>
            <div className="app-container" style={{position: 'relative'}}>

                <div className="step app-padding-lr24 message-board">

                    <div className="img"><img src="http://img4.imgtn.bdimg.com/it/u=398347842,2770887580&fm=23&gp=0.jpg"
                                              className="app-wh100-all-radius"/></div>

                    <div className="s-right s-j-center" style={{flexDirection: 'column', alignItems: 'flex-start'}}>
                        <div className="app-333-font30 app-line-height-one">{userInfo.username}</div>
                        <div className="app-999-font22 app-line-height-one"
                             style={{paddingTop: '24px'}}>{userInfo.residence}</div>
                    </div>
                </div>

                <div className="middle">
                    <div className="step dynamic app-padding-lr24">
                        <div className="s-flex1  app-666-font28">
                            最新留言
                        </div>
                    </div>

                    {
                        messages.length != 0 ? messages.map((json, index)=>(
                            <div className="dynamic-content app-padding-lr24" style={{borderBottom: '0'}} key={index}>
                                <div className="step temple-name">
                                    <div>
                                        <div className="temple-img">
                                            <img src={json.userHeadImgUrl} className="app-wh100-all-radius"/>
                                        </div>
                                    </div>
                                    <div className="s-flex1 s-j-center"
                                         style={{flexDirection: 'column', alignItems: 'flex-start'}}>
                                        <div className="app-333-font28 app-line-height-one">{json.username}</div>
                                        <div className="app-999-font24 app-line-height-one"
                                             style={{paddingTop: '12px'}}>{json.timeStr}</div>
                                    </div>

                                    <div className="s-flex1 message-board-number s-j-end">
                                        <div className="step" onClick={this.leaveMsg.bind(this,json.id)}>
                                        <img className="img" src={pac}/>
                                        <div className="s-flex1 number app-999-font24 padding-right-40">{json.upvoteNumber}</div>
                                        </div>
                                        <App cb={this.sendMessageToApp_type_2.bind(this,'Replies',json.id)} class="step">
                                        <img className="img" src={comments}/>
                                        <div className="s-flex1 number app-999-font24">{json.replies.length}</div>
                                        </App>
                                    </div>
                                </div>

                                <div className="step temple-content app-padding-b24 border-bottom">
                                    <div className="s-flex1 app-333-font28">
                                        {json.content}
                                    </div>
                                </div>

                            </div>
                        )) : ''
                    }


                    <div className="step dynamic app-padding-lr24">
                        <div className="s-flex1  app-666-font28">
                            热门留言
                        </div>
                    </div>



                    {
                        messages.length != 0 ? messages.map((json, index)=>(
                            <div className="dynamic-content app-padding-lr24" style={{borderBottom: '0'}} key={index}>
                                <div className="step temple-name">
                                    <div>
                                        <div className="temple-img">
                                            <img src={json.userHeadImgUrl} className="app-wh100-all-radius"/>
                                        </div>
                                    </div>
                                    <div className="s-flex1 s-j-center"
                                         style={{flexDirection: 'column', alignItems: 'flex-start'}}>
                                        <div className="app-333-font28 app-line-height-one">{json.username}</div>
                                        <div className="app-999-font24 app-line-height-one"
                                             style={{paddingTop: '12px'}}>{json.timeStr}</div>
                                    </div>

                                    <div className="s-flex1 message-board-number s-j-end">
                                        <img className="img" src={pac}/>
                                        <div
                                            className="number app-999-font24 padding-right-40">{json.upvoteNumber}</div>


                                        <img className="img" src={comments}/>
                                        <div className="number app-999-font24"></div>
                                    </div>
                                </div>

                                <div className="step temple-content app-padding-b24 border-bottom">
                                    <div className="s-flex1 app-333-font28">
                                        {json.content}
                                    </div>
                                </div>

                            </div>
                        )) : ''
                    }
                </div>


                <div className="step face app-padding-lr24"
                     style={{height: '100px', position: 'fixed', bottom: '0', width: '100%'}}>


                    <div className="s-flex1">
                        <input id="creact-msg" type="text" placeholder="你的留言" className="face-input"/>
                    </div>

                    <div className="step app-padding-l24" style={{alignItems:'center'}} onClick={this.createMessage.bind(this)}>
                        <img className="face-image" src={face}/>
                    </div>


                </div>


            </div>
                </div>
        )
    }
}


export default MessageBoard