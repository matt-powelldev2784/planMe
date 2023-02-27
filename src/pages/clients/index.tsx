import { useEffect, useState } from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import { useSession, signOut } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useAppDispatch, useAppSelector } from '@/redux/store/reduxHooks'
import { getUserId, getUser } from '../../redux/slices/userSlice'
import { getClients } from '@/redux/slices/clientsSlice'
import { selectUserId } from '../../redux/slices/userSlice'
import { ClientDetails } from '@/components'
import LogoutIcon from '../../../public/logout.svg'
import SignOutButton from '@/components/ui/SignOutButton'

const ClientsList = () => {
  const { data: session, status } = useSession()
  const [routerCalled, setRouterCalled] = useState(false)
  let router = useRouter()
  const dispatch = useAppDispatch()
  const user_id = useAppSelector(selectUserId)

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

    if (user_id) dispatch(getClients(user_id))
  }, [session, router, routerCalled, status, dispatch, user_id])

  return (
    <>
      <ClientDetails />
      <SignOutButton />
    </>
  )
}

export default ClientsList

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
