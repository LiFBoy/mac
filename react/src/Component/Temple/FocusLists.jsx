'usr strict';

import React from 'react';
import {Router, Route, IndexRoute, browserHistory, Link} from 'react-router';
import {HttpService} from '../../utils'
class FocusLists extends React.Component {
    constructor() {
        super();
        this.state={
            fans:[]
        }
    }

    componentWillMount() {

        this.fans();

    }

    async fans(){
        let code = await HttpService.query({
            url: '/v1/temple/get/fans',
            data: {
               id:this.props.params.id
            }
        });
        console.log(code)

        this.setState({
            fans:code.fans
        })
    }

    render(){

        const {fans}=this.state;
        return (
            <div className="app-container">
                {
                    fans.length!=0?fans.map((json,index)=>(
                            <div className="step app-white border-bottom app-padding-l24  app-wh-140" key={index}>
                                <div className="app-wh-100  app-margin-right24 app-margin-tb20">
                                    <img className="app-wh100-all-radius" src={json.userHeadImgUrl}/>
                                </div>
                                <div className="s-flex2 s-j-center" style={{flexDirection: 'column', alignItems: 'flex-start'}}>
                                    <Link to="/UserInfo" className="app-a"><div className="app-333-font28 app-line-height-one">{json.username}</div></Link>
                                    <div className="app-999-font24 app-line-height-one" style={{paddingTop:'20px'}}>空侬倥侬人空倥</div>
                                </div>
                            </div>
                        )):
                        ''
                }
            </div>
        )
    }
}


export default FocusLists