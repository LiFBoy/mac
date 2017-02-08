'usr strict';

import React from 'react';


import Foot from '../Foot'
import jt from '../../../src/images/my/jt.png'

import {Router, Route, IndexRoute, browserHistory, Link} from 'react-router';

class TempleList extends React.Component {
    constructor() {
        super();
    }


    editInfo(){

    }
    render() {
        return (
            <div className="app-container">


                    <div className="step app-padding-lr24 app-white-chunk border-bottom">
                        <div className="s-flex2">
                            <div className="app-333-font28 app-padding-l24">寺庙数量: <sapn>5</sapn></div>
                        </div>

                        <div className="s-flex1 s-j-end app-333-font28">添加</div>
                    </div>



                <div className="app-padding-tb20"></div>






                <Link to="/AddTemple" className="app-a">
                    <div className="step app-padding-lr24 app-white-chunk border-bottom">
                        <div className="s-flex2">
                            <div className="app-333-font28 app-padding-l24">创建寺庙</div>

                        </div>

                        <div className="s-flex1 s-j-end app-333-font28">修改</div>
                    </div>
                </Link>
                <Link to="/AddTemple" className="app-a">
                    <div className="step app-padding-lr24 app-white-chunk border-bottom">
                        <div className="s-flex2">
                            <div className="app-333-font28 app-padding-l24">创建寺庙</div>

                        </div>

                        <div className="s-flex1 s-j-end app-333-font28">修改</div>
                    </div>
                </Link>


                {/*<Foot type="3"></Foot>*/}
            </div>
        )
    }
}


export default TempleList