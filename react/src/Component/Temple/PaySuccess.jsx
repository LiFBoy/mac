'usr strict';

import React from 'react';


class PaySuccess extends React.Component {
    constructor() {
        super();
    }

    render(){
        return (
            <div className="pay app-padding-lr24">
                <div>

                    <div className="step">
                        <div className="s-center pay-title">
                            <div style={{width:'200px',height:'200px'}}>
                                <img src="http://img4.imgtn.bdimg.com/it/u=398347842,2770887580&fm=23&gp=0.jpg" className="app-wh100-all-radius"/>
                            </div>

                        </div>
                    </div>

                    <div className="step">
                        <div className="s-center app-333-font32">
                            灵隐寺
                        </div>
                    </div>

                    <div className="step" style={{paddingTop:'32px'}}>
                        <div className="s-center app-666-font28">
                            日积小德方成大德
                        </div>
                    </div>
                </div>



                <div className="pay-success">

                    <div className="step">
                        <div className="s-center app-active-font36">捐献成功~</div>
                    </div>



                </div>

                <div className="step app-yellow-radius-check-button" style={{height:'100px'}}>
                    <div className="s-center">返回寺庙</div>
                </div>
            </div>
        )
    }
}


export default PaySuccess