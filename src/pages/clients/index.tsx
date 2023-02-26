import { useEffect } from 'react'
import { ClientDetails } from '@/components/Dashboard/Clients/ClientDetails'
import { useSelector } from 'react-redux'
import { useAppDispatch } from '@/redux/store/reduxHooks'
import { getClients } from '@/redux/slices/clientsSlice'
import { selectUserId } from '../../redux/slices/userSlice'
import { useSession, signIn, signOut } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useState } from 'react'

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
    </>
  )
}

export default ClientsList
