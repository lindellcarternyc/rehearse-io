import * as React from 'react'

import { Layout } from './shared'
import { List } from 'semantic-ui-react'

import { RehearsalDetails } from '../constants/types'

interface MasterRehearsalPageListItemProps {
  id: string
  date: string
  selectRehearsal: (id: string) => void
}
const  MasterRehearsalPageListItem = (props: MasterRehearsalPageListItemProps): JSX.Element => {
  const onClick = () => { 
    props.selectRehearsal(props.id)
  }
  return (
    <List.Item content={props.date} onClick={onClick} />
  )
}

interface MasterRehearsalPageProps {
  details: { [id: string]: RehearsalDetails }
  selectRehearsal: (id: string) => void
}
const MasterRehearsalPage = (props: MasterRehearsalPageProps): JSX.Element => {
  return (
    <Layout>
      <List>
        {Object.keys(props.details).map(id => {
          return (
            <MasterRehearsalPageListItem 
              key={id} 
              id={id} 
              date={props.details[id].date} 
              selectRehearsal={props.selectRehearsal} 
            />
          )
        })}
      </List>
    </Layout>
  )
}

export default MasterRehearsalPage