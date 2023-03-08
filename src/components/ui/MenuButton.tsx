import React, { Fragment } from 'react'
import styled from 'styled-components'

interface MenuButtonProps {
  image?: string
}

export const MenuButton: React.FC<MenuButtonProps> = ({ image }) => {
  return (
    <StyledMenuButtonContainer>
      <ImgStyled src={image} />
    </StyledMenuButtonContainer>
  )
}
const StyledMenuButtonContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 1.5rem;
  height: 1.5rem;
`

const ImgStyled = styled.img`
  position: absolute;
  width: 1.5rem;
  height: 1.5rem;
`
