'use strict';

import React from 'react';


import Foot from '../Foot'
import add from '../../../src/images/add.png'

import {Router, Route, IndexRoute, browserHistory, Link} from 'react-router';
import {HttpService, Toast,Tool} from '../../utils'

import LocalStorage from '../../LocalStorage'
import jsBridge from '../../jsBridge'
class AddTemple extends React.Component {
    constructor() {
        super();
        this.state = {
            info: {},
            headImgUrl: [],
            headImgUrlBase64: [],
            showPictures: [],//修改寺庙show
            base64: [],//上传图片,对象数组base64,_ids
            _base64: [],
            _ids: []// 接口需要
        }
    }

    componentWillMount() {
        if (this.props.params.id == 'null') {

        } else {
            this.temple_id();
        }

        Array.prototype.remove = function (value) {
            var len = this.length;
            for (var i = 0, n = 0; i < len; i++) {//把除了要删除的元素赋值给新数组
                if (this[i]._ids != value) {
                    console.log('N:' + n)
                    this[n++] = this[i];
                } else {
                    console.log(i);//测试所用
                }
            }
            this.length = n;
        };

        jsBridge.getBrideg(()=> {
            jsBridge.setTitle('添加修改')
        })

    }

    /**
     * headImgurl
     * */
    uploadheadImgUrl() {
        this.setState({
            headImgUrl: [],
            headImgUrlBase64: [],
        });
        jsBridge.uploadImg((ids, base64)=> {
            this.setState({
                headImgUrl: this.state.headImgUrl.concat(ids),
                headImgUrlBase64: this.state.headImgUrlBase64.concat(base64),
            })
        })
    }


    getValue(name) {
        return document.getElementById(name).value;
    }

    async temple_id() {
        const info = await HttpService.query({
            url: '/v1/temple/info',
            data: {
                id: this.props.params.id
            }
        });

        this.setState({
            info: info,
            showPictures: info.pictures,
            headImgUrl: this.state.headImgUrl.concat(info.headImgUrl)
        });

        info.pictures.forEach((item)=> {
            this.state._ids.push(item)
        })

    }


    _uploadImg() {


        this.state.base64.push({
            _base64: '111',
            _ids: '222'
        });


        this.setState({
            _ids: this.state._ids.concat('222'),
            _base64: this.state._base64.concat('111'),
            base64: this.state.base64
        });

    }

    /**
     * 图片上传
     * */
    uploadImg() {
        jsBridge.uploadImg((ids, base64)=> {
            this.state.base64.push({
                _base64: base64,
                _ids: ids
            });
            this.setState({
                _ids: this.state._ids.concat(ids),
                _base64: this.state._base64.concat(base64),
                base64: this.state.base64
            });

        })
    }

    async editInfo() {

        const abbot = this.getValue('abbot'),
            abbotInfo = this.getValue('abbotInfo'),
            templeInfo = this.getValue('templeInfo'),
            buildingInfo = this.getValue('buildingInfo'),
            lat = this.getValue('lat'),
            lng = this.getValue('lng'),
            location = this.getValue('location'),
            locationInfo = this.getValue('locationInfo'),
            name = this.getValue('name');

       //console.log(lat<90&&lat>-90)

        if(!(lat<90&&lat>-90)&&(lng<90&&lng>-90)){
            return;
        }


        if (this.props.params.id == 'null') {


            let code = await HttpService.saveJson({
                url: '/v1/ad/admin/create/temple?accessToken=' + LocalStorage.get('token') + '',
                data: {
                    abbot: abbot, abbotInfo: abbotInfo, buildingInfo: buildingInfo,
                    summary:templeInfo,
                    headImgUrl: this.state.headImgUrl[0],
                    lat: lat, lng: lng, location: location,
                    locationInfo: locationInfo,
                    locationPictures: [
                        '58ad80fefb3e8e05cd4badb2'
                    ],
                    name: name,
                    phone: LocalStorage.get('phone'),
                    pictures: this.state._ids
                }
            });

            if(!!code){
                Toast.toast('操作成功',3000);
                jsBridge.getBrideg(()=>{
                    jsBridge.goBack()
                })
            }
        } else {

            console.log(this.state._ids);
            console.log(this.state.headImgUrl[0]);

            //Toast.toast(this.state.headImgUrl[0],30000);
            let code = await HttpService.saveJson({
                url: '/v1/ad/admin/create/temple?accessToken=' + LocalStorage.get('token') + '',
                data: {
                    abbot: abbot,
                    abbotInfo: abbotInfo,
                    buildingInfo: buildingInfo,
                    summary:templeInfo,
                    headImgUrl: this.state.headImgUrl[0],
                    id: this.props.params.id,
                    lat: lat,
                    lng: lng,
                    location: location,
                    locationInfo: locationInfo,
                    locationPictures: [
                        '58ad80fefb3e8e05cd4badb2'
                    ],
                    name: name,
                    phone: LocalStorage.get('phone'),
                    pictures: this.state._ids
                }
            });

            if(!!code){
                Toast.toast('操作成功',3000);
                jsBridge.getBrideg(()=>{
                    jsBridge.goBack()
                })
            }

        }

    }

    deleteBase64(_base64, _ids) {


        var thisNode = document.getElementById(_ids);

        // thisNode.parentNode.remove();

        thisNode.parentNode.removeChild(thisNode);

        this.removeByValue(this.state._base64, _base64);
        this.removeByValue(this.state._ids, _ids);

        this.state.base64.remove(_ids);
        this.setState({
            base64: this.state.base64,
            _base64: this.state._base64,
            _ids: this.state._ids
        })
    }

    removeByValue(arr, val) {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] == val) {
                arr.splice(i, 1);
                break;
            }
        }
    }

    changeValue(a, e) {

       if(this.props.params.id == 'null'){
           return;
       }

        let obj = {};
        obj[a] = e.target.value;
        console.log(obj);
        this.setState({
            info: Tool.assign({},obj,this.state.info)
        });


    }

    render() {
        const {info, showPictures, base64} =this.state;
        return (
            <div className="app-padding-lr24">
                <div className="step app-padding-tb20">
                    <div className="s-left app-666-font32">寺庙名：</div>
                    <div className="s-right app-input-edit">
                        <input className="app-input" id="name" value={info.name}
                               onChange={this.changeValue.bind(this, 'name')} placeholder="寺庙" type="text"/>
                    </div>
                </div>


                <div className="step app-padding-tb20">
                    <div className="s-left app-666-font32">地点：</div>
                    <div className="s-right app-input-edit">
                        <input className="app-input" id="location" value={info.location}
                               onChange={this.changeValue.bind(this, 'location')} placeholder="杭州" type="text"/>
                    </div>
                </div>
                <div className="step app-padding-tb20">
                    <div className="s-left app-666-font32">住持名：</div>
                    <div className="s-right app-input-edit">
                        <input className="app-input" id="abbot" value={info.abbot}
                               onChange={this.changeValue.bind(this, 'abbot')} placeholder="住持名" type="text"/>
                    </div>
                </div>
                <div className="step app-padding-tb20">
                    <div className="s-left app-666-font32">经度：</div>
                    <div className="s-right app-input-edit">
                        <input className="app-input" id="lat" value={info.lat}
                               onChange={this.changeValue.bind(this, 'lat')} placeholder="经度" type="number"/>
                    </div>
                </div>
                <div className="step app-padding-tb20">
                    <div className="s-left app-666-font32">纬度：</div>
                    <div className="s-right app-input-edit">
                        <input className="app-input" id="lng" value={info.lng}
                               onCanPlay={this.changeValue.bind(this, 'lng')} placeholder="纬度" type="number"/>
                    </div>
                </div>


                <div className="step border-bottom app-padding-tb20">
                    <div className="s-flex1 app-666-font32">头像上传</div>
                </div>

                <div className="step app-666-font28">

                    <div className="s-flex1 s-j-center">
                        <div className="app-upload-img-temple-backend" onClick={this.uploadheadImgUrl.bind(this)}>
                            {/*<img src={info.headImgUrl} className="app-wh100-all" />*/}
                            <img
                                src={this.state.headImgUrlBase64.length != 0 ?
                                    'data:image/png;base64,' + this.state.headImgUrlBase64[0] :
                                         !!info.headImgUrl?info.headImgUrl:add}
                                className="app-all-img"/>
                        </div>
                    </div>
                </div>


                <div className="step border-bottom app-padding-tb20">
                    <div className="s-flex1 app-666-font32">寺庙概况</div>
                </div>

                <div className="step app-padding-tb20" style={{height: '200px'}}>
                    <div className="s-flex1 app-input-edit" style={{height: '200px'}}>
                        <textarea value={info.buildingInfo} onChange={this.changeValue.bind(this, 'templeInfo')}
                                  className="s-flex1 app-999-font28 app-setting-textarea-word" id="templeInfo"
                                  placeholder="寺庙概况"></textarea>
                    </div>
                </div>
                <div className="step border-bottom app-padding-tb20">
                    <div className="s-flex1 app-666-font32">图片展示</div>
                </div>

                <div className="step app-666-font28">

                    <div className="s-flex1" style={{flexWrap: 'wrap'}}>

                        {
                            showPictures.length != 0 ? showPictures.map((json, index)=>(
                                <div className="app-upload-img-temple-backend" id={json} style={{position: 'relative'}}
                                     key={index}>
                                    <div style={{position: 'absolute', top: '10px', right: '10px'}}
                                         onClick={this.deleteBase64.bind(this, json, json)}>x
                                    </div>
                                    <img src={json} className="app-wh100-all"/>
                                </div>
                            )) : ''
                        }


                        <span></span>

                        {
                            base64.length != 0 ? base64.map((json, index)=>(

                                <div className="app-upload-img-temple-backend" style={{position: 'relative'}}
                                     key={index}>
                                    <div style={{position: 'absolute', top: '10px', right: '10px'}} id={json._ids}
                                         onClick={this.deleteBase64.bind(this, json._base64, json._ids)}>x
                                    </div>
                                    <img src={'data:image/png;base64,' + json._base64} className="app-wh100-all"/>
                                </div>
                            )) : ''
                        }


                        <div className="app-upload-img-temple-backend" style={{position: 'relative'}}
                             onClick={this.uploadImg.bind(this)}>

                            {/*<div className="app-wh100-all"></div>*/}

                            <img src={add}
                                 className="app-wh100-all"/>
                        </div>
                    </div>
                </div>


                <div className="step border-bottom app-padding-tb20">
                    <div className="s-flex1 app-666-font32">主持信息</div>
                </div>

                <div className="step app-padding-tb20" style={{height: '200px'}}>
                    <div className="s-flex1 app-input-edit" style={{height: '200px'}}>
                        <textarea value={info.abbotInfo} onChange={this.changeValue.bind(this, 'abbotInfo')}
                                  id="abbotInfo" className="s-flex1 app-999-font28 app-setting-textarea-word"
                                  placeholder="主持信息"></textarea>
                    </div>
                </div>
                <div className="step border-bottom app-padding-tb20">
                    <div className="s-flex1 app-666-font32">主要建筑</div>
                </div>

                <div className="step app-padding-tb20" style={{height: '200px'}}>
                    <div className="s-flex1 app-input-edit" style={{height: '200px'}}>
                        <textarea value={info.buildingInfo} onChange={this.changeValue.bind(this, 'buildingInfo')}
                                  id="buildingInfo" className="s-flex1 app-999-font28 app-setting-textarea-word"
                                  placeholder="主要建筑"></textarea>
                    </div>
                </div>
                <div className="step border-bottom app-padding-tb20">
                    <div className="s-flex1 app-666-font32">地理位置</div>
                </div>

                <div className="step app-padding-tb20" style={{height: '200px'}}>
                    <div className="s-flex1 app-input-edit" style={{height: '200px'}}>
                        <textarea value={info.locationInfo} id="locationInfo"
                                  onChange={this.changeValue.bind(this, 'locationInfo')}
                                  className="s-flex1 app-999-font28 app-setting-textarea-word"
                                  placeholder="地理位置"></textarea>
                    </div>
                </div>


                <div className="step app-padding-tb20 app-margin-tb20 app-yellow-radius-check-button">
                    <div className="s-center" onClick={this.editInfo.bind(this)}>保存修改</div>
                </div>


                {/*<button onClick={this._uploadImg.bind(this)}>+</button>*/}

            </div>
        )
    }
}


export default AddTemple