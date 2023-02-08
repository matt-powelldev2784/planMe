import type { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next'
import { getProviders, signIn } from 'next-auth/react'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '../api/auth/[...nextauth]'
import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'

export default function SignIn({ providers }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <HeroSectionStyled>
        <LeftSectionFlexboxStyled>
          <SignInContainer>
            {Object.values(providers).map((provider) => (
              <div key={provider.name}>
                <button onClick={() => signIn(provider.id)}>Sign in with {provider.name}</button>
              </div>
            ))}
          </SignInContainer>
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
    </>
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

  return {
    props: { providers: Object.values(providers) ?? [] },
  }
}

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

const SignInContainer = styled.div`
  position: absolute;
`

const RightSectionFlexboxStyled = styled.div`
  position: absolute;
  right: 0;
  width: 50%;
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
`
