'use strict';

import React from 'react';

import jt from '../../../src/images/my/jt.png'

import jsBridge from '../../jsBridge'
import LocalStorage from '../../LocalStorage'
import {Toast} from '../../utils'

class Setting extends React.Component {
    constructor() {
        super();


    }

    componentWillMount(){
      // Toast.toast('22',222);

        jsBridge.getBrideg(
            ()=>{
                jsBridge.setTitle('退出');

            }
        );


    }

    set(){
            window.g_bridge.callHandler('sendMessageToApp', {
                    type: 18, data: {accessToken:' '}
                },
                (response)=> {

                });

        jsBridge.getBrideg(()=>{
            jsBridge.goBack();
        });

        LocalStorage.add('token','');
        Toast.toast('退出成功',3000);
    }




    render(){
        return (
            <div className="app-container">

                <div className="app-height-20"></div>

                    <div className="step app-white app-padding-lr24" style={{height:'100px'}}　onClick={this.set.bind(this)}>
                        <div className="s-flex1 app-333-font28">退出登录</div>
                        <div className="s-flex1 s-j-end"><img src={jt} /></div>
                    </div>

            </div>
        )
    }
}


export default Setting