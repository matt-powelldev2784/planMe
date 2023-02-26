import React from 'react'
import styled from 'styled-components'
import { HomeCard } from './HomeCard'
import Image from 'next/image'
import PlanMeLogo from 'public/planMe_logoV2.svg'

export const TitleCard = () => {
  return (
    <StyledTitleCardFlexbox>
      <StyledHomeTextContainer>
        <StyledPlanMeLogoContainer>
          <Image src={PlanMeLogo} fill alt="PlanMe Logo" />
        </StyledPlanMeLogoContainer>
        <StyledHomePageH1>Schedule Jobs From Anywhere!</StyledHomePageH1>
        <HomeCard />
      </StyledHomeTextContainer>
    </StyledTitleCardFlexbox>
  )
}

const StyledTitleCardFlexbox = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const StyledPlanMeLogoContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 22rem;
  height: 5rem;
  min-width: 280px;
  @media only screen and (max-width: 992px) {
    width: clamp(18rem, 40vw, 40rem);
  }
  @media only screen and (max-width: 441px) {
    width: clamp(15rem, 40vw, 40rem);
  }
`

const StyledHomeTextContainer = styled.div`
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

const StyledHomePageH1 = styled.h1`
  font-size: clamp(0.9rem, 8vw, 1.2rem);
  font-weight: 700;
  text-align: center;
  color: #0e2850;
  max-width: 22rem;
`
