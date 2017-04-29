'use strict';

import React from 'react';



import {Router, Route, IndexRoute, browserHistory, Link} from 'react-router';


import LocalStorage from '../../LocalStorage'
import {HttpService,Toast} from '../../utils'
import jsBridge from '../../jsBridge'


class wish extends React.Component {
    constructor() {
        super();
    }

    componentWillMount(){

        debugger
        // document.body.innerHTML='111'
        jsBridge.getBrideg(()=>{
            jsBridge.setTitle('祈愿')
        })
    }

    yuan_fen(num){
        return num * 100
    }

    async pay(){
        const pray=this.refs.pray.value;
        let type;
        if(this.props.params.type==1){
            type=1
        }else if(this.props.params.type==2){
            type=2
        }
        const code=await HttpService.saveJson({
            url:'/v1/p/user/pay?accessToken='+LocalStorage.get('token')+'',
            data:{
                amount:this.yuan_fen(this.props.params.money),
                id:this.props.params.id,
                method:2,
                pray:pray,
                type:type,
            }
        });

        if(!!code){
            window.g_bridge.callHandler('sendMessageToApp', {
                    type: 3, data: {sign:code.aliPay.sign}
                },
                (response)=> {
                    if(response.resultStatus == 9000 ){
                        jsBridge.getBrideg(()=>{
                            jsBridge.sendMessageToApp_type_2('paysuccess',this.props.params.id)
                        })
                    }else {
                        Toast.toast('支付失败',2000)
                    }

                })
        }

    }


    render() {


        return (
            <div className="app-container wish-container app-padding-lr24">
                <div className="step">
                    <div className="s-center">
                        <div className="wish-img">
                            <img src='/dist/bg/wish.png' className="app-wh100-all"/>
                        </div>
                    </div>
                </div>

                <div className="step">
                    <div className="s-center wish-text app-333-font32">佛祖有灵，保佑你的祈愿称心如意</div>
                </div>

                <div className="step">
                    <div className="s-center">
                        <div className="wish-money">
                            <span className="app-333-font36">{this.props.params.money}</span><span className="app-333-font24">元</span>
                        </div>
                    </div>
                </div>
                <div className="step wish-input-content">
                    <div className="app-padding-lr24 app-333-font32" style={{height:'40px',lineHeight:'40px'}}>祈愿</div>
                    <div>
                        <input type="text" ref="pray" className="wish-input" placeholder="保佑平安，万事如意"/>
                    </div>
                </div>
                <div onClick={this.pay.bind(this)} className="step app-yellow-radius-check-button" style={{height:'100px'}}>
                    <div className="s-center">进行祈愿</div>
                </div>
            </div>

        )
    }
}


export default wish