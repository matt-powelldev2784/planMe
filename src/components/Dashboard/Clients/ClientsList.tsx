import styled from 'styled-components'
import { useAppSelector } from '@/redux/store/reduxHooks'
import {
  selectClientSlice,
  setSingleClientId,
} from '@/redux/slices/clientsSlice'
import { ClientItem } from './ClientItem'
import { PageMenu, NavBar } from '@/components'
import { menuComponents } from './menuComponents'

export const ClientsList = () => {
  const { clientsList } = useAppSelector(selectClientSlice)

  const clientItems = clientsList?.map((client) => {
    const { id, name, company_name, add1, add2, post_code } = client
    return (
      <ClientItem
        key={id}
        id={id}
        name={name}
        company_name={company_name}
        add1={add1}
        add2={add2}
        post_code={post_code}
      />
    )
  })

  return (
    <StyledDashboardDiv>
      <NavBar />
      <PageMenu title="Clients List" reactMenuComponents={menuComponents} />
      <StyledClientsFlexbox>{clientItems}</StyledClientsFlexbox>
    </StyledDashboardDiv>
  )
}

const StyledDashboardDiv = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  background: var(--bg-primary);
`

const StyledClientsFlexbox = styled.ol`
  width: 90vw;
  height: auto;
  display: block;
  margin: 1rem auto;
  @media only screen and (max-width: 992px) {
    width: 97vw;
    min-width: 300px;
  }
`
