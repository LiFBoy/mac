'use strict';

import React from 'react';


import Foot from '../Foot'
import feedbackpro from '../../../src/images/my/feedbackpro.png'
import myalms from '../../../src/images/my/myalms.png'
import setting from '../../../src/images/my/setting.png'
import payinfo from '../../../src/images/my/payinfo.png'
import jt from '../../../src/images/my/jt.png'

import {Router, Route, IndexRoute, browserHistory, Link} from 'react-router';
import {HttpService, Toast} from '../../utils'
import App from '../app'
// import {Foot} from '../Foot'

import LocalStorage from '../../LocalStorage'
import jsBridge from '../../jsBridge'

class MyMain extends React.Component {

    constructor() {
        super();
        this.state = {
            info: {},
            uploadUserImg: [],
            base64: [],
            code: []
        };

    }


    async _banner() {

        var code = await HttpService.query({
            url: "/v1/public/get/banners",
        });

        this.state({
            code: code.banners
        })

    }


    componentWillMount() {

        console.log(this);

        //Toast.toast('componentWillMount',2000);
        this.info();
    }


    componentDidMount() {

        jsBridge.getBrideg(()=> {
            jsBridge.listen(()=> {

                //Toast.toast('componentWillMount',2000);

                 // document.body.innerHTML=LocalStorage.get('token');
                //Toast.toast(LocalStorage.get('token'),3000,'bottom');
                // document.body.innerHTML='2';

                if(!LocalStorage.get('token')){

                  //  Toast.toast(location.state,3000);
                        setTimeout(()=>{
                            this.props.history.replaceState(null,'Login');
                        },1000);

                   // window.location.href='/app.html#/login'

                }else{
                    this.info();
                }



            })
        })

    }
    sendMessageToApp_type_2(type) {
        jsBridge.getBrideg(()=> {
            jsBridge.sendMessageToApp_type_2(type)
        })
    }

    async info() {

        console.log(LocalStorage.get('token'));
        let code = await HttpService.query({
            url: '/v1/p/user/info',
            data: {accessToken: LocalStorage.get('token')}
        });


        this.setState({
            info: {
                headImgUrl: code.headImgUrl,
                username: code.username,
                residence: code.residence,
                role:code.role
            }
        })
    }

    uploadUserImg() {

        this.setState({
            uploadUserImg: []
        });
        jsBridge.uploadImg((ids, base64)=> {
            this.setState({
                uploadUserImg: this.state.uploadUserImg.concat(ids),
                base64: base64
            });

            this.upload()


        });

    }

    async upload() {
        await HttpService.saveJson({
            url: '/v1/p/user/update/head/image?accessToken=' + LocalStorage.get('token') + '',
            data: {
                picture: this.state.uploadUserImg[0]
            }
        });

        this.info();
    }

    role(){
        if(this.state.info.role==2){
            // alert(1111)
            return <App cb={this.sendMessageToApp_type_2.bind(this, 'TempleIndex')}>
                <div className="step app-padding-lr24 app-white-chunk border-bottom">
                    <div className="s-flex2">

                        <div className="app-333-font28 app-padding-l24">寺庙后台</div>

                    </div>

                    <div className="s-flex1 s-j-end"><img className="app-wh-45" src={jt}/></div>
                </div>
            </App>
        }else if(this.state.info.role==3){
            return <App cb={this.sendMessageToApp_type_2.bind(this, 'OperatIndex')} className="app-a">
                <div className="step app-padding-lr24 app-white-chunk">


                    <div className="s-flex2">
                        <div className="app-333-font28 app-padding-l24">运营后台</div>
                    </div>

                    <div className="s-flex1 s-j-end"><img className="app-wh-45" src={jt}/></div>

                </div>

            </App>
        }else if(this.state.info.role==1){
            return
        }
    }

    render() {
        const {info}=this.state;
        return (
            <div className="app-container" ref="_myMain">

                <div className="step app-padding-lr24 my-main">

                    <div className="img" onClick={this.uploadUserImg.bind(this)}>

                        {/*<img src={this.state.base64.length != 0 ? 'data:image/png;base64,' + this.state.base64[0] : info.headImgUrl}*/}
                        {/*className="app-wh100-all-radius"/>*/}
                        <img src={info.headImgUrl||'dist/bg/loginHead.jpg'}
                             className="app-wh100-all-radius"/>
                        {/*<img src={'http://oss-cn-hangzhou.aliyuncs.com/rulaibao/'+info.headImgUrl+''} className="app-wh100-all-radius"/>*/}


                    </div>

                    <div className="s-right s-j-center" style={{flexDirection: 'column', alignItems: 'flex-start'}}>
                        <App cb={this.sendMessageToApp_type_2.bind(this, 'PersonalInfo')}>

                            <div className="app-333-font30 app-line-height-one">{info.username||'匿名'}</div>

                        </App>

                        <div className="app-999-font22 app-line-height-one"
                             style={{paddingTop: '24px'}}>{info.residence}</div>
                    </div>
                </div>


                <div className="app-margin-tb20"></div>

                <App cb={this.sendMessageToApp_type_2.bind(this, 'MyAlms')}>
                    <div className="step app-padding-lr24 app-white-chunk border-bottom">
                        <div className="s-flex2"><img className="app-wh-45" src={myalms}/>
                            <div className="app-333-font28 app-padding-l24">我的日善</div>
                        </div>

                        <div className="s-flex1 s-j-end"><img className="app-wh-45" src={jt}/></div>
                    </div>
                </App>
                <App cb={this.sendMessageToApp_type_2.bind(this, 'PayInfo')}>
                    <div className="step app-padding-lr24 app-white-chunk">
                        <div className="s-flex2"><img className="app-wh-45" src={payinfo}/>
                            <div className=" app-333-font28 app-padding-l24">我的供养</div>
                        </div>

                        <div className="s-flex1 s-j-end"><img className="app-wh-45" src={jt}/></div>
                    </div>
                </App>
                <div className="app-margin-tb20"></div>

                <App cb={this.sendMessageToApp_type_2.bind(this, 'Feedbackpro')}>
                    <div className="step app-padding-lr24 app-white-chunk border-bottom">
                        <div className="s-flex2">

                            <img className="app-wh-45" src={feedbackpro}/>
                            <div className="app-333-font28 app-padding-l24">反馈问题</div>

                        </div>

                        <div className="s-flex1 s-j-end"><img className="app-wh-45" src={jt}/></div>
                    </div>
                </App>

                <App cb={this.sendMessageToApp_type_2.bind(this, 'Setting')}>
                    <div className="step app-padding-lr24 app-white-chunk">


                        <div className="s-flex2"><img className="app-wh-45" src={setting}/>
                            <div className="app-333-font28 app-padding-l24">设置</div>
                        </div>

                        <div className="s-flex1 s-j-end"><img className="app-wh-45" src={jt}/></div>

                    </div>

                </App>
                <div className="app-margin-tb20"></div>

                {
                    this.role()
                }





            </div>
        )
    }
}


export default MyMain