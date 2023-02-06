import React from 'react'
import styled from 'styled-components'
import { HomeCard } from './HomeCard'

export const TitleCard = () => {
  return (
    <TitleCardFlexbox>
      <HomeTextContainer>
        <PlanMeLogoImg src="./planMe_logov2.svg" alt="PlanMe Logo" />
        <HomePageH1>Schedule Jobs From Anywhere!</HomePageH1>
        <HomeCard />
      </HomeTextContainer>
    </TitleCardFlexbox>
  )
}

const TitleCardFlexbox = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const PlanMeLogoImg = styled.img`
  width: 26rem;
  height: auto;
  @media only screen and (max-width: 992px) {
    width: clamp(18rem, 40vw, 40rem);
  }
  @media only screen and (max-width: 441px) {
    width: clamp(16rem, 40vw, 40rem);
  }
`

const HomeTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem;
  border-radius: 1rem;
  background: var(--bg-primary);
  min-width: 300px;
  @media only screen and (max-width: 992px) {
    padding: 2rem;
  }
  @media only screen and (max-width: 441px) {
    width: 90vw;
  }
`

const HomePageH1 = styled.h1`
  font-size: clamp(0.9rem, 8vw, 1.2rem);
  font-weight: 700;
  text-align: center;
  color: #0e2850;
  max-width: 22rem;
`
