import { ClientDetails } from '@/components/Dashboard/Clients/ClientDetails'
import { GetServerSideProps } from 'next'
import { getServerSession } from 'next-auth/next'
import { getUser } from '@/redux/slices/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import { authOptions } from '../api/auth/[...nextauth]'

const ClientsList = ({ clients }) => {
  const dispatch = useDispatch()

  if (clients) {
    console.log('clients', clients)
  }

  return (
    <>
      <ClientDetails />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = await getServerSession(req, res, authOptions)
  console.log('session', session)
  if (session) {
    const url = 'http://localhost:3000/api/clients/getClients'
    const res = await fetch(url)
    console.log('res', res)
    const clients = await res.json()
  }

  return {
    props: {},
  }
}

export default ClientsList
