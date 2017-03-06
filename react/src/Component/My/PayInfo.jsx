'use strict';

import React, {Component, PropTypes}  from 'react';

import kaoqin from '../../../src/images/kaoqin.png'
import {HttpService,FormDate} from '../../utils';
import LocalStorage from '../../LocalStorage'
import jsBridge from '../../jsBridge'
class PayInfo extends React.Component {
    constructor() {
        super();

        this.state = {
            type: 1,
            records: {},
            donations:[]
        };
    }
    componentWillMount(){

        this.history();
        this.donations();
        jsBridge.getBrideg(()=>{
            jsBridge.setTitle('我的供养')
        })
    }

    fen_yuan(num){
        return num*0.01
    }

    async history(){
        console.log(LocalStorage.get('token'));

        const code= await HttpService.query({
            url:'/v1/p/user/donation/history',
            data:{accessToken:LocalStorage.get('token')}
        })

        this.setState({
            records:code
        })
    }
    async donations(){
       const code= await HttpService.query({
            url:'/v1/p/user/recent/donations',
            data:{accessToken:LocalStorage.get('token')}
        });

        this.setState({
            donations:code.donations
        })


    }

    createLogin() {
        const {donations}=this.state

        return (
            <div className="app-padding-l24 ">

                {
                    donations.length!=0?donations.map((json,index)=>(
                        <div className="step border-bottom app-white" key={index}>
                            <div className="s-flex2" style={{flexDirection: 'column', alignItems: 'flex-start'}}>
                                <div className="app-333-font32 pt24 app-line-height-one">{json.title}</div>
                                <div className="app-666-font24 pt20 pb16 app-line-height-one">{FormDate.time(json.gmtCreate)}</div>
                                <div className="app-999-font24 pb24 app-line-height-one">{json.timeStr}</div>
                            </div>
                            <div className="s-flex1 s-j-end app-padding-r24 app-333-font32">{this.fen_yuan(json.amount)}元</div>
                        </div>
                    )):''
                }

            </div>
        )
    }

    changeType(type) {
        this.setState({
            type: type
        })
    }


    createRegistered() {
        const {records}=this.state;
        return (
            <div>
                <ul>
                    <li>
                        <div className="app-padding-l24">
                            <div className="step app-white-chunk border-bottom app-666-font30">
                                <div className="s-left">总供养次数</div>
                                <div className="s-left s-j-end app-padding-r24">{records.total}次</div>
                            </div>
                        </div>

                    </li>

                    <li>
                        <div className="app-padding-l24">
                            <div className="step app-white-chunk border-bottom app-666-font30">
                                <div className="s-left">总供养金额</div>
                                <div className="s-left s-j-end app-padding-r24">{this.fen_yuan(records.amount)}元</div>
                            </div>
                        </div>
                    </li>
                </ul>

                <div className="app-height-20"></div>

                <div className="app-padding-lr24">

                    <div className="step border-bottom app-wh80">
                        <div className="s-left s-j-center app-666-font30">捐献排行</div>
                    </div>


                    {
                        records.records.length!=0?records.records.map((json,index)=>(
                            <div className="step border-bottom app-wh120" key={index}>
                                <div className="app-padding-r24 app-active-font28 s-j-center">NO{index+1}</div>
                                <div className="app-wh-80 app-margin-right24">
                                    <img className="app-wh100-all-radius"
                                         src={json.templeImageUrl}/>
                                </div>

                                <div className="s-flex1 app-666-font30">
                                    {json.templeName}
                                </div>
                                <div className="s-flex1 s-j-end app-666-font30">
                                    {this.fen_yuan(json.amount)}元
                                </div>
                            </div>
                        )):''
                    }

                </div>
            </div>


        )
    }

    render() {
        let stateType = () => {
            if (this.state.type == 1) {
                return this.createLogin()
            } else {
                return this.createRegistered();
            }
        };
        return (
            <div className="pay-info">
                <div className="step app-white-chunk app-wh80 border-bottom">
                    <div className="s-flex1 s-j-center app-666-font32" style={{
                        color: this.state.type == 1 ? '#FFBB3A' : '',
                        borderBottom: this.state.type == 1 ? '3px solid #FFBB3A' : '0'
                    }} onClick={this.changeType.bind(this, 1)}>最近供养
                    </div>
                    <div className="s-flex1 s-j-center app-666-font32" style={{
                        color: this.state.type == 2 ? '#FFBB3A' : '',
                        borderBottom: this.state.type == 2 ? '3px solid #FFBB3A' : '0'
                    }} onClick={this.changeType.bind(this, 2)}>供养历史
                    </div>
                </div>

                {stateType()}
            </div>
        )
    }
}


export default PayInfo