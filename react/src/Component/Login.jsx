'usr strict';

import React from 'react';



import {Router, Route, IndexRoute, browserHistory, Link} from 'react-router';
import pwd from '../../src/images/login/pwd.png'
import phone from '../../src/images/login/phone.png'

class Login extends React.Component {
    constructor() {
        super();
    }


    render() {


        return (
            <div className="app-login app-padding-lr24">
                <div className="step">
                    <div className="s-center">
                        <div className="login-img">
                            <img src="http://img4.imgtn.bdimg.com/it/u=398347842,2770887580&fm=23&gp=0.jpg" className="app-wh100-all"/>
                        </div>
                    </div>
                </div>

                <div className="step border-bottom app-wh120">
                    <div className="app-wh-45 app-margin-right24">
                        <img className="app-wh100-all-radius" src={phone}/>
                    </div>

                    <div className="s-flex1 app-666-font30">
                        <input className="app-999-font30 login-input" placeholder="手机号" type="text"/>
                    </div>

                </div>
                <div className="step border-bottom app-wh120">
                    <div className="app-wh-45 app-margin-right24">
                        <img className="app-wh100-all-radius" src={pwd}/>
                    </div>

                    <div className="s-flex1 app-666-font30">
                        <input className="app-999-font30 login-input" placeholder="验证码" type="text"/>
                    </div>
                    <div className="s-flex1 s-j-end app-666-font30">
                       <div className="login-code step">
                           <div className="s-flex1 s-j-center">获取验证码</div>
                       </div>
                    </div>

                </div>

                <div className="step app-yellow-radius-check-button login-btn">
                    <div className="s-center">登录</div>
                </div>
            </div>

        )
    }
}


export default Login