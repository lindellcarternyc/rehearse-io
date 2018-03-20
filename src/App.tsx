import * as React from 'react'

// import RehearsalDetail from './components/rehearsal-detail'
// import MasterSchedule from './components/master-schedule'
import { RehearsalDetails } from './constants/types'
import { getRehearsalDetailsMap } from './mock/rehearsal-details-list'

import MasterRehearsalPage from './pages/master-reharsal-page'
import RehearsalDetailsPage from './pages/rehearsal-details-page'

interface AppState {
  rehearsalDetails: { [id: string]: RehearsalDetails }
  currentRehearsalDetails: RehearsalDetails | null
}
class App extends React.Component<{}, AppState> {
  constructor(props: {}) {
    super(props)

    this.state = { 
      rehearsalDetails: { },
      currentRehearsalDetails: null
    }
  }

  componentDidMount() {
    const rehearsalDetails = getRehearsalDetailsMap()
    this.setState({ rehearsalDetails })
  }

  get dates(): { id: string, date: string }[] {
    const { rehearsalDetails } = this.state
    const ids = Object.keys(rehearsalDetails)
    return ids.map(id => {
      const { date } = rehearsalDetails[id]
      return { id, date } 
    })
  }

  selectRehearsal = (id: string) => {
    const currentRehearsalDetails = this.state.rehearsalDetails[id]
    this.setState({ currentRehearsalDetails })
  }

  clearSelectedRehearsal = () => {
    const currentRehearsalDetails = null
    this.setState({ currentRehearsalDetails })
  }

  currentPage(): JSX.Element  {
    if (this.state.currentRehearsalDetails !== null) {
      return (
        <RehearsalDetailsPage 
          details={this.state.currentRehearsalDetails} 
          clearSelectedRehearsal={this.clearSelectedRehearsal}
        />
      )
    }
    return (
      <MasterRehearsalPage 
        details={this.state.rehearsalDetails}
        selectRehearsal={this.selectRehearsal}
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
