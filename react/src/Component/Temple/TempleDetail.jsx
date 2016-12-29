'usr strict';

import React from 'react';
import myalms from '../../../src/images/temple/myalms.png'


import chunk1 from '../../../src/images/temple/chunk1.png'
import chunk2 from '../../../src/images/temple/chunk2.png'
import chunk3 from '../../../src/images/temple/chunk3.png'
import pac from '../../../src/images/temple/praise－active.png'
import comments from '../../../src/images/temple/comments.png'


class TempleDetail extends React.Component {
    constructor() {
        super();
    }

    render(){
        return (
            <div className="temple-container app-container">
                <div className="top app-padding-lr24">
                    <div className="step">
                        <div className="s-center temple-title">
                            <div style={{width:'200px',height:'200px'}}>
                                <img src="http://img4.imgtn.bdimg.com/it/u=398347842,2770887580&fm=23&gp=0.jpg" className="app-wh100-all-radius"/>
                            </div>
                        </div>

                    </div>
                    <div className="step">
                        <div className="s-center">
                            <div className="app-666-font28">今日日善</div>
                            <div className="app-333-font28 app-padding-l20">5000</div>
                        </div>
                    </div>
                    <div className="step">
                        <div className="s-center">
                            <div className="goAlms step">
                                <div className="s-flex1 app-padding-l24">
                                    <div><img className="img" src={myalms}/></div>
                                    <div className="app-333-font28" style={{paddingLeft:'14px'}}>去日善></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="step">
                        <div className="s-center">
                            <div className="app-666-font24">所在地:</div>
                            <div className="app-333-font24">杭州</div>

                            <div className="app-padding-lr24"></div>


                            <div className="app-666-font24">现住持:</div>
                            <div className="app-333-font24">光泉法师</div>
                        </div>

                    </div>


                    <div className="step h-border">
                        <div className="s-flex1 s-j-center s-flex-d">
                            <div><img src={chunk1}/></div>
                            <div className="pdt app-666-font24">222</div>
                        </div>
                        <div className="s-flex1 s-j-center s-flex-d">
                            <div><img src={chunk2}/></div>
                            <div className="pdt app-666-font24">111</div>
                        </div>
                        <div className="s-flex1 s-j-center s-flex-d">
                            <div><img src={chunk3}/></div>
                            <div className="pdt app-666-font24">3333</div>
                        </div>
                    </div>

                    <div className="step h-80">
                        <div className="s-center s-j-center app-999-font24">
                            更多资料>
                        </div>
                    </div>




                </div>
                <div className="app-margin-tb20"></div>
                <div className="middle">
                    <div className="step h-88-b">
                        <div className="s-flex2 s-j-center app-333-font32">大熊宝寺重修</div>
                        {/*<div className="s-flex1 s-j-end">往期></div>*/}
                    </div>

                    <div className="app-padding-lr40">
                        <div className="progress-bar"></div>

                        <div className="step">


                            <div className="s-flex1 app-999-font24">1111元</div>
                            <div className="s-flex1 s-j-end app-999-font24">2222元</div>

                        </div>
                    </div>
                    <div className="step three-chunk">
                        <div className="s-center">

                            <div className="step">
                                <div className="chunk app-666-font28 s-flex1 s-j-center">捐款记录</div>
                                <div className="app-padding-lr20"></div>
                                <div className="chunk app-666-font28 s-flex1 s-j-center">了解详情</div>
                                <div className="app-padding-lr20"></div>
                                <div className="chunk app-666-font28 s-flex1 s-j-center">发善心</div>
                            </div>

                        </div>
                    </div>


                    <div className="step dynamic app-padding-lr24">
                        <div className="s-flex1  app-666-font28">
                            动态
                        </div>
                    </div>

                    <div className="dynamic-content app-padding-lr24">
                        <div className="step temple-name">
                            <div>
                                <div className="temple-img">
                                    <img src="http://img4.imgtn.bdimg.com/it/u=398347842,2770887580&fm=23&gp=0.jpg" className="app-wh100-all-radius"/>
                                </div>
                            </div>
                            <div className="s-right s-j-center" style={{flexDirection: 'column', alignItems: 'flex-start'}}>
                                <div className="app-333-font28">灵隐寺</div>
                                <div className="app-999-font24" style={{paddingTop:'12px'}}>2分钟前</div>
                            </div>
                        </div>

                        <div className="step temple-content">
                            <div className="s-flex1 app-333-font28">
                                下个月即将迎来观音圣诞，让我们为观音共同祈福，祈福，众生向善。
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

                    <div className="dynamic-content app-padding-lr24">
                        <div className="step temple-name">
                            <div>
                                <div className="temple-img">
                                    <img src="http://img4.imgtn.bdimg.com/it/u=398347842,2770887580&fm=23&gp=0.jpg" className="app-wh100-all-radius"/>
                                </div>
                            </div>
                            <div className="s-right s-j-center" style={{flexDirection: 'column', alignItems: 'flex-start'}}>
                                <div className="app-333-font28">灵隐寺</div>
                                <div className="app-999-font24" style={{paddingTop:'12px'}}>2分钟前</div>
                            </div>
                        </div>

                        <div className="step temple-content">
                            <div className="s-flex1 app-333-font28">
                                下个月即将迎来观音圣诞，让我们为观音共同祈福，祈福，众生向善。
                            </div>
                        </div>

                        <div className="step right-corner">

                            <div className="s-flex1 s-j-end">

                                <img className="img" src={pac}/>
                                <div className="number app-999-font24 padding-right-40"></div>



                                <img className="img" src={comments}/>
                                <div className="number app-999-font24"></div>

                            </div>
                        </div>
                    </div>




                </div>
                <div className="no-more">
                    <div className="step">
                        <div className="s-center app-999-font24">没有更多了哦</div>
                    </div>
                </div>


            </div>
        )
    }
}


export default TempleDetail