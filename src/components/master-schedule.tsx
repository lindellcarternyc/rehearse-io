import * as React from 'react'

import { Container, List } from 'semantic-ui-react'

interface MasterScheduleDate {
  id: string
  date: string
}
interface MasterScheduleProps {
  dates: MasterScheduleDate[]
  selectRehearsal: (id: string) => void

}
const MasterSchedule = (props: MasterScheduleProps ) => {
  return (
    <Container>
      <List selection>
        {props.dates.map(({ date, id }) => {
          return (
            <List.Item key={id} content={date} onClick={() => { props.selectRehearsal(id) }} />
          )
        })}
      </List>
    </Container>
  )
}

export default MasterSchedule