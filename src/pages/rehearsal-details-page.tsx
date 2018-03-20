import * as React from 'react'

import { Layout } from './shared'
import RehearsalDetail from '../components/rehearsal-detail'
import { Rehearsal } from '../constants/types/rehearsal'

interface RehearsalDetailsPageProps {
  rehearsal: Rehearsal
}
const RehearsalDetailsPage = (props: RehearsalDetailsPageProps): JSX.Element => {
  return (
    <Layout>
      <RehearsalDetail rehearsal={props.rehearsal} />
    </Layout>
  )
}

export default RehearsalDetailsPage