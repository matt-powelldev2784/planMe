import React from 'react'
import styled from 'styled-components'
import { DayItem } from './DayItem'
import { CalenderMenu } from './CalenderMenu'

export const Calender = () => {
  return (
    <CalenderSectionStyled>
      <CalenderMenu />
      <CalenderGrid>
        <DayItem />
        <DayItem />
        <DayItem />
        <DayItem />
        <DayItem />
      </CalenderGrid>
    </CalenderSectionStyled>
  )
}

const CalenderSectionStyled = styled.section`
  position: relative;
  width: 100vw;
  min-height: 100%;
`
const CalenderGrid = styled.ol`
  width: 98vw;
  height: auto;
  display: grid;
  grid-template-columns: repeat(5, minmax(10rem, 30rem));
  grid-gap: 1rem;
  margin: 1rem auto;
  overflow-x: scroll;
  @media only screen and (max-width: 992px) {
    display: flex;
    flex-direction: column;
    width: 90vw;
    gap: 2rem;
  }
`
