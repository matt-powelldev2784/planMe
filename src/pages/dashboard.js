import { useSession, signIn, signOut } from 'next-auth/react'
import { Dashboard } from '@/components'

export default function DashboardPage() {
  const { data: session } = useSession()

  if (session) {
    return (
      <>
        <Dashboard />
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut({ callbackUrl: '/' })}>Sign out</button>
      </>
    )
  }
}
