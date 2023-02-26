import React from 'react'
import styled from 'styled-components'
import { NavBar, Calender } from '@/components'

export const Calendar = () => {
  return (
    <StyledDashboardDiv>
      <NavBar />
      <Calender />
    </StyledDashboardDiv>
  )
}

const StyledDashboardDiv = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  background: var(--bg-primary);
`
