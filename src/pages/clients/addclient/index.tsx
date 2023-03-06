import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import { AddClient } from '@/components'
import { useRouter } from 'next/router'
import { useAppDispatch, useAppSelector } from '@/redux/store/reduxHooks'
import { getUserId, getUser, selectUserId } from '../../../redux/slices/userSlice'
import SignOutButton from '../../../components/ui/SignOutButton'

export const AddClientPage = () => {
  const { data: session, status } = useSession()
  let router = useRouter()
  const user_id = useAppSelector(selectUserId)
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

  return (
    <>
      <AddClient />
      <SignOutButton />
    </>
  )
}

export default AddClientPage