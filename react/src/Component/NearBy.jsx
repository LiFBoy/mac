'usr strict';

import React, {Component, PropTypes} from 'react';


import {doLogin, change, getOneBabyid, changeSaveBabyStatus, getMap, getCurrentPower, exportMap} from '../action/index'

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {Router, Route, IndexRoute, browserHistory, Link} from 'react-router';

import Foot from './Foot';


import like from '../../src/images/index/like.png'
import alms from '../../src/images/index/alms.png'

import {HttpService} from '../utils'



class NearBy extends React.Component {
    constructor() {
        super();
        this.state={
            temples:[]
        }

    }

    componentWillMount(){
        this.near();
    }


    async near(){

        const code=await HttpService.query({
            url:'/v1/temple/get/near/temples',
            data:{longitude:'3333',latitude:'222'}
        });

        this.setState({
            temples:code.temples
        })



    }

    render(){
        const {temples} =this.state;

        return (
            <div className="app-container near-by">

                <div className="step">
                    <div className="s-flex1" style={{flexWrap:'wrap'}}>



                        {
                            temples.length!=0?temples.map((json,index)=>(
                                    <div className="near-by-content" key={index}>
                                        <div className="near-by-img"><img className="app-wh100-all" src={json.picture}/></div>
                                        <div className="detail step app-padding-lr24 app-white">
                                            <div className="s-flex1 app-333-font28">{json.name}</div>
                                            <div className="s-flex1 s-j-end app-666-font24">{json.distance}</div>

                                        </div>
                                    </div>
                                )):''
                        }
                    </div>

                </div>

            </div>
        )
    }
}

export default NearBy