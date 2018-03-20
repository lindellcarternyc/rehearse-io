import * as React from 'react'

import { Schedule } from './constants/types/schedule'
import { Rehearsal } from './constants/types/rehearsal'

import { getSchedule, getRehearsal } from './mock/mock-schedule'

import MasterRehearsalSchedulePage from './pages/master-rehearsal-schedule-page'
import RehearsalDetailsPage from './pages/rehearsal-details-page'

interface AppState {
  schedule: Schedule
  selectedRehearsal: Rehearsal | null
}
class App extends React.Component<{}, AppState> {
  constructor(props: {}) {
    super(props)

    this.state = {
      schedule: getSchedule(),
      selectedRehearsal: null
    }
  }

  selectRehearsal = (id: string) => {
    const selectedRehearsal = getRehearsal(id, this.state.schedule)
    this.setState({ selectedRehearsal })
  }

  clearSelectedRehearsal = () => { 
    this.setState({ selectedRehearsal: null })
  }

  currentPage(): JSX.Element  {
    const { schedule, selectedRehearsal } = this.state
    if ( selectedRehearsal !== null ) {
      return (
        <RehearsalDetailsPage 
          rehearsal={selectedRehearsal}
          clearSelectedRehearsal={this.clearSelectedRehearsal}
        />
      )
    }
    return (
      <MasterRehearsalSchedulePage 
        schedule={schedule}
        select={this.selectRehearsal}
        clear={this.clearSelectedRehearsal}
      />
    )
  }

  render() {
    return (
      <div className="App">
        {this.currentPage()}
      </div>
    )
  }
}

export default App
