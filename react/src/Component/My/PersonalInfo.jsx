'usr strict';

import React from 'react';


class PersonalInfo extends React.Component {
    constructor() {
        super();
    }

    render(){
        return (
            <div className="container">
                <div className="step app-padding-tb20">
                    <div className="s-left">用户名</div>
                    <div className="s-right"><input type="text"/></div>
                </div>
                <div className="step app-padding-tb20">
                    <div className="s-left">性别</div>
                    <div className="s-right"><input type="text"/></div>
                </div>
                <div className="step app-padding-tb20">
                    <div className="s-left">年龄</div>
                    <div className="s-right"><input type="text"/></div>
                </div>
                <div className="step app-padding-tb20">
                    <div className="s-left">居住地</div>
                    <div className="s-right"><input type="text"/></div>
                </div>
                <div className="step app-padding-tb20">
                    <div className="s-left">禅语</div>
                    <div className="s-right"><input type="text"/></div>
                </div>

            </div>
        )
    }
}


export default PersonalInfo