import React from 'react'
import styled from 'styled-components'
import { NavBar, CalenderItems, PageMenu } from '@/components'
import { menuComponents } from './menuCompnents'

export const Calendar = () => {
  return (
    <StyledDashboardDiv>
      <NavBar />
      <PageMenu title="Calender" reactMenuComponents={menuComponents} />
      <CalenderItems />
    </StyledDashboardDiv>
  )
}

const StyledDashboardDiv = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  background: var(--bg-primary);
`
