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
class I extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            demo:''
        }

    }

    componentWillMount(){


        // console.log(this.props.cb)
    }



    componentWillReceiveProps(nextProps,nextState) {
        console.log('componentWillReceiveProps:')

    }

    shouldComponentUpdate(p,s){


        console.log(p)
        console.log(s)


        if(p.val=='5'){
            return false
        }
        return true
    }

    componentWillUpdate(){
        console.log('componentWillUpdate')
    }

    componentDidUpdate(){
        console.log('componentDidUpdate')
    }

    demo(){
        this.setState({
            demo:'3'
        })

    }


    render() {




        return (


            <div>
            ss:    <input value={this.props.val} type="text" onChange={this.props.handle} onClick={this.demo.bind(this)}/>
            </div>


        )
    }
}


export default I