import React from 'react'

export const Heading = ({ level = 1, className = '', ...rest }) => {
  return React.createElement(`h${level}`, {
    className: `font-sans text-xl text-gray-700 font-bold ${className}`,
    ...rest,
  })
}
