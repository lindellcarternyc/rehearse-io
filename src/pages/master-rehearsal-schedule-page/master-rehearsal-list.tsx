import * as React from 'react'

import { List } from 'semantic-ui-react'
import { Schedule } from '../../constants/types/schedule'

interface MasterRehearsalListItemProps {
  id: string
  date: string
  select: (id: string) => void
}
const MasterRehearsalListItem = (props: MasterRehearsalListItemProps): JSX.Element => {
  return (
    <List.Item content={props.date} onClick={() => { props.select(props.id) }}/>
  )
}

interface MasterRehearsalListProps {
  schedule: Schedule
  select: (id: string) => void
}
const MasterRehearsalList = (props: MasterRehearsalListProps): JSX.Element => {
  const ids = Object.keys(props.schedule)

  return (
    <List>
      {ids.map(id => {
        return (
          <MasterRehearsalListItem 
            key={id} 
            id={id}
            date={props.schedule[id].date} 
            select={props.select}
          />
        )
      })}
    </List>
  )
}

export default MasterRehearsalList