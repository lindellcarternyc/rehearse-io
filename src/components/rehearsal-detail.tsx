import * as React from 'react'

import { Container, Header, List, } from 'semantic-ui-react'
import { Rehearsal } from '../constants/types/rehearsal'

interface RehearsalDetailProps {
  rehearsal: Rehearsal
}
const RehearsalDetail = (props: RehearsalDetailProps): JSX.Element => {
  const { date, location, start, end, staff, roles } = props.rehearsal
  return (
    <Container style={{paddingTop: '1.5rem'}}>
      <Header as="h3" content="Rehearsal Detail" />
      <List>
        <List.Item icon="calendar" content={date} />
        <List.Item icon="marker" content={location} />
        <List.Item icon="time" content={`${start} - ${end}`} />
        <List.Item>
          <List.Icon name="user" />
          <List.Content>Personnel</List.Content>
          <List horizontal>
            {staff.map(staffMember => {
              return <List.Item key={staffMember} content={staffMember} />
            })}
          </List>
          <br />
          <List horizontal>
            {roles.map(role => {
              return <List.Item key={role} content={role} />
            })}
          </List>
        </List.Item>
      </List>
    </Container>
  )
}

export default RehearsalDetail