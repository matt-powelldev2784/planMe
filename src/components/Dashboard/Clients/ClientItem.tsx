import React from 'react'
import styled from 'styled-components'

export const ClientItem = ({ name, company_name, add1, add2, post_code }) => {
  return (
    <ClientContainer>
      {name} {company_name}
    </ClientContainer>
  )
}

const ClientContainer = styled.li`
  width: 100%;
  background: var(--bg-secondary);
  border: 2px solid blue;
`
