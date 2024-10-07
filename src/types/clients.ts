export type Root = Client[]

export interface Client {
  id?: number
  name: string
  email?: string
  address?: string
  phone?: string
  created_at?: string
  updated_at?: string
  user: number
}
