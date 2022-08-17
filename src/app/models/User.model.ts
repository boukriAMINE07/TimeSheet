export interface User {
  id: number
  username: string
  email: string
  password: string
  roles: Role[]
  phone:number
}

export interface Role {
  id: number
  name: string
}
