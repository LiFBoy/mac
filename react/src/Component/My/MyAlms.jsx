'usr strict';

import React, {Component, PropTypes}  from 'react';

import kaoqin from '../../../src/images/kaoqin.png'
class MyAlms extends React.Component {
    constructor() {
        super();

        this.state ={
            type:1
        };
    }

    createLogin(){
        return (
            <div className="app-container-padding">
                <div className="step border-bottom app-white-chunk">
                    <div className="s-left" style={{flexDirection: 'column', alignItems: 'flex-start'}}>
                        <div>灵隐寺扩建</div>
                        <div>200022</div>
                    </div>
                    <div className="s-right s-right-1 s-j-end">1元</div>
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
                <ul>
                    <li>
                        <div className="step app-white-chunk">
                            <div className="s-left">总日善次数</div>
                            <div className="s-left s-j-end">200次</div>
                        </div>

                    </li>

                    <li>
                        <div className="step app-white-chunk">
                            <div className="s-left">总日善天数</div>
                            <div className="s-left s-j-end">200天</div>
                        </div>
                    </li>
                </ul>

                <div className="container">

                    <div className="step">
                        <div className="s-left s-j-center">捐献排行</div>
                    </div>



                    <div className="step border-bottom app-padding-tb20">
                        <div className="s-left">N01</div>
                        <div className="s-left"><img src={kaoqin}/></div>
                        <div className="s-left">灵隐寺</div>
                        <div className="s-right s-j-end">6000</div>
                    </div>




                    <div className="step border-bottom app-padding-tb20">
                        <div className="s-left">N01</div>
                        <div className="s-left"><img src={kaoqin}/></div>
                        <div className="s-left">灵隐寺</div>
                        <div className="s-right s-j-end">6000</div>
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
            <div>
                <div className="step app-white-chunk">
                    <div className="s-left s-center" style={{color:this.state.type==1?'red':''}} onClick={this.changeType.bind(this,1)}>最近日善</div>
                    <div className="s-right s-right-1 s-center" style={{color:this.state.type==2?'red':''}} onClick={this.changeType.bind(this,2)}>日善历史</div>
                </div>

                {stateType()}
            </div>
        )
    }
}


export default MyAlms