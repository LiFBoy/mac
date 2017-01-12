'usr strict';

import React from 'react';
import Popup from '../popup'


import close from '../../../src/images/temple/close.png'

import {Router, Route, IndexRoute, browserHistory, Link} from 'react-router';
class Pay extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            info: {},
            admin: {}
        };

        this.config = {
            isSure: true,
            isCancel: true,
            no: '返回',
            yes: '确定',
            header: <div>
                <div className="app-padding-lr24 close" onClick={this.close.bind(this)}><img src={close}/></div>
                <div className="popup_title s-j-center">其它金额</div>
            </div>,
            content: <div>
                <div className="step app-popup-pay">
                    <div className="app-padding-l24 app-333-font32" style={{lineHeight:'40px',height:'40px'}}>金额(元)</div>
                    <div className="">
                        <input type="text" className="app-popup-pay-input" placeholder="可填写1-2000"/>
                    </div>

                </div>
                <div className="step" style={{paddingTop:'32px'}}>
                    <div className="s-flex1 s-j-center app-yellow-radius-check-button" style={{height:'80px'}} onClick={this.pay.bind(this)}>供养</div>
                </div>
            </div>


           ,
            yes_cb: ()=> {

                //  alert(this.state.info.isadmin)

                //
                // if (!!this.state.info.isadmin) {
                //
                // } else {
                //
                // }


            },
            no_cb: ()=> {
                this.context.router.goBack()
            }
        };


    }

    close(){
        this.setState({
            admin:{
                flag:false,
                _flag:false
            }
        })
    }

    pay(){
        this.setState({
            admin:{
                flag:false,
                _flag:false
            }
        })
    }
    otherMoney(){
        this.setState({
            admin:{
                flag:true,
                _flag:true
            }
        })
    }



    render() {

        const {info, admin} =this.state;


        return (
            <div className="pay app-padding-lr24">


                <Popup config={this.config} blockOrNone={admin.flag} _flag={admin.flag}/>
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



                <div className="pay-select-type">


                    <div className="step">
                        <div className="s-flex1 pay-active-chunk s-j-center"><span className="app-333-font36">1</span><span className="app-333-font24">元</span></div>
                        <div className="app-padding-lr10"></div>
                        <div className="s-flex1 pay-chunk s-j-center"><span className="app-333-font36">10</span><span className="app-333-font24">元</span></div>
                        <div className="app-padding-lr10"></div>
                        <div className="s-flex1 pay-chunk s-j-center"><span className="app-333-font36">20</span><span className="app-333-font24">元</span></div>
                        <div className="app-padding-lr10"></div>
                        <div className="s-flex1 pay-chunk s-j-center"><span className="app-333-font36">50</span><span className="app-333-font24">元</span></div>
                    </div>
                    <div className="step" style={{paddingTop:'32px'}}>
                        <div className="s-flex1 pay-chunk s-j-center"><span className="app-333-font36">100</span><span className="app-333-font24">元</span></div>
                        <div className="app-padding-lr10"></div>
                        <div className="s-flex1 pay-chunk s-j-center"><span className="app-333-font36">200</span><span className="app-333-font24">元</span></div>
                        <div className="app-padding-lr10"></div>
                        <div className="s-flex1 pay-chunk s-j-center"><span className="app-333-font36">500</span><span className="app-333-font24">元</span></div>
                        <div className="app-padding-lr10"></div>
                        <div className="s-flex1 pay-chunk s-j-center" onClick={this.otherMoney.bind(this)}><span className="app-333-font28">其它</span></div>
                    </div>
                </div>

                <div className="step app-yellow-radius-check-button" style={{height:'100px'}}>
                    <div className="s-center">供养</div>
                </div>
            </div>
        )
    }
}


export default Pay