'usr strict';

import React from 'react';

import {HttpService, Toast} from '../utils'

import LocalStorage from '../LocalStorage'


import {Router, Route, IndexRoute, browserHistory, Link} from 'react-router';
import pwd from '../../src/images/login/pwd.png'
import phoneImg from '../../src/images/login/phone.png'
// import loginHead from '../../src/images/login/loginHead.jpg'

class Login extends React.Component {

    constructor() {
        super();

        // document.body.innerHTML=1111;
        this.state = {
            disabled: false,
            text: '获取验证码',
            timer: 60,
            val: '',
            code: ''
        };

        this.countdown = []
    }


    componentDidMount() {

    }

    changeValue(e) {

        this.check_phone(e.target.value);

    }

    changeCode(e) {

        this.setState({
            code: e.target.value,
        });

    }


    check_phone(phone) {
        let patt = /^[1]\d{10}$/;
        let val = phone;

        this.setState({
            val: val,
        });
        if (!val) {

            Toast.toast('手机号不能为空', 3000,'bottom');

            return false;
        } else if (!patt.test(val)) {
            Toast.toast('手机号不正确，请重新输入', 3000,'bottom');
            return false;
        }


        return true
    }


    async getCode(phone) {


        if (!this.check_phone(phone)) {
            return;
        }
        if (this.state.disabled) {
            return;
        }

       // let self = this;
        try {
            let code = await HttpService.save({
                url: "/v1/public/send/verify/code",
                data: {phone: phone}
            });
            console.log(code);

            this.setState({
                disabled: true,
                text: '59s后重新获取',
                timer: 59,
            });


            this.countdown = setInterval( ()=> {
                var tt = this.state.timer - 1;
                if (tt <= 0) {
                    this.setState({
                        disabled: false,
                        text: '获取验证码',
                        timer: 60,
                    });
                    clearInterval(this.countdown);
                    return;
                }
                this.setState({
                    disabled: true,
                    text: tt + 's后重新获取',
                    timer: tt,
                })
            }, 1000);
        } catch (err) {
            // console.log(err); // 这里捕捉到错误 `error`
        }


    }

    async login(phone, code) {


        if (!phone || !code) {
            // Toast.toast('请先获取验证码', 3000);
            return;
        }

        let result = await HttpService.save({
            url: '/v1/public/login',
            data: {verifyCode: code, phone: phone}
        });



      if(!!result){



          LocalStorage.add('phone',phone);
          clearInterval(this.countdown);
          LocalStorage.add('token', result.accessToken);
             setTimeout(()=>{
                 this.props.history.replaceState(null,'MyMain');
             },1000);

          window.g_bridge.callHandler('sendMessageToApp', {
                  type: 18, data: {accessToken:result.accessToken}
              },
              (response)=> {

              });
      }

        // if(!!result){



        //    document.body.innerHTML='22';

          //  clearInterval(this.countdown);

        // }

    }


    render() {

        let {val, code}=this.state;

        return (
            <div className="app-login app-padding-lr24" ref='_login'>
                <form>
                    <div className="step">
                        <div className="s-center">
                            <div className="login-img" style={{textAlign:'center'}}>
                                <img src='/dist/bg/loginHead.jpg' style={{width:'22vw',height:'22vw'}}
                                     className="app-wh100-all"/>
                            </div>
                        </div>
                    </div>

                    <div className="step border-bottom app-wh120">
                        <div className="app-wh-45 app-margin-right24">
                            <img className="app-wh100-all-radius" src={phoneImg}/>
                        </div>

                        <div className="s-flex1 app-666-font30">
                            <input className="app-999-font30 login-input" onBlur={this.changeValue.bind(this)}
                                   placeholder="手机号" type="number"/>
                        </div>

                    </div>
                    <div className="step border-bottom app-wh120">
                        <div className="app-wh-45 app-margin-right24">
                            <img className="app-wh100-all-radius" src={pwd}/>
                        </div>

                        <div className="s-flex1 app-666-font30">
                            <input className="app-999-font30 login-input" onChange={this.changeCode.bind(this)}
                                   placeholder="验证码" type="number"/>
                        </div>
                        <div className="s-flex1 s-j-end app-666-font30">
                            <div className="login-code step">
                                <div className="s-flex1 s-j-center"
                                     onClick={this.getCode.bind(this, val)}>{this.state.text}</div>
                            </div>
                        </div>

                    </div>

                    <div className="step app-yellow-radius-check-button login-btn">
                        {/*<input className="s-center" type="submit" readOnly="readOnly" value="登录"/>*/}

                        <div className="s-center" onClick={this.login.bind(this, val, code)}>登录</div>
                    </div>
                </form>
            </div>

        )
    }
}


export default Login