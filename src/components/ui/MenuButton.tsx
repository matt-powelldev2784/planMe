import React, { Fragment } from 'react'
import styled from 'styled-components'

interface MenuButtonProps {
  image?: string
}

export const MenuButton: React.FC<MenuButtonProps> = ({ image }) => {
  return (
    <InputContainerStyled>
      <ImgStyled src={image} />
    </InputContainerStyled>
  )
}
const InputContainerStyled = styled.div`
  position: relative;
  display: block;
  width: 2rem;
  height: 2rem;
`

const ImgStyled = styled.img`
  position: absolute;
  width: 2rem;
  height: 2rem;
`
