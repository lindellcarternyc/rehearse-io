import * as React from 'react'

import { Layout } from '../shared'

import { Schedule } from '../../constants/types/schedule'
import MasterRehearsalList from './master-rehearsal-list'

interface MasterRehearsalSchedulePageProps {
  schedule: Schedule
}
const MasterRehearsalSchedulePage = (props: MasterRehearsalSchedulePageProps): JSX.Element => {
  return (
    <Layout title="Master Schedule" >
      <MasterRehearsalList schedule={props.schedule} />
    </Layout>
  )
}

export default MasterRehearsalSchedulePage