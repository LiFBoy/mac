'usr strict';

import React from 'react';


import Foot from '../Foot'
import jt from '../../../src/images/my/jt.png'

import {Router, Route, IndexRoute, browserHistory, Link} from 'react-router';

class dynamic extends React.Component {
    constructor() {
        super();
    }

    editInfo(){

    }
    render() {
        return (

                <div className="app-padding-lr24">




                        <div className="step app-padding-tb20" style={{height:'200px'}}>
                            <div className="s-flex1 app-input-edit" style={{height:'200px'}}>
                                <textarea  className="s-flex1 app-999-font28 app-setting-textarea-word"  placeholder="输入内容"></textarea>
                            </div>
                        </div>

                    <div className="step  app-666-font28" >

                        <div className="s-flex1" style={{flexWrap:'wrap'}}>
                            <div className="app-upload-img-temple-backend">
                                <img src="http://pic17.nipic.com/20111003/5847249_214945441162_2.jpg" className="app-wh100-all" />
                            </div>
                            <div className="app-upload-img-temple-backend">
                                <img src="http://pic17.nipic.com/20111003/5847249_214945441162_2.jpg" className="app-wh100-all" />
                            </div>
                            <div className="app-upload-img-temple-backend">
                                <img src="http://pic17.nipic.com/20111003/5847249_214945441162_2.jpg" className="app-wh100-all" />
                            </div>
                            <div className="app-upload-img-temple-backend">
                                <img src="http://pic17.nipic.com/20111003/5847249_214945441162_2.jpg" className="app-wh100-all" />
                            </div>
                        </div>
                    </div>





                        <div className="step app-padding-tb20 app-margin-tb20 app-yellow-radius-check-button">
                            <div className="s-center" onClick={this.editInfo.bind(this)}>发布</div>
                        </div>

                </div>



        )
    }
}


export default dynamic