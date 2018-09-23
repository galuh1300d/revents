import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'
import { Route, Switch } from 'react-router-dom'
import EventDashboard from '../../features/event/EventDashboard/EventDashboard.jsx'
import NavBar from '../../features/nav/NavBar/NavBar.jsx'
import EventForm from '../../features/event/EventForm/EventForm.jsx'
import SettingsDashboard from '../../features/user/Settings/SettingsDashboard.jsx'
import UserDetailedPage from '../../features/user/UserDetailed/UserDetailedPage.jsx'
import PeopleDashboard from '../../features/user/PeopleDashboard/PeopleDashboard.jsx'
import EventDetailedPage from '../../features/event/EventDetailed/EventDetailedPage.jsx'
import HomePage from '../../features/home/HomePage.jsx'

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={HomePage}/>
        </Switch>

        <Route path='/(.+)' render={() => (
          <div>
            <NavBar/>
            <Container className="main">
              <Switch>
                <Route path='/events' component={EventDashboard}/>
                <Route path='/event/:id' component={EventDetailedPage}/>
                <Route path='/people' component={PeopleDashboard}/>
                <Route path='/profile/:id' component={UserDetailedPage}/>
                <Route path='/settings' component={SettingsDashboard}/>
                <Route path='/createEvent' component={EventForm}/>
              </Switch>
            </Container>
          </div>
        )}/>
      </div>
    );
  }
}

export default App;