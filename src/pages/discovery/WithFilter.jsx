import React from 'react'

export default function WithFilter(Component) {
  return ({data, filter, ...attrs}) => {
    return <Component data={data} {...attrs} />
  }
}
