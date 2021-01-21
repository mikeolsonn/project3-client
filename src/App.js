import { useEffect } from 'react';
import { getItems } from './services/acnh-api';
import { useState } from 'react';
import { getUser, logout } from './services/userService';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';


import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';

import { Switch, Route, withRouter, Redirect } from 'react-router-dom';

function App(props) {


  async function getAppData() {
    const data = await getItems()
    const dataArray = Object.values(data)
    // console.log(dataArray.flat())
    setItemData({results: dataArray.flat()})
  }
  // .slice(0, 100) -> add to end of .flat() if it breaks


  useEffect(() => {
    getAppData();
  }, []);

  const [ userState, setUserState] = useState({
    user: getUser()
  });

  const [ itemData, setItemData ] = useState({
    results: []

  });

  // have to manually put user in state when they sign up or login
  function handleSignupOrLogin() {
    setUserState({
      user: getUser()
    });
  }

  function handleLogout() {
    logout();
    // remove the user from state
    setUserState({ user: null });
    // reroute user to landing page
    props.history.push('/')
  }
  
  return (
    <div className="App">
      <Header handleLogout={handleLogout} user={userState.user} />
        <main>
          <Switch>
            <Route exact path="/" render={props =>
              <HomePage />
            } />

            <Route exact path="/dashboard" render={props =>
            userState.user && itemData.results ?
              <DashboardPage data={itemData.results} />
              :
              <Redirect to="/login" />
            } />


            <Route exact path="/signup" render={props =>
              <SignupPage 
              {...props}
              handleSignupOrLogin={handleSignupOrLogin} 
               />
            } />
            <Route exact path="/login" render={props =>
              <LoginPage 
              {...props}
              handleSignupOrLogin={handleSignupOrLogin} 
               />
            } />
          </Switch>
        </main>
     <Footer />
    </div>
  );
}

export default withRouter(App);
