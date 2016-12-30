'usr strict';

import React from 'react';


class Feedbackpro extends React.Component {
    constructor() {
        super();
    }

    render(){
        return (
            <div className="app-padding-lr24 ">
                <form action="">
                    <div className="step app-padding-tb20">
                        <textarea  className="s-flex1 app-999-font28 app-setting-textarea"  placeholder="请输入你的问题">

                        </textarea>


                    </div>

                    <div className="step">
                        <div className="s-flex1 s-j-center app-yellow-radius-check-button" style={{height:'100px'}}>提交</div>
                    </div>
                </form>
            </div>
        )
    }
}


export default Feedbackpro