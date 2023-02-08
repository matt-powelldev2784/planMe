import type { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next'
import { getProviders, signIn } from 'next-auth/react'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '../api/auth/[...nextauth]'
import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import { TitleCard } from '@/components/HomePage/TitleCard'

export default function SignIn({ providers }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const LoginProviders =
    providers &&
    Object.values(providers).map((provider) => (
      <LinkStyled key={provider.name} onClick={() => signIn(provider.id)}>
        Log In
      </LinkStyled>
    ))

  return (
    <HeroSectionStyled>
      <NavFlexBoxStyled>
        <LinksFlexBoxStyled>
          {LoginProviders}
          <LinkStyled>Sign Up</LinkStyled>
        </LinksFlexBoxStyled>
      </NavFlexBoxStyled>

      <LeftSectionFlexboxStyled>
        <TitleCard />
      </LeftSectionFlexboxStyled>

      <RightSectionFlexboxStyled>
        <ImageContainerStyled>
          <Image
            src="/homepage_hero_lake_v3.jpg"
            fill
            style={{ objectFit: 'cover' }}
            alt="Lady in canoe on a lake"
          />
        </ImageContainerStyled>
      </RightSectionFlexboxStyled>
    </HeroSectionStyled>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getServerSession(context.req, context.res, authOptions)

  // If the user is already logged in, redirect.
  // Note: Make sure not to redirect to the same page
  // To avoid an infinite loop!
  if (session) {
    return { redirect: { destination: '/' } }
  }

  const providers = await getProviders()
  console.log('providers', providers)

  return {
    props: { providers: Object.values(providers) ?? [] },
  }
}

const NavFlexBoxStyled = styled.nav`
  position: absolute;
  width: 90vw;
  height: auto;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: flex-end;
  align-items: center;
  min-width: 300px;
  z-index: 2;
  @media only screen and (max-width: 992px) {
    justify-content: center;
  }
`

const LinksFlexBoxStyled = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 3rem;
  padding-top: 2rem;
  @media only screen and (max-width: 992px) {
    width: 100vw;
    justify-content: center;
    flex-wrap: wrap;
    gap: 3rem;
  }
`

const LinkStyled = styled.a`
  font-size: 1.2rem;
  font-weight: 400;
  color: var(--primary-text);
  max-width: 8rem;
  text-align: center;
  cursor: pointer;
`

const HeroSectionStyled = styled.section`
  position: relative;
  width: 100vw;
  height: 100vh;
  background: var(--bg-primary);
`

const LeftSectionFlexboxStyled = styled.div`
  position: absolute;
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  @media only screen and (max-width: 992px) {
    width: 100%;
  }
`

const TitleCardContainerStyled = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: nowrap;
  padding: 3rem;
  border-radius: 1rem;
  min-width: 300px;
  background: var(--bg-primary);
  @media only screen and (max-width: 441px) {
    padding: 3rem 0rem;
    width: 90vw;
  }
`

const HomePageH1 = styled.h1`
  font-size: clamp(0.9rem, 8vw, 1.2rem);
  font-weight: 700;
  text-align: center;
  color: #0e2850;
  width: 80%;
  min-width: 280px;
`

const PlanMeLogoContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 26rem;
  height: 7rem;
  min-width: 280px;
  @media only screen and (max-width: 992px) {
    width: clamp(18rem, 40vw, 40rem);
  }
  @media only screen and (max-width: 441px) {
    width: clamp(15rem, 40vw, 40rem);
  }
`

const RightSectionFlexboxStyled = styled.div`
  position: absolute;
  right: 0;
  width: 56%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 992px) {
    width: 100%;
  }
`
const ImageContainerStyled = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  right: 0;
  width: 56vw;
  height: 100vh;
  text-align: center;
  object-fit: cover;
  clip-path: polygon(25% 0, 100% 0, 100% 100%, 0% 100%);
  @media only screen and (max-width: 992px) {
    width: 100vw;
    clip-path: unset;
  }
`