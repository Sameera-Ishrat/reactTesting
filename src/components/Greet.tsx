import React from 'react'

import {GreetProps} from "./Greet.type";

const Greet = ({name}:GreetProps) => {
  return (
    // eslint-disable-next-line no-restricted-globals
   <h1>hello {name ? name : 'Guest'}</h1> 
  )
}

export default Greet