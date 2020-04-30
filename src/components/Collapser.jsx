import React, { useState, useContext } from 'react'
import Collapse from 'utils/Collapse'
import Toggler from 'components/Toggler'

const ctx = React.createContext()
const { Consumer, Provider } = ctx

const Collapser = ({ children }) => {
  const [show, setShow] = useState(false)
  const toggleShow = () => setShow(!show)
  return (
    <Provider value={{ show, toggle: toggleShow }}>{children}</Provider>
  )
}

Collapser.Toggle = ({ children, ...attrs }) => {
  return (
    <Consumer>
      {({ show, toggle }) => (
        <Toggler active={show} onClick={toggle} {...attrs}>
          {children}
        </Toggler>
      )}
    </Consumer>
  )
}

Collapser.Collapse = ({ children, ...attrs }) => {
  return (
    <Consumer>
      {({ show }) => (
        <Collapse isShow={show} {...attrs}>
          {children}
        </Collapse>
      )}
    </Consumer>
  )
}

export default Collapser
