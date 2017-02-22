'usr strict';

import React from 'react';
import {HttpService,Tool} from '../../utils';
import LocalStorage from '../../LocalStorage'


class PersonalEdit extends React.Component {
    constructor() {
        super();
        this.state={
            editInfo:{
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


    editInfo() {

        let {editInfo} =this.state;
        console.log(LocalStorage.get('token'));
        HttpService.save2({
            url: '/v1/p/user/edit/info?accessToken='+LocalStorage.get('token')+'',
            data: {age: editInfo.age, residence: editInfo.residence, sex: editInfo.sex=='男'?1:editInfo.sex=='女'?2:editInfo.sex=='未知'?0:'', username: editInfo.username, zens: editInfo.zen}
        }).then((res) => {
            console.log(res)

        }, (error) => {

        })

    }

    render() {

        let {editInfo}=this.state;


        return (
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

                    <button onClick={this.editInfo.bind(this)}>保存</button>
                </form>

            </div>
        )
    }
}


export default PersonalEdit