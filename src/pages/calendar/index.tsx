import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import { Calendar } from '@/components'
import { useRouter } from 'next/router'
import { selectUserId } from '../../redux/slices/userSlice'
import { useAppDispatch, useAppSelector } from '@/redux/store/reduxHooks'
import { getUserId, getUser } from '../../redux/slices/userSlice'
import SignOutButton from '../../components/ui/SignOutButton'

export default function CalendarPage() {
  const { data: session, status } = useSession()
  let router = useRouter()
  const [routerCalled, setRouterCalled] = useState(false)
  const user_id = useAppSelector(selectUserId)
  const dispatch = useAppDispatch()

  useEffect(() => {
    const redirectIfNoSession = () => {
      if (status === 'unauthenticated') {
        router?.push('/')
        setRouterCalled(true)
      }
    }
    redirectIfNoSession()

    if (!user_id) {
      dispatch(getUser())
      dispatch(getUserId())
    }
  }, [session, router, routerCalled, status, dispatch, user_id])

  if (session) {
    return (
      <>
        <Calendar />
        <SignOutButton />
      </>
    )
  }
}
