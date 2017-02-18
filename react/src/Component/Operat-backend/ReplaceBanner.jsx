'usr strict';

import React from 'react';


import Foot from '../Foot'
import jt from '../../../src/images/my/jt.png'
import {HttpService} from '../../utils'

import LocalStorage from '../../LocalStorage'
import {Router, Route, IndexRoute, browserHistory, Link} from 'react-router';

class ReplaceBanner extends React.Component {
    constructor() {
        super();
    }


   async editInfo() {

        let code = await HttpService.saveJson({
            url: '/v1/ad/admin/create/banner?accessToken=' + LocalStorage.get('token') + '',
            data: {
                Link: '2222', picture:''
            }
        });
    }

    render() {
        return (
            <div className="app-padding-lr24">

                <form>
                    <div className="step app-padding-tb20">
                        <div className="s-left app-666-font28">跳转链接：</div>
                        <div className="s-right app-input-edit">
                            <input className="app-input" placeholder="跳转链接" type="text"/>
                        </div>
                    </div>

                    <div className="step" style={{height: '15rem'}}>
                        <div className="s-left app-666-font28" style={{height: '15rem'}}>图片：</div>
                        <div className="s-right app-input-edit" style={{height: '15rem'}}>
                            <img src="http://img.taopic.com/uploads/allimg/120222/34250-12022209414087.jpg"
                                 className="app-all-img"/>
                        </div>
                    </div>


                    <div className="step app-padding-tb20 app-margin-tb20 app-yellow-radius-check-button">
                        <div className="s-center" onClick={this.editInfo.bind(this)}>添加banner</div>
                    </div>

                    <div className="step border-bottom app-padding-tb20">
                        <div className="s-flex1 app-666-font32">已设置banner</div>
                    </div>


                    <div className="step border-bottom app-wh-120  app-white" style={{paddingLeft: '50px'}}>
                        <div className="s-flex3 s-j-center s-flex-d app-666-font30" style={{alignItems: 'flex-start'}}>
                            <div className="app-333-font28">链接:http://www.baidu.com</div>
                            <div className="app-999-font30 pt20" style={{height: '3rem'}}>
                                <img src="http://img.taopic.com/uploads/allimg/120222/34250-12022209414087.jpg"
                                     className="app-all-img"/>
                            </div>
                        </div>
                        <div className="s-flex1 s-j-end app-333-font28">
                            删除
                        </div>
                    </div>
                </form>

            </div>
        )
    }
}


export default ReplaceBanner