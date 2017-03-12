'use strict';

import React, {Component, PropTypes}  from 'react';

import kaoqin from '../../../src/images/kaoqin.png'
import jsBridge from '../../jsBridge'
import LocalStorage from '../../LocalStorage'
import {HttpService,FormDate,FormMoney} from '../../utils'
class myRecentDonations extends React.Component {
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

        this.recentDailies();

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


    render(){
        const {dailies} =this.state;
        return (
            <div className="app-padding-l24 ">

                {
                    dailies.length!=0?dailies.map((json,index)=>(
                        <div className="step border-bottom app-white" key={index}>
                            <div className="s-flex2" style={{flexDirection: 'column', alignItems: 'flex-start'}}>
                                <div className="app-333-font32 pt30 app-line-height-one">{json.title}</div>
                                <div className="app-999-font24 pt12 pb26 app-line-height-one">{json.gmtCreate}</div>
                            </div>
                            <div className="s-flex1 s-j-end app-padding-r24 app-333-font32">{FormMoney.fenYuan(json.amount)}元</div>
                        </div>
                    )):''
                }
            </div>
        )
    }
}


export default myRecentDonations