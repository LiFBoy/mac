'usr strict';

import React from 'react';


import pac from '../../../src/images/temple/praise－active.png'
import _comments from '../../../src/images/temple/comments.png'
import face from '../../../src/images/temple/face.png'
import {Router, Route, IndexRoute, browserHistory, Link} from 'react-router';

import {HttpService} from '../../utils'
import LocalStorage from '../../LocalStorage'
import jsBridge from '../../jsBridge'
import App from '../app'

class CommentLists extends React.Component {
    constructor() {
        super();
        this.state = {
            comments: [],
            obj:[]
        };

    }

    componentWillMount() {

        jsBridge.getBrideg(()=> {
            jsBridge.setTitle('评论列表')

        });

        if(this.props.params.type=='detail'){

            this.detail();
        }else if(this.props.params.type=='commentLists') {
            this.comments();
            this.setState({
                obj: JSON.parse(LocalStorage.get('obj'))
            })
        }


    }

    sendMessageToApp_type_2(type,id){
        jsBridge.sendMessageToApp_type_2(type,id);
    }

    async detail(){
        let code=await HttpService.query({
            url:'/v1/public/get/comment/detail',
            data:{
                id:this.props.params.id
            }
        });

        var arry=[];

        console.log(code.rootComment)

        const obj=code.rootComment;
            obj.replies=code.subComments;


        arry.push(code.rootComment);
        console.log(arry);


        console.log(code.content);


        this.setState({
            comments: arry,
            obj:code.content
        })


    }


    async comments() {
        let code = await HttpService.query({
            url: '/v1/public/get/temple/status/comments',
            data: {
                contentId: this.props.params.id
            }
        });

        console.log(code.comments)

        this.setState({
            comments: code.comments
        })
    }

    async upvote(id) {
        let code = await HttpService.saveJson({
            url: '/v1/p/comment/upvote?accessToken=' + LocalStorage.get('token') + '',
            data: {
                id: id
            }
        });

        if(this.props.params.type=='detail'){

            this.detail();



        }else if(this.props.params.type=='commentLists')(
            this.comments()
        )



    }

    async status() {
        const content = document.getElementById('input-content').value;
        let code = await HttpService.saveJson({
            url: '/v1/p/comment/temple/status?accessToken=' + LocalStorage.get('token') + '',
            data: {
                contentId: this.props.params.id,
                content: content
            }
        });
    }

    render() {
        const {comments,obj}=this.state;

        return (
            <div>
                <div className="app-container" style={{position: 'relative'}}>
                    <div className="middle">
                        <div className="dynamic-content app-padding-lr24 border-bottom">
                            <div className="step temple-name">
                                <div>
                                    <div className="temple-img"><img className="app-wh100-all-radius"
                                                                     src="http://pic.58pic.com/58pic/11/52/20/45s58PICVat.jpg"/>
                                    </div>
                                </div>
                                <div className="s-right s-j-center"
                                     style={{flexDirection: 'column', alignItems: 'flex-start'}}>
                                    <div className="app-333-font28 app-line-height-one">灵隐寺</div>
                                    <div className="app-999-font24 app-line-height-one"
                                         style={{paddingTop: '12px'}}>{obj.timeStr}</div>
                                </div>
                            </div>

                            <div className="temple-content">
                                <div className="step ">
                                    <div className="s-flex1 app-333-font28">
                                        {obj.content}
                                    </div>
                                </div>


                                <div className="step" style={{paddingTop: '24px', paddingBottom: '36px'}}>
                                    <div className="s-flex1" style={{flexWrap: 'wrap'}}>

                                        {/*{*/}
                                            {/*obj.pictures.length!=0?obj.pictures.map((json,index)=>(*/}
                                                {/*<div className="upload-img" key={index}>*/}
                                                    {/*<img src={json}  className="app-wh100-all"/>*/}
                                                {/*</div>*/}
                                            {/*)):''*/}
                                        {/*}*/}
                                    </div>
                                </div>


                            </div>


                        </div>


                        <div className="step dynamic app-padding-lr24">
                            <div className="s-flex1  app-666-font28">
                                最新评论
                            </div>
                        </div>
                        <div className="step dynamic app-padding-lr24">
                            <div className="s-flex1  app-666-font28">
                                热门评论
                            </div>
                        </div>


                        {
                            comments.length != 0 ? comments.map((json, index)=>(
                                <div className="dynamic-content app-padding-lr24" style={{borderBottom: '0'}}
                                     key={index}>
                                    <div className="step temple-name">
                                        <App cb={this.sendMessageToApp_type_2.bind(this,'userinfo',json.senderId)}>
                                            <div className="temple-img">
                                                <img src={'http://oss-cn-hangzhou.aliyuncs.com/rulaibao/'+json.senderHeadImgUrl+''} className="app-wh100-all-radius"/>
                                            </div>
                                        </App>
                                        <div className="s-flex1 s-j-center"
                                             style={{flexDirection: 'column', alignItems: 'flex-start'}}>

                                                <div className="app-333-font28 app-line-height-one">{json.sender}</div>

                                            <div className="app-999-font24 app-line-height-one"
                                                 style={{paddingTop: '12px'}}>{json.timeStr}</div>
                                        </div>

                                        <div className="s-flex1 message-board-number s-j-end">

                                            <div className="step" onClick={this.upvote.bind(this,json.id)}>
                                            <img className="img" src={pac}/>
                                            <div
                                                className="number app-999-font24 padding-right-40">{json.upvoteNumber}</div>

</div>

                                            <App cb={this.sendMessageToApp_type_2.bind(this,'reply',json.id)} class="step">
                                            <img className="img" src={_comments}/>
                                            <div className="number app-999-font24">{json.replies.length}</div>
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


                    </div>

                    <div className="step face app-padding-lr24"
                         style={{height: '100px', position: 'fixed', bottom: '0', width: '100%'}}>


                        <div className="s-flex1">
                            <input id="input-content" type="text" placeholder="你的评论..." className="face-input"/>
                        </div>

                        <div className="step app-padding-l24" style={{alignItems:'center'}} onClick={this.status.bind(this)}>
                            <img className="face-image"  src={face}/>
                        </div>


                    </div>


                </div>
            </div>
        )
    }
}


export default CommentLists