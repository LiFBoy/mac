'usr strict';

import React from 'react';


import Foot from '../Foot'
import jt from '../../../src/images/my/jt.png'

import {Router, Route, IndexRoute, browserHistory, Link} from 'react-router';
import App from '../app'
import jsBridge from '../../jsBridge'

class TempleIndex extends React.Component {
    constructor() {
        super();
        jsBridge.getBrideg();
        jsBridge.setTitle('寺庙后台')
    }

    componentWillMount(){
       // this.title()
    }

    sendMessageToApp_type_2(type){
        jsBridge.sendMessageToApp_type_2(type);
    }
    render() {
        return (
            <div className="app-container">
                <div className="app-padding-tb20"></div>
                <App  cb={this.sendMessageToApp_type_2.bind(this,'dynamic')}>
                    <div className="step app-padding-lr24 app-white-chunk border-bottom">
                        <div className="s-flex2">
                            <div className="app-333-font28 app-padding-l24">发布动态</div>
                        </div>

                        <div className="s-flex1 s-j-end"><img className="app-wh-45" src={jt}/></div>
                    </div>
                </App>
                <App  cb={this.sendMessageToApp_type_2.bind(this,'TempleEdit')}>
                    <div className="step app-padding-lr24 app-white-chunk">
                        <div className="s-flex2">
                            <div className=" app-333-font28 app-padding-l24">编辑资料</div>
                        </div>

                        <div className="s-flex1 s-j-end"><img className="app-wh-45" src={jt}/></div>
                    </div>
                </App>
                <div className="app-padding-tb20"></div>

                <App cb={this.sendMessageToApp_type_2.bind(this,'Donations')}>
                    <div className="step app-padding-lr24 app-white-chunk border-bottom">
                        <div className="s-flex2">
                            <div className="app-333-font28 app-padding-l24">发布募捐</div>

                        </div>

                        <div className="s-flex1 s-j-end"><img className="app-wh-45" src={jt}/></div>
                    </div>
                </App>

                <App  cb={this.sendMessageToApp_type_2.bind(this,'Donations')}>
                    <div className="step app-padding-lr24 app-white-chunk">


                        <div className="s-flex2">
                            <div className="app-333-font28 app-padding-l24">查看流水</div>
                        </div>

                        <div className="s-flex1 s-j-end"><img className="app-wh-45" src={jt}/></div>

                    </div>

                </App>

                {/*<Foot type="3"></Foot>*/}
            </div>
        )
    }
}


export default TempleIndex