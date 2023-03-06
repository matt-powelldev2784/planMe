import { useSession, signOut } from 'next-auth/react'
import styled from 'styled-components'
import Image from 'next/image'
import LogoutIcon from '../../../public/logout.svg'

const SignOutButton = () => {
  const { data: session, status } = useSession()

  if (session) {
    return (
      <SignOutContainerStyled>
        <ButtonStyled onClick={() => signOut({ callbackUrl: '/' })}>
          <Image src={LogoutIcon} width={30} height={30} alt="Lady in canoe on a lake" />
          <PStyled>Sign Out</PStyled>
        </ButtonStyled>
      </SignOutContainerStyled>
    )
  } else {
    return <></>
  }
}

const SignOutContainerStyled = styled.footer`
  width: 100vw;
  background: var(--bg-primary);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`

const ButtonStyled = styled.button`
  background: none;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
`

const PStyled = styled.p`
  font-size: 1.2rem;
  font-weight: 400;
  color: var(--primary-text);
  margin: 1rem 0.5rem;
  @media only screen and (max-width: 441px) {
    font-size: 1rem;
  }
`

export default SignOutButton
