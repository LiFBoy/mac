'usr strict';

import React from 'react';


import Foot from '../Foot'
import jt from '../../../src/images/my/jt.png'

import {Router, Route, IndexRoute, browserHistory, Link} from 'react-router';
import {HttpService,Toast} from '../../utils'

import LocalStorage from '../../LocalStorage'
import jsBridge from '../../jsBridge'
class dynamic extends React.Component {
    constructor() {
        super();
        this.state={
            requestId:[]
        };
   //     this.title();


        jsBridge.getBrideg();
        jsBridge.setTitle('发布动态');


    }


   async editInfo(){
        let code = await HttpService.saveJson({
            url: '/v1/ab/abbot/create/temple/status?accessToken=' + LocalStorage.get('token') + '',
            data: {
                content: "string",
                pictures: [

                ],

            }
        });


        console.log(code)
    }

    uploadImg(){
        var self=this;
        //window.g_bridge
        window.g_bridge.callHandler('sendMessageToApp', {type:17, data:{accessToken:LocalStorage.get('token')}}, function(response) {
                Toast.toast(response,3000)

                if(response.code=='0'){


                    self.setState({
                        requestId:self.state.requestId.push(response.ids[0])
                    })
                }else{
                    Toast.toast(response.desc,3000)
                }
        });
    }


    render() {
        const {requestId}=this.state;
        return (

                <div className="app-padding-lr24">
                        <div className="step app-padding-tb20" style={{height:'200px'}}>
                            <div className="s-flex1 app-input-edit" style={{height:'200px'}}>
                                <textarea  className="s-flex1 app-999-font28 app-setting-textarea-word"  placeholder="输入内容"></textarea>
                            </div>
                        </div>
                    <div className="step  app-666-font28" >
                        <div className="s-flex1" style={{flexWrap:'wrap'}}>
                            {
                                requestId.length!=0?requestId.map((json,map)=>(
                                    <div className="app-upload-img-temple-backend">
                                        <img src={json} className="app-wh100-all" />
                                    </div>
                                )):''
                            }
                            <div className="app-upload-img-temple-backend" onClick={this.uploadImg.bind(this)}>
                                <img src="http://pic17.nipic.com/20111003/5847249_214945441162_2.jpg" className="app-wh100-all" />
                            </div>
                        </div>
                    </div>

                        <div className="step app-padding-tb20 app-margin-tb20 app-yellow-radius-check-button">
                            <div className="s-center" onClick={this.editInfo.bind(this)}>发布</div>
                        </div>

                </div>



        )
    }
}


export default dynamic