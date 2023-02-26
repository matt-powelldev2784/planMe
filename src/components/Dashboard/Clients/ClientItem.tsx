import React from 'react'
import styled from 'styled-components'

export const ClientItem = ({ name, company_name, add1, add2, post_code }) => {
  return (
    <StyledClientContainer>
      <StyledButtonFlexbox>
        <StyledImg src="./plus.svg"></StyledImg>
      </StyledButtonFlexbox>
      <StyledClientFlexbox>
        <StyledPrimaryField>{name}</StyledPrimaryField>
        <StyledPrimaryField>{company_name}</StyledPrimaryField>
        <StyledSecondaryField>{add1}</StyledSecondaryField>
        <StyledSecondaryField>{add2}</StyledSecondaryField>
        <StyledSecondaryField>{post_code}</StyledSecondaryField>
      </StyledClientFlexbox>
    </StyledClientContainer>
  )
}

const StyledClientContainer = styled.li`
  width: 98%;
  height: 3rem;
  background: var(--bg-secondary);
  border-radius: 1rem;
  margin: 0.25rem;
`

const StyledButtonFlexbox = styled.li`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 5%;
  min-width: 3rem;
  height: 100%;
`

const StyledImg = styled.img`
  height: 1.3rem;
  width: auto;
`
const StyledClientFlexbox = styled.li`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 100%;
  transform: translateY(-0.2rem);
  @media only screen and (max-width: 992px) {
    width: 80%;
    min-width: 200px;
  }
`

const StyledTitle = styled.h2``

const StyledPrimaryField = styled.div`
  display: inline-block;
  width: 20%;
  margin: 0.25rem 0.1rem;
  font-weight: 400;

  @media only screen and (max-width: 992px) {
    display: inline-block;
    width: 50%;
  }
`

const StyledSecondaryField = styled.div`
  display: inline-block;
  width: 20%;
  margin: 0.25rem 0.1rem;
  font-weight: 400;
  @media only screen and (max-width: 992px) {
    display: none;
  }
`
