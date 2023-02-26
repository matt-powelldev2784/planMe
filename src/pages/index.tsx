import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import type { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next'
import { getProviders, signIn } from 'next-auth/react'
import { getServerSession } from 'next-auth/next'
import { authOptions } from './api/auth/[...nextauth]'

import { TitleCard } from '@/components'

export default function Index({ providers }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const LoginProviders =
    providers &&
    Object.values(providers).map((provider) => (
      <StyledLink key={provider.name} onClick={() => signIn(provider.id)}>
        Log In
      </StyledLink>
    ))

  return (
    <StyledHeroSection>
      <StyledNavFlexBox>
        <StyledLinksFlexBox>
          {LoginProviders}
          <StyledLink>Sign Up</StyledLink>
        </StyledLinksFlexBox>
      </StyledNavFlexBox>

      <StyledLeftSectionFlexbox>
        <TitleCard />
      </StyledLeftSectionFlexbox>

      <StyledRightSectionFlexbox>
        <StyledImageContainer>
          <Image
            src="/homepage_hero_lake_v3.jpg"
            fill
            style={{ objectFit: 'cover' }}
            alt="Lady in canoe on a lake"
          />
        </StyledImageContainer>
      </StyledRightSectionFlexbox>
    </StyledHeroSection>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getServerSession(context.req, context.res, authOptions)

  if (session) {
    return { redirect: { destination: '/calendar' } }
  }

  const providers = await getProviders()

  return {
    props: { providers: (providers && Object.values(providers)) ?? [] },
  }
}

const StyledHeroSection = styled.section`
  position: relative;
  width: 100vw;
  height: 100vh;
  background: var(--bg-primary);
`

const StyledNavFlexBox = styled.nav`
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

const StyledLinksFlexBox = styled.div`
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

const StyledLink = styled.a`
  font-size: 1.2rem;
  font-weight: 400;
  color: var(--primary-text);
  max-width: 8rem;
  text-align: center;
  cursor: pointer;
`

const StyledLeftSectionFlexbox = styled.div`
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

const StyledRightSectionFlexbox = styled.div`
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
const StyledImageContainer = styled.div`
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
