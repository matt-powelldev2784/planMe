import React from 'react'
import styled from 'styled-components'

export const JobItem = () => {
  return (
    <JobItemFlexbox>
      <DetailsFlexbox>
        <PStyled>JobItem Client</PStyled>
        <PStyled>JobItem Job</PStyled>
      </DetailsFlexbox>
      <ImgStyled src="./plus.svg"></ImgStyled>
    </JobItemFlexbox>
  )
}

const JobItemFlexbox = styled.li`
  position: relative;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.25rem 0.25rem;
  padding: 0 0.5rem;
  border-radius: 0.6rem;
  background: var(--bg-secondary);
`

const DetailsFlexbox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 85%;
`

const PStyled = styled.p`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  font-size: 0.9rem;
  font-weight: 400;
  width: 100%;
  height: 1.5rem;
  white-space: nowrap;
  overflow: hidden;
`

const ImgStyled = styled.img`
  width: 15%;
  height: 1.5rem;
`
