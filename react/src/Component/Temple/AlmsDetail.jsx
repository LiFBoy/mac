'usr strict';

import React from 'react';


import {HttpService} from '../../Http';
class AlmsDetail extends React.Component {
    constructor() {
        super();
        this.state = {
            info: {
                locationPictures: [],
                pictures: []
            }
        }
    }


    componentWillMount() {
        this.info();

    }

    async info() {
        let code = await HttpService.query({
            url: '/v1/temple/info',
            data: {
                id: '1'
            }
        });
        console.log(code)
        this.setState({
            info: code
        })

    }


    render() {
        const {info}=this.state;
        return (
            <div className="app-container">
                <div className="app-white">
                    <div className="step app-wh80  app-padding-lr24 border-bottom">
                        <div className="s-flex1 app-333-font32">最近日善</div>
                    </div>
                    <div className="step app-padding-tb32 app-666-font28 app-padding-lr24 app-line-height">

                        灵隐寺，又名云林寺，位于浙江省杭州市，背靠北高峰，面朝飞来峰，始建于东晋咸和元年（326年）。
                        灵隐寺，又名云林寺，位于浙江省杭州市，背靠北高峰，面朝飞来峰，始建于东晋咸和元年（326年）。
                        灵隐寺，又名云林寺，位于浙江省杭州市，背靠北高峰，面朝飞来峰，始建于东晋咸和元年（326年）。

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

                        <div className="s-flex1">
                            {
                                info.locationPictures.map((json, index) => (

                                    <img src={json} className="app-wh100-all" key={index}/>

                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default AlmsDetail