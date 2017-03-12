'use strict';

import React from 'react';


import {HttpService} from '../../utils';
import jsBridge from '../../jsBridge'
class AlmsDetail extends React.Component {
    constructor() {
        super();
        this.state = {
            info: {
                locationPictures: [],
                pictures: []
            },
            buildInfo:{}
        };

    }


    componentWillMount() {
        jsBridge.getBrideg(()=>{
            jsBridge.setTitle('更多资料')
        });
        this.info();

    }

    componentDidMount(){


    }


    componentWillUpdate(){

            var map = new BMap.Map("allmap");          // 创建地图实例
            var point = new BMap.Point(this.state.info.lat,this.state.info.lng);  // 创建点坐标
            map.centerAndZoom(point, 15);

    }


    async info() {
        let code = await HttpService.query({
            url: '/v1/temple/info',
            data: {
                id:this.props.params.id
            }
        });
        console.log(code)
        this.setState({
            info: code,
        });

      //  console.log(this.state.info)

    }




    render() {
        const {info,buildInfo}=this.state;
        return (
            <div className="app-container">
                <div className="app-white">
                    <div className="step app-wh80  app-padding-lr24 border-bottom">
                        <div className="s-flex1 app-333-font32">寺庙概括</div>
                    </div>
                    <div className="step app-padding-tb32 app-666-font28 app-padding-lr24 app-line-height">

                        {info.summary}

                    </div>
                    <div className="app-height-20"></div>
                    <div className="step app-wh80 app-padding-lr24 border-bottom">
                        <div className="s-flex1 app-333-font32">图片展示</div>
                    </div>
                    <div className="step app-padding-tb32 app-666-font28 app-padding-lr24">

                        <div className="s-flex1" style={{flexWrap: 'wrap'}}>
                            {
                                info.pictures.map((json, index) => (
                                    <div className="app-upload-img" key={index}>
                                        <img src={json} className="app-wh100-all"/>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="app-height-20"></div>
                    <div className="step app-wh80 app-padding-lr24 border-bottom">
                        <div className="s-flex1 app-333-font32">主持信息</div>
                    </div>
                    <div className="step app-padding-tb32 app-666-font28 app-padding-lr24">

                        {info.abbotInfo}
                    </div>
                    <div className="app-height-20"></div>
                    <div className="step app-wh80 app-padding-lr24 border-bottom">
                        <div className="s-flex1 app-333-font32">主要建筑</div>
                    </div>
                    <div className="step app-padding-tb32 app-666-font28 app-padding-lr24">

                        {info.buildingInfo}
                    </div>

                    <div className="app-height-20"></div>
                    <div className="step app-wh80 app-padding-lr24 border-bottom">
                        <div className="s-flex1 app-333-font32">地理位置</div>
                    </div>
                    <div className="step app-padding-tb32 app-666-font28 app-padding-lr24">
                        {info.locationInfo}
                    </div>

                    <div className="step app-padding-tb32 app-666-font28 app-padding-lr24">

                        <div id="allmap" style={{width:'100%',height:'200px'}}></div>
                    </div>
                </div>
            </div>
        )
    }
}


export default AlmsDetail