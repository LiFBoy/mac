'use strict';

import React from 'react';

import kaoqin from '../../src/images/kaoqin.png'


import t from '../../src/images/index/temple.png'
import tc from '../../src/images/index/temple-active.png'
import mc from '../../src/images/index/my-active.png'
import m from '../../src/images/index/my.png'
import msg from '../../src/images/index/message.png'
import msgc from '../../src/images/index/message-active.png'


import {Router, Route, IndexRoute, browserHistory, Link} from 'react-router';
class Foot extends React.Component {
    constructor() {
        super();
    }

    changeType(type) {
        // if (type == 1) {
        //     window.location.href = "/app.html#/index"
        // } else if (type == 2) {
        //     window.location.href = "/app.html#/Temple"
        // } else if (type == 3) {
        //     window.location.href = "/app.html#/MyMain"
        // }


    }

    render() {
        let {type}=this.props;

        return (
            <div className="app-menu app-white">

                <div className="menu-option" onClick={this.changeType.bind(this, 1)}>

                    <div>

                        {
                            type == 1 ?
                                <img src={tc}/> : <img src={t}/>

                        }
                    </div>

                    {
                        type == 1 ? <div className="div-text menu-select">寺庙</div> : <div className="div-text">寺庙</div>
                    }


                </div>


                <div className="menu-option" onClick={this.changeType.bind(this, 2)}>


                    <div>
                        {
                            type == 2 ?
                                <img src={msgc}/> : <img src={msg}/>

                        }
                    </div>

                    {
                        type == 2 ? <div className="div-text menu-select">消息</div> : <div className="div-text">消息</div>
                    }


                </div>


                <div className="menu-option" onClick={this.changeType.bind(this, 3)}>


                    <div>{
                        type == 3 ?
                            <img src={mc}/> : <img src={m}/>

                    }</div>
                    {
                        type == 3 ? <div className="div-text menu-select">我的</div> : <div className="div-text">我的</div>
                    }

                </div>

            </div>
        )
    }
}


export default Foot