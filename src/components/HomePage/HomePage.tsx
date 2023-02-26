import React from 'react'
import styled from 'styled-components'
import { NavBar } from '../../../_trash/NavBar'
import { TitleCard } from './TitleCard'

export const HomePage = () => {
  return (
    <StyledHeroSection>
      <NavBar />
      <StyledLeftSectionFlexbox>
        <TitleCard />
      </StyledLeftSectionFlexbox>
      <StyledRightSectionFlexbox></StyledRightSectionFlexbox>
      <StyledImg src="./homepage_hero_lake_v3.jpg" />
    </StyledHeroSection>
  )
}

const StyledHeroSection = styled.section`
  position: relative;
  width: 100vw;
  height: 100vh;
  background: var(--bg-primary);
`

const StyledLeftSectionFlexbox = styled.div`
  position: absolute;
  width: 50%;
  height: 100%;
  display: flex;
  z-index: 1;
  @media only screen and (max-width: 992px) {
    width: 100%;
  }
`

const StyledRightSectionFlexbox = styled.div`
  position: absolute;
  right: 0;
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  @media only screen and (max-width: 992px) {
    width: 100%;
  }
`

const StyledImg = styled.img`
  position: absolute;
  right: 0;
  width: 56vw;
  height: 100vh;
  text-align: center;
  object-fit: cover;
  clip-path: polygon(25% 0, 100% 0, 100% 100%, 0% 100%);
  @media only screen and (max-width: 992px) {
    width: 100vw;
    clip-path: unset;
  }
`
