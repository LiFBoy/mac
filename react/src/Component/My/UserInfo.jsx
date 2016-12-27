'usr strict';

import React from 'react';
import kaoqin from '../../../src/images/kaoqin.png'


class UserInfo extends React.Component {
    constructor() {
        super();
    }

    render(){
        return (
            <div className="container">

                <div className="step">
                    <div className="s-center">
                        <img src={kaoqin}/>
                    </div>

                </div>
                <div className="step">
                    <div className="s-center">
                        <p>你的名字</p>
                    </div>
                </div>
                <div className="step">
                    <div className="s-left s-j-center">日善300</div>
                    <div className="s-right s-j-center s-right-1">捐款100</div>
                </div>
                <div className="step app-padding-tb20 border-bottom">
                    <div className="s-left">用户名:</div>
                    <div className="s-right"></div>
                </div>
                <div className="step app-padding-tb20 border-bottom">
                    <div className="s-left">用户名:</div>
                    <div className="s-right"></div>
                </div>
                <div className="step app-padding-tb20 border-bottom">
                    <div className="s-left">用户名:</div>
                    <div className="s-right"></div>
                </div>
                <div className="step app-padding-tb20 border-bottom">
                    <div className="s-left">用户名:</div>
                    <div className="s-right"></div>
                </div>
                <div className="step app-padding-tb20 border-bottom">
                    <div className="s-left">用户名:</div>
                    <div className="s-right"></div>
                </div>
            </div>
        )
    }
}


export default UserInfo