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

    }


    open(){
        alert(this.props.to)
        window.location.href = this.props.to
    }
    
    



    render() {
        
        
        let {to}=this.props;
        

        return (

            <div className="app-a" onClick={this.open}>
wfwfww
            </div>


        )
    }
}


export default App