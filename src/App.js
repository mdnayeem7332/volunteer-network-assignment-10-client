import React, { createContext, useState } from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import EventRegistration from './components/EventRegistration/EventRegistration';
import Login from './components/Login/Login';
import EventSelected from './components/EventSelected/EventSelected';
import Admin from './components/Admin/Admin';
import EventAdd from './components/AddEvent/AddEvent';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App() {
  
  const [loggedInUser, setLoggedInUser] = useState({});

  return (

    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>

    <Router>
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>
          <PrivateRoute path="/eventRegistration/:_id">
          <EventRegistration />
          </PrivateRoute>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/selectedEvent">
          <EventSelected></EventSelected>
        </Route>
        <Route path="/admin">
          <Admin></Admin>
        </Route>
        <Route path="/addEvent">
          <EventAdd></EventAdd>
        </Route>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route exact path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider >
  );
}

export default App;
