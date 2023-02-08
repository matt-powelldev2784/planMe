import { useSession, signIn, signOut } from 'next-auth/react'
import { Dashboard } from '@/components/Dashboard/_Dashboard/Dashboard'
import { HomePage } from '@/components/HomePage/HomePage'
import Index from './index'

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
