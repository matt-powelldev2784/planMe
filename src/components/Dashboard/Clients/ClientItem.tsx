import React from 'react'
import styled from 'styled-components'

export const ClientItem = ({ name, company_name, add1, add2, post_code }) => {
  return (
    <StyledClientContainer>
      {name} {company_name}
    </StyledClientContainer>
  )
}

const StyledClientContainer = styled.li`
  width: 100%;
  background: var(--bg-secondary);
  border: 2px solid blue;
`
