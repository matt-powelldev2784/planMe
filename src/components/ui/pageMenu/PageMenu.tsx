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
          <MenuContainer>
            <Component />
          </MenuContainer>
        </ComponentContainer>
      )
    })

    // const componentsArray = components.map((component, i) => {
    //   return <component key={i} />
    // })

    // console.log('componentsArray', componentsArray)
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
