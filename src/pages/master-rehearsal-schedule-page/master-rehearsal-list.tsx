import * as React from 'react'

import { Link } from 'react-router-dom'

import { List } from 'semantic-ui-react'
import { Schedule } from '../../constants/types/schedule'

interface MasterRehearsalListItemProps {
  id: string
  date: string
}
const MasterRehearsalListItem = (props: MasterRehearsalListItemProps): JSX.Element => {
  return (
    <List.Item content={props.date} />
  )
}

interface MasterRehearsalListProps {
  schedule: Schedule
}
const MasterRehearsalList = (props: MasterRehearsalListProps): JSX.Element => {
  const ids = Object.keys(props.schedule)

  return (
    <List selection>
      {ids.map(id => {
        return (
          <Link key={id} to={`/rehearsal/${id}`}>
            <MasterRehearsalListItem  
              id={id}
              date={props.schedule[id].date}
            />
          </Link>
        )
      })}
    </List>
  )
}

export default MasterRehearsalList