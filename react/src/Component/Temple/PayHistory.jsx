'usr strict';

import React from 'react';


class PayHistory extends React.Component {
    constructor() {
        super();
    }

    render(){
        return (
            <div className="app-container">

                <div className="pay-history ">
                    <div className="step border-bottom app-wh-120 app-padding-lr24 app-white">
                        <div className="s-flex1 s-j-center s-flex-d app-666-font30" style={{alignItems: 'flex-start'}}>
                            <div className="app-333-font28 app-line-height-one">大师</div>
                            <div className="app-999-font24 pt20 app-line-height-one">2小时前</div>
                        </div>
                        <div className="s-flex1 s-j-end app-333-font28">
                            募捐金额：20000元
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}


export default PayHistory