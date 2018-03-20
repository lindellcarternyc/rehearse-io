import * as React from 'react'

import RehearsalDetail from './components/rehearsal-detail'
import MasterSchedule from './components/master-schedule'
import { RehearsalDetails } from './constants/types'
import { getRehearsalDetailsMap } from './mock/rehearsal-details-list'

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

  render() {
    return (
      <div className="App">
        <MasterSchedule dates={this.dates} selectRehearsal={this.selectRehearsal} />
        {this.state.currentRehearsalDetails !== null &&
          <RehearsalDetail {...this.state.currentRehearsalDetails}/>
        }
      </div>
    )
  }
}

export default App
