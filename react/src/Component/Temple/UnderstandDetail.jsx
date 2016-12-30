'usr strict';

import React from 'react';




import {Router, Route, IndexRoute, browserHistory, Link} from 'react-router';
class UnderstandDetail extends React.Component {
    constructor() {
        super();
    }



    render() {


        return (
            <div className="app-container">
                <div className="app-white">
                    <div className="step app-wh80  app-padding-lr24 border-bottom">
                        <div className="s-flex1 app-333-font32">基本介绍</div>
                    </div>
                    <div className="step app-padding-tb32 app-666-font28 app-padding-lr24 app-line-height" >

                        灵隐寺，又名云林寺，位于浙江省杭州市，背靠北高峰，面朝飞来峰，始建于东晋咸和元年（326年）。

                    </div>
                    <div className="app-height-20"></div>
                    <div className="step app-wh80 app-padding-lr24 border-bottom">
                        <div className="s-flex1 app-333-font32">主持寄语</div>
                    </div>
                    <div className="step app-padding-tb32 app-666-font28 app-padding-lr24" >

                        愿大家大发善心，一起修复大雄宝寺
                    </div><div className="app-height-20"></div>
                    <div className="step app-wh80 app-padding-lr24 border-bottom">
                        <div className="s-flex1 app-333-font32">需要金额</div>
                    </div>
                    <div className="step app-padding-tb32 app-666-font28 app-padding-lr24" >

                        2200000元

                    </div><div className="app-height-20"></div>
                    <div className="step app-wh80 app-padding-lr24 border-bottom">
                        <div className="s-flex1 app-333-font32">募集情况</div>
                    </div>
                    <div className="step app-padding-tb32 app-666-font28 app-padding-lr24" >

                            <div>已募集 <span className="app-active-font28">10000元</span>,进度为 <span className="app-active-font28">50%</span></div>

                    </div>
                </div>
            </div>
        )
    }
}


export default UnderstandDetail