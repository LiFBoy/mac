'usr strict';

import React from 'react';

import Foot from '../Foot'

import myalms from '../../../src/images/temple/myalms.png'


import chunk1 from '../../../src/images/temple/chunk1.png'
import chunk2 from '../../../src/images/temple/chunk2.png'
import chunk3 from '../../../src/images/temple/chunk3.png'
import pac from '../../../src/images/temple/praise－active.png'
import comments from '../../../src/images/temple/comments.png'

import {HttpService} from '../../Http';
import LocalStorage from '../../LocalStorage'
import Popup from '../popup'

class Coments extends React.Component {
    constructor() {
        super();
        this.state={
            comments:[],
            admin:{}
        };

        this.config = {
            isSure: true,
            isCancel: true,
            no: '返回',
            yes: '确定',
            header: '',
            contentCss:{
                borderTopRightRadius:'10px',
                borderTopLeftRadius:'10px',
                padding:'0'
            },
            content: <div>
                <div className="step app-coments-popup border-bottom" onClick={this.close.bind(this)}>
                    <ul className="s-center">
                        <li className="app-333-font32">回复评论</li>
                    </ul>


                </div>
                <div className="step app-coments-popup border-bottom">
                    <ul className="s-center">
                        <li className="app-333-font32">删除评论</li>
                    </ul>


                </div>
                <div className="step app-coments-popup border-bottom">
                    <ul className="s-center">
                        <li className="app-333-font32">举报评论</li>
                    </ul>


                </div>
                <div className="step app-coments-popup">
                    <ul className="s-center">
                        <li className="app-333-font32">查看详情</li>
                    </ul>


                </div>



            </div>


            ,
            yes_cb: ()=> {

                //  alert(this.state.info.isadmin)

                //
                // if (!!this.state.info.isadmin) {
                //
                // } else {
                //
                // }


            },
            no_cb: ()=> {
                this.context.router.goBack()
            }
        };
    }


    componentWillMount(){

        this.comments();
    }

    close(){
        this.setState({
            admin:{
                flag:false,
                _flag:false
            }
        })
    }

    popup(){
        this.setState({
            admin:{
                flag:true,
                _flag:true
            }
        })
    }

    async comments(){

        let code=await HttpService.query({
            url:"/v1/p/user/comments",
            data:{accessToken:LocalStorage.get('token')}

        });

        this.setState({
                     comments:code.comments
                 });


        // console.log(LocalStorage.get('token'))
        // HttpService.query({
        //     url:'/v1/p/user/comments',
        //     data:{accessToken:LocalStorage.get('token')}
        // }).then((res)=>{
        //     console.log(res);
        //     this.setState({
        //         comments:res.comments
        //     })
        //
        //
        //
        // },(error)=>{
        //
        // })
    }

    render() {

        const {admin}=this.state;
        return (

            <div className="temple-container app-container">
                <Popup config={this.config} blockOrNone={admin.flag} _flag={admin.flag}/>


                <div className="middle">


                    {
                        this.state.comments.map((json=>{
                            return (
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
                                                下个月即将迎来观音圣诞。
                                            </div>
                                        </div>

                                        <div className="step app-margin-tb24">
                                            <div className="comments s-flex1 s-flex-d s-j-center app-padding-l24"
                                                 style={{alignItems: 'flex-start'}}>
                                                <div className="app-333-font28" style={{marginBottom: '16px'}}>唐僧大师</div>
                                                <div className="app-999-font24">灵隐寺美美呀</div>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            )
                        }))
                    }



                    <div className="dynamic-content app-padding-lr24 border-bottom">
                        <div className="step temple-name">
                            <div>
                                <div className="temple-img"><img className="app-wh100-all-radius"
                                                                 src="http://pic.58pic.com/58pic/11/52/20/45s58PICVat.jpg"/>
                                </div>
                            </div>
                            <div className="s-right s-j-center"
                                 style={{flexDirection: 'column', alignItems: 'flex-start'}}>
                                <div className="app-333-font28 app-line-height-one">悟空</div>
                                <div className="app-999-font24 app-line-height-one" style={{paddingTop: '12px'}}>10-12 09:00</div>
                            </div>
                        </div>

                        <div className="temple-content">
                            <div className="step ">
                                <div className="s-flex1 app-333-font28">
                                    师傅，您说的没错
                                </div>
                            </div>

                            <div className="step app-margin-tb24" onClick={this.popup.bind(this)}>
                                <div className="comments s-flex1 s-flex-d s-j-center app-padding-l24"
                                     style={{alignItems: 'flex-start'}}>
                                    <div className="app-333-font28" style={{marginBottom: '16px'}}>唐僧大师</div>
                                    <div className="app-999-font24">灵隐寺美美呀</div>
                                </div>
                            </div>
                        </div>


                    </div>





                </div>

                {/*<Foot type="2"></Foot>*/}


            </div>

        )
    }
}


export default Coments