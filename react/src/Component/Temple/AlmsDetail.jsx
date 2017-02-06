'usr strict';

import React from 'react';


import HttpService from '../../Http';
import LocalStorage from '../../LocalStorage';


class AlmsDetail extends React.Component {
    constructor() {
        super();
    }
    // componentWillMount(){
    //
    //     this.info();
    // }
    //
    // info(){
    //
    //     HttpService.query({
    //         url:'http://121.40.128.121:9080/v1/temple/info?id=1',
    //         data:{id:1}
    //     }).then((res)=>{
    //         console.log(res)
    //
    //     },(error)=>{
    //
    //     })

    // }


    componentWillMount(){

        // this.editInfo();
    }

    editInfo(){

        console.log(LocalStorage.get('token'));
        HttpService.save({
            url:'/v1/p/user/edit/info',
            // data:{age:'11',residence:'11',sex:'11',username:'11',zens:'11',accessToken:LocalStorage.get('token')}
             data:{accessToken:LocalStorage.get('token')}
        }).then((res)=>{
            console.log(res)

        },(error)=>{

        })

    }


    render(){
        return (
            <div className="app-container">
                <div className="app-white">
                    <div className="step app-wh80  app-padding-lr24 border-bottom">
                        <div className="s-flex1 app-333-font32">最近日善</div>
                    </div>
                    <div className="step app-padding-tb32 app-666-font28 app-padding-lr24 app-line-height" >

                        灵隐寺，又名云林寺，位于浙江省杭州市，背靠北高峰，面朝飞来峰，始建于东晋咸和元年（326年）。
                        灵隐寺，又名云林寺，位于浙江省杭州市，背靠北高峰，面朝飞来峰，始建于东晋咸和元年（326年）。
                        灵隐寺，又名云林寺，位于浙江省杭州市，背靠北高峰，面朝飞来峰，始建于东晋咸和元年（326年）。

                    </div>
                    <div className="app-height-20"></div>
                    <div className="step app-wh80 app-padding-lr24 border-bottom">
                        <div className="s-flex1 app-333-font32">图片展示</div>
                    </div>
                    <div className="step app-padding-tb32 app-666-font28 app-padding-lr24" >

                        <div className="s-flex1" style={{flexWrap:'wrap'}}>
                            <div className="app-upload-img">
                                <img src="http://pic17.nipic.com/20111003/5847249_214945441162_2.jpg" className="app-wh100-all" />
                            </div>
                            <div className="app-upload-img">
                                <img src="http://pic3.nipic.com/20090706/2082016_155756000_2.jpg" className="app-wh100-all" />
                            </div>
                            <div className="app-upload-img">
                                <img src="http://pic17.nipic.com/20111003/5847249_214945441162_2.jpg" className="app-wh100-all" />
                            </div>
                        </div>
                    </div>
                    <div className="app-height-20"></div>
                    <div className="step app-wh80 app-padding-lr24 border-bottom">
                        <div className="s-flex1 app-333-font32">主持信息</div>
                    </div>
                    <div className="step app-padding-tb32 app-666-font28 app-padding-lr24" >

                        灵隐寺，又名云林寺，位于浙江省杭州市，背靠北高峰，面朝飞来峰，始建于东晋咸和元年（326年）。
                        灵隐寺，又名云林寺，位于浙江省杭州市，背靠北高峰，面朝飞来峰，始建于东晋咸和元年（326年）。
                        灵隐寺，又名云林寺，位于浙江省杭州市，背靠北高峰，面朝飞来峰，始建于东晋咸和元年（326年）。

                    </div><div className="app-height-20"></div>
                    <div className="step app-wh80 app-padding-lr24 border-bottom">
                        <div className="s-flex1 app-333-font32">主要建筑</div>
                    </div>
                    <div className="step app-padding-tb32 app-666-font28 app-padding-lr24" >

                        灵隐寺，又名云林寺，位于浙江省杭州市，背靠北高峰，面朝飞来峰，始建于东晋咸和元年（326年）。
                        灵隐寺，又名云林寺，位于浙江省杭州市，背靠北高峰，面朝飞来峰，始建于东晋咸和元年（326年）。
                        灵隐寺，又名云林寺，位于浙江省杭州市，背靠北高峰，面朝飞来峰，始建于东晋咸和元年（326年）。

                    </div>
                </div>
            </div>
        )
    }
}


export default AlmsDetail