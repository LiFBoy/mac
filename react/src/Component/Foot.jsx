'usr strict';

import React from 'react';

import kaoqin from '../../src/images/kaoqin.png'

import {Router, Route, IndexRoute, browserHistory, Link} from 'react-router';
class Foot extends React.Component {
    constructor() {
        super();
    }

    render(){
        return (
            <div className="app-menu app-white">
                <div className="menu-option">
                    <img src={kaoqin}/>

                    <div className="div-text">寺庙</div>
                </div>




                <div className="menu-option">

                    <Link to="/Temple">
                    <img src={kaoqin}/>

                    <div className="div-text">消息</div>

                    </Link>
                </div>


                <div className="menu-option">

                    <Link to="/MyMain">
                    <img src={kaoqin}/>
                    <div className="div-text">我的</div>
                    </Link>
                </div>

            </div>
        )
    }
}


export default Foot