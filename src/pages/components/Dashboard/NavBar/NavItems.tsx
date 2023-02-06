import React, { Fragment } from 'react'
import styled from 'styled-components'
import { NavItem } from './NavItem'
import { navItemsList } from './NavItemsList'

interface NavItemProps {
  text: string
  image: string
  key: number
}

export const NavItems = () => {
  const NavItemsElements = navItemsList.map((navItem: NavItemProps) => {
    const { key, text, image } = navItem
    return <NavItem key={key} text={text} image={image} />
  })

  return <Fragment>{NavItemsElements}</Fragment>
}
