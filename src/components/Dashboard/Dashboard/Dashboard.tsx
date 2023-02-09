import React, { Fragment } from 'react'
import styled from 'styled-components'
import { NavBar } from '../NavBar/NavBar'
import { Calender } from '../Calender/Calender'

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
