'usr strict';

import React from 'react';


import Foot from '../Foot'
import jt from '../../../src/images/my/jt.png'

import {Router, Route, IndexRoute, browserHistory, Link} from 'react-router';
import {HttpService,Toast} from '../../utils'

import LocalStorage from '../../LocalStorage'
import jsBridge from '../../jsBridge'
class AddTemple extends React.Component {
    constructor() {
        super();
        this.state={
            info:{},
            headImgUrl:[],
            pictures:[]
        }
    }

    componentWillMount(){
        if(this.props.params.id=='null'){

        }else{

            this.temple_id();

        }

        jsBridge.getBrideg(()=>{
            jsBridge.setTitle('添加修改')
        })

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
        });

        this.setState({
              info:info
        })

    }


    headImgUrl(){
        jsBridge.uploadImg((ids)=>{
            this.setState({
                headImgUrl:ids
            })
        })
    }
    pictures(){
        jsBridge.uploadImg((ids)=>{
            this.setState({
                pictures:this.state.pictures.concat(ids)
            })

        })
    }

   async editInfo(){




        const abbot=this.getValue('abbot'),
            abbotInfo=this.getValue('abbotInfo'),
            buildingInfo=this.getValue('buildingInfo'),
            lat=this.getValue('lat'),
            lng=this.getValue('lng'),
            location=this.getValue('location'),
            locationInfo=this.getValue('locationInfo');


       if(this.props.params.id=='null'){
           let code = await HttpService.saveJson({
               url: '/v1/ad/admin/create/temple?accessToken=' + LocalStorage.get('token') + '',
               data: {
                   abbot:abbot,abbotInfo:abbotInfo,buildingInfo:buildingInfo,
                   headImgUrl:this.state.headImgUrl[0],
                   lat:lat,lng:lng,location:location,
                   locationInfo:locationInfo,
                   locationPictures:[
                       '58ad80fefb3e8e05cd4badb2'
                   ],
                   name:'lsb',
                   phone:'13656696510',
                   pictures:this.state.pictures
               }
           });
       }else{

           //Toast.toast(this.state.headImgUrl[0],30000);
           let code = await HttpService.saveJson({
               url: '/v1/ad/admin/create/temple?accessToken=' + LocalStorage.get('token') + '',
               data: {
                   abbot:abbot,
                   abbotInfo:abbotInfo,
                   buildingInfo:buildingInfo,
                   headImgUrl:this.state.headImgUrl[0],
                   id:this.props.params.id,
                   lat:lat,
                   lng:lng,
                   location:location,
                   locationInfo:locationInfo,
                   locationPictures:[
                       '58ad80fefb3e8e05cd4badb2'
                   ],
                   name:'ls',
                   phone:'13656696510',
                   pictures:this.state.pictures
               }
           });

           //this.temple_id();

       }
    }
    render() {
       const {info,pictures} =this.state;
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
                            <input className="app-input" id="lat" value={info.lat} placeholder="经度" type="text"/>
                        </div>
                    </div>
                    <div className="step app-padding-tb20">
                        <div className="s-left app-666-font32">纬度：</div>
                        <div className="s-right app-input-edit">
                            <input className="app-input" id="lng"  value={info.lng} placeholder="纬度" type="text"/>
                        </div>
                    </div>


                    <div className="step border-bottom app-padding-tb20">
                        <div className="s-flex1 app-666-font32">头像上传</div>
                    </div>

                    <div className="step app-666-font28" >

                        <div className="s-flex1 s-j-center">
                            <div className="app-upload-img-temple-backend" onClick={this.headImgUrl.bind(this)}>
                                <img src="http://pic17.nipic.com/20111003/5847249_214945441162_2.jpg" className="app-wh100-all" />
                            </div>
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

                            {
                                pictures.length!=0?pictures.map((json,map)=>(
                                    <div className="app-upload-img-temple-backend">
                                        <img src={'http://oss-cn-hangzhou.aliyuncs.com/rulaibao/dev/'+json+'.jpg'} className="app-wh100-all" />
                                    </div>
                                )):''
                            }
                            <div className="app-upload-img-temple-backend" onClick={this.pictures.bind(this)}>
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