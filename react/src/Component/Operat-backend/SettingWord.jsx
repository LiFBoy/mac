'usr strict';

import React from 'react';


import Foot from '../Foot'
import jt from '../../../src/images/my/jt.png'

import {Router, Route, IndexRoute, browserHistory, Link} from 'react-router';

class SettingWord extends React.Component {
    constructor() {
        super();
    }


    editInfo(){

    }
    render() {
        return (
            <div className="app-padding-lr24">

                <form>
                    <div className="step app-padding-tb20">
                        <div className="s-left app-666-font32">时间：</div>
                        <div className="s-right app-input-edit">
                            <input className="app-input" placeholder="时间" type="date"/>
                        </div>
                    </div>

                    <div className="step" style={{height:'15rem'}}>
                        <div className="s-left app-666-font32" style={{height:'15rem'}}>内容：</div>
                        <div className="s-right" style={{height:'15rem'}}>
                            <textarea  className="s-flex1 app-999-font28 app-setting-textarea-word"  placeholder="内容"></textarea>
                        </div>
                    </div>


                    <div className="step app-padding-tb20 app-margin-tb20 app-yellow-radius-check-button">
                        <div className="s-center" onClick={this.editInfo.bind(this)}>添加每日一句</div>
                    </div>

                    <div className="step app-padding-tb20 border-bottom">
                        <div className="s-flex1 app-666-font32">最近设置每日一句</div>
                    </div>


                    <div className="step border-bottom app-wh-120  app-white" style={{paddingLeft:'50px'}}>
                        <div className="s-flex1 s-j-center s-flex-d app-666-font30" style={{alignItems: 'flex-start'}}>
                            <div className="app-333-font28">2018年1月1日19:00</div>
                            <div className="app-999-font30 pt20">我是每日一句</div>
                        </div>
                        <div className="s-flex1 s-j-end app-333-font28">
                            删除
                        </div>
                    </div>
                    <div className="step border-bottom app-wh-120  app-white" style={{paddingLeft:'50px'}}>
                        <div className="s-flex1 s-j-center s-flex-d app-666-font30" style={{alignItems: 'flex-start'}}>
                            <div className="app-333-font28">2018年1月1日19:00</div>
                            <div className="app-999-font30 pt20">我是每日一句</div>
                        </div>
                        <div className="s-flex1 s-j-end app-333-font28">
                            删除
                        </div>
                    </div>
                    </form>

            </div>
        )
    }
}


export default SettingWord