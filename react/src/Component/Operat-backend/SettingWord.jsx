'use strict';

import React from 'react';




// import DatePicker from 'antd-mobile/lib/date-picker'
// import 'antd-mobile/dist/antd-mobile.css'
import Foot from '../Foot'
import jt from '../../../src/images/my/jt.png'

import {HttpService,FormDate,Toast} from '../../utils'

import LocalStorage from '../../LocalStorage'
import jsBridge from '../../jsBridge'

import {Router, Route, IndexRoute, browserHistory, Link} from 'react-router';

class SettingWord extends React.Component {
    constructor() {
        super();
        this.state={
            content:null,
            dailySentences:[]
        }


    }
    onChange(date) {
        console.log(date)
    }


    componentWillMount(){
        this.sentence();
        jsBridge.getBrideg(()=>{
            jsBridge.setTitle('每日一句')
        })
    }

    componentDidMount(){


        var calendardatetime = new lCalendar();
        calendardatetime.init({
            'trigger': '#demo2',
            'type': 'datetime'
        });

    }


    async sentence(){
        console.log(LocalStorage.get('token'))

        try{
            let code=await HttpService.query({
                url:'/v1/p/notify/get/daily/sentence',
                data:{accessToken:LocalStorage.get('token')}
            })

            console.log(code)

            this.setState({
                dailySentences:code.dailySentences
            })
        }catch (error){

        }

    }

    async editInfo(){

        const _content=document.getElementById('_content').value,
            datetime=document.getElementById('demo2').value;
        console.log(datetime)

        var timestamp2 = Date.parse(new Date(datetime));
        timestamp2 = timestamp2 / 1000;


       let code= await HttpService.saveJson({
           url: '/v1/ad/admin/create/daily/sentence?accessToken=' + LocalStorage.get('token') + '',
           data: {
               content: _content,publicTime:timestamp2
           }
       });


        console.log(code)

        if(!!code){
            Toast.toast('添加成功',3000);
            this.sentence();
            document.getElementById('_content').innerHTML='';
            document.getElementById('demo2').innerHTML='';
        }

    }

    content(e){

    }

    render() {
        const { dailySentences} =this.state;
        return (
            <div className="app-padding-lr24">

                <form>
                    <div className="step app-padding-tb20">
                        <div className="s-left app-666-font32">时间：</div>
                        <div className="s-right app-input-edit">


                            {/*<input type="date"/>*/}
                            {/*<input type="time"/>*/}

                            <input id="demo2" className="app-input" type="text" readOnly="" name="input_date" placeholder="日期和时间" data-lcalendar="2010-01-11,2018-05-29" />

                                {/*<DatePicker className="forss"*/}
                                            {/*mode="datetime"*/}
                                            {/*onChange={this.onChange}*/}
                                            {/*value={this.state.date}*/}
                                {/*>*/}
                                {/*</DatePicker>*/}



                        </div>
                    </div>

                    <div className="step" style={{height:'15rem'}}>

                        <div className="s-left app-666-font32" style={{height:'15rem'}}>内容：</div>
                        <div className="s-right" style={{height:'15rem'}}>
                            <textarea id="_content" onChange={this.content.bind(this)}  className="s-flex1 app-999-font28 app-setting-textarea-word"  placeholder="内容"></textarea>
                        </div>
                    </div>


                    <div className="step app-padding-tb20 app-margin-tb20 app-yellow-radius-check-button">
                        <div className="s-center" onClick={this.editInfo.bind(this)}>添加每日一句</div>
                    </div>

                    <div className="step app-padding-tb20 border-bottom">
                        <div className="s-flex1 app-666-font32">最近设置每日一句</div>
                    </div>

                    {
                        dailySentences.length!=0?dailySentences.map((json,index)=>(
                            <div className="step border-bottom app-wh-120  app-white" style={{paddingLeft:'50px'}} key={index}>
                                <div className="s-flex1 s-j-center s-flex-d app-666-font30" style={{alignItems: 'flex-start'}}>
                                    <div className="app-333-font28">{FormDate.time(json.publicTime)}</div>
                                    <div className="app-999-font30 pt20">{json.content}</div>
                                </div>
                                <div className="s-flex1 s-j-end app-333-font28">
                                    删除
                                </div>
                            </div>
                        )):''
                    }




                    </form>

            </div>
        )
    }
}


export default SettingWord