'use strict';

import React from 'react';


import Foot from '../Foot'
import jt from '../../../src/images/my/jt.png'

import {Router, Route, IndexRoute, browserHistory, Link} from 'react-router';
import {HttpService,Toast} from '../../utils'

import LocalStorage from '../../LocalStorage'
import jsBridge from '../../jsBridge'
class dynamic extends React.Component {
    constructor() {
        super();
        this.state={
            ids:[],
            base64:[],
            demo:[],
            _base64:[],
            _ids:[]
        };

    }

    componentWillMount(){
        Array.prototype.remove=function(value){
            var len = this.length;
            for(var i=0,n=0;i<len;i++){//把除了要删除的元素赋值给新数组
                if(this[i]._ids!=value){
                    console.log('N:'+n)
                    this[n++]=this[i];
                }else{
                    console.log(i);//测试所用
                }
            }
            this.length = n;
        };

        jsBridge.getBrideg(()=>{
            jsBridge.setTitle('发布动态')
        })
    }


   async editInfo(){
       let code = await HttpService.saveJson({
            url: '/v1/ab/abbot/create/temple/status?accessToken=' + LocalStorage.get('token') + '',
            data: {
                content: document.getElementById('dynamic-contnt').value,
                pictures: this.state._ids

            }
        });
    }


    uploadImg(){
        jsBridge.uploadImg((ids,base64)=>{
            this.state.base64.push({
                _base64:base64,
                _ids:ids
            });
             this.setState({
                 _ids:this.state._ids.concat(ids),
                 _base64:this.state._base64.concat(base64),
                 base64:this.state.base64
             });

        })
    }

    deleteBase64(_base64,_ids){
        var thisNode=document.getElementById(_ids);
        thisNode.parentNode.removeChild(thisNode);

        this.removeByValue(this.state._base64,_base64);
        this.removeByValue(this.state._ids,_ids);

        this.state.base64.remove(_ids);
        this.setState({
            base64:this.state.base64,
            _base64:this.state._base64,
            _ids:this.state._ids
        })


    }

    removeByValue(arr, val) {
        for(var i=0; i<arr.length; i++) {
            if(arr[i] == val) {
                arr.splice(i, 1);
                break;
            }
        }
    }

    render() {
        const {base64}=this.state;
        return (

                <div className="app-padding-lr24">
                        <div className="step app-padding-tb20" style={{height:'200px'}}>
                            <div className="s-flex1 app-input-edit" style={{height:'200px'}}>
                                <textarea id="dynamic-contnt"  className="s-flex1 app-999-font28 app-setting-textarea-word"  placeholder="输入内容"></textarea>
                            </div>
                        </div>
                    <div className="step  app-666-font28" >
                        <div className="s-flex1" style={{flexWrap:'wrap'}}>

                            {
                                base64.length!=0?base64.map((json,index)=>(

                                    <div className="app-upload-img-temple-backend"  style={{position:'relative'}} key={index}>
                                        <div style={{position:'absolute',top:'10px',right:'10px'}} id={json._ids} onClick={this.deleteBase64.bind(this,json._base64,json._ids)}>x</div>
                                        <img src={'data:image/png;base64,'+json._base64} className="app-wh100-all" />
                                    </div>
                                )):''
                            }
                            <div className="app-upload-img-temple-backend" style={{position:'relative'}} onClick={this.uploadImg.bind(this)}>
                                <div style={{position:'absolute',top:'10px',right:'10px'}} id='2'  onClick={this.deleteBase64.bind(this,'2','2')}>x</div>

                                <img src="http://pic17.nipic.com/20111003/5847249_214945441162_2.jpg" className="app-wh100-all" />
                            </div>
                        </div>
                    </div>

                        <div className="step app-padding-tb20 app-margin-tb20 app-yellow-radius-check-button">
                            <div className="s-center" onClick={this.editInfo.bind(this)}>发布</div>
                        </div>

                    {/*<button onClick={this._uploadImg.bind(this)}>+</button>*/}

                </div>



        )
    }
}


export default dynamic