'use strict';

import React from 'react';



import {Router, Route, IndexRoute, browserHistory, Link} from 'react-router';
import jsBridge from '../../jsBridge'
import {Toast,HttpService,FormDate,FormMoney} from '../../utils'
class historyDonations extends React.Component {
    constructor() {
        super();

        this.state ={
            type:1,
            templeHistory:[],
            recentDonations:[]
        };


    }

    componentWillMount() {

        this.historyDonations();
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






    render(){

        const {templeHistory} =this.state;

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
                        )) : <div>
                            无数据
                        </div>
                    }

                </div>
            </div>
        )
    }
}


export default historyDonations