import * as React from 'react'

import { Switch, Route } from 'react-router-dom'

import { Schedule } from './constants/types/schedule'

import { getSchedule, getRehearsal } from './mock/mock-schedule'

import MasterRehearsalSchedulePage from './pages/master-rehearsal-schedule-page'
import RehearsalDetailsPage from './pages/rehearsal-details-page'

class App extends React.Component<{}, {}> {
  readonly schedule: Schedule = getSchedule()

  render() {
    return (
      <Switch>
        <Route 
          exact 
          path="/" 
          render={() => {
            return <MasterRehearsalSchedulePage schedule={this.schedule} />
          }} 
        />
        <Route 
          path="/rehearsal/:rehearsalId"
          render={({match}) => {
            const params = match.params as { rehearsalId: string }
            const rehearsal = getRehearsal(params.rehearsalId, this.schedule)
            return <RehearsalDetailsPage rehearsal={rehearsal} />
          }}
        />
      </Switch>
    )
  }
}

export default App
