import { useEffect } from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import { ClientDetails } from '@/components/Dashboard/Clients/ClientDetails'
import { useSelector } from 'react-redux'
import { useAppDispatch } from '@/redux/store/reduxHooks'
import { getClients } from '@/redux/slices/clientsSlice'
import { selectUserId } from '../../redux/slices/userSlice'
import { useSession, signIn, signOut } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useState } from 'react'
import LogoutIcon from '../../../public/logout.svg'

const ClientsList = () => {
  const { data: session, status } = useSession()
  const [routerCalled, setRouterCalled] = useState(false)
  let router = useRouter()
  const dispatch = useAppDispatch()
  const user_id = useSelector(selectUserId)

  useEffect(() => {
    const redirectIfNoSession = () => {
      if (status === 'unauthenticated') {
        router?.push('/')
        setRouterCalled(true)
      }
    }
    redirectIfNoSession()
  }, [session, router, routerCalled, status])

  useEffect(() => {
    if (user_id) dispatch(getClients(user_id))
  }, [dispatch, user_id])

  return (
    <>
      <ClientDetails />
      <SignOutContainerStyled>
        <ButtonStyled onClick={() => signOut({ callbackUrl: '/' })}>
          <Image src={LogoutIcon} width={30} height={30} alt="Lady in canoe on a lake" />
          <PStyled>Sign Out</PStyled>
        </ButtonStyled>
      </SignOutContainerStyled>
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
