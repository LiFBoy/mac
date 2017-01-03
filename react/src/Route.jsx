import React, {Component, PropTypes} from 'react';
import {Router, Route, IndexRoute, browserHistory, hashHistory} from 'react-router';

import Index from './Component/index'; //首页
import NearBy from './Component/NearBy'; //


import Feedbackpro from './Component/My/Feedbackpro';
import PersonalInfo from './Component/My/PersonalInfo';
import UserInfo from './Component/My/UserInfo';
import Setting from './Component/My/Setting';
import PayInfo from './Component/My/PayInfo';
import DayGoods from './Component/My/DayGoods';
import MyMain from './Component/My/MyMain';
import MyAlms from './Component/My/MyAlms';




import Temple from './Component/Message/Temple';
import ChanYu from './Component/Message/ChanYu';
import Notice from './Component/Message/Notice';
import Coments from './Component/Message/Coments';


//Temple


import TempleDetail from './Component/Temple/TempleDetail';
import PaySuccess from './Component/Temple/PaySuccess';
import PayMoney from './Component/Temple/PayMoney';
import FocusLists from './Component/Temple/FocusLists';
import MessageBoard from './Component/Temple/MessageBoard';
import PayHistory from './Component/Temple/PayHistory';
import AlmsDetail from './Component/Temple/AlmsDetail';
import SelectMoney from './Component/Temple/SelectMoney';
import CommentLists from './Component/Temple/CommentLists';
import DayPay from './Component/Temple/DayPay';
import UnderstandDetail from './Component/Temple/UnderstandDetail';
import Pay from './Component/Temple/Pay';
import PayRecord from './Component/Temple/PayRecord';




/**
 * (路由根目录组件，显示当前符合条件的组件)
 * 
 * @class Roots
 * @extends {Component}
 */
class Roots extends Component {
    render() {
        return (
            <div>{this.props.children}</div>
        );
    }
}


var history = hashHistory;

const RouteConfig = (
    <Router history={history}>
        <Route path="/" component={Roots}>
            <Route path="/index" component={Index} />
            <Route path="/NearBy" component={NearBy} />
            <Route path="/Feedbackpro" component={Feedbackpro} />
            <Route path="/PersonalInfo" component={PersonalInfo} />
            <Route path="/UserInfo" component={UserInfo} />
            <Route path="/Setting" component={Setting} />
            <Route path="/PayInfo" component={PayInfo} />
            <Route path="/DayGoods" component={DayGoods} />
            <Route path="/MyMain" component={MyMain} />
            <Route path="/MyAlms" component={MyAlms} />



            <Route path="/TempleDetail" component={TempleDetail} />
            <Route path="/PaySuccess" component={PaySuccess} />
            <Route path="/PayMoney" component={PayMoney} />
            <Route path="/FocusLists" component={FocusLists} />
            <Route path="/MessageBoard" component={MessageBoard} />
            <Route path="/PayHistory" component={PayHistory} />
            <Route path="/AlmsDetail" component={AlmsDetail} />
            <Route path="/SelectMoney" component={SelectMoney} />
            <Route path="/CommentLists" component={CommentLists} />


            <Route path="/Temple" component={Temple} />
            <Route path="/Notice" component={Notice} />
            <Route path="/ChanYu" component={ChanYu} />
            <Route path="/Coments" component={Coments} />
            <Route path="/DayPay" component={DayPay} />
            <Route path="/UnderstandDetail" component={UnderstandDetail} />
            <Route path="/Pay" component={Pay} />
            <Route path="/PayRecord" component={PayRecord} />

        </Route>
    </Router>
);

export default RouteConfig;

// var history = process.env.NODE_ENV !== 'production' ? browserHistory : hashHistory;