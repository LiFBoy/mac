'usr strict';

import React from 'react';


import Foot from '../Foot'
import kaoqin from '../../../src/images/kaoqin.png'

import {Router, Route, IndexRoute, browserHistory, Link} from 'react-router';

class MyMain extends React.Component {
    constructor() {
        super();
    }

    render(){
        return (
            <div className="app-container">

                <div className="step app-white-chunk">
                    <div className="s-left s-j-center"><img src={kaoqin}/></div>
                    <div className="s-right s-j-center" style={{flexDirection:'column',alignItems:'flex-start'}}>
                        <div>草木一秋</div>
                        <div>时光自有时光，时光自有时光。</div>
                    </div>
                </div>

                <div className="app-margin-tb20"></div>
                <Link to="/MyAlms">
                <div className="step app-white-chunk border-bottom">
                    <div className="s-left"><img src={kaoqin}/></div>
                    <div className="s-right">我的日善</div>
                    <div className="s-right s-j-end">s</div>
                </div>
                </Link>
                <Link to="/PayInfo">
                <div className="step app-white-chunk">
                    <div className="s-left"><img src={kaoqin}/></div>
                    <div className="s-right">我的供养</div>
                    <div className="s-right s-j-end">s</div>
                </div>
                </Link>
                <div className="app-margin-tb20"></div>

                <Link to="/Feedbackpro">
                    <div className="step app-white-chunk border-bottom">
                        <div className="s-left"><img src={kaoqin}/></div>
                        <div className="s-right">反馈问题</div>
                        <div className="s-right s-j-end">s</div>
                    </div>
                </Link>

                <Link to="/Setting">
                    <div className="step app-white-chunk">


                        <div className="s-left"><img src={kaoqin}/></div>
                        <div className="s-right">设置</div>
                        <div className="s-right s-j-end">s</div>

                    </div>

                </Link>

                <Foot></Foot>
            </div>
        )
    }
}


export default MyMain