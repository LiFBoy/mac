'use strict';

import React from 'react';



import {Router, Route, IndexRoute, browserHistory, Link} from 'react-router';
import jsBridge from '../../jsBridge'
import {Toast,HttpService,FormDate,FormMoney} from '../../utils'
class historyDaily extends React.Component {
    constructor() {
        super();

        this.state ={
            type:1,
            historyDailies:[],
            recentDailies:[]
        };


    }

    componentWillMount() {

        this.historyDonations();

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

    render(){

        const {historyDailies} =this.state

        return (
            <div>
                <div className="app-padding-lr24">

                    {
                        historyDailies.length != 0 ? historyDailies.map((json, index)=>(
                            <div className="step border-bottom app-wh120" key={index}>
                                <div className="app-padding-r24 app-active-font28 s-j-center">NO{index + 1}</div>
                                <div className="app-wh-80 app-margin-right24">
                                    <img className="app-wh100-all-radius"
                                         src={json.templeImageUrl}/>
                                </div>

                                <div className="s-flex1 app-666-font30">
                                    {json.templeName}
                                </div>
                                <div className="s-flex1 s-j-end app-666-font30">
                                    {FormMoney.fenYuan(json.amount)}元
                                </div>
                            </div>
                        )) : ''
                    }


                </div>
            </div>
        )
    }
}


export default historyDaily