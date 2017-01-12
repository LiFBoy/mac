'usr strict';

import React from 'react';


class PersonalEdit extends React.Component {
    constructor() {
        super();
    }

    render(){
        return (
            <div className="app-padding-lr24" style={{paddingTop:'80px'}}>
                <div className="step app-padding-tb20">
                    <div className="s-left app-666-font32">用户名：</div>
                    <div className="s-right app-input-edit">
                        <input className="app-input" placeholder="用户名" type="text"/>
                    </div>
                </div>
                <div className="step app-padding-tb20">
                    <div className="s-left app-666-font32">性别：</div>
                    <div className="s-right app-input-edit">
                        <input className="app-input" placeholder="用户名" type="text"/>
                    </div>
                </div>
                <div className="step app-padding-tb20">
                    <div className="s-left app-666-font32">年龄：</div>
                    <div className="s-right app-input-edit">
                        <input className="app-input" placeholder="用户名" type="text"/>
                    </div>
                </div>
                <div className="step app-padding-tb20">
                    <div className="s-left app-666-font32">居住地：</div>
                    <div className="s-right app-input-edit">
                        <input className="app-input" placeholder="用户名" type="text"/>
                    </div>
                </div>
                <div className="step app-padding-tb20">
                    <div className="s-left app-666-font32">禅语：</div>
                    <div className="s-right app-input-edit">
                        <input className="app-input" placeholder="用户名" type="text"/>
                    </div>
                </div>

            </div>
        )
    }
}


export default PersonalEdit