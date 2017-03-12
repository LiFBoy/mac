'use strict';

import React from 'react';

import ReactDOM from 'react-dom';

import {HttpService,Toast} from '../../utils'

import LocalStorage from '../../LocalStorage'
import jsBridge from '../../jsBridge'
import I from '../input'
import Pagination from '../pages'


class report extends React.Component {
    constructor() {
        super();

    }

    componentWillMount(){

        console.log('componentWillMount')
        jsBridge.getBrideg(()=>{
            jsBridge.setTitle('举报评论')
        })
    }

    componentDidMount(){



    }



    async report(){
        //  alert(document.getElementById('reply-content').value)
        const reportContent=this.refs.reportContent.value;

        if(!reportContent){
            Toast.toast('请输入内容',3000);
            return;

        }
        const code=await HttpService.saveJson({
            url:'/v1/p/comment/reply?accessToken='+LocalStorage.get('token')+'',
            data:{
                report:reportContent,
                commentId:this.props.params.id
            }
        });

        if(!!code){
            this.refs.reportContent.value='';
            jsBridge.getBrideg(()=>{
                jsBridge.goBack();
            })
        }
    }

    handle(e){
        console.log(e.target.value)
        this.setState({
            val:e.target.value
        })
    }

    shouldComponentUpdate(props,state){

        console.log('shouldComponentUpdate');
     //   console.log(state.val=='4')

        return true;
    }


    render(){
        console.log('render')
        return (
            <div className="app-padding-lr24 ">
                <form action="">
                    <div className="step app-padding-tb20">
                        <textarea ref="reportContent"  className="s-flex1 app-999-font28 app-setting-textarea"  placeholder="请输入举报内容">

                        </textarea>


                    </div>

                    <div className="step app-yellow-radius-check-button login-btn" style={{height:'5rem'}}>
                        {/*<input className="s-center" type="submit" readOnly="readOnly" value="登录"/>*/}
                        <div className="s-center" onClick={this.report.bind(this)}>举报</div>
                    </div>
                </form>

            </div>
        )
    }
}


export default report