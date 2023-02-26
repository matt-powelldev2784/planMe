import React from 'react'
import styled from 'styled-components'

export const PageMenuItem = (menuTitle, menuSelector) => {
  return (
    <ComponnetContainer>
      <StyledSpan>{menuTitle}</StyledSpan>
      <MenuContainer>{component}</MenuContainer>
    </ComponnetContainer>
  )
}

const StyledSpan = styled.span`
  font-size: 1rem;
  font-weight: 400;
  color: var(--primary-text);
  padding: 0 0.5rem;
`
