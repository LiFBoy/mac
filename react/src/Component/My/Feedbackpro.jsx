'usr strict';

import React from 'react';


class Feedbackpro extends React.Component {
    constructor() {
        super();
    }

    render(){
        return (
            <div className="container">
                <form action="">
                    <div>
                        <textarea  className="col-xs-12" cols="40" placeholder="请输入你的问题">

                        </textarea>
                    </div>

                    <div className="col-xs-12  text-center app-little-pink-radius-button">
                        提交
                    </div>
                </form>
            </div>
        )
    }
}


export default Feedbackpro