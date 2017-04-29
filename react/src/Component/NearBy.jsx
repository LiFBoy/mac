'use strict';

import React, {Component, PropTypes} from 'react';
import {HttpService} from '../utils'
import jsBridge from '../jsBridge'
import App from './app'
class NearBy extends React.Component {
    constructor() {
        super();
        this.state={
            temples:[]
        }

    }

    componentWillMount(){
        // this.near();
    }

    componentDidMount(){

        this.getlonglat(this);

    }

    getlonglat(self){
        var map = new BMap.Map("allmap");
        var point = new BMap.Point(116.331398,39.897445);
        map.centerAndZoom(point,12);

        var geolocation = new BMap.Geolocation();
        geolocation.getCurrentPosition(function(r){
            if(this.getStatus() == BMAP_STATUS_SUCCESS){
                var mk = new BMap.Marker(r.point);
                map.addOverlay(mk);
                map.panTo(r.point);
                self.near(r.point.lng,r.point.lat);
                // alert('您的位置：'+r.point.lng+','+r.point.lat);
            }
            else {
                // alert('failed'+this.getStatus());
            }
        },{enableHighAccuracy: true})
    }


    async near(longitude,latitude){

        const code=await HttpService.query({
            url:'/v1/temple/get/near/temples',
            data:{longitude:longitude,latitude:latitude}
        });

        this.setState({
            temples:code.temples
        })



    }



    TempleDetail(id,name){

        jsBridge.sendMessageToApp_type_2('TempleDetail',id,name);
    }




    render(){
        const {temples} =this.state;

        return (
            <div className="app-container near-by">
                <div id="allmap"></div>

                <div className="step">
                    <div className="s-flex1" style={{flexWrap:'wrap'}}>
                        {
                            temples.length!=0?temples.map((json,index)=>(
                                <div key={index}>
                                <App cb={this.TempleDetail.bind(this,json.id,json.name)}>
                                    <div className="near-by-content">
                                        <div className="near-by-img"><img className="app-wh100-all" src={json.headImgUrl}/></div>
                                        <div className="detail step app-padding-lr24 app-white">
                                            <div className="s-flex1 app-333-font28">{json.name}</div>
                                            <div className="s-flex1 s-j-end app-666-font24">{json.distance}</div>

                                        </div>
                                    </div>
                                    </App>
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