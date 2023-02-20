import { GetServerSideProps } from 'next'
import styled from 'styled-components'

export const ClientDetails = () => {
  return <FlexboxStyled>Enter1</FlexboxStyled>
}

const FlexboxStyled = styled.section`
  min-width: 100vw;
  min-height: 100vh;
  height: 90%;
  color: var(--primary-text);
  background: var(--bg-primary);
  border: 3px solid green;
`
