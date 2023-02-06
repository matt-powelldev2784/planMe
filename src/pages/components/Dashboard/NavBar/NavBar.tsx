import React from 'react'
import styled from 'styled-components'
import { NavItems } from './NavItems'

export const NavBar = () => {
  return (
    <NavFlexBoxStyled>
      <LogoFlexboxStyled>
        <LogoImgStyled src="./planMe_logoV2.svg" />
      </LogoFlexboxStyled>
      <LinksFlexBoxStyled>
        <NavItems />
      </LinksFlexBoxStyled>
    </NavFlexBoxStyled>
  )
}

const NavFlexBoxStyled = styled.nav`
  position: relative;
  width: 100vw;
  min-width: 310px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background: var(--bg-primary);
  z-index: 1;

  @media only screen and (max-width: 992px) {
    justify-content: center;
    align-items: center;
    min-width: 320px;
  }
`

const LogoFlexboxStyled = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-left: 2rem;
  @media only screen and (max-width: 992px) {
    margin-left: unset;
  }
`

const LogoImgStyled = styled.img`
  height: 5rem;
  width: auto;
  @media only screen and (max-width: 441px) {
    height: 3.5rem;
  }
`

const LinksFlexBoxStyled = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 3rem;
  margin-right: 5rem;
  @media only screen and (max-width: 992px) {
    width: 100%;
    justify-content: center;
    margin-right: unset;
  }
  @media only screen and (max-width: 441px) {
    gap: 0.25rem;
  }
`
