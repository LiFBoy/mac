'usr strict';

import React from 'react';


class PersonalInfo extends React.Component {
    constructor() {
        super();
    }

    render(){
        return (
            <div className="app-padding-lr24" style={{paddingTop:'60px'}}>
                <div className="step app-wh120 border-bottom">
                    <div className="s-left app-666-font32">用户名:</div>
                    <div className="s-right app-666-font32">名字</div>
                </div>
                <div className="step app-wh120 border-bottom">
                    <div className="s-left app-666-font32">性别:</div>
                    <div className="s-right app-666-font32">男</div>
                </div>
                <div className="step app-wh120 border-bottom">
                    <div className="s-left app-666-font32">年龄:</div>
                    <div className="s-right app-666-font32">100</div>
                </div>
                <div className="step app-wh120 border-bottom">
                    <div className="s-left app-666-font32">居住地:</div>
                    <div className="s-right app-666-font32">浙江杭州</div>
                </div>
                <div className="step app-wh120 border-bottom">
                    <div className="s-left app-666-font32">禅语:</div>
                    <div className="s-right app-666-font32">我的禅语</div>
                </div>

            </div>
        )
    }
}


export default PersonalInfo