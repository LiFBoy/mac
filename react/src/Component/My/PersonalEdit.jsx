'usr strict';

import React from 'react';
import {HttpService,Tool} from '../../utils';
import LocalStorage from '../../LocalStorage'


class PersonalEdit extends React.Component {
    constructor() {
        super();
        this.state={
            userInfo:{
                username:'',
                sex:'',
                age:'',
                residence:'',
                zen:''
            }
        }
    }

    componentWillMount() {
        this.getInfo()

    }


    getInfo(){
        HttpService.query({
            url:'/v1/p/user/info',
            data:{accessToken:LocalStorage.get('token')}
        }).then((res)=>{
            console.log(res);

            this.setState({
                userInfo:{
                    username:res.username,
                    sex:res.sex,
                    age:res.age,
                    residence:res.residence,
                    zen:res.zen
                }
            })

        },(error)=>{

        })

    }

    _username(e){

        this.setState({
            userInfo:Tool.assign({}, this.state.userInfo,{username:e.target.value})
        });
    }
    _sex(e){

        let value=e.target.value;


        this.setState({
            userInfo:Tool.assign({}, this.state.userInfo,{sex:value})
        });

        //
        //
        // if(value=='男'){
        //     this.setState({
        //         userInfo:Tool.assign({}, this.state.userInfo,{sex:1})
        //     });
        //
        // }else if(value=='女'){
        //     this.setState({
        //         userInfo:Tool.assign({}, this.state.userInfo,{sex:2})
        //     });
        //
        // }else if(value==''){
        //     this.setState({
        //         userInfo:Tool.assign({}, this.state.userInfo,{sex:0})
        //     });
        // }

    }
    _age(e){
        this.setState({
            userInfo:Tool.assign({}, this.state.userInfo,{age:e.target.value})
        });
    }
    _residence(e){
        this.setState({
            userInfo:Tool.assign({}, this.state.userInfo,{residence:e.target.value})
        });
    }
    _zens(e){
        this.setState({
            userInfo:Tool.assign({}, this.state.userInfo,{zen:e.target.value})
        });
    }


    editInfo() {

        let {userInfo} =this.state;
        console.log(LocalStorage.get('token'));
        HttpService.save2({
            url: '/v1/p/user/edit/info?accessToken='+LocalStorage.get('token')+'',
            data: {age: userInfo.age, residence: userInfo.residence, sex: userInfo.sex=='男'?1:userInfo.sex=='女'?2:userInfo.sex=='未知'?0:'', username: userInfo.username, zens: userInfo.zen}
        }).then((res) => {
            console.log(res)

        }, (error) => {

        })

    }

    render() {

        let {userInfo}=this.state;


        return (
            <div className="app-padding-lr24" style={{paddingTop: '80px'}}>

                <form>
                    <div className="step app-padding-tb20">
                        <div className="s-left app-666-font32">用户名：</div>
                        <div className="s-right app-input-edit">
                            <input className="app-input" value={userInfo.username} onChange={this._username.bind(this)} placeholder="用户名" type="text"/>
                        </div>
                    </div>
                    <div className="step app-padding-tb20">
                        <div className="s-left app-666-font32">性别：</div>
                        <div className="s-right app-input-edit">

                            {
                                userInfo.sex=='0'?<input className="app-input" name="sex" value='未知' onChange={this._sex.bind(this)} placeholder="性别" type="text"/>:
                                    userInfo.sex=='1'?<input className="app-input" name="sex" value='男' onChange={this._sex.bind(this)} placeholder="性别" type="text"/>:
                                        userInfo.sex=='2'?<input className="app-input" name="sex" value='女' onChange={this._sex.bind(this)} placeholder="性别" type="text"/>:
                                            <input className="app-input" name="sex" value={userInfo.sex}  onChange={this._sex.bind(this)} placeholder="性别" type="text"/>
                            }


                            {/*<input className="app-input" value={userInfo.sex} onChange={this._sex.bind(this)} placeholder="性别" type="text"/>*/}
                        </div>
                    </div>
                    <div className="step app-padding-tb20">
                        <div className="s-left app-666-font32">年龄：</div>
                        <div className="s-right app-input-edit">
                            <input className="app-input" value={userInfo.age} onChange={this._age.bind(this)} placeholder="年龄" type="number"/>
                        </div>
                    </div>
                    <div className="step app-padding-tb20">
                        <div className="s-left app-666-font32">居住地：</div>
                        <div className="s-right app-input-edit">
                            <input className="app-input" value={userInfo.residence} onChange={this._residence.bind(this)} placeholder="居住地" type="text"/>
                        </div>
                    </div>
                    <div className="step app-padding-tb20">
                        <div className="s-left app-666-font32">禅语：</div>
                        <div className="s-right app-input-edit">
                            <input className="app-input" value={userInfo.zen} placeholder="禅语" onChange={this._zens.bind(this)} type="text"/>
                        </div>
                    </div>

                    <button onClick={this.editInfo.bind(this)}>保存</button>
                </form>

            </div>
        )
    }
}


export default PersonalEdit