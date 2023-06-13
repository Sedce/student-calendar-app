import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListEventComponent from './components/ListEventComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateEventComponent from './components/CreateEventComponent';
import UpdateEventComponent from './components/UpdateEventComponent';
import ViewEventComponent from './components/ViewEventComponent';

function App() {
  return (
    <div>
        <Router>
              <HeaderComponent />
                <div className="container">
                    <Switch> 
                          <Route path = "/" exact component = {ListEventComponent}></Route>
                          <Route path = "/events" component = {ListEventComponent}></Route>
                          <Route path = "/add-event/:id" component = {CreateEventComponent}></Route>
                          <Route path = "/view-event/:id" component = {ViewEventComponent}></Route>
                          {/* <Route path = "/update-employee/:id" component = {UpdateEmployeeComponent}></Route> */}
                    </Switch>
                </div>
              <FooterComponent />
        </Router>
    </div>
    
  );
}

export default App;
