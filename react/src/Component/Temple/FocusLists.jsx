'usr strict';

import React from 'react';
import {Router, Route, IndexRoute, browserHistory, Link} from 'react-router';

class FocusLists extends React.Component {
    constructor() {
        super();
    }



    render(){
        return (
            <div className="app-container">
                <div className="step app-white border-bottom app-padding-l24  app-wh-140">
                    <div className="app-wh-100  app-margin-right24 app-margin-tb20">
                        <img className="app-wh100-all-radius" src="http://img4.imgtn.bdimg.com/it/u=398347842,2770887580&fm=23&gp=0.jpg"/>
                    </div>
                    <div className="s-flex2 s-j-center" style={{flexDirection: 'column', alignItems: 'flex-start'}}>
                        <Link to="/UserInfo" className="app-a"><div className="app-333-font28">大师</div></Link>
                        <div className="app-999-font24" style={{paddingTop:'20px'}}>空侬倥侬人空倥</div>
                    </div>
                </div>
                <div className="step app-white border-bottom app-padding-l24  app-wh-140">
                    <div className="app-wh-100  app-margin-right24 app-margin-tb20">
                        <img className="app-wh100-all-radius" src="http://img4.imgtn.bdimg.com/it/u=398347842,2770887580&fm=23&gp=0.jpg"/>
                    </div>
                    <div className="s-flex2 s-j-center" style={{flexDirection: 'column', alignItems: 'flex-start'}}>
                        <Link to="/UserInfo" className="app-a"><div className="app-333-font28">大师</div></Link>
                        <div className="app-999-font24" style={{paddingTop:'20px'}}></div>
                    </div>
                </div>
            </div>
        )
    }
}


export default FocusLists