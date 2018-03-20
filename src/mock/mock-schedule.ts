import { Schedule } from '../constants/types/schedule'
import { Role } from '../constants/types/roles'
import { Staff } from '../constants/types/staff'
import { Rehearsal } from '../constants/types/rehearsal'

const MOCK_SCHEDULE: Schedule = {
  '0': {
    date: 'Tue, March 20, 2018',
    start: '7:00PM', end: '10:00PM',
    location: 'Our Lady of Perpetual Help',
    staff: [Staff.Conductor, Staff.Director],
    roles: [
      Role.Aida, Role.Amneris, Role.Radames
    ]
  },
  '1': {
    date: 'Tue, March 20, 2018',
    start: '6:00PM', end: '8:00PM',
    location: 'Epic Security',
    staff: [Staff.AssistantConductor],
    roles: [Role.Chorus]
  },
  '2': {
    date: 'Sat, March 24, 2018',
    start: '1:00PM', end: '6:00PM',
    location: 'Our Lady of Perpetual Help',
    staff: [Staff.Conductor, Staff.Director],
    roles: [Role.Aida, Role.Radames]
  },
  '3': {
    date: 'Wed, March 28, 2018',
    start: '6:00PM', end: '8:00PM',
    location: 'Epic Security',
    staff: [Staff.AssistantConductor],
    roles: [Role.Chorus]
  },
  '4': {
    date: 'Tue, April 3, 2018',
    start: '7:00PM', end: '10:00PM',
    location: 'Our Lady of Perpetual Help',
    staff: [Staff.Conductor, Staff.Director],
    roles: [Role.Aida, Role.Amneris]
  },
  '5': {
    date: 'Fri, April 6, 2018',
    start: '7:00PM', end: '10:00PM',
    location: 'Our Lady of Perpetual Help',
    staff: [Staff.Conductor, Staff.Director],
    roles: [Role.Amneris, Role.Radames]
  },
  '6': {
    date: 'Sat, April 7, 2018',
    start: '1:00PM', end: '6:00PM',
    location: 'Our Lady of Perpetual Help',
    staff: [Staff.Conductor, Staff.Director],
    roles: [Role.Aida, Role.Amonasro, Role.Radames, Role.Amneris, Role.Ramfis]
  },
  '7': {
    date: 'Tue, April 10, 2018',
    start: '7:00PM', end: '10:00',
    location: 'Our Lady of Perpetual Help',
    staff: [Staff.Conductor, Staff.Director],
    roles: [Role.Aida, Role.Radames, Role.Amonasro, Role.Amneris, Role.Ramfis]
  },
  '8': {
    date: 'Wed, April 11, 2018',
    start: '6:00PM', end: '8:00PM',
    location: 'Epic Security',
    staff: [Staff.AssistantConductor],
    roles: [Role.Chorus]
  },
  '9': {
    date: 'Sat, April 14, 2018',
    start: '1:00PM', end: '6:00PM',
    location: 'Our Lady of Perpetual Help',
    staff: [Staff.Conductor, Staff.Director],
    roles: [
      Role.Aida, Role.Amneris, Role.Radames, Role.IlRe,
      Role.Amonasro, Role.Ramfis, Role.MaleChorus, Role.MaleDancers,
      Role.FemaleChorus, Role.FemaleDancers, Role.UnMessagero,
      Role.HighPriestess
    ]
  },
  '10': {
    date: 'Tue, April 17, 2018',
    start: '7:00PM', end: '10:00PM',
    location: 'Our Lady of Perpetual Help',
    staff: [Staff.Conductor, Staff.Director],
    roles: [
      Role.Radames, Role.Amneris, Role.Aida, Role.IlRe,
      Role.UnMessagero, Role.MaleChorus, Role.FemaleChorus,
      Role.FemaleDancers
    ]
  },
  '11': {
    date: 'Wed, April 18, 2018',
    start: '6:00PM', end: '10:00PM',
    location: 'Epic Security',
    roles: [Role.Chorus, Role.UnMessagero],
    staff: [Staff.AssistantConductor]
  },
  '12': {
    date: 'Sat, April 21, 2018',
    start: '1:00PM', end: '7:00PM',
    location: 'Our Lady of Perpetual Help',
    staff: [Staff.Conductor, Staff.Director],
    roles: [Role.Tutti]
  },
  '13': {
    date: 'Tue, April 24, 2018',
    start: '7:00PM', end: '10:00PM',
    location: 'Our Lady of Perpetual Help',
    staff: [Staff.Conductor, Staff.Director],
    roles: [Role.Tutti]
  },
  '14': {
    date: 'Wed, April 25, 2018',
    start: '6:00PM', end: '8:00PM',
    location: 'Epic Security',
    staff: [Staff.AssistantConductor],
    roles: [Role.Chorus]
  },
  '15': {
    date: 'Sat, April 28, 2018',
    start: '10:00AM', end: '10:00PM',
    location: 'Our Lady of Perpetual Help',
    staff: [Staff.Director, Staff.Conductor],
    roles: [Role.Tutti]
  },
  '16': {
    date: 'Tue, May 1, 2018',
    start: '7:00PM', end: '10:00PM',
    location: 'Our Lady of Perpetual Help',
    staff: [Staff.All],
    roles: [Role.Tutti]
  },
  '17': {
    date: 'Thu, May 3, 2018',
    start: '7:00PM', end: '10:00PM',
    location: 'Our Lady of Perpetual Help',
    staff: [Staff.All],
    roles: [Role.Tutti]
  },
  '18': {
    date: 'Fri, May 4, 2018',
    start: '7:00PM', end: '10:00PM',
    location: 'Our Lady of Perpetual Help',
    staff: [Staff.All],
    roles: [Role.Tutti]
  },
  '19': {
    date: 'Sat, May 5, 2018',
    start: '10:00AM', end: '10:00PM',
    location: 'Our Lady of Perpetual Help',
    staff: [Staff.All], roles: [Role.Tutti]
  },
  '20': {
    date: 'Mon, May 7, 2018',
    start: '7:00PM', end: '10:00PM',
    location: 'Our Lady of Perpetual Help',
    staff: [Staff.All], roles: [Role.Tutti]
  },
  '21': {
    date: 'Wed, May 9, 2018',
    start: '7:00PM', end: '10:00PM',
    location: 'Our Lady of Perpetual Help',
    staff: [Staff.All], roles: [Role.Tutti]
  },
  '22': {
    date: 'Thu, May 10, 2018',
    start: '7:00PM', end: '10:00PM',
    location: 'Our Lady of Perpetual Help',
    staff: [Staff.All], roles: [Role.Tutti]
  }
}

export const getSchedule = (): Schedule => MOCK_SCHEDULE

export const getRehearsal = (id: string, schedule: Schedule = MOCK_SCHEDULE): Rehearsal => {
  return schedule[id]
}