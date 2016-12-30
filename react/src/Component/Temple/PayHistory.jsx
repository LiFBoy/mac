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
                    <div className="step">
                        <div className="app-padding-lr24">NO1</div>
                        <div className="img-chunk app-margin-right24">
                            <img className="app-wh100-all" src="http://img4.imgtn.bdimg.com/it/u=398347842,2770887580&fm=23&gp=0.jpg"/>
                        </div>

                        <div className="s-flex1 s-flex-d" style={{alignItems: 'flex-start'}}>
                            <div>唐僧大师</div>
                            <div>2小时前</div>
                        </div>
                        <div className="s-flex1 s-j-end">
                            日善200天
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}


export default PayHistory