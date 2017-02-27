'usr strict';

import React from 'react';



import {Router, Route, IndexRoute, browserHistory, Link} from 'react-router';


import LocalStorage from '../../LocalStorage'
import {HttpService} from '../../utils'

class wish extends React.Component {
    constructor() {
        super();
    }

    async pay(){
        const pray=document.getElementById('pray').value;
        let type;
        if(this.props.params.type==1){
            type=1
        }else if(this.props.params.type==2){
            type=2
        }
        await HttpService.saveJson({
            url:'/v1/p/user/pay?accessToken='+LocalStorage.get('token')+'',
            data:{
                amount:LocalStorage.get('money'),
                id:this.props.params.id,
                method:2,
                pray:pray,
                type:type,
            }
        })

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
                    <div className="s-center wish-text app-333-font32">木梦田要 茜楞全运会人侍候夫协</div>
                </div>

                <div className="step">
                    <div className="s-center">
                        <div className="wish-money">
                            <span className="app-333-font36">{LocalStorage.get('money')}</span><span className="app-333-font24">元</span>
                        </div>
                    </div>
                </div>
                <div className="step wish-input-content">
                    <div className="app-padding-lr24 app-333-font32" style={{height:'40px',lineHeight:'40px'}}>祈愿</div>
                    <div>
                        <input type="text" id="pray" className="wish-input" placeholder="保佑平安，万事如意"/>
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