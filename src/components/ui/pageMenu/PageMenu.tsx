import React, { Fragment, ReactNode } from 'react'
import styled from 'styled-components'

interface reactMenuComponents {
  menuTitle: string
  component: React.FC<{ image?: string }> | null
  onClick: () => any
  image?: string
}

interface PageMenuProps {
  title: string
  reactMenuComponents?: reactMenuComponents[]
}

export const PageMenu: React.FC<PageMenuProps> = ({
  title,
  reactMenuComponents,
}) => {
  const menuComponents: ReactNode = reactMenuComponents?.map(
    (menuCompeent, i) => {
      const { menuTitle, onClick, image } = menuCompeent
      const Component = menuCompeent.component

      return (
        <ComponentContainer key={i} onClick={onClick}>
          <StyledSpan>{menuTitle}</StyledSpan>
          <MenuContainer>
            {image && Component && <Component image={image} />}
            {!image && Component && <Component />}
          </MenuContainer>
        </ComponentContainer>
      )
    }
  )

  return (
    <>
      <StyledMenuFlexbox>
        <StyledH2>{title}</StyledH2>
        <StyledMenuItemsFlexbox>{menuComponents}</StyledMenuItemsFlexbox>
      </StyledMenuFlexbox>
      <StyledHr />
    </>
  )
}

const StyledMenuFlexbox = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
  margin-bottom: 0.75rem;
  @media only screen and (max-width: 992px) {
    flex-direction: column-reverse;
    justify-content: center;
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
