'usr strict';

import React from 'react';

import kaoqin from '../../src/images/kaoqin.png'
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
                    <img src={kaoqin}/>

                    <div className="div-text">消息</div>
                </div>
                <div className="menu-option">
                    <img src={kaoqin}/>
                    <div className="div-text">我的</div>
                </div>
            </div>
        )
    }
}


export default Foot