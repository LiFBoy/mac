'usr strict';

import React from 'react';


import Foot from '../Foot'
import jt from '../../../src/images/my/jt.png'

import {Router, Route, IndexRoute, browserHistory, Link} from 'react-router';

class AddTemple extends React.Component {
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
                        <div className="s-left app-666-font32">地点：</div>
                        <div className="s-right app-input-edit">
                            <input className="app-input"   placeholder="杭州" type="text"/>
                        </div>
                    </div>
                    <div className="step app-padding-tb20">
                        <div className="s-left app-666-font32">住持名：</div>
                        <div className="s-right app-input-edit">
                            <input className="app-input"   placeholder="住持名" type="text"/>
                        </div>
                    </div>
                    <div className="step app-padding-tb20">
                        <div className="s-left app-666-font32">经度：</div>
                        <div className="s-right app-input-edit">
                            <input className="app-input"   placeholder="经度" type="text"/>
                        </div>
                    </div>
                    <div className="step app-padding-tb20">
                        <div className="s-left app-666-font32">纬度：</div>
                        <div className="s-right app-input-edit">
                            <input className="app-input"   placeholder="纬度" type="text"/>
                        </div>
                    </div>

                    <div className="step border-bottom app-padding-tb20">
                        <div className="s-flex1 app-666-font32">寺庙概况</div>
                    </div>

                    <div className="step app-padding-tb20" style={{height:'200px'}}>
                        <div className="s-flex1 app-input-edit" style={{height:'200px'}}>
                            <textarea  className="s-flex1 app-999-font28 app-setting-textarea-word"  placeholder="寺庙概况"></textarea>
                        </div>
                    </div>
                    <div className="step border-bottom app-padding-tb20">
                        <div className="s-flex1 app-666-font32">图片展示</div>
                    </div>
                    <div className="step" style={{height:'200px'}}>

                    </div>

                    <div className="step border-bottom app-padding-tb20">
                        <div className="s-flex1 app-666-font32">主持信息</div>
                    </div>

                    <div className="step app-padding-tb20" style={{height:'200px'}}>
                        <div className="s-flex1 app-input-edit" style={{height:'200px'}}>
                            <textarea  className="s-flex1 app-999-font28 app-setting-textarea-word"  placeholder="主持信息"></textarea>
                        </div>
                    </div>
                    <div className="step border-bottom app-padding-tb20">
                        <div className="s-flex1 app-666-font32">主要建筑</div>
                    </div>

                    <div className="step app-padding-tb20" style={{height:'200px'}}>
                        <div className="s-flex1 app-input-edit" style={{height:'200px'}}>
                            <textarea  className="s-flex1 app-999-font28 app-setting-textarea-word"  placeholder="主要建筑"></textarea>
                        </div>
                    </div>
                    <div className="step border-bottom app-padding-tb20">
                        <div className="s-flex1 app-666-font32">地理位置</div>
                    </div>

                    <div className="step app-padding-tb20" style={{height:'200px'}}>
                        <div className="s-flex1 app-input-edit" style={{height:'200px'}}>
                            <textarea  className="s-flex1 app-999-font28 app-setting-textarea-word"  placeholder="地理位置"></textarea>
                        </div>
                    </div>




                    <div className="step app-padding-tb20 app-margin-tb20 app-yellow-radius-check-button">
                        <div className="s-center" onClick={this.editInfo.bind(this)}>保存修改</div>
                    </div>


                </form>

            </div>
        )
    }
}


export default AddTemple