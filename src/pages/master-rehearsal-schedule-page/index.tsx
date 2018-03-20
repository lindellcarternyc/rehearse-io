import * as React from 'react'

import { Layout } from '../shared'
import { Button } from 'semantic-ui-react'

import { Schedule } from '../../constants/types/schedule'
import MasterRehearsalList from './master-rehearsal-list'

interface MasterRehearsalSchedulePageProps {
  schedule: Schedule
  select: (id: string) => void
  clear: () => void
}
const MasterRehearsalSchedulePage = (props: MasterRehearsalSchedulePageProps): JSX.Element => {
  return (
    <Layout title="Master Schedule" >
      <Button size="small" content="Clear" onClick={props.clear} />
      <MasterRehearsalList schedule={props.schedule} select={props.select}/>
    </Layout>
  )
}

export default MasterRehearsalSchedulePage