import React from 'react';

import PropTypes from 'prop-types';


import { Switch, Route } from 'react-router-dom'
import Home from './Home.jsx'
import LoginPage from '../containers/LoginPage.jsx';
import SignUpPage from '../containers/SignUpPage.jsx';
import Auth from '../modules/Auth';




class Main extends React.Component {

  constructor(props) {
    super(props);



  }
  
  render() {
    var title =  'Website title';
    var subtitle =  'This is the home page. Log in to see the hidden content';
    return (
          <main>

            <Switch>
              <Route exact path='/' render={() => <Home cardtitleP={title} cardsubtitleP={subtitle}/>}/>    
              <Route path='/login' component={LoginPage}/>
              <Route path='/signup' component={SignUpPage}/>

            </Switch>

          </main>
    
    )


  }  



}



export default Main