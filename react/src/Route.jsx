import React, {Component, PropTypes} from 'react';
import {Router, Route, IndexRoute, browserHistory, hashHistory} from 'react-router';

import Index from './Component/index'; //首页




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
        </Route>
    </Router>
);

export default RouteConfig;

// var history = process.env.NODE_ENV !== 'production' ? browserHistory : hashHistory;