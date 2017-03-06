'use strict';

import React from 'react';


import Foot from '../Foot'
import jt from '../../../src/images/my/jt.png'

import {Router, Route, IndexRoute, browserHistory, Link} from 'react-router';
import App from '../app'
import jsBridge from '../../jsBridge'



class OperatIndex extends React.Component {
    constructor() {
        super();
    }

    componentWillMount(){
        jsBridge.getBrideg(()=>{
            jsBridge.setTitle('运营后台')
        })
    }


    sendMessageToApp_type_2(type){
        jsBridge.sendMessageToApp_type_2(type)
    }
    render() {
        return (
            <div className="app-container">

                <div className="app-padding-tb20"></div>
                <App cb={this.sendMessageToApp_type_2.bind(this,'SettingWord')}>
                    <div className="step app-padding-lr24 app-white-chunk border-bottom">
                        <div className="s-flex2">
                            <div className="app-333-font28 app-padding-l24">发布每日一句</div>
                        </div>

                        <div className="s-flex1 s-j-end"><img className="app-wh-45" src={jt}/></div>
                    </div>
                </App>
                <App  className="app-a" cb={this.sendMessageToApp_type_2.bind(this,'ReplaceBanner')} >
                    <div className="step app-padding-lr24 app-white-chunk">
                        <div className="s-flex2">
                            <div className=" app-333-font28 app-padding-l24">更换banner</div>
                        </div>

                        <div className="s-flex1 s-j-end"><img className="app-wh-45" src={jt}/></div>
                    </div>
                </App>
                <div className="app-padding-tb20"></div>

                <App  cb={this.sendMessageToApp_type_2.bind(this,'TempleList')}>
                    <div className="step app-padding-lr24 app-white-chunk border-bottom">
                        <div className="s-flex2">
                            <div className="app-333-font28 app-padding-l24">创建寺庙</div>

                        </div>

                        <div className="s-flex1 s-j-end"><img className="app-wh-45" src={jt}/></div>
                    </div>
                </App>

                <App cb={this.sendMessageToApp_type_2.bind(this,'AppInfo')}>
                    <div className="step app-padding-lr24 app-white-chunk">
                        <div className="s-flex2">
                            <div className="app-333-font28 app-padding-l24">查看平台信息</div>
                        </div>

                        <div className="s-flex1 s-j-end"><img className="app-wh-45" src={jt}/></div>
                    </div>

                </App>

                {/*<Foot type="3"></Foot>*/}
            </div>
        )
    }
}


export default OperatIndex