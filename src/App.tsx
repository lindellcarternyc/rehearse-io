import * as React from 'react'

import { RehearsalDetails } from './constants/types'
import { Schedule } from './constants/schedule'
import { Rehearsal } from './constants/rehearsal'
import { getSchedule, getRehearsal } from './mock/mock-schedule'
import { getRehearsalDetailsMap } from './mock/rehearsal-details-list'

import MasterRehearsalSchedulePage from './pages/master-rehearsal-schedule-page'
import RehearsalDetailsPage from './pages/rehearsal-details-page'

interface AppState {
  rehearsalDetails: { [id: string]: RehearsalDetails }
  currentRehearsalDetails: RehearsalDetails | null
  schedule: Schedule
  selectedRehearsal: Rehearsal | null
}
class App extends React.Component<{}, AppState> {
  constructor(props: {}) {
    super(props)

    this.state = { 
      rehearsalDetails: { },
      currentRehearsalDetails: null,
      schedule: getSchedule(),
      selectedRehearsal: null
    }
  }

  componentDidMount() {
    const rehearsalDetails = getRehearsalDetailsMap()
    this.setState({ rehearsalDetails })
  }

  selectRehearsal = (id: string) => {
    const currentRehearsalDetails = this.state.rehearsalDetails[id]
    const selectedRehearsal = getRehearsal(id, this.state.schedule)
    this.setState({ currentRehearsalDetails, selectedRehearsal })
  }

  clearSelectedRehearsal = () => {
    const currentRehearsalDetails = null
    this.setState({ currentRehearsalDetails, selectedRehearsal: null })
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
