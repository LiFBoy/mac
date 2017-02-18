'usr strict';

import React from 'react';


import pac from '../../../src/images/temple/praise－active.png'
import _comments from '../../../src/images/temple/comments.png'
import face from '../../../src/images/temple/face.png'
import {Router, Route, IndexRoute, browserHistory, Link} from 'react-router';

import {HttpService} from '../../Http'
import LocalStorage from '../../LocalStorage'

class CommentLists extends React.Component {
    constructor() {
        super();
        this.state={
            comments:[]
        }
    }

    componentWillMount() {
        this.comments();

    }

    async comments(){
        let code = await HttpService.query({
            url: '/v1/public/get/temple/status/comments',
            data: {
                contentId:this.props.params.id
            }
        });

        this.setState({
            comments:code.comments
        })
    }
    async upvote(id){
        let code = await HttpService.saveJson({
            url: '/v1/p/comment/upvote?accessToken=' + LocalStorage.get('token') + '',
            data: {
                id:id
            }
        });
        this.comments();
    }
    async status(){
        const content=document.getElementById('input-content').value;
        let code = await HttpService.saveJson({
            url: '/v1/p/comment/temple/status?accessToken=' + LocalStorage.get('token') + '',
            data: {
                contentId:this.props.params.id,
                content:content
            }
        });
    }

    render(){
        const {comments}=this.state;
        return (
            <div>
                <div className="app-container" style={{position:'relative'}}>

                    {/*<div className="step app-padding-lr24 message-board">*/}

                        {/*<div className="img"><img src="http://img4.imgtn.bdimg.com/it/u=398347842,2770887580&fm=23&gp=0.jpg" className="app-wh100-all-radius"/></div>*/}

                        {/*<div className="s-right s-j-center" style={{flexDirection: 'column', alignItems: 'flex-start'}}>*/}
                            {/*<div className="app-333-font30">草木一秋</div>*/}
                            {/*<div className="app-999-font22" style={{paddingTop:'24px'}}>时光自有时光，时光自有时光。</div>*/}
                        {/*</div>*/}
                    {/*</div>*/}

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
                                    <div className="app-999-font24 app-line-height-one" style={{paddingTop: '12px'}}>10-12 09:00</div>
                                </div>
                            </div>

                            <div className="temple-content">
                                <div className="step ">
                                    <div className="s-flex1 app-333-font28">
                                        下个月即将迎来观音圣诞，让我们为观音共同祈福，祈福，众生向善。
                                    </div>
                                </div>


                                <div className="step" style={{paddingTop:'24px',paddingBottom:'36px'}}>
                                    <div className="s-flex1" style={{flexWrap:'wrap'}}>
                                        <div className="upload-img">
                                            <img src="http://pic17.nipic.com/20111003/5847249_214945441162_2.jpg" className="app-wh100-all" />
                                        </div>
                                        <div className="upload-img">
                                            <img src="http://pic3.nipic.com/20090706/2082016_155756000_2.jpg" className="app-wh100-all" />
                                        </div>
                                        <div className="upload-img">
                                            <img src="http://pic17.nipic.com/20111003/5847249_214945441162_2.jpg" className="app-wh100-all" />
                                        </div>
                                    </div>
                                </div>


                            </div>


                        </div>



                        <div className="step dynamic app-padding-lr24">
                            <div className="s-flex1  app-666-font28">
                                最新评论
                            </div>
                        </div>

                        {
                            comments.length!=0?comments.map((json,index)=>(
                                    <div className="dynamic-content app-padding-lr24" style={{borderBottom:'0'}} key={index}>
                                        <div className="step temple-name">
                                            <div>
                                                <div className="temple-img">
                                                    <img src={json.senderHeadImgUrl} className="app-wh100-all-radius"/>
                                                </div>
                                            </div>
                                            <div className="s-flex1 s-j-center" style={{flexDirection: 'column', alignItems: 'flex-start'}}>
                                                <Link to="/UserInfo" className="app-a"><div className="app-333-font28 app-line-height-one">{json.sender}</div></Link>
                                                <div className="app-999-font24 app-line-height-one" style={{paddingTop:'12px'}}>{json.timeStr}</div>
                                            </div>

                                            <div className="s-flex1 message-board-number s-j-end">
                                                <div className="step" onClick={this.upvote.bind(this,json.id)}>


                                                <img className="img" src={pac}/>
                                                <div className="number app-999-font24 padding-right-40">{json.upvoteNumber}</div>

                                                </div>

                                                <img className="img" src={_comments} />
                                                <div className="number app-999-font24">789</div>
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
                                热门评论
                            </div>
                        </div>


                        {
                            comments.length!=0?comments.map((json,index)=>(
                                    <div className="dynamic-content app-padding-lr24" style={{borderBottom:'0'}} key={index}>
                                        <div className="step temple-name">
                                            <div>
                                                <div className="temple-img">
                                                    <img src={json.senderHeadImgUrl} className="app-wh100-all-radius"/>
                                                </div>
                                            </div>
                                            <div className="s-flex1 s-j-center" style={{flexDirection: 'column', alignItems: 'flex-start'}}>
                                                <Link to="/UserInfo" className="app-a"><div className="app-333-font28 app-line-height-one">{json.sender}</div></Link>
                                                <div className="app-999-font24 app-line-height-one" style={{paddingTop:'12px'}}>{json.timeStr}</div>
                                            </div>

                                            <div className="s-flex1 message-board-number s-j-end">
                                                <img className="img" src={pac}/>
                                                <div className="number app-999-font24 padding-right-40">{json.upvoteNumber}</div>



                                                <img className="img" src={_comments}/>
                                                <div className="number app-999-font24">789</div>
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



                    </div>

                    <div className="step face app-padding-lr24" style={{height:'100px',position:'fixed',bottom:'0',width:'100%'}}>


                        <div className="s-flex1">
                            <input id="input-content" type="text" placeholder="你的评论..." className="face-input"/>
                        </div>

                        <div className="s-flex-zero app-padding-l24" onClick={this.status.bind(this)}>
                            <img className="face-img" src={face} />
                        </div>



                    </div>




                </div>
            </div>
        )
    }
}


export default CommentLists