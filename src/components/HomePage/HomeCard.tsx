import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import clockSvg from 'public/clock.svg'
import PhoneSvg from 'public/phone.svg'
import PlusSvg from 'public/plus_yellow.svg'

export const HomeCard = () => {
  return (
    <StyledHomeCardConatiner>
      <StyledIconsFlexbox>
        <Image src={clockSvg} alt="Clock Icon" />
        <Image src={PhoneSvg} alt="Mobile Phone Icon" />
        <Image src={PlusSvg} alt="Plus Symbol Icon" />
      </StyledIconsFlexbox>
      <StyledP>Save time and get more done</StyledP>
      <StyledP>Manage and organise better</StyledP>
      <StyledP>Schedule jobs on a smartphone</StyledP>
    </StyledHomeCardConatiner>
  )
}

const StyledHomeCardConatiner = styled.div`
  padding: 1rem;
`

const StyledIconsFlexbox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
`

const StyledP = styled.p`
  width: 100%;
  font-size: 1.2rem;
  text-align: center;
  color: var(--secondary-text);
  @media only screen and (max-width: 441px) {
    font-size: 1rem;
  }
`
