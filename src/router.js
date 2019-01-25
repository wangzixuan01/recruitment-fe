import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Header from './components/Header/header'

function RouterConfig({ history }) {
  const wrap = {
    height: "100%"
  }
  const container = {
    width: "100%",
    height: "100%"
 }
  return (
    <Router history={history}>
      <div style={ wrap }>
	      <Header />
        <div style={ container }>
  	      <Switch>
  	        <Route path="/" exact component={IndexPage} />
            {/* <Route path="/dashboard" component={ DashboardView }  />
            <Route path="/shangyun" component={ ShangYunView }  />
            <Route path="/kanchang" component={ KanChangView }  />
            <Route path="/config" component={ Config } />
            <Route path="/eagleeye" component={ EagleeyeView } />
            <Route path="/zongheng" component={ ZonghengView } />
            <Route component={ NotFoundView } /> */}
  	      </Switch>
        </div>
      </div>
    </Router>
  );
}

export default RouterConfig;
