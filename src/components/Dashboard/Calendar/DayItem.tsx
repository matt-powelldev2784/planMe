import React, { FC } from 'react'
import styled from 'styled-components'
import { JobItem } from './JobItem'

export interface CalenderDayItemProps {
  children: any
}

export const DayItem = () => {
  return (
    <StyledCalenderDayGridItem>
      <StyledDateP>1st January 2023</StyledDateP>
      <StyledTimeItemConatiner>
        <JobItem />
        <JobItem />
        <JobItem />
        <JobItem />
        <JobItem />
        <JobItem />
        <JobItem />
        <JobItem />
        <JobItem />
        <JobItem />
      </StyledTimeItemConatiner>
    </StyledCalenderDayGridItem>
  )
}

const StyledCalenderDayGridItem = styled.li`
  width: 100%;
  height: 100%;
  min-width: 10rem;
  height: 35rem;
  border-radius: 1rem;
  border: 3px solid var(--bg-secondary);
  overflow: hidden;
  @media only screen and (max-width: 992px) {
    min-width: 270px;
  }
`
const StyledDateP = styled.p`
  text-align: center;
  padding: 0.5rem;
  font-weight: 700;
  color: var(--primary-text);
  background: var(--bg-secondary);
`

const StyledTimeItemConatiner = styled.ol`
  width: 100%;
  height: 100%;
  padding-bottom: 2.5rem;
`
