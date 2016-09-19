import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import CoursesPage from './components/course/CoursesPage';
import ManageCoursePage from './components/course/ManageCoursePage';
import SingerList from './components/singer/SingerList';
import Profile from './components/refetch/Profile';
import User from './components/refetch/User';
import DetailUser from './components/refetch/DetailUser';
import ManageUserPage from './components/refetch/ManageUserPage';
import DeleteUser from './components/refetch/DeleteUser';




export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="about" component={AboutPage} />
    <Route path="course" component={ManageCoursePage} />
    <Route path="course/:id" component={ManageCoursePage} />
    <Route path="courses" component={CoursesPage} />
    <Route path="singerlist" component={SingerList} />
    <Route path="users" component={Profile} />
    <Route path="manageuser" component={ManageUserPage} />
    <Route path="users/:userId" component={DetailUser} />
    <Route path="deleteuser/:userId" component={DeleteUser} />

  </Route>
);