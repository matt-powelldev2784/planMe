import React, { Fragment } from 'react'
import { NavItem } from './NavItem'
import { navItemsList } from './NavItemsList'

export const NavItems = () => {
  const NavItemsElements = navItemsList.map((navItem) => {
    const { key, text, image, link } = navItem
    return <NavItem key={key} text={text} image={image} link={link} />
  })

  return <Fragment>{NavItemsElements}</Fragment>
}
