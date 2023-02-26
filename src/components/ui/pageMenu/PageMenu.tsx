import React, { Fragment, ReactNode } from 'react'
import styled from 'styled-components'

interface MenuItem {
  menuTitle: string
  component: React.FC | null
}

interface PageMenuProps {
  title: string
  menuItem?: MenuItem
}

export const PageMenu: React.FC<PageMenuProps> = ({ title, menuItem }) => {
  let menuComponent: ReactNode
  if (menuItem) {
    const { menuTitle, component: Component } = menuItem
    menuComponent = (
      <ComponentContainer>
        <StyledSpan>{menuTitle}</StyledSpan>
        <MenuContainer>{Component && <Component />}</MenuContainer>
      </ComponentContainer>
    )
  }

  return (
    <Fragment>
      <FlexboxStyled>
        <StyledH2>{title}</StyledH2>
        {menuComponent}
      </FlexboxStyled>
      <StyledHr />
    </Fragment>
  )
}

const FlexboxStyled = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 100vw;
  min-width: 310px;
  padding: 0 2rem;
  margin: 1rem auto;
  @media only screen and (max-width: 441px) {
    flex-direction: column;
    margin: 0.5rem auto;
    padding: unset;
  }
`

const StyledH2 = styled.h2`
  font-size: 2rem;
  color: var(--primary-text);
`

const StyledSpan = styled.span`
  font-size: 1rem;
  font-weight: 400;
  color: var(--primary-text);
  padding: 0 0.5rem;
`

const ComponentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
`

const MenuContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
`

const StyledHr = styled.div`
  width: 98vw;
  margin: 0 auto;
  border-top: 0.1px solid var(--primary-text);
`
