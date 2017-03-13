'use strict';

import React from 'react';

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

       try{
            let code=await HttpService.query({
                url:'/v1/p/notify/get/upvote/notifies',
                data:{accessToken:LocalStorage.get('token')}
            });

            console.log(code);

           this.setState({
               notifies:code.notifies
           })
       }catch (error){

       }

    }

    render(){
        const {notifies}=this.state;
        return (

            <div className="temple-container app-container">


                <div className="middle">
                    {
                        notifies.length!=0?notifies.map((json,index)=>(
                            <div className="dynamic-content app-padding-lr24 border-bottom" key={index}>
                                <div className="step temple-name">
                                    <div>
                                        <div className="temple-img">
                                            <img className="app-wh100-all-radius"  src={json.userHeadImgUrl}/>
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
                        )):''
                    }
                </div>

                {/*<Foot type="2"></Foot>*/}


            </div>

        )
    }
}


export default Notice