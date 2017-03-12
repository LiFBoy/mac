'use strict';

import React from 'react';



import {Router, Route, IndexRoute, browserHistory, Link} from 'react-router';
import jsBridge from '../../jsBridge'
import {Toast,HttpService,FormDate,FormMoney} from '../../utils'
class PayRecord extends React.Component {
    constructor() {
        super();

        this.state ={
            type:1,
            templeHistory:[],
            recentDonations:[]
        };


    }

    componentWillMount() {
        jsBridge.getBrideg(()=> {
            jsBridge.setTitle('捐款记录')
        });
        this.historyDonations();
        this.recentDonations();
    }

    async recentDonations(){
        const code=await HttpService.query({
            url:'/v1/temple/get/recent/donations',
            data:{
                id:this.props.params.id
            }
        });

        this.setState({
            recentDonations:code.donations
        })
    }
    async historyDonations(){
        const code=await HttpService.query({
            url:'/v1/temple/get/history/donations',
            data:{
                id:this.props.params.id
            }
        });

        this.setState({
            templeHistory:code.donations
        })
    }

    createLogin(){

        const {recentDonations}=this.state;
        return (
            <div>
                {
                    recentDonations.length!=0?recentDonations.map((json,index)=>(
                        <div className="step app-white border-bottom app-padding-l24 app-wh-120" key={index}>
                            <div className="app-wh-80  app-margin-right24 app-margin-tb20">
                                <img className="app-wh100-all-radius" src={json.headImgUrl}/>
                            </div>
                            <div className="s-flex2 s-j-center" style={{flexDirection: 'column', alignItems: 'flex-start'}}>
                                <div className="app-333-font28 app-line-height-one">{json.username}</div>
                                <div className="app-999-font24 app-line-height-one" style={{paddingTop:'20px'}}>{json.timeStr}</div>
                            </div>
                            <div className="s-flex1 s-j-end app-padding-r24 app-333-font32">捐款{FormMoney.fenYuan(json.amount)}元</div>
                        </div>
                    )):<div className="step">
                        <div className="s-center app-margin-t20 app-333-font30">暂无</div>
                    </div>
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
        const {templeHistory}=this.state;
        return (
            <div>
                <div className="app-padding-lr24">

                    {
                        templeHistory.length != 0 ? templeHistory.map((json, index)=>(
                            <div className="step border-bottom app-wh120" key={index}>
                                <div className="app-padding-r24 app-active-font28 s-j-center">NO{index + 1}</div>
                                <div className="app-wh-80 app-margin-right24">
                                    <img className="app-wh100-all-radius"
                                         src={json.headImgUrl}/>
                                </div>

                                <div className="s-flex1 app-666-font30">
                                    {json.username}
                                </div>
                                <div className="s-flex1 s-j-end app-666-font30">
                                    {FormMoney.fenYuan(json.amount)}元
                                </div>
                            </div>
                        )) : <div className="step">
                            <div className="s-center app-margin-t20 app-333-font30">暂无</div>
                        </div>
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

                    <div className="s-flex1 s-j-center app-666-font32" style={{color:this.state.type==1?'#FFBB3A':'',borderBottom:this.state.type==1?'3px solid #FFBB3A':'0'}} onClick={this.changeType.bind(this,1)}>最近捐款</div>
                    <div className="s-flex1 s-j-center app-666-font32" style={{color:this.state.type==2?'#FFBB3A':'',borderBottom:this.state.type==2?'3px solid #FFBB3A':'0'}} onClick={this.changeType.bind(this,2)}>捐款历史</div>

                </div>

                {stateType()}
            </div>
        )
    }
}


export default PayRecord