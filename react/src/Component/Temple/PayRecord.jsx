'usr strict';

import React from 'react';



import {Router, Route, IndexRoute, browserHistory, Link} from 'react-router';
class PayRecord extends React.Component {
    constructor() {
        super();

        this.state ={
            type:1
        };
    }

    createLogin(){
        return (
            <div className="">
                <div className="step app-white border-bottom app-padding-l24  app-wh-120">
                    <div className="app-wh-80  app-margin-right24 app-margin-tb20">
                        <img className="app-wh100-all-radius" src="http://img4.imgtn.bdimg.com/it/u=398347842,2770887580&fm=23&gp=0.jpg"/>
                    </div>
                    <div className="s-flex2 s-j-center" style={{flexDirection: 'column', alignItems: 'flex-start'}}>
                        <div className="app-333-font28">大师</div>
                        <div className="app-999-font24" style={{paddingTop:'10px'}}>2小时前</div>
                    </div>
                    <div className="s-flex1 s-j-end app-padding-r24 app-333-font32">捐款1元</div>
                </div>
                <div className="step app-white border-bottom app-padding-l24  app-wh-120">
                    <div className="app-wh-80  app-margin-right24 app-margin-tb20">
                        <img className="app-wh100-all-radius" src="http://img4.imgtn.bdimg.com/it/u=398347842,2770887580&fm=23&gp=0.jpg"/>
                    </div>
                    <div className="s-flex2 s-j-center" style={{flexDirection: 'column', alignItems: 'flex-start'}}>
                        <div className="app-333-font28">大师</div>
                        <div className="app-999-font24" style={{paddingTop:'10px'}}>2小时前</div>
                    </div>
                    <div className="s-flex1 s-j-end app-padding-r24 app-333-font32">捐款1元</div>
                </div>
            </div>
        )
    }

    changeType(type){
        this.setState({
            type:type
        })
    }


    createRegistered(){
        return (
            <div>


                <div className="">



                    <div className="step border-bottom app-wh-120 app-padding-lr24">
                        <div className="app-padding-r24 app-active-font28 s-j-center s-flex-zero">NO1</div>
                        <div className="app-wh-80 app-margin-right24 app-margin-tb20">
                            <img className="app-wh100-all-radius" src="http://img4.imgtn.bdimg.com/it/u=398347842,2770887580&fm=23&gp=0.jpg"/>
                        </div>

                        <div className="s-flex1 s-j-center s-flex-d app-666-font30" style={{alignItems: 'flex-start'}}>
                            <div className="app-333-font28">大师</div>
                            <div className="app-999-font24" style={{paddingTop:'10px'}}>2小时前</div>
                        </div>
                        <div className="s-flex1 s-j-end app-666-font30">
                            6000天
                        </div>
                    </div><div className="step border-bottom app-wh-120 app-padding-lr24">
                        <div className="app-padding-r24 app-active-font28 s-j-center s-flex-zero">NO1</div>
                        <div className="app-wh-80 app-margin-right24 app-margin-tb20">
                            <img className="app-wh100-all-radius" src="http://img4.imgtn.bdimg.com/it/u=398347842,2770887580&fm=23&gp=0.jpg"/>
                        </div>

                        <div className="s-flex1 s-j-center s-flex-d app-666-font30" style={{alignItems: 'flex-start'}}>
                            <div className="app-333-font28">大师</div>
                            <div className="app-999-font24" style={{paddingTop:'10px'}}>2小时前</div>
                        </div>
                        <div className="s-flex1 s-j-end app-666-font30">
                            6000天
                        </div>
                    </div><div className="step border-bottom app-wh-120 app-padding-lr24">
                        <div className="app-padding-r24 app-active-font28 s-j-center s-flex-zero">NO1</div>
                        <div className="app-wh-80 app-margin-right24 app-margin-tb20">
                            <img className="app-wh100-all-radius" src="http://img4.imgtn.bdimg.com/it/u=398347842,2770887580&fm=23&gp=0.jpg"/>
                        </div>

                        <div className="s-flex1 s-j-center s-flex-d app-666-font30" style={{alignItems: 'flex-start'}}>
                            <div className="app-333-font28">大师</div>
                            <div className="app-999-font24" style={{paddingTop:'10px'}}>2小时前</div>
                        </div>
                        <div className="s-flex1 s-j-end app-666-font30">
                            6000天
                        </div>
                    </div>


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