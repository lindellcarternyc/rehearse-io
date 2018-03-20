import * as React from 'react'

import { Layout } from './shared'
import { RehearsalDetails } from '../constants/types'
import RehearsalDetail from '../components/rehearsal-detail'

import { Button } from 'semantic-ui-react'

interface RehearsalDetailsPageProps {
  details: RehearsalDetails
  clearSelectedRehearsal: () => void
}
const RehearsalDetailsPage = (props: RehearsalDetailsPageProps): JSX.Element => {
  return (
    <Layout>
      <Button color="black" content="Back" onClick={props.clearSelectedRehearsal}/>
      <RehearsalDetail {...props.details} />
    </Layout>
  )
}

export default RehearsalDetailsPage