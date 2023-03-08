import React from 'react'
import styled from 'styled-components'
import { NavBar, CalenderItems, PageMenu } from '@/components'
import { DateInput } from '@/components/ui/DateInput'
import { MenuButton } from '@/components/ui/MenuButton'

export const Calendar = () => {
  const reactMenuComponents = [
    {
      menuTitle: 'Date Input',
      component: DateInput,
      onClick: () => {
        console.log('clicked')
      },
    },
    {
      menuTitle: 'Date Input',
      component: DateInput,
      onClick: () => {
        console.log('clicked')
      },
    },
    {
      menuTitle: 'Date Input',
      component: DateInput,
      onClick: () => {
        console.log('clicked')
      },
    },
    {
      menuTitle: 'Menu Button',
      component: MenuButton,
      onClick: () => {
        console.log('clicked')
      },
      image: './clock.svg',
    },
  ]

  return (
    <StyledDashboardDiv>
      <NavBar />
      <PageMenu title="Calender" reactMenuComponents={reactMenuComponents} />
      <CalenderItems />
    </StyledDashboardDiv>
  )
}

const StyledDashboardDiv = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  background: var(--bg-primary);
`
