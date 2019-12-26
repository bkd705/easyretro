import React from 'react'
import { ItemCard } from '../components/ItemCard'
import { Heading } from '../components/Heading'
import { AddItemButton } from '../components/AddItemButton'

export const Category = ({ title, items }) => {
  return (
    <>
      <Heading as="h2">{title}</Heading>
      <ul>
        {items.map(item => (
          <ItemCard key={item.id} category={item.category.toLowerCase()}>
            {item.text}
          </ItemCard>
        ))}
        <AddItemButton />
      </ul>
    </>
  )
}
