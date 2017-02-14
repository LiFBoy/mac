'usr strict';

import React from 'react';


import myalms from '../../../src/images/temple/myalms.png'


import chunk1 from '../../../src/images/temple/chunk1.png'
import chunk2 from '../../../src/images/temple/chunk2.png'
import chunk3 from '../../../src/images/temple/chunk3.png'
import pac from '../../../src/images/temple/praise－active.png'
import comments from '../../../src/images/temple/comments.png'
import face from '../../../src/images/temple/face.png'
import {HttpService} from '../../Http'
import LocalStorage from '../../LocalStorage'

class MessageBoard extends React.Component {
    constructor() {
        super();
        this.state={
            messages:[],
            userInfo:{

            }
        }
    }
    componentWillMount() {
        this.info();
        this.messages();

    }
    async info(){
        let code = await HttpService.query({
            url: '/v1/p/user/info',
            data: {
                accessToken:LocalStorage.get('token')
            }
        });
        this.setState({
           userInfo:{
               username:code.username,
               residence:code.residence
           }
        })
    }
    async messages(){
        let code = await HttpService.query({
            url: '/v1/public/get/temple/leave/messages',
            data: {
                templeId:'1'
            }
        });
        this.setState({
            messages:code.messages
        })
    }
    render(){
        const {messages,userInfo}=this.state;
        return (
            <div className="app-container">

                <div className="step app-padding-lr24 message-board">

                        <div className="img"><img src="http://img4.imgtn.bdimg.com/it/u=398347842,2770887580&fm=23&gp=0.jpg" className="app-wh100-all-radius"/></div>

                    <div className="s-right s-j-center" style={{flexDirection: 'column', alignItems: 'flex-start'}}>
                        <div className="app-333-font30 app-line-height-one">{userInfo.username}</div>
                        <div className="app-999-font22 app-line-height-one" style={{paddingTop:'24px'}}>{userInfo.residence}</div>
            </div>
            </div>

                <div className="middle">
                    <div className="step dynamic app-padding-lr24">
                        <div className="s-flex1  app-666-font28">
                            最新留言
                        </div>
                    </div>

                    {
                        messages.length!=0?messages.map((json,index)=>(
                                <div className="dynamic-content app-padding-lr24" style={{borderBottom:'0'}} key={index}>
                                    <div className="step temple-name">
                                        <div>
                                            <div className="temple-img">
                                                <img src={json.userHeadImgUrl} className="app-wh100-all-radius"/>
                                            </div>
                                        </div>
                                        <div className="s-flex1 s-j-center" style={{flexDirection: 'column', alignItems: 'flex-start'}}>
                                            <div className="app-333-font28 app-line-height-one">{json.username}</div>
                                            <div className="app-999-font24 app-line-height-one" style={{paddingTop:'12px'}}>{json.timeStr}</div>
                                        </div>

                                        <div className="s-flex1 message-board-number s-j-end">
                                            <img className="img" src={pac}/>
                                            <div className="number app-999-font24 padding-right-40">{json.upvoteNumber}</div>



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
                            )):''
                    }


                    <div className="step dynamic app-padding-lr24">
                        <div className="s-flex1  app-666-font28">
                            热门留言
                        </div>
                    </div>


                    <div className="dynamic-content app-padding-lr24" style={{borderBottom:'0'}}>
                        <div className="step temple-name">
                            <div>
                                <div className="temple-img">
                                    <img src="http://img4.imgtn.bdimg.com/it/u=398347842,2770887580&fm=23&gp=0.jpg" className="app-wh100-all-radius"/>
                                </div>
                            </div>
                            <div className="s-flex1 s-j-center" style={{flexDirection: 'column', alignItems: 'flex-start'}}>
                                <div className="app-333-font28 app-line-height-one">灵隐寺</div>
                                <div className="app-999-font24 app-line-height-one" style={{paddingTop:'12px'}}>2分钟前</div>
                            </div>

                            <div className="s-flex1 message-board-number s-j-end">
                                <img className="img" src={pac}/>
                                <div className="number app-999-font24 padding-right-40">50562</div>



                                <img className="img" src={comments}/>
                                <div className="number app-999-font24">789</div>
                            </div>
                        </div>

                        <div className="step temple-content app-padding-b24 border-bottom">
                            <div className="s-flex1 app-333-font28">
                                下个月即将迎来观音圣诞，让我们为观音共同祈福，祈福，众生向善。
                            </div>
                        </div>

                    </div>
                    <div className="dynamic-content app-padding-lr24" style={{borderBottom:'0'}}>
                        <div className="step temple-name">
                            <div>
                                <div className="temple-img">
                                    <img src="http://img4.imgtn.bdimg.com/it/u=398347842,2770887580&fm=23&gp=0.jpg" className="app-wh100-all-radius"/>
                                </div>
                            </div>
                            <div className="s-flex1 s-j-center" style={{flexDirection: 'column', alignItems: 'flex-start'}}>
                                <div className="app-333-font28 app-line-height-one">灵隐寺</div>
                                <div className="app-999-font24 app-line-height-one" style={{paddingTop:'12px'}}>2分钟前</div>
                            </div>

                            <div className="s-flex1 message-board-number s-j-end">
                                <img className="img" src={pac}/>
                                <div className="number app-999-font24 padding-right-40">50562</div>



                                <img className="img" src={comments}/>
                                <div className="number app-999-font24">789</div>
                            </div>
                        </div>

                        <div className="step temple-content app-padding-b24 border-bottom">
                            <div className="s-flex1 app-333-font28">
                                下个月即将迎来观音圣诞，让我们为观音共同祈福，祈福，众生向善。
                            </div>
                        </div>

                    </div>
                </div>


                <div className="step face app-padding-lr24" style={{height:'100px'}}>


                    <div className="s-flex1">
                        <input type="text" placeholder="留下你的意见..." className="face-input"/>
                    </div>

                    <div className="s-flex-zero app-padding-l24" >
                        <img className="face-img" src={face} />
                    </div>



                </div>




            </div>
        )
    }
}


export default MessageBoard