import { RehearsalDetails } from '../constants/types'

const RehearsalDetailsMap: { [id: string]: RehearsalDetails } = {
  '0': {
    date: 'Tue, March 20, 2018',
    location: 'Our Lady of Perpetual Help',
    start: '7:00PM', end: '10:00PM',
    staff: ['@Conductor', '@Director'],
    roles: ['@Aida', '@Amneris', '@Radames']
  },
  '1': {
    date: 'Tue, March 20, 2018',
    location: 'Our Lady of Perpetual Help',
    start: '6:00PM', end: '8:00PM',
    staff: ['@Assistant Conductor'],
    roles: ['@Chorus']
  },
  '2': {
    date: 'Sat, March 24, 2018',
    location: 'Our Lady of Perpetual Help',
    start: '1:00PM', end: '6:00PM',
    staff: ['@Conductor', '@Director'],
    roles: ['@Aida', '@Radames']
  },
  '3': {
    date: 'Wed, March 28, 2018',
    location: 'Epic Security Building',
    start: '6:00PM', end: '8:00PM',
    staff: ['@Assistant Conductor'],
    roles: ['@Messenger', '@Chorus']
  }
}

export const getRehearsalDetailsMap = () => RehearsalDetailsMap