import React from 'react';
import { Router, Route, Switch, Redirect } from 'dva/router';
import Header from './components/Header/header'
import Bookmarks from './routes/jobSeeker/bookmarks/bookmarks'
import CampusJob from './routes/jobSeeker/campusJob/campusJob'
import MyResume from './routes/jobSeeker/myResume/myResume'
import Company from './routes/jobSeeker/company/company'
import DropBox from './routes/jobSeeker/dropBox/dropBox'
import Home from './routes/jobSeeker/home/home'
import Job from './routes/jobSeeker/job/job'

import CareerTalk from './routes/enterprise/careerTalk/careerTalk'
import CompanyDetails from './routes/enterprise/companyDetails/companyDetails'
import JobTitle from './routes/enterprise/jobTitle/jobTitle'
import ResumeList from './routes/enterprise/resumeList/resumeList'

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
            <Route exact path="/" render={() => <Redirect to="/jobSeeker/home"></Redirect>}></Route>
            <Route exact path="/enterprise" render={() => <Redirect to="/enterprise/companyDetails"></Redirect>}></Route>
            <Route exact path="/jobSeeker" render={() => <Redirect to="/jobSeeker/home"></Redirect>}></Route>
            <Route path="/jobSeeker/home" component={ Home }  />
            <Route path="/jobSeeker/bookmarks" component={ Bookmarks }  />
            <Route path="/jobSeeker/campusJob" component={ CampusJob }  />
            <Route path="/jobSeeker/myResume" component={ MyResume }  />
            <Route path="/jobSeeker/company" component={ Company }  />
            <Route path="/jobSeeker/dropBox" component={ DropBox }  />
            <Route path="/jobSeeker/job" component={ Job }  />

            <Route path="/enterprise/careerTalk" component={ CareerTalk }  />
            <Route path="/enterprise/companyDetails" component={ CompanyDetails }  />
            <Route path="/enterprise/jobTitle" component={ JobTitle }  />
            <Route path="/enterprise/resumeList" component={ ResumeList }  />
  	      </Switch>
        </div>
      </div>
    </Router>
  );
}

export default RouterConfig;
