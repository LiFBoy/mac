'usr strict';

import React from 'react';


import Foot from '../Foot'
import jt from '../../../src/images/my/jt.png'

import {Router, Route, IndexRoute, browserHistory, Link} from 'react-router';

class TempleIndex extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className="app-container">

                <div className="app-padding-tb20"></div>
                <Link to="/" className="app-a">
                    <div className="step app-padding-lr24 app-white-chunk border-bottom">
                        <div className="s-flex2">
                            <div className="app-333-font28 app-padding-l24">发布动态</div>
                        </div>

                        <div className="s-flex1 s-j-end"><img className="app-wh-45" src={jt}/></div>
                    </div>
                </Link>
                <Link to="/" className="app-a">
                    <div className="step app-padding-lr24 app-white-chunk">
                        <div className="s-flex2">
                            <div className=" app-333-font28 app-padding-l24">编辑资料</div>
                        </div>

                        <div className="s-flex1 s-j-end"><img className="app-wh-45" src={jt}/></div>
                    </div>
                </Link>
                <div className="app-padding-tb20"></div>

                <Link to="/" className="app-a">
                    <div className="step app-padding-lr24 app-white-chunk border-bottom">
                        <div className="s-flex2">
                            <div className="app-333-font28 app-padding-l24">发布募捐</div>

                        </div>

                        <div className="s-flex1 s-j-end"><img className="app-wh-45" src={jt}/></div>
                    </div>
                </Link>

                <Link to="/" className="app-a">
                    <div className="step app-padding-lr24 app-white-chunk">


                        <div className="s-flex2">
                            <div className="app-333-font28 app-padding-l24">查看流水</div>
                        </div>

                        <div className="s-flex1 s-j-end"><img className="app-wh-45" src={jt}/></div>

                    </div>

                </Link>

                {/*<Foot type="3"></Foot>*/}
            </div>
        )
    }
}


export default TempleIndex