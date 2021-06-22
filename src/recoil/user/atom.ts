import { atom } from 'recoil'

export interface User {
  name: string
  email: string
  accessToken: string
}

export const userAtom = atom<User>({
  key: 'userAtom',
  default: {
    name: '',
    email: '',
    accessToken: '',
  },
})
