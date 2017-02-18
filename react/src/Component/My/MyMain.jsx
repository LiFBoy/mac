'usr strict';

import React from 'react';


import Foot from '../Foot'
import feedbackpro from '../../../src/images/my/feedbackpro.png'
import myalms from '../../../src/images/my/myalms.png'
import setting from '../../../src/images/my/setting.png'
import payinfo from '../../../src/images/my/payinfo.png'
import jt from '../../../src/images/my/jt.png'

import {Router, Route, IndexRoute, browserHistory, Link} from 'react-router';
import {HttpService} from '../../utils'
import App from '../app'
// import {Foot} from '../Foot'

import LocalStorage from '../../LocalStorage'

class MyMain extends React.Component {

    constructor() {
        super();
        console.log(1);
        // document.body.innerHTML = 33;
        this.state={
            info:{}
        }
    }

    componentWillMount(){
        this.info();

        if(!LocalStorage.get('token')){
            // window.g_bridge.callHandler('sendMessageToApp', {type:2, data:{url:"http://www.baidu.com"}}, function(response) {});
        }
    }

    goto() {
        window.g_bridge.callHandler('sendMessageToApp', {
            type: 2, data: {url: 'http://192.168.0.101:3002/index.html#/personalInfo'}},
        (response)=>{

        })
    }

    async info(){
        console.log(LocalStorage.get('token'));
        let code=await HttpService.query({
            url:'/v1/p/user/info',
            data:{accessToken:LocalStorage.get('token')}
        });
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
                        {/*<Link to="/PersonalInfo" className="app-a">*/}
                            <div className="app-333-font30 app-line-height-one" onClick={this.goto.bind(this)}>aaadqdqd</div>
                        {/*</Link>*/}
                        <div className="app-999-font22 app-line-height-one" style={{paddingTop:'24px'}}>{info.residence}</div>
                    </div>
                </div>

                <app></app>

                <div className="app-margin-tb20"></div>
                <Link to="/MyAlms" className="app-a">
                    <div className="step app-padding-lr24 app-white-chunk border-bottom">
                        <div className="s-flex2"><img className="app-wh-45" src={myalms}/>
                            <div className="app-333-font28 app-padding-l24">我的日善</div>
                        </div>

                        <div className="s-flex1 s-j-end"><img className="app-wh-45" src={jt}/></div>
                    </div>
                </Link>
                <Link to="/PayInfo" className="app-a">
                    <div className="step app-padding-lr24 app-white-chunk">
                        <div className="s-flex2"><img className="app-wh-45" src={payinfo}/>
                            <div className=" app-333-font28 app-padding-l24">我的供养</div>
                        </div>

                        <div className="s-flex1 s-j-end"><img className="app-wh-45" src={jt}/></div>
                    </div>
                </Link>
                <div className="app-margin-tb20"></div>

                <Link to="/Feedbackpro" className="app-a">
                    <div className="step app-padding-lr24 app-white-chunk border-bottom">
                        <div className="s-flex2">

                            <img className="app-wh-45" src={feedbackpro}/>
                            <div className="app-333-font28 app-padding-l24">反馈问题</div>

                        </div>

                        <div className="s-flex1 s-j-end"><img className="app-wh-45" src={jt}/></div>
                    </div>
                </Link>

                <Link to="/Setting" className="app-a">
                    <div className="step app-padding-lr24 app-white-chunk">


                        <div className="s-flex2"><img className="app-wh-45" src={setting}/>
                            <div className="app-333-font28 app-padding-l24">设置</div>
                        </div>

                        <div className="s-flex1 s-j-end"><img className="app-wh-45" src={jt}/></div>

                    </div>

                </Link>
                <div className="app-margin-tb20"></div>

                <Link to="/TempleIndex" className="app-a">
                    <div className="step app-padding-lr24 app-white-chunk border-bottom">
                        <div className="s-flex2">

                            <div className="app-333-font28 app-padding-l24">寺庙后台</div>

                        </div>

                        <div className="s-flex1 s-j-end"><img className="app-wh-45" src={jt}/></div>
                    </div>
                </Link>

                <Link to="/OperatIndex" className="app-a">
                    <div className="step app-padding-lr24 app-white-chunk">


                        <div className="s-flex2">
                            <div className="app-333-font28 app-padding-l24">运营后台</div>
                        </div>

                        <div className="s-flex1 s-j-end"><img className="app-wh-45" src={jt}/></div>

                    </div>

                </Link>

                <App to="http://www.baidu.com">

                    ssefwfjwlfwj
                </App>


                <a href="#/OperatIndex" className="app-a">sssswfwfwfwiofuw</a>
                {/*<Foot type="3"></Foot>*/}
            </div>
        )
    }
}


export default MyMain