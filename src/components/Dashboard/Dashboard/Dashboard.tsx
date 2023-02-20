import React from 'react'
import styled from 'styled-components'
import { NavBar, Calender } from '@/components'

export const Dashboard = () => {
  return (
    <DashboardDiv>
      <NavBar />
      <Calender />
    </DashboardDiv>
  )
}

const DashboardDiv = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  background: var(--bg-primary);
`
