'usr strict';

import React from 'react';
import HttpService from '../../Http';
import LocalStorage from '../../LocalStorage'


class PersonalEdit extends React.Component {
    constructor() {
        super();
    }
    componentWillMount(){

        this.editInfo();
    }

    editInfo(){

        console.log(LocalStorage.get('token'));
        HttpService.save({
            url:'/v1/p/user/edit/info',
            // data:{age:'11',residence:'11',sex:'11',username:'11',zens:'11',accessToken:LocalStorage.get('token')}
            // data:{accessToken:LocalStorage.get('token')}
        }).then((res)=>{
            console.log(res)

        },(error)=>{

        })

    }

    render(){
        return (
            <div className="app-padding-lr24" style={{paddingTop:'80px'}}>

                <form onSubmit={this.editInfo.bind(this)}>
                <div className="step app-padding-tb20">
                    <div className="s-left app-666-font32">用户名：</div>
                    <div className="s-right app-input-edit">
                        <input className="app-input" placeholder="用户名" type="text"/>
                    </div>
                </div>
                <div className="step app-padding-tb20">
                    <div className="s-left app-666-font32">性别：</div>
                    <div className="s-right app-input-edit">
                        <input className="app-input" placeholder="用户名" type="text"/>
                    </div>
                </div>
                <div className="step app-padding-tb20">
                    <div className="s-left app-666-font32">年龄：</div>
                    <div className="s-right app-input-edit">
                        <input className="app-input" placeholder="用户名" type="text"/>
                    </div>
                </div>
                <div className="step app-padding-tb20">
                    <div className="s-left app-666-font32">居住地：</div>
                    <div className="s-right app-input-edit">
                        <input className="app-input" placeholder="用户名" type="text"/>
                    </div>
                </div>
                <div className="step app-padding-tb20">
                    <div className="s-left app-666-font32">禅语：</div>
                    <div className="s-right app-input-edit">
                        <input className="app-input" placeholder="用户名" type="text"/>
                    </div>
                </div>
                </form>

            </div>
        )
    }
}


export default PersonalEdit