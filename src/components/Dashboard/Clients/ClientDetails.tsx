import styled from 'styled-components'
import { NavBar, Calender } from '@/components'

export const ClientDetails = () => {
  return (
    <DashboardDiv>
      <NavBar />
      Enter1
    </DashboardDiv>
  )
}

const DashboardDiv = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  background: var(--bg-primary);
`

const FlexboxStyled = styled.section`
  min-width: 100vw;
  min-height: 100vh;
  height: 90%;
  color: var(--primary-text);
  background: var(--bg-primary);
  border: 3px solid green;
`
