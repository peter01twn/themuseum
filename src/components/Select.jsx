import React, { useState } from 'react'
import Collapse from 'utils/Collapse'

const ctx = React.createContext()
const { Provider, Consumer } = ctx

const Select = ({
  placeholder,
  children,
  onClick,
  lg,
  block,
  className = '',
  ...attrs
}) => {
  const [show, setShow] = useState(false)
  const [selected, setSelected] = useState({})
  const classStr = `select ${show ? 'select--active' : ''} ${
    lg ? 'select--lg' : ''
  } ${block ? 'd-block' : ''} ${className}`
  const close = () => setShow(false)
  const toggleShow = () => {
    setShow(!show)
  }

  const itemClick = (value, children, e) => {
    toggleShow()
    setSelected({ value, text: children })
    if (onClick) {
      onClick(value, children, e)
    }
  }

  return (
    <div
      className={classStr}
      {...attrs}
      onClick={toggleShow}
      tabIndex="0"
      onBlur={close}
    >
      <div className="select__content">
        {selected.text ? selected.text : placeholder}
        <div className="select__icon" />
      </div>
      <div className="select__list">
        <Collapse isShow={show}>
          <Provider value={{ onClick: itemClick }}>{children}</Provider>
        </Collapse>
      </div>
    </div>
  )
}

Select.Item = ({ value, children, className = '', ...attrs }) => {
  return (
    <Consumer>
      {({ onClick }) => (
        <div
          className={`select__list-item ${className}`}
          onClick={(e) => onClick(value, children, e)}
        >
          {children}
        </div>
      )}
    </Consumer>
  )
}

export default Select
