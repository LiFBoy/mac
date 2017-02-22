'usr strict';

import React from 'react';


import Foot from '../Foot'
import jt from '../../../src/images/my/jt.png'

import {Router, Route, IndexRoute, browserHistory, Link} from 'react-router';
import jsBridge from '../../jsBridge'

class TempleEdit extends React.Component {
    constructor() {
        super();
       // this.title()
        jsBridge.getBrideg();
        jsBridge.setTitle('编辑资料')
    }

    componentWillMount(){
        //this.titless();
    }



    editInfo() {

    }

    render() {
        return (
            <div className="app-padding-lr24">


                <div className="step border-bottom app-padding-tb20">
                    <div className="s-flex1 app-666-font32">寺庙概况</div>
                </div>

                <div className="step app-padding-tb20" style={{height: '200px'}}>
                    <div className="s-flex1 app-input-edit" style={{height: '200px'}}>
                        <textarea className="s-flex1 app-999-font28 app-setting-textarea-word"
                                  placeholder="寺庙概况"></textarea>
                    </div>
                </div>
                <div className="step border-bottom app-padding-tb20">
                    <div className="s-flex1 app-666-font32">图片展示</div>
                </div>
                <div className="step  app-666-font28">

                    <div className="s-flex1" style={{flexWrap: 'wrap'}}>
                        <div className="app-upload-img-temple-backend">
                            <img src="http://pic17.nipic.com/20111003/5847249_214945441162_2.jpg"
                                 className="app-wh100-all"/>
                        </div>
                        <div className="app-upload-img-temple-backend">
                            <img src="http://pic17.nipic.com/20111003/5847249_214945441162_2.jpg"
                                 className="app-wh100-all"/>
                        </div>
                        <div className="app-upload-img-temple-backend">
                            <img src="http://pic17.nipic.com/20111003/5847249_214945441162_2.jpg"
                                 className="app-wh100-all"/>
                        </div>
                        <div className="app-upload-img-temple-backend">
                            <img src="http://pic17.nipic.com/20111003/5847249_214945441162_2.jpg"
                                 className="app-wh100-all"/>
                        </div>
                    </div>
                </div>

                <div className="step border-bottom app-padding-tb20">
                    <div className="s-flex1 app-666-font32">主持信息</div>
                </div>

                <div className="step app-padding-tb20" style={{height: '200px'}}>
                    <div className="s-flex1 app-input-edit" style={{height: '200px'}}>
                        <textarea className="s-flex1 app-999-font28 app-setting-textarea-word"
                                  placeholder="主持信息"></textarea>
                    </div>
                </div>
                <div className="step border-bottom app-padding-tb20">
                    <div className="s-flex1 app-666-font32">主要建筑</div>
                </div>

                <div className="step app-padding-tb20" style={{height: '200px'}}>
                    <div className="s-flex1 app-input-edit" style={{height: '200px'}}>
                        <textarea className="s-flex1 app-999-font28 app-setting-textarea-word"
                                  placeholder="主要建筑"></textarea>
                    </div>
                </div>
                <div className="step border-bottom app-padding-tb20">
                    <div className="s-flex1 app-666-font32">地理位置</div>
                </div>

                <div className="step app-padding-tb20" style={{height: '200px'}}>
                    <div className="s-flex1 app-input-edit" style={{height: '200px'}}>
                        <textarea className="s-flex1 app-999-font28 app-setting-textarea-word"
                                  placeholder="地理位置"></textarea>
                    </div>
                </div>


                <div className="step app-padding-tb20 app-margin-tb20 app-yellow-radius-check-button">
                    <div className="s-center" onClick={this.editInfo.bind(this)}>保存修改</div>
                </div>


            </div>
        )
    }
}


export default TempleEdit