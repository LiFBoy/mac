'use strict';

import React, {Component, PropTypes} from 'react';

import Foot from './Foot';
import jsBridge from '../jsBridge';


import like from '../../src/images/index/like.png'
import alms from '../../src/images/index/alms.png'


import {HttpService} from '../utils';
import App from './app';
import LocalStorage from '../LocalStorage'


class IndexFocus extends React.Component {
    constructor() {
        super();
        this.state = {
            temples: []
        }
    }

    componentWillMount() {

        if (!LocalStorage.get('token')) {
          //  window.location.href = '/app.html#/login'
        } else {
            this.temples();
        }
    }

    async temples() {
        console.log(LocalStorage.get('token'));
        let code = await HttpService.query({
            url: '/v1/p/user/get/focus/temples',
            data: {accessToken: LocalStorage.get('token')}
        });

        console.log(code);

        this.setState({
            temples: code.temples
        })


    }

    TempleDetail(id, name) {
        window.g_bridge.callHandler('sendMessageToApp', {
                type: 2, data: {url: 'https://www.zrrulai.com/app.html#/TempleDetail/' + id + '/' + encodeURIComponent(name) + ''}
            },
            (response)=> {

            })
    }


    render() {
        const {temples} =this.state;
        return (
            <div className="app-container">

                <div className="index-container">

                    {
                        temples.length != 0 ? temples.map((json, index)=>(

                            <div key={index}>
                                <App cb={this.TempleDetail.bind(this, json.id, json.name)}>
                                    <div className="temple-content">
                                        <div className="con-img">
                                            <div className="img-content">
                                                <img className="app-wh100-all" src={json.headImgUrl}/></div>
                                            <div className="con-bar step">


                                            </div>
                                            <div className="con-bar-content step">
                                                <div className="s-flex1 bar-left">{json.name}</div>
                                                <div className="s-flex1 s-j-end">

                                                    <img className="img" src={alms}/>
                                                    <div className="number padding-right-32">{json.dailyNumber}</div>


                                                    <img className="img" src={like}/>
                                                    <div className="number">{json.fansNumber}</div>

                                                </div>
                                            </div>
                                        </div>

                                        <div className="con-content step">
                                            <div className="s-flex1 app-333-font28">{json.name}最新消息</div>
                                            <div className="s-flex1 s-j-end app-666-font24">
                                    <span>
                                        {json.distance}
                                    </span>
                                            </div>
                                        </div>
                                    </div>
                                </App>
                            </div>
                        )) : ''
                    }


                </div>
            </div>
        )
    }
}

export default IndexFocus;