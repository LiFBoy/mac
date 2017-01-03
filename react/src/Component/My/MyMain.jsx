'usr strict';

import React from 'react';


import Foot from '../Foot'
import feedbackpro from '../../../src/images/my/feedbackpro.png'
import myalms from '../../../src/images/my/myalms.png'
import setting from '../../../src/images/my/setting.png'
import payinfo from '../../../src/images/my/payinfo.png'
import jt from '../../../src/images/my/jt.png'

import {Router, Route, IndexRoute, browserHistory, Link} from 'react-router';

class MyMain extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className="app-container">

                <div className="step app-padding-lr24 my-main">
                    <Link to="/PersonalInfo" className="app-a">
                        <div className="img"><img src="http://img4.imgtn.bdimg.com/it/u=398347842,2770887580&fm=23&gp=0.jpg" className="app-wh100-all-radius"/></div>
                    </Link>
                    <div className="s-right s-j-center" style={{flexDirection: 'column', alignItems: 'flex-start'}}>
                        <Link to="/PersonalInfo" className="app-a">
                            <div className="app-333-font30">草木一秋</div>
                        </Link>
                        <div className="app-999-font22" style={{paddingTop:'24px'}}>时光自有时光，时光自有时光。</div>
                    </div>
                </div>

                <div className="app-margin-tb20"></div>
                <Link to="/MyAlms" className="app-a">
                    <div className="step app-padding-lr24 app-white-chunk border-bottom">
                        <div className="s-flex2"><img className="app-wh-45" src={myalms}/>
                            <div className="app-333-font28 app-padding-l24">我的日善</div>
                        </div>

                        <div className="s-flex1 s-j-end"><img className="app-wh-45" src={jt}/></div>
                    </div>
                </Link>
                <Link to="/PayInfo" className="app-a">
                    <div className="step app-padding-lr24 app-white-chunk">
                        <div className="s-flex2"><img className="app-wh-45" src={payinfo}/>
                            <div className=" app-333-font28 app-padding-l24">我的供养</div>
                        </div>

                        <div className="s-flex1 s-j-end"><img className="app-wh-45" src={jt}/></div>
                    </div>
                </Link>
                <div className="app-margin-tb20"></div>

                <Link to="/Feedbackpro" className="app-a">
                    <div className="step app-padding-lr24 app-white-chunk border-bottom">
                        <div className="s-flex2">

                            <img className="app-wh-45" src={feedbackpro}/>
                            <div className="app-333-font28 app-padding-l24">反馈问题</div>

                        </div>

                        <div className="s-flex1 s-j-end"><img className="app-wh-45" src={jt}/></div>
                    </div>
                </Link>

                <Link to="/Setting" className="app-a">
                    <div className="step app-padding-lr24 app-white-chunk">


                        <div className="s-flex2"><img className="app-wh-45" src={setting}/>
                            <div className="app-333-font28 app-padding-l24">设置</div>
                        </div>

                        <div className="s-flex1 s-j-end"><img className="app-wh-45" src={jt}/></div>

                    </div>

                </Link>

                <Foot type="3"></Foot>
            </div>
        )
    }
}


export default MyMain