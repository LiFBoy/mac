'use strict';

import React from 'react';

import {HttpService} from '../../utils'

import LocalStorage from '../../LocalStorage'
import jsBridge from '../../jsBridge'
import App from '../app'

class trans extends React.Component {
    constructor() {
        super();
    }

    componentWillMount(){
        //  this.title();
        jsBridge.getBrideg(()=>{
            jsBridge.setTitle('流水')
        })
    }


    render() {
        return (
            <div>流水</div>
        )
    }
}


export default trans