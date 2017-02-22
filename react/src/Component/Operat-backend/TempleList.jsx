'usr strict';

import React from 'react';


import Foot from '../Foot'
import jt from '../../../src/images/my/jt.png'

import {Router, Route, IndexRoute, browserHistory, Link} from 'react-router';
import {HttpService} from '../../utils'

import LocalStorage from '../../LocalStorage'
class TempleList extends React.Component {
    constructor() {
        super();
        this.state={
            temples:[]
        }
        this.temple();
    }


    editInfo(){

    }

    async temple(){
       const hot=await HttpService.query({
            url:'/v1/temple/get/hot/temples'
        });
        this.setState({
            temples: hot.temples

        })
    }
    render() {

        const {temples} =this.state;
        return (
            <div className="app-container">


                    <div className="step app-padding-lr24 app-white-chunk border-bottom">
                        <div className="s-flex2">
                            <div className="app-333-font28 app-padding-l24">寺庙数量: <sapn>{temples.length}</sapn></div>
                        </div>
                        <Link to="/AddTemple" className="s-flex1 app-a">
                        <div className="s-flex1 s-j-end app-333-font28">添加</div>
                        </Link>
                    </div>



                <div className="app-padding-tb20"></div>
                {
                    temples.length!=0?temples.map((json,index)=>(
                        <Link to={'/AddTemple/'+json.id} className="app-a">
                            <div className="step app-padding-lr24 app-white-chunk border-bottom">
                                <div className="s-flex2">
                                    <div className="app-333-font28 app-padding-l24">{json.name} </div>

                                </div>


                                    <div className="s-flex1 s-j-end app-333-font28">修改</div>

                            </div>
                        </Link>

                    )):''
                }





                {/*<Foot type="3"></Foot>*/}
            </div>
        )
    }
}


export default TempleList