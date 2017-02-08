'usr strict';

import React from 'react';


import Foot from '../Foot'
import jt from '../../../src/images/my/jt.png'

import {Router, Route, IndexRoute, browserHistory, Link} from 'react-router';

class Donations extends React.Component {
    constructor() {
        super();
    }


    editInfo(){

    }
    render() {
        return (
            <div className="app-padding-lr24">




                <div className="step border-bottom app-padding-tb20">
                    <div className="s-flex1 app-666-font32">募捐名字</div>
                </div>

                <div className="step app-padding-tb20" style={{height:'200px'}}>
                    <div className="s-flex1 app-input-edit" style={{height:'200px'}}>
                        <textarea  className="s-flex1 app-999-font28 app-setting-textarea-word"  placeholder="募捐名字"></textarea>
                    </div>
                </div>

                <div className="step border-bottom app-padding-tb20">
                    <div className="s-flex1 app-666-font32">基本介绍</div>
                </div>

                <div className="step app-padding-tb20" style={{height:'200px'}}>
                    <div className="s-flex1 app-input-edit" style={{height:'200px'}}>
                        <textarea  className="s-flex1 app-999-font28 app-setting-textarea-word"  placeholder="基本介绍"></textarea>
                    </div>
                </div>
                <div className="step border-bottom app-padding-tb20">
                    <div className="s-flex1 app-666-font32">住持寄语</div>
                </div>

                <div className="step app-padding-tb20" style={{height:'200px'}}>
                    <div className="s-flex1 app-input-edit" style={{height:'200px'}}>
                        <textarea  className="s-flex1 app-999-font28 app-setting-textarea-word"  placeholder="住持寄语"></textarea>
                    </div>
                </div>
                <div className="step border-bottom app-padding-tb20">
                    <div className="s-flex1 app-666-font32">需要金额</div>
                </div>

                <div className="step app-padding-tb20">
                    {/*<div className="s-flex1">*/}
                        {/*<input className="app-input" placeholder="金额"  type="text"/> <span>元</span>*/}
                    {/*</div>*/}

                    <div className="s-flex1 app-input-edit">
                        <input className="app-input" placeholder="金额" type="text"/>
                    </div>

                    <div className="s-flex1">
                        <div className="app-999-font30">元</div>
                    </div>
                    
                </div>




                <div className="step app-padding-tb20 app-margin-tb20 app-yellow-radius-check-button">
                    <div className="s-center" onClick={this.editInfo.bind(this)}>发布募捐</div>
                </div>




            </div>
        )
    }
}


export default Donations