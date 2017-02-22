'usr strict';

import React from 'react';
import {HttpService,Toast,Tool} from '../../utils';
import LocalStorage from '../../LocalStorage'
import jsBridge from '../../jsBridge'


class PersonalInfo extends React.Component {
    constructor() {
        super();
        this.state={
            userInfo:{},
            editInfo:{
                username:'',
                sex:'',
                age:'',
                residence:'',
                zen:''
            },
            title:''
        };

        jsBridge.getBrideg();

    }

    componentWillMount(){
        this.getInfo();
        this.listenEvent();
        this.title()
    }


    title(t){
        window.g_bridge.callHandler('sendMessageToApp', {
                type: 15, data: {title:'个人',
                    rightNavigationBarItems:[{type: t||10000, title: !t ? '编辑' : '保存'}]}},
            (response)=>{

            })
    }


    listenEvent() {
        window.g_bridge.registerHandler('sendMessageToHTML',  (msg,cb)  => {

                if(msg=='10000'){
                    this.title(10001)
                    this.setState({
                        title:'10001'
                    });

                    this._getInfo();

                  //  jsBridge.sendMessageToApp_type_2('PersonalEdit')
                }else {


                  //
                    this.title();
                    this.editInfo();

                    (async ()=>{
                        const res = await HttpService.query({
                            url:'/v1/p/user/info',
                            data:{accessToken:LocalStorage.get('token')}
                        });

                        this.setState({
                            userInfo:{
                                username:res.username,
                                sex:res.sex,
                                age:res.age,
                                residence:res.residence,
                                zen:res.zen
                            },
                            title:''
                        })
                    })()




                 //   jsBridge.sendMessageToApp_type_2('PersonalInfo')
                }
        })



    }



    _username(e){

        this.setState({
            editInfo:Tool.assign({}, this.state.editInfo,{username:e.target.value})
        });
    }
    _sex(e){

        let value=e.target.value;


        this.setState({
            editInfo:Tool.assign({}, this.state.editInfo,{sex:value})
        });


    }
    _age(e){
        this.setState({
            editInfo:Tool.assign({}, this.state.editInfo,{age:e.target.value})
        });
    }
    _residence(e){
        this.setState({
            editInfo:Tool.assign({}, this.state.editInfo,{residence:e.target.value})
        });
    }
    _zens(e){
        this.setState({
            editInfo:Tool.assign({}, this.state.editInfo,{zen:e.target.value})
        });
    }

    async editInfo() {

        let {editInfo} =this.state;
        console.log(LocalStorage.get('token'));
        const  code = await HttpService.saveJson({
            url: '/v1/p/user/edit/info?accessToken='+LocalStorage.get('token')+'',
            data: {age: editInfo.age, residence: editInfo.residence, sex: editInfo.sex=='男'?1:editInfo.sex=='女'?2:editInfo.sex=='未知'?0:'', username: editInfo.username, zens: editInfo.zen}
        })

    }

    

    async getInfo(){
       const res=await HttpService.query({
            url:'/v1/p/user/info',
            data:{accessToken:LocalStorage.get('token')}
        });

        this.setState({
            userInfo:{
                username:res.username,
                sex:res.sex,
                age:res.age,
                residence:res.residence,
                zen:res.zen
            }
        })
    }


    async _getInfo(){
        const res=await HttpService.query({
            url:'/v1/p/user/info',
            data:{accessToken:LocalStorage.get('token')}
        });

        this.setState({
            editInfo:{
                username:res.username,
                sex:res.sex,
                age:res.age,
                residence:res.residence,
                zen:res.zen
            }
        })
    }


    edit(){
        const {editInfo}=this.state;
        return(
            <div className="app-padding-lr24" style={{paddingTop: '80px'}}>

                <form>
                    <div className="step app-padding-tb20">
                        <div className="s-left app-666-font32">用户名：</div>
                        <div className="s-right app-input-edit">
                            <input className="app-input" value={editInfo.username} onChange={this._username.bind(this)} placeholder="用户名" type="text"/>
                        </div>
                    </div>
                    <div className="step app-padding-tb20">
                        <div className="s-left app-666-font32">性别：</div>
                        <div className="s-right app-input-edit">

                            {
                                editInfo.sex=='0'?<input className="app-input" name="sex" value='未知' onChange={this._sex.bind(this)} placeholder="性别" type="text"/>:
                                    editInfo.sex=='1'?<input className="app-input" name="sex" value='男' onChange={this._sex.bind(this)} placeholder="性别" type="text"/>:
                                        editInfo.sex=='2'?<input className="app-input" name="sex" value='女' onChange={this._sex.bind(this)} placeholder="性别" type="text"/>:
                                            <input className="app-input" name="sex" value={editInfo.sex}  onChange={this._sex.bind(this)} placeholder="性别" type="text"/>
                            }


                            {/*<input className="app-input" value={editInfo.sex} onChange={this._sex.bind(this)} placeholder="性别" type="text"/>*/}
                        </div>
                    </div>
                    <div className="step app-padding-tb20">
                        <div className="s-left app-666-font32">年龄：</div>
                        <div className="s-right app-input-edit">
                            <input className="app-input" value={editInfo.age} onChange={this._age.bind(this)} placeholder="年龄" type="number"/>
                        </div>
                    </div>
                    <div className="step app-padding-tb20">
                        <div className="s-left app-666-font32">居住地：</div>
                        <div className="s-right app-input-edit">
                            <input className="app-input" value={editInfo.residence} onChange={this._residence.bind(this)} placeholder="居住地" type="text"/>
                        </div>
                    </div>
                    <div className="step app-padding-tb20">
                        <div className="s-left app-666-font32">禅语：</div>
                        <div className="s-right app-input-edit">
                            <input className="app-input" value={editInfo.zen} placeholder="禅语" onChange={this._zens.bind(this)} type="text"/>
                        </div>
                    </div>
                </form>

            </div>
        )
    }

    info(){
        const {userInfo}=this.state;
        return(
            <div className="app-padding-lr24" style={{paddingTop:'60px'}}>
                <div className="step app-wh120 border-bottom">
                    <div className="s-left app-666-font32">用户名:</div>
                    <div className="s-right app-666-font32">{userInfo.username}</div>
                </div>
                <div className="step app-wh120 border-bottom">
                    <div className="s-left app-666-font32">性别:</div>
                    <div className="s-right app-666-font32">

                        {
                            userInfo.sex=='0'?'未知':userInfo.sex=='1'?'男':userInfo.sex=='2'?'女':''
                        }
                    </div>
                </div>
                <div className="step app-wh120 border-bottom">
                    <div className="s-left app-666-font32">年龄:</div>
                    <div className="s-right app-666-font32">{userInfo.age}</div>
                </div>
                <div className="step app-wh120 border-bottom">
                    <div className="s-left app-666-font32">居住地:</div>
                    <div className="s-right app-666-font32">{userInfo.residence}</div>
                </div>
                <div className="step app-wh120 border-bottom">
                    <div className="s-left app-666-font32">禅语:</div>
                    <div className="s-right app-666-font32">{userInfo.zen}</div>
                </div>

            </div>
        )
    }


    render(){

        //document.body.innerHTML=this.state.title;

        let stateType = () => {
            if (this.state.title == '10001') {
                return this.edit()
            } else {
                return this.info();
            }
        };

        return (
        <div>
            {stateType()}
        </div>
        )
    }
}


export default PersonalInfo