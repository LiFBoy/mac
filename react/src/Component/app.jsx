'usr strict';

import React from 'react';

import kaoqin from '../../src/images/kaoqin.png'


import t from '../../src/images/index/temple.png'
import tc from '../../src/images/index/temple-active.png'
import mc from '../../src/images/index/my-active.png'
import m from '../../src/images/index/my.png'
import msg from '../../src/images/index/message.png'
import msgc from '../../src/images/index/message-active.png'


import {Router, Route, IndexRoute, browserHistory, Link} from 'react-router';
class App extends React.Component {
    constructor() {
        super();
    }

    componentWillMount(){


    // console.log(this.props.cb)
    }
    render() {
        

        

        return (

            <div  onClick={this.props.cb} className={this.props.class}>
                {this.props.children}
            </div>


        )
    }
}


export default App