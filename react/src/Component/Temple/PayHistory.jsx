'use strict';

import React from 'react';

import {HttpService,FormMoney} from '../../utils'
import jsBridge from '../../jsBridge'
class PayHistory extends React.Component {
    constructor() {
        super();
        this.state={
            templeCollections:[],
        };
    }

    componentWillMount() {
        jsBridge.getBrideg(()=>{
            jsBridge.setTitle('历史募捐')
        });
        this.collections();


    }




    async collections(){

        const code=await HttpService.query({
            url:'/v1/temple/collections',
            data:{id:this.props.params.id}
        });

        this.setState({
            templeCollections:code.templeCollections
        })



    }
    render(){
        const {templeCollections}=this.state;
        return (
            <div className="app-container">

                <div className="pay-history ">


                    {
                        templeCollections.length!=0?templeCollections.map((json,index)=>(
                                <div className="step border-bottom app-wh-120 app-padding-lr24 app-white">
                                    <div className="s-flex1 s-j-center s-flex-d app-666-font30" style={{alignItems: 'flex-start'}}>
                                        <div className="app-333-font28 app-line-height-one">{json.abbotWords}</div>
                                        <div className="app-999-font24 pt20 app-line-height-one">{json.timeStr}</div>
                                    </div>
                                    <div className="s-flex1 s-j-end app-333-font28">
                                        募捐金额：{FormMoney.fenYuan(json.amount)}元
                                    </div>
                                </div>
                            )):<div className="step">
                            <div className="s-center app-margin-t20 app-333-font30">暂无</div>
                        </div>
                    }
                </div>

            </div>
        )
    }
}


export default PayHistory