import * as React from 'react'

import RehearsalDetail from './components/rehearsal-detail'
import { RehearsalDetails } from './constants/types'

const MOCK_REHEARSAL: RehearsalDetails = {
  date: 'Tue, March 20, 2018',
  location: 'Our Lady of Perpetual Help',
  start: '7:00PM',
  end: '10:00PM',
  staff: ['@Director', '@Conductor'],
  roles: ['@Aida', '@Amneris', '@Radames']
}

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <RehearsalDetail {...MOCK_REHEARSAL}/>
      </div>
    )
  }
}

export default App
