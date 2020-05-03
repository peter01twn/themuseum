import React, { useEffect, useReducer } from 'react'
import Select from 'components/Select'
import { Row, Col } from 'react-bootstrap'

export default function FilterNav({ getFilter }) {
  const setFilter = (state, action) => {
    const { type, value, text } = action
    return {
      ...state,
      [type]: {
        value,
        text,
      },
    }
  }

  const [state, dispatch] = useReducer(setFilter, {
    time: {},
    location: {},
    member: {},
  })

  useEffect(() => {
    const filter = {
      time: state.time.value,
      location: state.location.value,
      member: state.member.value,
    }
    getFilter(filter)
  }, [state])

  const handleTimeSelect = (value, text) => {
    dispatch({
      type: 'time',
      value,
      text,
    })
  }
  const handleLocationSelect = (value, text) => {
    dispatch({
      type: 'location',
      value,
      text,
    })
  }
  const handleMemberSelect = (value, text) => {
    dispatch({
      type: 'member',
      value,
      text,
    })
  }

  return (
    <>
      <Row>
        <Col lg="4">
          <Select
            placeholder="When"
            block
            lg
            onClick={handleTimeSelect}
            className="mb-2 font-weight-bold"
          >
            <Select.Item value="1">Today</Select.Item>
            <Select.Item value="2">Last week</Select.Item>
            <Select.Item value="3">Last month</Select.Item>
            <Select.Item value={null}>Until now</Select.Item>
          </Select>
        </Col>
        <Col lg="4">
          <Select
            placeholder="Who"
            block
            lg
            onClick={handleLocationSelect}
            className="mb-2 font-weight-bold"
          >
            <Select.Item value="1">Child</Select.Item>
            <Select.Item value="2">Teenager</Select.Item>
            <Select.Item value="3">Adult</Select.Item>
            <Select.Item value="4">Old</Select.Item>
            <Select.Item value={null}>All</Select.Item>
          </Select>
        </Col>
        <Col lg="4">
          <Select
            placeholder="Where"
            block
            lg
            onClick={handleMemberSelect}
            className="font-weight-bold"
          >
            <Select.Item value="1">Foreign</Select.Item>
            <Select.Item value="2">domestic</Select.Item>
            <Select.Item value={null}>All</Select.Item>
          </Select>
        </Col>
      </Row>
    </>
  )
}
