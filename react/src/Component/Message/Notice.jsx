'usr strict';

import React from 'react';

import Foot from '../Foot'

import myalms from '../../../src/images/temple/myalms.png'


import chunk1 from '../../../src/images/temple/chunk1.png'
import chunk2 from '../../../src/images/temple/chunk2.png'
import chunk3 from '../../../src/images/temple/chunk3.png'
import pac from '../../../src/images/temple/praise－active.png'
import comments from '../../../src/images/temple/comments.png'

class Notice extends React.Component {
    constructor() {
        super();
    }

    render(){
        return (

            <div className="temple-container app-container">


                <div className="middle">

                    <div className="dynamic-content app-padding-lr24 border-bottom">
                        <div className="step temple-name">
                            <div>
                                <div className="temple-img"><img className="app-wh100-all-radius"
                                                                 src="http://pic.58pic.com/58pic/11/52/20/45s58PICVat.jpg"/>
                                </div>
                            </div>
                            <div className="s-right s-j-center"
                                 style={{flexDirection: 'column', alignItems: 'flex-start'}}>
                                <div className="app-333-font28">悟空  <span className="app-666-font28">赞了</span></div>
                                <div className="app-999-font24" style={{paddingTop: '12px'}}>12-10 09:32</div>
                            </div>
                        </div>

                        <div className="temple-content" style={{paddingBottom: '24px'}}>

                            <div className="step">
                                <div className="notice s-flex1 s-flex-d s-j-center app-padding-l24"
                                     style={{alignItems: 'flex-start'}}>
                                    <div className="app-333-font28" style={{marginBottom: '16px'}}>唐僧大师</div>
                                    <div className="app-999-font24">灵隐寺美美呀</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="dynamic-content app-padding-lr24 border-bottom">
                        <div className="step temple-name">
                            <div>
                                <div className="temple-img"><img className="app-wh100-all-radius"
                                                                 src="http://pic.58pic.com/58pic/11/52/20/45s58PICVat.jpg"/>
                                </div>
                            </div>
                            <div className="s-right s-j-center"
                                 style={{flexDirection: 'column', alignItems: 'flex-start'}}>
                                <div className="app-333-font28">悟空  <span className="app-666-font28">赞了</span></div>
                                <div className="app-999-font24" style={{paddingTop: '12px'}}>12-10 09:32</div>
                            </div>
                        </div>

                        <div className="temple-content" style={{paddingBottom: '24px'}}>

                            <div className="step">
                                <div className="notice s-flex1 s-flex-d s-j-center app-padding-l24"
                                     style={{alignItems: 'flex-start'}}>
                                    <div className="app-333-font28" style={{marginBottom: '16px'}}>唐僧大师</div>
                                    <div className="app-999-font24">灵隐寺美美呀</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/*<Foot type="2"></Foot>*/}


            </div>

        )
    }
}


export default Notice