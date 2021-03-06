'use strict';

import React, {Component, PropTypes}  from 'react';

import kaoqin from '../../../src/images/kaoqin.png'
import jsBridge from '../../jsBridge'
import LocalStorage from '../../LocalStorage'
import {HttpService,FormDate,FormMoney} from '../../utils'
class MyAlms extends React.Component {
    constructor() {
        super();

        this.state ={
            type:1,
            dailies:[],
            history:{},
            historyDailies:[],
        };

    }



    componentWillMount(){
        jsBridge.getBrideg(()=>{
            jsBridge.setTitle('我的日善')
        });

        this.recentDailies();
        this.historyDailies()
    }

    async historyDailies(){
        const code=await HttpService.query({
            url:'/v1/p/user/daily/history',
            data:{
                accessToken:LocalStorage.get('token')
            }
        });

        this.setState({
            history:code,
            historyDailies:code.dailies
        })


    }

    async recentDailies(){
        const code=await HttpService.query({
            url:'/v1/p/user/recent/dailies',
            data:{
                accessToken:LocalStorage.get('token')
            }
        });

        this.setState({
            dailies:code.dailies
        })
    }

    createLogin(){
        const {dailies}=this.state;
        return (

            <div className="app-padding-l24 ">

                {
                    dailies.length!=0?dailies.map((json,index)=>(
                        <div className="step border-bottom app-white" key={index}>
                            <div className="s-flex2" style={{flexDirection: 'column', alignItems: 'flex-start'}}>
                                <div className="app-333-font32 pt30 app-line-height-one">{json.title}</div>
                                <div className="app-999-font24 pt12 pb26 app-line-height-one">{FormDate.time(json.gmtCreate)}</div>
                            </div>
                            <div className="s-flex1 s-j-end app-padding-r24 app-333-font32">{FormMoney.fenYuan(json.amount)}元</div>
                        </div>
                    )):''
                }
            </div>
        )
    }

    changeType(type){
        this.setState({
            type:type
        })
    }


    createRegistered(){
        const {history,historyDailies}=this.state;

        return (
            <div>
                <ul>
                    <li>
                        <div className="app-padding-l24">
                            <div className="step app-white-chunk border-bottom app-666-font30">
                                <div className="s-left">总日善次数</div>
                                <div className="s-left s-j-end app-padding-r24">{history.total}次</div>
                            </div>
                        </div>

                    </li>

                    <li>
                        <div className="app-padding-l24">
                            <div className="step app-white-chunk border-bottom app-666-font30">
                                <div className="s-left">总日善金额</div>
                                <div className="s-left s-j-end app-padding-r24">{FormMoney.fenYuan(history.amount)}元</div>
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
                                historyDailies.length!=0?historyDailies.map((json,index)=>(
                                    <div className="step border-bottom app-wh120" key={index}>
                                        <div className="app-padding-r24 app-active-font28 s-j-center">NO{index+1}</div>
                                        <div className="app-wh-80 app-margin-right24">
                                            <img className="app-wh100-all-radius" src={json.templeImageUrl}/>
                                        </div>

                                        <div className="s-flex1 app-666-font30">
                                            {json.templeName}
                                        </div>
                                        <div className="s-flex1 s-j-end app-666-font30">
                                            {FormMoney.fenYuan(json.amount)}元
                                        </div>
                                    </div>
                                )):''
                            }


                        </div>
            </div>


        )
    }

    render(){
        let stateType =()=>{
            if(this.state.type == 1){
                return this.createLogin()
            }else{
                return this.createRegistered();
            }
        };
        return (
            <div className="my-alms">
                <div className="step app-white-chunk app-wh80 border-bottom">
                    <div className="s-flex1 s-j-center app-666-font32" style={{color:this.state.type==1?'#FFBB3A':'',borderBottom:this.state.type==1?'3px solid #FFBB3A':'0'}} onClick={this.changeType.bind(this,1)}>最近日善</div>
                    <div className="s-flex1 s-j-center app-666-font32" style={{color:this.state.type==2?'#FFBB3A':'',borderBottom:this.state.type==2?'3px solid #FFBB3A':'0'}} onClick={this.changeType.bind(this,2)}>日善历史</div>
                </div>

                {stateType()}
            </div>
        )
    }
}


export default MyAlms