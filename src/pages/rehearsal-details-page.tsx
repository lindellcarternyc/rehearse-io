import * as React from 'react'

import { Layout } from './shared'
import RehearsalDetail from '../components/rehearsal-detail'
import { Rehearsal } from '../constants/types/rehearsal'

import { Button } from 'semantic-ui-react'

interface RehearsalDetailsPageProps {
  rehearsal: Rehearsal
  clearSelectedRehearsal: () => void
}
const RehearsalDetailsPage = (props: RehearsalDetailsPageProps): JSX.Element => {
  return (
    <Layout>
      <Button color="black" content="Back" onClick={props.clearSelectedRehearsal}/>
      <RehearsalDetail rehearsal={props.rehearsal} />
    </Layout>
  )
}

export default RehearsalDetailsPage