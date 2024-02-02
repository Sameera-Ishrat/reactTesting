import React from 'react'

type GreetProps= {
    name?: string
}

const Greet = ({name}:GreetProps) => {
  return (
    // eslint-disable-next-line no-restricted-globals
   <h1>hello {name}</h1> 
  )
}

export default Greet