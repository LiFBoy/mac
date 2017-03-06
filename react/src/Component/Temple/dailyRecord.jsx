'use strict';

import React from 'react';



import {Router, Route, IndexRoute, browserHistory, Link} from 'react-router';
import jsBridge from '../../jsBridge'
import {Toast,HttpService,FormDate,FormMoney} from '../../utils'
class dailyRecord extends React.Component {
    constructor() {
        super();

        this.state ={
            type:1,
            historyDailies:[],
            recentDailies:[]
        };


    }

    componentWillMount() {
        jsBridge.getBrideg(()=> {
            jsBridge.setTitle('日善记录')
        });
        this.historyDonations();
        this.recentDonations();
    }

    async recentDonations(){
        const code=await HttpService.query({
            url:'/v1/temple/get/recent/dailies',
            data:{
                id:this.props.params.id
            }
        });

        this.setState({
            recentDailies:code.dailies
        })
    }
    async historyDonations(){
        const code=await HttpService.query({
            url:'/v1/temple/get/history/dailies',
            data:{
                id:this.props.params.id
            }
        });

        this.setState({
            historyDailies:code.dailies
        })
    }

    createLogin(){

        const {recentDailies}=this.state;
        return (
            <div>
                {
                    recentDailies.length!=0?recentDailies.map((json,index)=>(
                        <div className="step app-white border-bottom app-padding-l24  app-wh-120" key={index}>
                            <div className="app-wh-80  app-margin-right24 app-margin-tb20">
                                <img className="app-wh100-all-radius" src={json.headImgUrl}/>
                            </div>
                            <div className="s-flex2 s-j-center" style={{flexDirection: 'column', alignItems: 'flex-start'}}>
                                <div className="app-333-font28 app-line-height-one">{json.username}</div>
                                <div className="app-999-font24 app-line-height-one" style={{paddingTop:'20px'}}>{json.timeStr}</div>
                            </div>
                            <div className="s-flex1 s-j-end app-padding-r24 app-333-font32">捐款{FormMoney.fenYuan(json.amount)}元</div>
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
        const {historyDailies}=this.state;
        return (
            <div>
                <div>
                    {
                        historyDailies.length!=0?historyDailies.map((json,index)=>(
                            <div className="step border-bottom app-wh-120 app-padding-lr24" key={index}>
                                <div className="app-padding-r24 app-active-font28 s-j-center s-flex-zero">NO{index+1}</div>
                                <div className="app-wh-80 app-margin-right24 app-margin-tb20">
                                    <img className="app-wh100-all-radius" src={json.headImgUrl}/>
                                </div>

                                <div className="s-flex1 s-j-center s-flex-d app-666-font30" style={{alignItems: 'flex-start'}}>
                                    <div className="app-333-font28 app-line-height-one">{json.username}</div>
                                    <div className="app-999-font24 app-line-height-one" style={{paddingTop:'20px'}}>{json.timeStr}</div>
                                </div>
                                <div className="s-flex1 s-j-end app-666-font30">
                                    捐款{FormMoney.fenYuan(json.amount)}元
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
            <div className="">
                <div className="step app-white app-wh80 border-bottom">

                    <div className="s-flex1 s-j-center app-666-font32" style={{color:this.state.type==1?'#FFBB3A':'',borderBottom:this.state.type==1?'3px solid #FFBB3A':'0'}} onClick={this.changeType.bind(this,1)}>最近日善</div>
                    <div className="s-flex1 s-j-center app-666-font32" style={{color:this.state.type==2?'#FFBB3A':'',borderBottom:this.state.type==2?'3px solid #FFBB3A':'0'}} onClick={this.changeType.bind(this,2)}>日善历史</div>

                </div>

                {stateType()}
            </div>
        )
    }
}


export default dailyRecord