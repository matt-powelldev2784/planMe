import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import { Calendar } from '@/components'
import { useRouter } from 'next/router'
import { useAppDispatch, useAppSelector } from '@/redux/store/reduxHooks'
import { getUserId, getUser, selectUsertSlice } from '../../redux/slices/userSlice'
import SignOutButton from '../../components/ui/SignOutButton'

const CalendarPage = () => {
  const { data: session, status } = useSession()
  let router = useRouter()
  const { user_id } = useAppSelector(selectUsertSlice)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (status === 'unauthenticated') {
      router?.push('/')
    }

    if (!user_id) {
      dispatch(getUser())
      dispatch(getUserId())
    }
  }, [session, router, status, dispatch, user_id])

  if (session) {
    return (
      <>
        <Calendar />
        <SignOutButton />
      </>
    )
  }
}

export default CalendarPage
