'usr strict';

import React from 'react';
import Popup from '../popup'
import LocalStorage from '../../LocalStorage'


import close from '../../../src/images/temple/close.png'

import {Router, Route, IndexRoute, browserHistory, Link} from 'react-router';
class Pay extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            info: {},
            admin: {},
            money: {
                one: 1,
                ten: 10,
                twenty: 20,
                fifty: 50,

                oneHundred: 100,
                twoHundred: 200,
                fiveHundred: 500
            }
        };

        // this.state['outkey'] = {
        //     value:''
        // };

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
                    <div className="app-padding-l24 app-333-font32" style={{lineHeight: '40px', height: '40px'}}>金额(元)
                    </div>
                    <div className="">
                        <input type="text" ref="InputMoney" className="app-popup-pay-input" placeholder="可填写1-2000"/>
                    </div>

                </div>
                <Link to="/wish" className="app-a">
                    <div className="step" style={{paddingTop: '32px'}}>

                        <div className="s-flex1 s-j-center app-yellow-radius-check-button" style={{height: '80px'}}
                             onClick={this.pay.bind(this)}>供养
                        </div>

                    </div>
                </Link>
            </div>


            ,
            yes_cb: () => {

                //  alert(this.state.info.isadmin)

                //
                // if (!!this.state.info.isadmin) {
                //
                // } else {
                //
                // }


            },
            no_cb: () => {
                this.context.router.goBack()
            }
        };


    }


    componentWillMount() {
        //     this.setState({
        //         value:{['outkey']:'sb'}
        //     })
        //
        // console.log(this.state.value)


    }

    componentDidMount(){
        LocalStorage.add('money',1);
        this.selectPayMoney();
    }


    close() {
        this.setState({
            admin: {
                flag: false,
                _flag: false
            }
        })
    }

    pay() {
        LocalStorage.add('money', this.refs.InputMoney.value);
        this.setState({
            admin: {
                flag: false,
                _flag: false
            }
        })
    }

    otherMoney() {
        this.refs.InputMoney.value = '';
        this.setState({
            admin: {
                flag: true,
                _flag: true
            }
        })
    }

    selectPayMoney(){
        var dom=document.getElementById('pay-content')
        var node=dom.children;
        console.log(node)
        for(var i=0;i<node.length;i++){
            node[i].onclick=function () {

                for(var j=0;j<node.length;j++){
                    node[j].className='app-margin-right20 pay-chunk'
                }
                this.className='app-margin-right20 pay-active-chunk'


               var value= this.getElementsByTagName('span')[0].innerHTML;
                console.log(value)

                LocalStorage.add('money',value);





            }
        }
    }




    render() {

        const {info, admin, money} =this.state;


        return (
            <div className="pay app-padding-lr24">


                <Popup config={this.config} blockOrNone={admin.flag} _flag={admin.flag}/>
                <div>

                    <div className="step">
                        <div className="s-center pay-title">
                            <div style={{width: '200px', height: '200px'}}>
                                <img src="http://img4.imgtn.bdimg.com/it/u=398347842,2770887580&fm=23&gp=0.jpg"
                                     className="app-wh100-all-radius"/>
                            </div>

                        </div>
                    </div>

                    <div className="step">
                        <div className="s-center app-333-font32">
                            灵隐寺
                        </div>
                    </div>

                    <div className="step" style={{paddingTop: '32px'}}>
                        <div className="s-center app-666-font28">
                            日积小德方成大德
                        </div>
                    </div>
                </div>


                <div className="pay-select-type">


                    <div className="step">
                        <div className="s-flex1" style={{flexWrap: 'wrap'}} id="pay-content">


                            <div className="app-margin-right20 pay-active-chunk ">

                                <div className="s-flex1 s-center">
                                    <span className="app-333-font36">{money.one}</span>
                                    <span className="app-333-font24">元</span>
                                </div>


                            </div>
                            {/*<div className="app-padding-lr10"></div>*/}
                            <div className="app-margin-right20  pay-chunk ">
                                <div className="s-flex1 s-center">
                                    <span className="app-333-font36">{money.ten}</span><span className="app-333-font24">元</span>
                                </div>
                            </div>
                            {/*<div className="app-padding-lr10"></div>*/}
                            <div className="app-margin-right20 pay-chunk ">
                                <div className="s-flex1 s-center">
                                    <span className="app-333-font36">{money.twenty}</span><span
                                    className="app-333-font24">元</span>
                                </div>
                            </div>
                            {/*<div className="app-padding-lr10"></div>*/}
                            <div className="app-margin-right20   pay-chunk ">
                                <div className="s-flex1 s-center">
                                    <span className="app-333-font36">{money.fifty}</span>
                                    <span className="app-333-font24">元</span>
                                </div>
                            </div>


                            <div className="app-margin-right20  pay-chunk ">
                                <div className="s-flex1 s-center">
                                    <span className="app-333-font36">{money.oneHundred}</span><span
                                    className="app-333-font24">元</span>
                                </div>
                            </div>
                            {/*<div className="app-padding-lr10"></div>*/}
                            <div className="app-margin-right20  pay-chunk ">
                                <div className="s-flex1 s-center">
                                    <span className="app-333-font36">{money.twoHundred}</span><span
                                    className="app-333-font24">元</span>
                                </div>
                            </div>
                            {/*<div className="app-padding-lr10"></div>*/}
                            <div className="app-margin-right20  pay-chunk ">
                                <div className="s-flex1 s-center">
                                    <span className="app-333-font36">{money.fiveHundred}</span><span
                                    className="app-333-font24">元</span>
                                </div>
                            </div>
                            {/*<div className="app-padding-lr10"></div>*/}
                            <div className="app-margin-right20 pay-chunk " onClick={this.otherMoney.bind(this)}>
                                <div className="s-flex1 s-center">
                                    <span className="app-333-font28">其它</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Link to={'/wish/2/'+this.props.params.id} className="app-a">
                    <div className="step app-yellow-radius-check-button" style={{height: '100px'}}>


                        <div className="s-center">供养</div>

                    </div>
                </Link>
            </div>
        )
    }
}


export default Pay