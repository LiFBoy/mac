'use strict';

import React from 'react';

import Foot from '../Foot'

import myalms from '../../../src/images/temple/myalms.png'


import chunk1 from '../../../src/images/temple/chunk1.png'
import chunk2 from '../../../src/images/temple/chunk2.png'
import chunk3 from '../../../src/images/temple/chunk3.png'
import pac from '../../../src/images/temple/praise－active.png'
import comments from '../../../src/images/temple/comments.png'


import {HttpService} from '../../utils';
import LocalStorage from '../../LocalStorage'

class Notice extends React.Component {
    constructor() {
        super();
        this.state={
            notifies:[]
        }
    }

    componentWillMount(){

        this.notifies();
    }

   async notifies(){
        console.log(LocalStorage.get('token'))

       try{
            let code=await HttpService.query({
                url:'/v1/p/notify/get/upvote/notifies',
                data:{accessToken:LocalStorage.get('token')}
            })

            console.log(code)

           this.setState({
               notifies:code.notifies
           })
       }catch (error){

       }

    }

    render(){
        return (

            <div className="temple-container app-container">


                <div className="middle">

                    {
                        this.state.notifies.map((json=>{
                            return (
                                <div className="dynamic-content app-padding-lr24 border-bottom" key={json.userId}>
                                    <div className="step temple-name">
                                        <div>
                                            <div className="temple-img"><img className="app-wh100-all-radius"
                                                                             src={json.userHeadImgUrl}/>
                                            </div>
                                        </div>
                                        <div className="s-right s-j-center"
                                             style={{flexDirection: 'column', alignItems: 'flex-start'}}>
                                            <div className="app-333-font28 app-line-height-one">{json.username}  <span className="app-666-font28">{json.note}</span></div>
                                            <div className="app-999-font24 app-line-height-one" style={{paddingTop: '12px'}}>{json.timeStr}</div>
                                        </div>
                                    </div>

                                    <div className="temple-content" style={{paddingBottom: '24px'}}>

                                        <div className="step">
                                            <div className="notice s-flex1 s-flex-d s-j-center app-padding-l24"
                                                 style={{alignItems: 'flex-start'}}>
                                                <div className="app-333-font28" style={{marginBottom: '16px'}}>{json.gmtCreate}</div>
                                                <div className="app-999-font24">{json.content}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }))
                    }
                </div>

                {/*<Foot type="2"></Foot>*/}


            </div>

        )
    }
}


export default Notice