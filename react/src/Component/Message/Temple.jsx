'use strict';

import React from 'react';

import Foot from '../Foot'

import myalms from '../../../src/images/temple/myalms.png'


import chunk1 from '../../../src/images/temple/chunk1.png'
import chunk2 from '../../../src/images/temple/chunk2.png'
import chunk3 from '../../../src/images/temple/chunk3.png'
import pac from '../../../src/images/temple/praise－active.png'
import comments from '../../../src/images/temple/comments.png'

import {HttpService} from '../../utils'
import LocalStorage from '../../LocalStorage'
import jsBridge from '../../jsBridge'

class Temple extends React.Component {
    constructor() {
        super();
        this.state={
            templeStatuses:[]
        }
    }

    componentWillMount() {


        this.status();



    }

    async status(){

        let code = await HttpService.query({
            url: '/v1/p/notify/get/temple/status',
            data:{
                accessToken:LocalStorage.get('token')
            }
        });
        console.log(code);

        this.setState({
            templeStatuses:code.statuses
        })
    }
    async upvoteStatus(id){
        let code = await HttpService.saveJson({
            url: '/v1/p/user/upvote/temple/status?accessToken=' + LocalStorage.get('token') + '',
            data: {
                id:id
            }
        });
        console.log(code);
        this.status();


    }

    sendMessageToApp_type_2(id){

        jsBridge.getBrideg(()=>{
            jsBridge.sendMessageToApp_type_2('CommentLists',id,'CommentLists')
        })
    }



    render(){

        const {templeStatuses}=this.state;

        console.log(templeStatuses)
        return (

            <div className="temple-container app-container">


                <div className="middle">

                    {
                        templeStatuses.length!=0?templeStatuses.map((json,index)=>(
                            <div className="dynamic-content app-padding-lr24" key={index}>
                                <div className="step temple-name">
                                    <div>
                                        <div className="temple-img"><img className="app-wh100-all-radius" src={json.templeImgUrl}/></div>
                                    </div>
                                    <div className="s-right s-j-center" style={{flexDirection: 'column', alignItems: 'flex-start'}}>
                                        <div className="app-333-font28 app-line-height-one">{json.templeName}</div>
                                        <div className="app-999-font24 app-line-height-one" style={{paddingTop:'12px'}}>{json.timeStr}</div>
                                    </div>
                                </div>

                                <div className="temple-content">
                                    <div className="step ">
                                        <div className="s-flex1 app-333-font28">
                                            {json.content}
                                        </div>
                                    </div>

                                    <div className="step" style={{paddingTop:'24px'}}>
                                        <div className="s-flex1" style={{flexWrap:'wrap'}}>
                                            {/*{*/}
                                                {/*json.pictures.map((json,index)=>(*/}
                                                    {/*<div className="upload-img">*/}
                                                        {/*<img src={json} className="app-wh100-all" />*/}
                                                    {/*</div>*/}
                                                {/*))*/}
                                            {/*}*/}
                                        </div>
                                    </div>
                                </div>
                                <div className="step right-corner">

                                    <div className="s-flex1 s-j-end">

                                        <div className="step" onClick={this.upvoteStatus.bind(this,json.templeStatusId)}>

                                        <img className="img" src={pac}/>
                                        <div className="number app-999-font24 padding-right-40">{json.upvoteNumber}</div>

                                        </div>
                                        <div className="step" onClick={this.sendMessageToApp_type_2.bind(this,json.templeStatusId)}>
                                        <img className="img" src={comments}/>
                                        <div className="number app-999-font24">{json.myComments.length}</div>
                                            </div>

                                    </div>
                                </div>
                            </div>
                        )):''
                    }






                </div>

                {/*<Foot type="2"></Foot>*/}


            </div>

        )
    }
}


export default Temple