'usr strict';

import React from 'react';



import {Router, Route, IndexRoute, browserHistory, Link} from 'react-router';
import jsBridge from '../../jsBridge'
class DayPay extends React.Component {
    constructor() {
        super();

        this.state={
            money:''
        };
        jsBridge.getBrideg();
        jsBridge.setTitle('日善')
    }

    money(e){
        let value=e.target.value;

        this.setState({
            money:value
        })
    }

    componentWillMount(){

    }





    render() {


        return (

            <div className="pay app-padding-lr24">
                <div>

                    <div className="step">
                        <div className="s-center pay-title">
                            <div style={{width:'200px',height:'200px'}}>
                                <img src="http://img4.imgtn.bdimg.com/it/u=398347842,2770887580&fm=23&gp=0.jpg" className="app-wh100-all-radius"/>
                            </div>

                        </div>
                    </div>

                    <div className="step">
                        <div className="s-center app-333-font32">
                            灵隐寺
                        </div>
                    </div>

                    <div className="step" style={{paddingTop:'32px'}}>
                        <div className="s-center app-666-font28">
                            日积小德方成大德
                        </div>
                    </div>
                </div>



                <div className="day-pay-select">

                    <div className="step">
                        <div className="s-center">
                            <div className="step day-pay-type">
                                <div className="s-flex1 s-j-center"><span className="app-333-font36">{this.state.money==''?1:this.state.money}</span><span className="app-333-font24">元</span></div>
                            </div>

                            <div className="app-padding-lr20"></div>

                            <div className="step day-pay-input">
                                <div className="s-flex1">
                                    <input className="app-input" placeholder="输入" onChange={this.money.bind(this)} type="number"/>
                                </div>
                            </div>


                        </div>
                    </div>



                </div>

                <div className="step app-yellow-radius-check-button" style={{height:'100px'}}>
                    <div className="s-center">行日善</div>
                </div>
            </div>
        )
    }
}


export default DayPay