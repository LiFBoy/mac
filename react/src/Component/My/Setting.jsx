'usr strict';

import React from 'react';

import jt from '../../../src/images/my/jt.png'

class Setting extends React.Component {
    constructor() {
        super();

    }

    componentWillMount(){
       // this.title()
    }


    title(){
        window.g_bridge.callHandler('sendMessageToApp', {
                type: 15, data: {title:'个人',
                    rightNavigationBarItems:[{type: t||10000, title: !t ? '编辑' : 'baocun'}]}},
            (response)=>{

            })
    }

    render(){
        return (
            <div className="app-container">

                <div className="app-height-20"></div>

                    <div className="step app-white app-padding-lr24" style={{height:'100px'}}>
                        <div className="s-flex1 app-333-font28">退出登录</div>
                        <div className="s-flex1 s-j-end"><img src={jt} /></div>
                    </div>

            </div>
        )
    }
}


export default Setting