'use strict';

import React from 'react';

import Foot from '../Foot'

import myalms from '../../../src/images/temple/myalms.png'


import chunk1 from '../../../src/images/temple/chunk1.png'
import chunk2 from '../../../src/images/temple/chunk2.png'
import chunk3 from '../../../src/images/temple/chunk3.png'
import pac from '../../../src/images/temple/praise－active.png'
import comments from '../../../src/images/temple/comments.png'

import {HttpService, Toast,Tool} from '../../utils';
import LocalStorage from '../../LocalStorage'
import Popup from '../popup'
import jsBridge from '../../jsBridge'

class Coments extends React.Component {
    constructor() {
        super();
        this.state = {
            comments: [],
            admin: {}
        };

        this.timeOutEvent = 0;

        this.config = {
            isSure: true,
            isCancel: true,
            no: '返回',
            yes: '确定',
            header: '',
            contentCss: {
                borderTopRightRadius: '10px',
                borderTopLeftRadius: '10px',
                padding: '0'
            },
            content: <div>
                <div className="step app-coments-popup border-bottom">

                    <ul className="s-center" onClick={this.reply.bind(this)}>
                        <li className="app-333-font32">回复评论</li>
                    </ul>
                </div>
                <div className="step app-coments-popup border-bottom">
                    <ul className="s-center">
                        <li className="app-333-font32">删除评论</li>
                    </ul>
                </div>
                <div className="step app-coments-popup border-bottom" onClick={this.report.bind(this)}>
                    <ul className="s-center">
                        <li className="app-333-font32">举报评论</li>
                    </ul>
                </div>
                <div className="step app-coments-popup">
                    <ul className="s-center" onClick={this.detail.bind(this)}>
                        <li className="app-333-font32">查看详情</li>
                    </ul>
                </div>
            </div>
            ,
        };
    }


    componentDidMount() {


        // Toast.toast(LocalStorage.get('token'), 4000);
        this.comments();


        jsBridge.getBrideg(()=> {
            jsBridge.listen(()=> {
                // Toast.toast('来了',3000);
                this.setState({
                    admin: Tool.assign({},this.state.admin,{
                        flag: false,
                        _flag: false
                    })
                });

            })
        })
    }

    report() {

        jsBridge.sendMessageToApp_type_2('report', this.state.admin.id)

    }

    reply() {
        jsBridge.getBrideg(()=> {
            this.setState({
                admin: Tool.assign({},this.state.admin,{
                    flag: false,
                    _flag: false
                })
            });
        });

            jsBridge.sendMessageToApp_type_2('commentReply', this.state.admin.id)

        // window.location.href='/app.html#/reply/'+ this.state.admin.id + ''
    }

    detail() {

       // Toast.toast('lai',3000);
        jsBridge.getBrideg(()=> {
            if(this.state.admin.type=='2'){

                const obj="''";

                this.setState({
                    admin: Tool.assign({},this.state.admin,{
                        flag: false,
                        _flag: false
                    })
                });

                window.g_bridge.callHandler('sendMessageToApp', {
                        type: 2,
                        data: {url: 'https://www.zrrulai.com/app.html#/CommentLists/' + this.state.admin.id + '/commentlists/'+obj+''}
                    },
                    (response)=> {

                    });

                // jsBridge.sendMessageToApp_type_2('CommentLists', this.state.admin.id, 'commentlists','');
            }else if(this.state.admin.type=='1'){

            }



        });




        // window.location.href='/app.html#/commentlists/'+this.state.admin.id+'/detail'
    }

    popup(id,type) {
        this.setState({
            admin: {
                flag: true,
                _flag: true,
                id: id,
                type:type
            }
        })
    }

    //开始按
    gtouchstart(id,type) {
        // alert(id)
        this.timeOutEvent = setTimeout(()=> {
            this.timeOutEvent = 0;
            this.popup(id,type)
        }, 1000);//这里设置定时器，定义长按500毫秒触发长按事件，时间可以自己改，个人感觉500毫秒非常合适
        console.log(this.timeOutEvent);
        return false;
    };

    //手释放，如果在500毫秒内就释放，则取消长按事件，此时可以执行onclick应该执行的事件
    gtouchend(id,type) {
        clearTimeout(this.timeOutEvent);//清除定时器
        if (this.timeOutEvent != 0) {
        }
        return false;
    };

    //  //如果手指有移动，则取消所有事件，此时说明用户只是要移动而不是长按
    gtouchmove(id,type) {
        clearTimeout(timeOutEvent);//清除定时器
        this.timeOutEvent = 0;
    };


    async comments() {

        let code = await HttpService.query({
            url: "/v1/p/notify/get/reply/comment/notifies",
            data: {accessToken: LocalStorage.get('token')}
        });

        this.setState({
            comments: code.comments
        });

    }

    render() {

        const {admin}=this.state;
        return (

            <div className="temple-container app-container">

                <Popup config={this.config} blockOrNone={admin.flag} _flag={admin.flag}/>


                <div className="middle">


                    {
                        this.state.comments.map((json, index)=> {
                            return (
                                <div className="dynamic-content app-padding-lr24 border-bottom" key={index} onClick={this.popup.bind(this,json.contentId,json.contentType)}>
                                    <div className="step temple-name">
                                        <div>
                                            <div className="temple-img"><img className="app-wh100-all-radius"
                                                                             src={json.userHeadImgUrl||'dist/bg/loginHead.jpg'}/>
                                            </div>
                                        </div>
                                        <div className="s-right s-j-center"
                                             style={{flexDirection: 'column', alignItems: 'flex-start'}}>
                                            <div className="app-333-font28 app-line-height-one">{json.username||'匿名'}</div>
                                            <div className="app-999-font24 app-line-height-one"
                                                 style={{paddingTop: '12px'}}>{json.timeStr}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="temple-content">
                                        <div className="step ">
                                            <div className="s-flex1 app-333-font28">
                                                {json.content}
                                            </div>
                                        </div>

                                        <div className="step app-margin-tb24">
                                            <div className="comments s-flex1 s-flex-d s-j-center app-padding-l24"
                                                 style={{alignItems: 'flex-start'}}>
                                                <div className="app-333-font28"
                                                     style={{marginBottom: '16px'}}>{json.username}
                                                </div>
                                                <div className="app-999-font24">{json.myComment}</div>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            )
                        })
                    }


                </div>

                {/*<Foot type="2"></Foot>*/}


            </div>

        )
    }
}


export default Coments