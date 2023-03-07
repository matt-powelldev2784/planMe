import React from 'react'
import styled from 'styled-components'
import { NavBar, CalenderItems, PageMenu } from '@/components'
import { DateInput } from '@/components/ui/DateInput'

export const Calendar = () => {
  const menuItems = [
    { menuTitle: 'Date Input', component: DateInput },
    { menuTitle: 'Date Input', component: DateInput },
  ]
  // const menuItems = menuComponents.map((Component, i) => {
  //   return <Component key={i} />
  // })

  return (
    <StyledDashboardDiv>
      <NavBar />
      <PageMenu title="Calander" menuItems={menuItems} />
      <CalenderItems />
    </StyledDashboardDiv>
  )
}

const StyledDashboardDiv = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  background: var(--bg-primary);
`
