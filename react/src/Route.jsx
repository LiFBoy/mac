import React, {Component, PropTypes} from 'react';
import {Router, Route, IndexRoute, browserHistory, hashHistory} from 'react-router';

import LocalStorage from './LocalStorage'
import {Toast} from './utils'
import jsBridge from './jsBridge'

import Index from './Component/index'; //首页
import IndexFocus from './Component/IndexFocus'; //首页
import NearBy from './Component/NearBy'; //
import Login from './Component/Login'; //


import Feedbackpro from './Component/My/Feedbackpro';
import PersonalInfo from './Component/My/PersonalInfo';
import PersonalEdit from './Component/My/PersonalEdit';
import UserInfo from './Component/My/UserInfo';
import Setting from './Component/My/Setting';
import PayInfo from './Component/My/PayInfo';
import DayGoods from './Component/My/DayGoods';
import MyMain from './Component/My/MyMain';
import MyAlms from './Component/My/MyAlms';
import myHistoryDaily from './Component/My/myHistoryDaily';
import myRecentDonations from './Component/My/myRecentDonations';
import myRecentDaily from './Component/My/myRecentDaily';
import myHistoryDonation from './Component/My/myHistoryDonation';




import Temple from './Component/Message/Temple';
import ChanYu from './Component/Message/ChanYu';
import Notice from './Component/Message/Notice';
import Coments from './Component/Message/Coments';
import CommentReply from './Component/Message/CommentReply';
import report from './Component/Message/report';


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
import dailyRecord from './Component/Temple/dailyRecord';
import wish from './Component/Temple/wish';
import MessageReply from './Component/Temple/MessageReply';
import recentDonations from './Component/Temple/recentDonations';
import historyDonations from './Component/Temple/historyDonations';
import historyDaily from './Component/Temple/historyDaily';
import recentDaily from './Component/Temple/recentDaily';



//Operat-backend

import OperatIndex from './Component/Operat-backend/OperatIndex';
import SettingWord from './Component/Operat-backend/SettingWord';
import ReplaceBanner from './Component/Operat-backend/ReplaceBanner';
import TempleList from './Component/Operat-backend/TempleList';
import AddTemple from './Component/Operat-backend/AddTemple';
import AppInfo from './Component/Operat-backend/AppInfo';

//Temple-backend


import TempleIndex from './Component/Temple-backend/TempleIndex';
import dynamic from './Component/Temple-backend/dynamic';
import TempleEdit from './Component/Temple-backend/TempleEdit';
import Donations from './Component/Temple-backend/Donations';
import trans from './Component/Temple-backend/trans';


// /**
//  * (路由根目录组件，显示当前符合条件的组件)
//  *
//  * @class Roots
//  * @extends {Component}
//  */
// class Roots extends Component {
//     render() {
//         return (
//             <div>{this.props.children}</div>
//         );
//     }
// }


var history = hashHistory;




const requireAuth = (nextState, replaceState) => {

    console.log(nextState);

    if (!LocalStorage.get('token')) {
     //   Toast.toast('444',3333,'bottom');

        //mymain
        replaceState({nextPathname:nextState.location.pathname},'/Login')

    }else{

    }

};

const RouteConfig = (
    <Router history={history}>
        <Route path="/">
            <Route path="/Login" component={Login} />
            <Route path="/index" component={Index} />
            <Route path="/IndexFocus" component={IndexFocus}/>
            <Route path="/NearBy" component={NearBy} />
            <Route path="/Feedbackpro" component={Feedbackpro} />
            <Route path="/PersonalInfo" component={PersonalInfo} />
            <Route path="/PersonalEdit" component={PersonalEdit} />
            <Route path="/UserInfo/:id" component={UserInfo} />
            <Route path="/Setting" component={Setting}/>
            <Route path="/PayInfo" component={PayInfo} />
            <Route path="/DayGoods" component={DayGoods} />
            <Route path="/myHistoryDaily" component={myHistoryDaily} />
            <Route path="/myHistoryDonation" component={myHistoryDonation} />
            <Route path="/myRecentDonations" component={myRecentDonations} />
            <Route path="/myRecentDaily" component={myRecentDaily} />

            <Route path="/MyMain" component={MyMain} onEnter={requireAuth}>

            </Route>



            <Route path="/MyAlms" component={MyAlms} />
            <Route path="/TempleDetail/:id/:name" component={TempleDetail} />
            <Route path="/PaySuccess/:id" component={PaySuccess} />
            <Route path="/PayMoney" component={PayMoney} />
            <Route path="/FocusLists/:id" component={FocusLists} />
            <Route path="/MessageBoard/:id" component={MessageBoard} />
            <Route path="/PayHistory/:id" component={PayHistory} />
            <Route path="/AlmsDetail/:id" component={AlmsDetail} />
            <Route path="/SelectMoney" component={SelectMoney} />
            <Route path="/CommentLists/:id/:type/:obj" component={CommentLists} />
            <Route path="/wish/:type/:money/:id" component={wish} />


            <Route path="/Temple" component={Temple} />
            <Route path="/Notice" component={Notice} />
            <Route path="/ChanYu" component={ChanYu} />
            <Route path="/Coments" component={Coments} />
            <Route path="/DayPay/:id" component={DayPay} />
            <Route path="/UnderstandDetail/:id" component={UnderstandDetail} />
            <Route path="/Pay/:id/:name" component={Pay} />
            <Route path="/PayRecord/:id" component={PayRecord} />
            <Route path="/dailyRecord/:id" component={dailyRecord} />
            <Route path="/recentDonations" component={recentDonations} />
            <Route path="/historyDonations" component={historyDonations} />
            <Route path="/historyDaily" component={historyDaily} />
            <Route path="/recentDaily" component={recentDaily} />



            <Route path="/OperatIndex" component={OperatIndex} />
            <Route path="/SettingWord" component={SettingWord} />
            <Route path="/ReplaceBanner" component={ReplaceBanner} />
            <Route path="/TempleList" component={TempleList} />
            <Route path="/AddTemple/:id" component={AddTemple} />
            <Route path="/AppInfo" component={AppInfo} />



            <Route path="/TempleIndex" component={TempleIndex} />
            <Route path="/dynamic" component={dynamic} />
            <Route path="/TempleEdit" component={TempleEdit} />
            <Route path="/Donations" component={Donations} />
            <Route path="/trans" component={trans} />

            <Route path="/MessageReply/:id" component={MessageReply} />
            <Route path="/CommentReply/:id" component={CommentReply} />
            <Route path="/report/:id" component={report} />

        </Route>
    </Router>
);

export default RouteConfig;

// var history = process.env.NODE_ENV !== 'production' ? browserHistory : hashHistory;