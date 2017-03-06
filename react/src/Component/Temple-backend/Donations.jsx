'use strict';

import React from 'react';


import Foot from '../Foot'
import jt from '../../../src/images/my/jt.png'

import {Router, Route, IndexRoute, browserHistory, Link} from 'react-router';
import {HttpService} from '../../utils'

import LocalStorage from '../../LocalStorage'
import jsBridge from '../../jsBridge'
import App from '../app'

class Donations extends React.Component {
    constructor() {
        super();
    }

    componentWillMount(){
      //  this.title();
        jsBridge.getBrideg(()=>{
            jsBridge.setTitle('发布募捐')
        })
    }
    getValue(name){
        return document.getElementById(name).value;
    }


    async editInfo(){

        const abbotWords=this.getValue('abbotWords'),
            amount=this.getValue('amount'),
            _content=this.getValue('_content'),
            title=this.getValue('title');



        let code = await HttpService.saveJson({
            url: '/v1/ab/abbot/create/temple/collection?accessToken=' + LocalStorage.get('token') + '',
            data: {
                abbotWords:abbotWords,
                amount:amount,
                content:_content,
                title:title
            }
        });


        console.log(code)
    }
    render() {
        return (
            <div className="app-padding-lr24">

                <div className="step border-bottom app-padding-tb20">
                    <div className="s-flex1 app-666-font32">募捐名字</div>
                </div>

                <div className="step app-padding-tb20" style={{height:'200px'}}>
                    <div className="s-flex1 app-input-edit" style={{height:'200px'}}>
                        <textarea id="title"  className="s-flex1 app-999-font28 app-setting-textarea-word"  placeholder="募捐名字"></textarea>
                    </div>
                </div>

                <div className="step border-bottom app-padding-tb20">
                    <div className="s-flex1 app-666-font32">基本介绍</div>
                </div>

                <div className="step app-padding-tb20" style={{height:'200px'}}>
                    <div className="s-flex1 app-input-edit" style={{height:'200px'}}>
                        <textarea id="_content"  className="s-flex1 app-999-font28 app-setting-textarea-word"  placeholder="基本介绍"></textarea>
                    </div>
                </div>
                <div className="step border-bottom app-padding-tb20">
                    <div className="s-flex1 app-666-font32">住持寄语</div>
                </div>

                <div className="step app-padding-tb20" style={{height:'200px'}}>
                    <div className="s-flex1 app-input-edit" style={{height:'200px'}}>
                        <textarea id="abbotWords"  className="s-flex1 app-999-font28 app-setting-textarea-word"  placeholder="住持寄语"></textarea>
                    </div>
                </div>
                <div className="step border-bottom app-padding-tb20">
                    <div className="s-flex1 app-666-font32">需要金额</div>
                </div>

                <div className="step app-padding-tb20">
                    {/*<div className="s-flex1">*/}
                        {/*<input className="app-input" placeholder="金额"  type="text"/> <span>元</span>*/}
                    {/*</div>*/}

                    <div className="s-flex1 app-input-edit">
                        <input id="amount" className="app-input" placeholder="金额" type="text"/>
                    </div>

                    <div className="s-flex1">
                        <div className="app-999-font30">元</div>
                    </div>
                    
                </div>
                <div className="step app-padding-tb20 app-margin-tb20 app-yellow-radius-check-button">
                    <div className="s-center" onClick={this.editInfo.bind(this)}>发布募捐</div>
                </div>
            </div>
        )
    }
}


export default Donations