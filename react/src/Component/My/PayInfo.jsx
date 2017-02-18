'usr strict';

import React, {Component, PropTypes}  from 'react';

import kaoqin from '../../../src/images/kaoqin.png'
import {HttpService} from '../../utils';
import LocalStorage from '../../LocalStorage'
class PayInfo extends React.Component {
    constructor() {
        super();

        this.state = {
            type: 1,
            records: []
        }
    }
    componentWillMount(){

        this.history();
    }

    history(){
        console.log(LocalStorage.get('token'))
        HttpService.query({
            url:'/v1/p/user/donation/history',
            data:{accessToken:LocalStorage.get('token')}
        }).then((res)=>{
            console.log(res)

            this.setState({
                records:res.records
            })

        },(error)=>{

        })
    }

    createLogin() {
        return (
            <div className="app-padding-l24 ">

                    <div className="step border-bottom app-white">
                        <div className="s-flex2" style={{flexDirection: 'column', alignItems: 'flex-start'}}>
                            <div className="app-333-font32 pt30 app-line-height-one">灵隐寺扩建</div>
                            <div className="app-999-font24 pt12 pb26 app-line-height-one">2016-12-19 20:22</div>
                        </div>
                        <div className="s-flex1 s-j-end app-padding-r24 app-333-font32">1元</div>
                    </div>
                    <div className="step border-bottom app-white">
                        <div className="s-flex2" style={{flexDirection: 'column', alignItems: 'flex-start'}}>
                            <div className="app-333-font32 pt24 app-line-height-one">灵隐寺扩建</div>
                            <div className="app-666-font24 pt20 pb16 app-line-height-one">我我我我我我我我我我多我我我我我</div>
                            <div className="app-999-font24 pb24 app-line-height-one">2016-12-19 20:22</div>
                        </div>
                        <div className="s-flex1 s-j-end app-padding-r24 app-333-font32">1元</div>
                    </div>
            </div>
        )
    }

    changeType(type) {
        this.setState({
            type: type
        })
    }


    createRegistered() {
        return (
            <div>
                <ul>
                    <li>
                        <div className="app-padding-l24">
                            <div className="step app-white-chunk border-bottom app-666-font30">
                                <div className="s-left">总供养次数</div>
                                <div className="s-left s-j-end app-padding-r24">200次</div>
                            </div>
                        </div>

                    </li>

                    <li>
                        <div className="app-padding-l24">
                            <div className="step app-white-chunk border-bottom app-666-font30">
                                <div className="s-left">总供养金额</div>
                                <div className="s-left s-j-end app-padding-r24">200元</div>
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
                        this.state.records.map((json=>{
                            return <div >

                            </div>
                        }))
                    }


                    <div className="step border-bottom app-wh120">
                        <div className="app-padding-r24 app-active-font28 s-j-center">NO1</div>
                        <div className="app-wh-80 app-margin-right24">
                            <img className="app-wh100-all-radius"
                                 src="http://img4.imgtn.bdimg.com/it/u=398347842,2770887580&fm=23&gp=0.jpg"/>
                        </div>

                        <div className="s-flex1 app-666-font30">
                            灵隐寺
                        </div>
                        <div className="s-flex1 s-j-end app-666-font30">
                            6000元
                        </div>
                    </div>
                    <div className="step border-bottom app-wh120">
                        <div className="app-padding-r24 app-active-font28 s-j-center">NO2</div>
                        <div className="app-wh-80 app-margin-right24">
                            <img className="app-wh100-all-radius"
                                 src="http://img4.imgtn.bdimg.com/it/u=398347842,2770887580&fm=23&gp=0.jpg"/>
                        </div>

                        <div className="s-flex1 app-666-font30">
                            灵隐寺
                        </div>
                        <div className="s-flex1 s-j-end app-666-font30">
                            6000元
                        </div>
                    </div>
                    <div className="step border-bottom app-wh120">
                        <div className="app-padding-r24 app-active-font28 s-j-center">NO3</div>
                        <div className="app-wh-80 app-margin-right24">
                            <img className="app-wh100-all-radius"
                                 src="http://img4.imgtn.bdimg.com/it/u=398347842,2770887580&fm=23&gp=0.jpg"/>
                        </div>

                        <div className="s-flex1 app-666-font30">
                            灵隐寺
                        </div>
                        <div className="s-flex1 s-j-end app-666-font30">
                            6000元
                        </div>
                    </div>

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