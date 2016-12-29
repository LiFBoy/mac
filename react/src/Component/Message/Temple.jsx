'usr strict';

import React from 'react';

import Foot from '../Foot'

import myalms from '../../../src/images/temple/myalms.png'


import chunk1 from '../../../src/images/temple/chunk1.png'
import chunk2 from '../../../src/images/temple/chunk2.png'
import chunk3 from '../../../src/images/temple/chunk3.png'
import pac from '../../../src/images/temple/praise－active.png'
import comments from '../../../src/images/temple/comments.png'

class Temple extends React.Component {
    constructor() {
        super();
    }

    render(){
        return (

            <div className="temple-container app-container">


                <div className="middle">





                    <div className="dynamic-content app-padding-lr24">
                        <div className="step temple-name">
                            <div>
                                <div className="temple-img"><img className="app-wh100-all-radius" src="http://pic.58pic.com/58pic/11/52/20/45s58PICVat.jpg"/></div>
                            </div>
                            <div className="s-right s-j-center" style={{flexDirection: 'column', alignItems: 'flex-start'}}>
                                <div className="app-333-font28">灵隐寺</div>
                                <div className="app-999-font24" style={{paddingTop:'12px'}}>2分钟前</div>
                            </div>
                        </div>

                        <div className="temple-content">
                            <div className="step ">
                                <div className="s-flex1 app-333-font28">
                                    下个月即将迎来观音圣诞，让我们为观音共同祈福，祈福，众生向善。
                                </div>
                            </div>

                            <div className="step" style={{paddingTop:'24px'}}>
                                <div className="s-flex1" style={{flexWrap:'wrap'}}>
                                    <div className="upload-img">
                                        <img src="http://pic17.nipic.com/20111003/5847249_214945441162_2.jpg" className="app-wh100-all" />
                                    </div>
                                    <div className="upload-img">
                                        <img src="http://pic3.nipic.com/20090706/2082016_155756000_2.jpg" className="app-wh100-all" />
                                    </div>
                                    <div className="upload-img">
                                        <img src="http://pic17.nipic.com/20111003/5847249_214945441162_2.jpg" className="app-wh100-all" />
                                    </div>
                                </div>
                            </div>
                        </div>





                        <div className="step right-corner">

                            <div className="s-flex1 s-j-end">

                                <img className="img" src={pac}/>
                                <div className="number app-999-font24 padding-right-40">50562</div>



                                <img className="img" src={comments}/>
                                <div className="number app-999-font24">789</div>

                            </div>
                        </div>
                    </div>






                </div>

                <Foot type="2"></Foot>


            </div>

        )
    }
}


export default Temple