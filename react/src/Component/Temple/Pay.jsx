'usr strict';

import React from 'react';




import {Router, Route, IndexRoute, browserHistory, Link} from 'react-router';
class Pay extends React.Component {
    constructor() {
        super();
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
                        <div className="s-flex1 pay-chunk s-j-center"><span className="app-333-font28">其它</span></div>
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