'usr strict';

import React from 'react';


import Foot from '../Foot'
import feedbackpro from '../../../src/images/my/feedbackpro.png'
import myalms from '../../../src/images/my/myalms.png'
import setting from '../../../src/images/my/setting.png'
import payinfo from '../../../src/images/my/payinfo.png'
import jt from '../../../src/images/my/jt.png'

import {Router, Route, IndexRoute, browserHistory, Link} from 'react-router';
import {HttpService,Toast} from '../../utils'
import App from '../app'
// import {Foot} from '../Foot'

import LocalStorage from '../../LocalStorage'
import jsBridge from '../../jsBridge'

class MyMain extends React.Component {

    constructor() {
        super();
        this.state = {
            info: {}
        };

       // jsBridge.getBrideg();



    }

    componentWillMount() {

        if (!LocalStorage.get('token')) {
            this.sendMessageToApp_type_2('login')

        }else{
            this.info();
        }

    }



    sendMessageToApp_type_2(type) {

         // document.body.innerHTML=window.g_bridge;

        window.g_bridge.callHandler('sendMessageToApp', {
                type: 2, data: {url: 'http://172.27.35.4:3002/index.html#/' + type + ''}
            },
            (response)=> {

            })
    }





    async info(){
        console.log(LocalStorage.get('token'));
        let code=await HttpService.query({
            url:'/v1/p/user/info',
            data:{accessToken:LocalStorage.get('token')}
        });

        // Toast.toast('222',33333)
        this.setState({
            info:{
                headImgUrl:code.headImgUrl,
                username:code.username,
                residence:code.residence
            }
        })




    }


    render() {
        const {info}=this.state;
        return (
            <div className="app-container">

                <div className="step app-padding-lr24 my-main">
                    <Link to="/PersonalInfo" className="app-a">
                        <div className="img"><img src={info.headImgUrl} className="app-wh100-all-radius"/></div>
                    </Link>
                    <div className="s-right s-j-center" style={{flexDirection: 'column', alignItems: 'flex-start'}}>
                        <App cb={this.sendMessageToApp_type_2.bind(this,'PersonalInfo')}>

                            <div className="app-333-font30 app-line-height-one">{info.username}</div>



                        </App>

                        <div className="app-999-font22 app-line-height-one" style={{paddingTop:'24px'}}>{info.residence}</div>
                    </div>
                </div>



                <div className="app-margin-tb20"></div>

                <App cb={this.sendMessageToApp_type_2.bind(this,'MyAlms')}>
                    <div className="step app-padding-lr24 app-white-chunk border-bottom">
                        <div className="s-flex2"><img className="app-wh-45" src={myalms}/>
                            <div className="app-333-font28 app-padding-l24">我的日善</div>
                        </div>

                        <div className="s-flex1 s-j-end"><img className="app-wh-45" src={jt}/></div>
                    </div>
                </App>
                <App cb={this.sendMessageToApp_type_2.bind(this,'PayInfo')}>
                    <div className="step app-padding-lr24 app-white-chunk">
                        <div className="s-flex2"><img className="app-wh-45" src={payinfo}/>
                            <div className=" app-333-font28 app-padding-l24">我的供养</div>
                        </div>

                        <div className="s-flex1 s-j-end"><img className="app-wh-45" src={jt}/></div>
                    </div>
                </App>
                <div className="app-margin-tb20"></div>

                <App cb={this.sendMessageToApp_type_2.bind(this,'Feedbackpro')}>
                    <div className="step app-padding-lr24 app-white-chunk border-bottom">
                        <div className="s-flex2">

                            <img className="app-wh-45" src={feedbackpro}/>
                            <div className="app-333-font28 app-padding-l24">反馈问题</div>

                        </div>

                        <div className="s-flex1 s-j-end"><img className="app-wh-45" src={jt}/></div>
                    </div>
                </App>

                <App cb={this.sendMessageToApp_type_2.bind(this,'Setting')}>
                    <div className="step app-padding-lr24 app-white-chunk">


                        <div className="s-flex2"><img className="app-wh-45" src={setting}/>
                            <div className="app-333-font28 app-padding-l24">设置</div>
                        </div>

                        <div className="s-flex1 s-j-end"><img className="app-wh-45" src={jt}/></div>

                    </div>

                </App>
                <div className="app-margin-tb20"></div>

                <App cb={this.sendMessageToApp_type_2.bind(this,'TempleIndex')}>
                    <div className="step app-padding-lr24 app-white-chunk border-bottom">
                        <div className="s-flex2">

                            <div className="app-333-font28 app-padding-l24">寺庙后台</div>

                        </div>

                        <div className="s-flex1 s-j-end"><img className="app-wh-45" src={jt}/></div>
                    </div>
                </App>

                <App cb={this.sendMessageToApp_type_2.bind(this,'OperatIndex')} to="/OperatIndex" className="app-a">
                    <div className="step app-padding-lr24 app-white-chunk">


                        <div className="s-flex2">
                            <div className="app-333-font28 app-padding-l24">运营后台</div>
                        </div>

                        <div className="s-flex1 s-j-end"><img className="app-wh-45" src={jt}/></div>

                    </div>

                </App>

                {/*<Foot type="3"></Foot>*/}
            </div>
        )
    }
}


export default MyMain