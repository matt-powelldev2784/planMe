export interface User {
  user: {
    name: String
    email: String
    image: String
  } | null
}

export interface apiError {
  success: Boolean
  status: number | string
  errors: []
}
