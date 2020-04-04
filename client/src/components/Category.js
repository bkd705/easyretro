import React from 'react'
import { Heading } from '../components/Heading'
import { AddItemButton } from '../components/AddItemButton'

export const Category = ({ title, children }) => {
  return (
    <>
      <Heading as="h2">{title}</Heading>
      <ul>
        {children}
        <AddItemButton />
      </ul>
    </>
  )
}
