import React from 'react'
import styled from 'styled-components'

export const NavBar = () => {
  return (
    <NavFlexBoxStyled>
      <LinksFlexBoxStyled>
        <LinkStyled>Log In</LinkStyled>
        <LinkStyled>Sign Up</LinkStyled>
      </LinksFlexBoxStyled>
    </NavFlexBoxStyled>
  )
}

const NavFlexBoxStyled = styled.nav`
  position: absolute;
  width: 90vw;
  height: 6rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: flex-end;
  align-items: center;
  z-index: 1;
  min-width: 300px;
  @media only screen and (max-width: 992px) {
    justify-content: center;
  }
`

const LinksFlexBoxStyled = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 3rem;
`

const LinkStyled = styled.a`
  font-size: 1.2rem;
  font-weight: 400;
  color: var(--primary-text);
`
