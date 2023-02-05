import React, { Fragment } from 'react'
import styled from 'styled-components'

export const DateInput = () => {
  return (
    <InputContainerStyled>
      <DateInputStyled type="date" />
      <ImgStyled src="./date_picker.svg" />
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

const DateInputStyled = styled.input`
  position: absolute;
  opacity: 0;
  width: 2rem;
  height: 2rem;
  z-index: 1;
`
