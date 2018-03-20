import { Role } from './roles'
import { Staff } from './staff'

export interface Rehearsal {
  date: string
  start: string
  end: string
  location: string
  staff: Staff[]
  roles: Role[]
}