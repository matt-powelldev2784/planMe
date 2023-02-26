import { useSession, signIn, signOut } from 'next-auth/react'
import { useEffect } from 'react'
import { Dashboard } from '@/components'
import { useRouter } from 'next/router'
import { useState } from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import LogoutIcon from '../../public/logout.svg'
import { selectUserState, selectUserId } from '../redux/slices/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import { getUserId, getUser } from '../redux/slices/userSlice'

export default function DashboardPage() {
  const { data: session, status } = useSession()
  let router = useRouter()
  const [routerCalled, setRouterCalled] = useState(false)
  const user_id = useSelector(selectUserId)
  const dispatch = useDispatch()

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
    dispatch(getUser())
    dispatch(getUserId())
  }, [dispatch])

  const getUserClickHandler = async () => {
    const url = 'http://localhost:3000/api/users/user'
    const res = await fetch(url)
    const json = await res.json()
    console.log('get_user_json', json)
  }

  const getClientsClickHandler = async () => {
    const url = 'http://localhost:3000/api/clients/cle62bmj40000pgd8tf21zcob'
    const res = await fetch(url)
    const json = await res.json()
    console.log('get__clients_json', json)
  }

  const postAddClientClickHandler = async () => {
    console.log('user_id', user_id)

    const url = 'http://localhost:3000/api/clients/client'
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        user_id: user_id,
        name: 'test name',
        company_name: 'test company',
        add1: 'test add1',
        add2: 'test add2',
        post_code: 'test postcode',
      }),
    }

    const res = await fetch(url, requestOptions)
    const json = await res.json()
    console.log('post_add_client_json', json)
  }

  if (session) {
    return (
      <>
        <button onClick={getUserClickHandler}>Get User Api</button>
        <button onClick={postAddClientClickHandler}>Post Add Client Api</button>
        <button onClick={getClientsClickHandler}>Get Clients Api</button>
        <Dashboard />
        <SignOutContainerStyled>
          <ButtonStyled onClick={() => signOut({ callbackUrl: '/' })}>
            <Image src={LogoutIcon} width={30} height={30} alt="Lady in canoe on a lake" />
            <PStyled>Sign Out</PStyled>
          </ButtonStyled>
        </SignOutContainerStyled>
      </>
    )
  }
}

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
