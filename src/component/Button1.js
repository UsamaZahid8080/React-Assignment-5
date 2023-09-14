import React from 'react'
import { Button } from 'react-bootstrap'

function Button1(props) {
    let {style,children} = props;
  return (
    <>
    <Button style={style}>{children}</Button>
    </>
  )
}

export default Button1