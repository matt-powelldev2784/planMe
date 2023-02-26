import styled from 'styled-components'
import { NavBar } from '@/components'
import { useDispatch, useSelector } from 'react-redux'
import { selectClients } from '@/redux/slices/clientsSlice'
import { ClientItem } from './ClientItem'
import { PageMenu } from '@/components/ui/pageMenu/PageMenu'

export const ClientDetails = () => {
  const clients = useSelector(selectClients)

  let clientItems
  if (clients) {
    clientItems = clients.map((client) => {
      const { id, name, company_name, add1, add2, post_code } = client
      return (
        <ClientItem
          key={id}
          name={name}
          company_name={company_name}
          add1={add1}
          add2={add2}
          post_code={post_code}
        />
      )
    })
  }

  return (
    <DashboardDiv>
      <NavBar />
      <PageMenu title="Clients List" />
      <ClientsFlexbox>{clientItems}</ClientsFlexbox>
    </DashboardDiv>
  )
}

const DashboardDiv = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  background: var(--bg-primary);
`

const ClientsFlexbox = styled.ol`
  width: 90vw;
  height: auto;
  display: block;
  margin: 1rem auto;
  overflow-x: scroll;
  border: 3px solid green;
`
