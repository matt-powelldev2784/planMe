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

const DateInputStyled = styled.input`
  position: absolute;
  opacity: 0;
  width: 1.5rem;
  height: 1.5rem;
  z-index: 1;
`
