import React from 'react'
import { signIn } from 'next-auth/react'

export const Login = () => {
  return (
    <div>
      <button
        onClick={() => {
          signIn()
        }}
      >
        Login
      </button>
    </div>
  )
}
