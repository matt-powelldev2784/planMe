import { useSession, signIn, signOut } from 'next-auth/react'
import { Dashboard } from '@/components/Dashboard/_Dashboard/Dashboard'

export default function Login() {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        <Dashboard />
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  )
}
