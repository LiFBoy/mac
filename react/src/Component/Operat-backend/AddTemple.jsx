'usr strict';

import React from 'react';


import Foot from '../Foot'
import jt from '../../../src/images/my/jt.png'

import {Router, Route, IndexRoute, browserHistory, Link} from 'react-router';
import {HttpService} from '../../utils'

import LocalStorage from '../../LocalStorage'
class AddTemple extends React.Component {
    constructor() {
        super();
        this.state={
            info:{}
        }
    }

    componentWillMount(){
        this.temple_id();
    }


    getValue(name){
        return document.getElementById(name).value;
    }

    async temple_id(){
      const info= await HttpService.query({
            url:'/v1/temple/info',
            data:{
                id:this.props.params.id
            }
        })

        this.setState({
              info:info
        })

    }


   async editInfo(){

        const abbot=this.getValue('abbot'),
            abbotInfo=this.getValue('abbotInfo'),
            buildingInfo=this.getValue('buildingInfo'),
            lat=this.getValue('lat'),
            lng=this.getValue('lng'),
            location=this.getValue('location'),
            locationInfo=this.getValue('locationInfo'),
            name=this.getValue('name'),
            phone=this.getValue('phone');

        let code = await HttpService.saveJson({
            url: '/v1/ad/admin/create/temple?accessToken=' + LocalStorage.get('token') + '',
            data: {
                abbot:abbot,abbotInfo:abbotInfo,buildingInfo:buildingInfo,headImgUrl:'58ad80c6fb3e8e05cd4badaf',id:'',
                lat:lat,lng:lng,location:location,
                locationInfo:locationInfo,
                locationPictures:[
                    '58ad80fefb3e8e05cd4badb2   '
                ],
                name:name,
                phone:'13656696510',
                pictures:[
'58ad80defb3e8e05cd4badb0','58ad80f1fb3e8e05cd4badb1'
                ]
            }
        });
    }
    render() {
       const {info} =this.state;
        return (
            <div className="app-padding-lr24">

                <form>
                    <div className="step app-padding-tb20">
                        <div className="s-left app-666-font32">地点：</div>
                        <div className="s-right app-input-edit">
                            <input className="app-input" id="location" value={info.location}   placeholder="杭州" type="text"/>
                        </div>
                    </div>
                    <div className="step app-padding-tb20">
                        <div className="s-left app-666-font32">住持名：</div>
                        <div className="s-right app-input-edit">
                            <input className="app-input" id="abbot" value={info.abbot}  placeholder="住持名" type="text"/>
                        </div>
                    </div>
                    <div className="step app-padding-tb20">
                        <div className="s-left app-666-font32">经度：</div>
                        <div className="s-right app-input-edit">
                            <input className="app-input" id="lat"  placeholder="经度" type="text"/>
                        </div>
                    </div>
                    <div className="step app-padding-tb20">
                        <div className="s-left app-666-font32">纬度：</div>
                        <div className="s-right app-input-edit">
                            <input className="app-input" id="lng"  placeholder="纬度" type="text"/>
                        </div>
                    </div>

                    <div className="step border-bottom app-padding-tb20">
                        <div className="s-flex1 app-666-font32">寺庙概况</div>
                    </div>

                    <div className="step app-padding-tb20" style={{height:'200px'}}>
                        <div className="s-flex1 app-input-edit" style={{height:'200px'}}>
                            <textarea value={info.buildingInfo}  className="s-flex1 app-999-font28 app-setting-textarea-word" id="buildingInfo"  placeholder="寺庙概况"></textarea>
                        </div>
                    </div>
                    <div className="step border-bottom app-padding-tb20">
                        <div className="s-flex1 app-666-font32">图片展示</div>
                    </div>

                    <div className="step app-666-font28" >

                        <div className="s-flex1" style={{flexWrap:'wrap'}}>
                            <div className="app-upload-img-temple-backend">
                                <img src="http://pic17.nipic.com/20111003/5847249_214945441162_2.jpg" className="app-wh100-all" />
                            </div>
                            <div className="app-upload-img-temple-backend">
                                <img src="http://pic17.nipic.com/20111003/5847249_214945441162_2.jpg" className="app-wh100-all" />
                            </div>
                            <div className="app-upload-img-temple-backend">
                                <img src="http://pic17.nipic.com/20111003/5847249_214945441162_2.jpg" className="app-wh100-all" />
                            </div>
                            <div className="app-upload-img-temple-backend">
                                <img src="http://pic17.nipic.com/20111003/5847249_214945441162_2.jpg" className="app-wh100-all" />
                            </div>
                        </div>
                    </div>


                    <div className="step border-bottom app-padding-tb20">
                        <div className="s-flex1 app-666-font32">主持信息</div>
                    </div>

                    <div className="step app-padding-tb20" style={{height:'200px'}}>
                        <div className="s-flex1 app-input-edit" style={{height:'200px'}}>
                            <textarea value={info.abbotInfo} id="abbotInfo"  className="s-flex1 app-999-font28 app-setting-textarea-word"  placeholder="主持信息"></textarea>
                        </div>
                    </div>
                    <div className="step border-bottom app-padding-tb20">
                        <div className="s-flex1 app-666-font32">主要建筑</div>
                    </div>

                    <div className="step app-padding-tb20" style={{height:'200px'}}>
                        <div className="s-flex1 app-input-edit" style={{height:'200px'}}>
                            <textarea value={info.buildingInfo} id="buildingInfo" className="s-flex1 app-999-font28 app-setting-textarea-word"  placeholder="主要建筑"></textarea>
                        </div>
                    </div>
                    <div className="step border-bottom app-padding-tb20">
                        <div className="s-flex1 app-666-font32">地理位置</div>
                    </div>

                    <div className="step app-padding-tb20" style={{height:'200px'}}>
                        <div className="s-flex1 app-input-edit" style={{height:'200px'}}>
                            <textarea value={info.locationInfo} id="locationInfo"  className="s-flex1 app-999-font28 app-setting-textarea-word"  placeholder="地理位置"></textarea>
                        </div>
                    </div>




                    <div className="step app-padding-tb20 app-margin-tb20 app-yellow-radius-check-button">
                        <div className="s-center" onClick={this.editInfo.bind(this)}>保存修改</div>
                    </div>


                </form>

            </div>
        )
    }
}


export default AddTemple