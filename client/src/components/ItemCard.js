import React from 'react'

export const ItemCard = ({ category = 'start', ...rest }) => {
  const colorsByCategory = {
    start: 'green',
    stop: 'red',
    continue: 'blue',
  }

  const colorForCategory = colorsByCategory[category]
  const backgroundColorClassName = `bg-${colorForCategory}-100`
  const borderColorClassName = `border-${colorForCategory}-400`
  const textColorClassName = `text-${colorForCategory}-700`

  return (
    <div
      className={`border px-4 py-3 rounded relative my-4 ${backgroundColorClassName} ${borderColorClassName} ${textColorClassName}`}
      {...rest}
    />
  )
}
