'usr strict';

import React from 'react';



import {Router, Route, IndexRoute, browserHistory, Link} from 'react-router';




class wish extends React.Component {
    constructor() {
        super();
    }


    render() {


        return (
            <div className="app-container wish-container app-padding-lr24">
                <div className="step">
                    <div className="s-center">
                        <div className="wish-img">
                            <img src='/dist/bg/wish.png' className="app-wh100-all"/>
                        </div>
                    </div>
                </div>

                <div className="step">
                    <div className="s-center wish-text app-333-font32">木梦田要 茜楞全运会人侍候夫协</div>
                </div>

                <div className="step">
                    <div className="s-center">
                        <div className="wish-money">
                            <span className="app-333-font36">20</span><span className="app-333-font24">元</span>
                        </div>
                    </div>
                </div>
                <div className="step wish-input-content">
                    <div className="app-padding-lr24 app-333-font32" style={{height:'40px',lineHeight:'40px'}}>祈愿</div>
                    <div>
                        <input type="text" className="wish-input" placeholder="保佑平安，万事如意"/>
                    </div>
                </div>
                <div className="step app-yellow-radius-check-button" style={{height:'100px'}}>
                    <div className="s-center">进行祈愿</div>
                </div>
            </div>

        )
    }
}


export default wish