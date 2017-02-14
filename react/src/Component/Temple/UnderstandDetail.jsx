'usr strict';

import React from 'react';




import {Router, Route, IndexRoute, browserHistory, Link} from 'react-router';
import {HttpService} from '../../Http'
class UnderstandDetail extends React.Component {
    constructor() {
        super();
        this.state={
            getCollections:{}
        }
    }

    componentWillMount() {
        this.getCollections()

    }
    async getCollections(){

        const code=await HttpService.query({
            url:'/v1/temple/get/collection',
            data:{id:'2'}
        });

        this.setState({
            getCollections:code
        })

    }
    render() {
        const {getCollections}=this.state;
        return (
            <div className="app-container">
                <div className="app-white">
                    <div className="step app-wh80  app-padding-lr24 border-bottom">
                        <div className="s-flex1 app-333-font32">基本介绍</div>
                    </div>
                    <div className="step app-padding-tb32 app-666-font28 app-padding-lr24 app-line-height" >

                        {getCollections.content}

                    </div>
                    <div className="app-height-20"></div>
                    <div className="step app-wh80 app-padding-lr24 border-bottom">
                        <div className="s-flex1 app-333-font32">主持寄语</div>
                    </div>
                    <div className="step app-padding-tb32 app-666-font28 app-padding-lr24" >

                        {getCollections.abbotWords}
                    </div><div className="app-height-20"></div>
                    <div className="step app-wh80 app-padding-lr24 border-bottom">
                        <div className="s-flex1 app-333-font32">需要金额</div>
                    </div>
                    <div className="step app-padding-tb32 app-666-font28 app-padding-lr24" >

                        {getCollections.amount}元

                    </div><div className="app-height-20"></div>
                    <div className="step app-wh80 app-padding-lr24 border-bottom">
                        <div className="s-flex1 app-333-font32">募集情况</div>
                    </div>
                    <div className="step app-padding-tb32 app-666-font28 app-padding-lr24" >

                            <div>已募集 <span className="app-active-font28">{getCollections.currentAmount}元</span>,进度为 <span className="app-active-font28">50%</span></div>

                    </div>
                </div>
            </div>
        )
    }
}


export default UnderstandDetail