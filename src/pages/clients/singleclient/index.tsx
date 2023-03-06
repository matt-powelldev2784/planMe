import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useSession, signOut } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useAppDispatch, useAppSelector } from '@/redux/store/reduxHooks'
import { getUserId, getUser } from '../../../redux/slices/userSlice'
import { getClient, selectSingleClientId, selectClient, setSingleClientId } from '@/redux/slices/clientsSlice'
import { selectUserId } from '../../../redux/slices/userSlice'
import { SingleClientDetail } from '@/components'
import SignOutButton from '@/components/ui/SignOutButton'

const SingleClientPage = () => {
  const { data: session, status } = useSession()
  let router = useRouter()
  const dispatch = useAppDispatch()
  const user_id = useAppSelector(selectUserId)
  const singleClientId = useAppSelector(selectSingleClientId)

  useEffect(() => {
    if (status === 'unauthenticated') {
      router?.push('/')
    }

    const singleClientIdFromSessionStorage = sessionStorage.getItem('setSingleClientId')
    dispatch(setSingleClientId(singleClientIdFromSessionStorage))

    if (!user_id) {
      dispatch(getUser())
      dispatch(getUserId())
    }

    if (user_id && singleClientId) {
      dispatch(getClient({ user_id: user_id, client_id: singleClientId }))
    }
  }, [session, router, status, dispatch, user_id, singleClientId])

  return (
    <>
      <SingleClientDetail />
      <SignOutButton />
    </>
  )
}

export default SingleClientPage

const SignOutContainerStyled = styled.footer`
  width: 100vw;
  background: var(--bg-primary);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`

const ButtonStyled = styled.button`
  background: none;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
`

const PStyled = styled.p`
  font-size: 1.2rem;
  font-weight: 400;
  color: var(--primary-text);
  margin: 1rem 0.5rem;
  @media only screen and (max-width: 441px) {
    font-size: 1rem;
  }
`
