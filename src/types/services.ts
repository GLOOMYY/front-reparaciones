export type Root = Service[]

export interface Service {
  id: number
  client: Client
  service_type: ServiceType
  status: Status
  description: string
  cost: string
  created_at: string
  updated_at: string
  user: number
}

export interface Client {
  id: number
  name: string
  email: string
}

export interface ServiceType {
  id: number
  name: string
}

export interface Status {
  id: number
  name: string
}
