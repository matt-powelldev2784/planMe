import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

export interface NavItemProps {
  text: string
  image: string
  link: string
}

export const NavItem = ({ text, image, link }: NavItemProps) => {
  return (
    <Link href={link}>
      <StyledLink>
        <StyledIcon src={image} />
        <StyledP>{text}</StyledP>
      </StyledLink>
    </Link>
  )
}

const StyledLink = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 5rem;
`

const StyledIcon = styled.img`
  width: 1.8rem;
  height: auto;
  margin: 1rem;

  @media only screen and (max-width: 992px) {
    margin: 0.5rem;
  }
`

const StyledP = styled.p`
  font-size: 1.2rem;
  font-weight: 400;
  color: var(--primary-text);
  @media only screen and (max-width: 441px) {
    font-size: 1rem;
  }
`
