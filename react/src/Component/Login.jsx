'usr strict';

import React from 'react';

import {HttpService,Toast} from '../Http'

import LocalStorage from '../LocalStorage'




import {Router, Route, IndexRoute, browserHistory, Link} from 'react-router';
import pwd from '../../src/images/login/pwd.png'
import phoneImg from '../../src/images/login/phone.png'

class Login extends React.Component {
    constructor() {
        super();
        this.state={
            disabled: false,
            text: '获取验证码',
            timer: 60,
            val: '',
            code:''
        };

        this.countdown = []
    }

    componentDidMount(){

    }

    changeValue(e) {

        this.check_phone(e.target.value);

    }

    changeCode(e) {

        this.setState({
            code: e.target.value,
        });

    }


    check_phone(phone){
        let patt =/^[1]\d{10}$/;
        let val = phone;

        this.setState({
            val: val,
        });
        if(!val){
            Toast.toast('手机号不能为空', 3000);

            return false;
        }else if(!patt.test(val)){
            Toast.toast('手机号不正确，请重新输入', 3000);
            return false;
        }



        return true
    }





    getCode(phone){

        if(!this.check_phone(phone)){
            return;
        }

        let self = this;


        HttpService.save({
            url:"/v1/public/send/verify/code",
            data:{phone:phone}
        }).then((res)=>{
            console.log(res);

            self.setState({
                disabled: true,
                text: '59s后重新获取',
                timer: 59,
            });

            self.countdown = setInterval(function () {
                var tt = self.state.timer - 1;
                if (tt <= 0) {
                    self.setState({
                        disabled: false,
                        text: '获取验证码',
                        timer: 60,
                    });
                    clearInterval(self.countdown);
                    return;
                }
                self.setState({
                    disabled: true,
                    text: tt + 's后重新获取',
                    timer: tt,
                })
            }, 1000);
        },(error)=>{
            console.log(error)
        })
    }

    login(phone,code){

        console.log(phone);
        console.log(code);



        if (!code) {
            Toast.toast('请先获取验证码', 3000);
            return;
        }
        HttpService.save({
            url:'/v1/public/login',
            data:{verifyCode:code,phone:phone}
        }).then((res)=>{

            console.log(res);

            LocalStorage.add('token',res.accessToken);

            console.log(LocalStorage.get('token'))

        },(error)=>{
            console.log(error)
        });

        this.usrInfo();
    }

    usrInfo(){
        HttpService.query({
            url:"/v1/p/user/info",
            data:{accessToken:LocalStorage.get('token')}
        }).then((res)=>{
            console.log(res)
        },(error)=>{
            console.log(error)
        })
    }




    render() {

        let {val,code}=this.state;

        return (
            <div className="app-login app-padding-lr24">
                <form>
                <div className="step">
                    <div className="s-center">
                        <div className="login-img">
                            <img src="http://img4.imgtn.bdimg.com/it/u=398347842,2770887580&fm=23&gp=0.jpg" className="app-wh100-all"/>
                        </div>
                    </div>
                </div>

                <div className="step border-bottom app-wh120">
                    <div className="app-wh-45 app-margin-right24">
                        <img className="app-wh100-all-radius" src={phoneImg}/>
                    </div>

                    <div className="s-flex1 app-666-font30">
                        <input className="app-999-font30 login-input" onBlur={this.changeValue.bind(this)}  placeholder="手机号" type="number"/>
                    </div>

                </div>
                <div className="step border-bottom app-wh120">
                    <div className="app-wh-45 app-margin-right24">
                        <img className="app-wh100-all-radius" src={pwd}/>
                    </div>

                    <div className="s-flex1 app-666-font30">
                        <input className="app-999-font30 login-input"  onChange={this.changeCode.bind(this)} placeholder="验证码" type="number"/>
                    </div>
                    <div className="s-flex1 s-j-end app-666-font30">
                       <div className="login-code step">
                           <div className="s-flex1 s-j-center" onClick={this.getCode.bind(this,val)}>{this.state.text}</div>
                       </div>
                    </div>

                </div>

                <div className="step app-yellow-radius-check-button login-btn">
                    {/*<input className="s-center" type="submit" readOnly="readOnly" value="登录"/>*/}

                    <div className="s-center" onClick={this.login.bind(this,val,code)}>登录</div>
                </div>
                </form>
            </div>

        )
    }
}


export default Login