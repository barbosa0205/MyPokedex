import React from 'react'

export const ListItem = ({ text, ...rest }) => {
  return <li {...rest}>{text}</li>
}
