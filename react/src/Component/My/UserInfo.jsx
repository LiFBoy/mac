'usr strict';

import React from 'react';
import kaoqin from '../../../src/images/kaoqin.png'


class UserInfo extends React.Component {
    constructor() {
        super();
    }

    render(){
        return (
            <div className="app-padding-lr24 user-info">

                <div className="step">
                    <div className="s-center user-title">
                        <div style={{width:'200px',height:'200px'}}>
                            <img src="http://img4.imgtn.bdimg.com/it/u=398347842,2770887580&fm=23&gp=0.jpg" className="app-wh100-all-radius"/>
                        </div>

                    </div>
                </div>

                <div className="step">
                    <div className="s-center app-666-font28">
                        你的名字
                    </div>
                </div>



                <div className="step user-two">
                    <div className="s-center">
                        <div className="app-999-font24">日善:</div>
                        <div className="app-333-font24">300</div>

                        <div className="app-padding-lr24"></div>


                        <div className="app-999-font24">捐款:</div>
                        <div className="app-333-font24">100</div>
                    </div>

                </div>
                <div className="step app-wh120 border-bottom">
                    <div className="s-left app-666-font32">用户名:</div>
                    <div className="s-right app-333-font32">名字</div>
                </div>
                <div className="step app-wh120 border-bottom">
                    <div className="s-left app-666-font32">性别:</div>
                    <div className="s-right app-333-font32">男</div>
                </div>
                <div className="step app-wh120 border-bottom">
                    <div className="s-left app-666-font32">年龄:</div>
                    <div className="s-right app-333-font32">100</div>
                </div>
                <div className="step app-wh120 border-bottom">
                    <div className="s-left app-666-font32">居住地:</div>
                    <div className="s-right app-333-font32">浙江杭州</div>
                </div>
                <div className="step app-wh120 border-bottom">
                    <div className="s-left app-666-font32">禅语:</div>
                    <div className="s-right app-333-font32">我的禅语</div>
                </div>

            </div>
        )
    }
}


export default UserInfo