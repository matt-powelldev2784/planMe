export interface Client {
  id: string
  name: string
  company_name: string
  add1: string
  add2: string
  post_code: string
  user_id: string
}

export interface ClientMinusId {
  name: string
  company_name: string
  add1: string
  add2: string
  post_code: string
  user_id: string | null
}

export interface ClientMinusIdAndUserId {
  name: string
  company_name: string
  add1: string
  add2: string
  post_code: string
}

export interface UserAndClientId {
  user_id: string
  client_id: string
}

export interface UserId {
  user_id: string
}
