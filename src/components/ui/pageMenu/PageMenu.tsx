import React, { Fragment, ReactNode } from 'react'
import styled from 'styled-components'

interface MenuItem {
  menuTitle: string
  component: React.FC | null
}

interface PageMenuProps {
  title: string
  menuItems?: MenuItem[]
}

export const PageMenu: React.FC<PageMenuProps> = ({ title, menuItems }) => {
  let menuComponent: ReactNode

  if (menuItems) {
    menuComponent = menuItems.map((menuItem, i) => {
      const { menuTitle } = menuItem
      const Component = menuItem.component

      return (
        <ComponentContainer key={i}>
          <StyledSpan>{menuTitle}</StyledSpan>
          <MenuContainer>{Component && <Component />}</MenuContainer>
        </ComponentContainer>
      )
    })
  }

  return (
    <>
      <StyledMenuFlexbox>
        <StyledH2>{title}</StyledH2>
        <StyledMenuItemsFlexbox>{menuComponent}</StyledMenuItemsFlexbox>
      </StyledMenuFlexbox>
      <StyledHr />
    </>
  )
}

const StyledMenuFlexbox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
  margin-bottom: 0.75rem;
  @media only screen and (max-width: 992px) {
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }
`

const StyledH2 = styled.h2`
  display: inline-block;
  font-size: 2rem;
  min-width: 310px;
  margin-left: 1rem;
  color: var(--primary-text);
  line-height: 2.2rem;
  overflow-y: hidden;
  @media only screen and (max-width: 992px) {
    text-align: center;
    margin-left: 0;
  }
`

const StyledMenuItemsFlexbox = styled.div`
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-right: 2.5rem;
  @media only screen and (max-width: 992px) {
    width: 95vw;
    margin-right: 0rem;
  }
  @media only screen and (max-width: 441px) {
    margin: 0.5rem auto;
    padding: unset;
  }
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
  flex-wrap: wrap;
  min-width: fit-content;
`

const MenuContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
`

const StyledHr = styled.div`
  display: block;
  width: 98vw;
  margin: 0rem auto;
  border-top: 0.1px solid var(--primary-text);
`
