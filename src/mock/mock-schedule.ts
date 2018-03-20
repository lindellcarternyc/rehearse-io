import { Schedule } from '../constants/types/schedule'
import { Role } from '../constants/types/roles'
import { Staff } from '../constants/types/staff'
import { Rehearsal } from '../constants/types/rehearsal'

const MOCK_SCHEDULE: Schedule = {
  '0': {
    date: 'Tue, March 20, 2018',
    start: '7:00PM', end: '10:00',
    location: 'Our Lady of Perpetual Help',
    staff: [Staff.Conductor, Staff.Director],
    roles: [
      Role.Aida, Role.Amneris, Role.Radames
    ]
  },
  '1': {
    date: 'Sat, March 23, 2018',
    start: '1:00PM', end: '6:00',
    location: 'Our Lady of Perpetual Help',
    staff: [Staff.Conductor, Staff.Director],
    roles: [Role.Aida, Role.Radames]
  }
}

export const getSchedule = (): Schedule => MOCK_SCHEDULE

export const getRehearsal = (id: string, schedule: Schedule = MOCK_SCHEDULE): Rehearsal => {
  return schedule[id]
}