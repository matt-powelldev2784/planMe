import React from 'react'
import styled from 'styled-components'
import { NavBar, CalenderItems, PageMenu } from '@/components'
import { DateInput } from '@/components/ui/DateInput'

export const Calendar = () => {
  return (
    <StyledDashboardDiv>
      <NavBar />
      <PageMenu title="Calander" menuItem={{ menuTitle: 'Date Selector', component: DateInput }} />
      <CalenderItems />
    </StyledDashboardDiv>
  )
}

const StyledDashboardDiv = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  background: var(--bg-primary);
`
