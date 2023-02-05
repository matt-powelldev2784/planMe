import React from 'react'
import styled from 'styled-components'

export const HomeCard = () => {
  return (
    <HomeCardConatiner>
      <IconsFlexbox>
        <IconStyled src="./clock.svg" />
        <IconStyled src="./phone.svg" />
        <IconStyled src="./plus.svg" />
      </IconsFlexbox>
      <PStyled>Save time and get more done</PStyled>
      <PStyled>Manage and organise better</PStyled>
      <PStyled>Schedule jobs on a smartphone</PStyled>
    </HomeCardConatiner>
  )
}

const HomeCardConatiner = styled.div`
  padding: 1rem;
`

const IconsFlexbox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const IconStyled = styled.img`
  width: 3rem;
  height: auto;
  margin: 1rem;
`

const PStyled = styled.p`
  width: 100%;
  font-size: 1.2rem;
  text-align: center;
  color: var(--secondary-text);
  @media only screen and (max-width: 441px) {
    font-size: 1rem;
  }
`
