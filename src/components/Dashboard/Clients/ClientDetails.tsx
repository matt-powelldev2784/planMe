import { GetServerSideProps } from 'next'
import styled from 'styled-components'

export const ClientDetails = () => {
  return <FlexboxStyled>Enter</FlexboxStyled>
}

const FlexboxStyled = styled.section`
  width: 100%;
  height: 90%;
  max-width: 20rem;
  max-height: 30rem;
  color: var(--bg-primary);
`
