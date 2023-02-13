import { useSession, signIn, signOut } from 'next-auth/react'
import { useEffect } from 'react'
import { Dashboard } from '@/components'
import { useRouter } from 'next/router'
import { useState } from 'react'

export default function DashboardPage() {
  const { data: session, loading } = useSession()
  let router = useRouter()
  const [routerCalled, setRouterCalled] = useState(false)

  useEffect(() => {
    const redirectIfNoSession = () => {
      if (!routerCalled && !loading && !session) {
        router?.push('/')
        setRouterCalled(true)
      }
    }
    redirectIfNoSession()
  }, [session, loading, router, routerCalled])

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
