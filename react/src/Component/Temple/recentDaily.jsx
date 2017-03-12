'use strict';

import React from 'react';



import {Router, Route, IndexRoute, browserHistory, Link} from 'react-router';
import jsBridge from '../../jsBridge'
import {Toast,HttpService,FormDate,FormMoney} from '../../utils'
class recentDaily extends React.Component {
    constructor() {
        super();

        this.state ={
            type:1,
            historyDailies:[],
            recentDailies:[]
        };


    }

    componentWillMount() {
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





    render(){
        const {recentDailies} =this.state;
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


                }
            </div>
        )
    }
}


export default recentDaily