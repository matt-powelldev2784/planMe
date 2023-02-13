import { useSession, signIn, signOut } from 'next-auth/react'
import { useEffect } from 'react'
import { Dashboard } from '@/components'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { Session } from 'next-auth/core/types'

export default function DashboardPage() {
  const { data: session, status } = useSession()
  let router = useRouter()
  const [routerCalled, setRouterCalled] = useState(false)

  useEffect(() => {
    console.log('session', session)
    console.log('status', status)

    const redirectIfNoSession = () => {
      if (status === 'unauthenticated') {
        router?.push('/')
        setRouterCalled(true)
      }
    }
    redirectIfNoSession()
  }, [session, router, routerCalled, status])

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
