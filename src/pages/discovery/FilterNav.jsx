import React from 'react'
import Select from 'components/Select'
import { Row, Col } from 'react-bootstrap'

export default function FilterNav() {
  return (
    <Row>
      <Col lg="4">
        <Select placeholder="When" block lg className="mb-2 font-weight-bold">
          <Select.Item value="1">Today</Select.Item>
          <Select.Item value="2">Last week</Select.Item>
          <Select.Item value="3">Last month</Select.Item>
          <Select.Item value="4">Until now</Select.Item>
        </Select>
      </Col>
      <Col lg="4">
        <Select placeholder="Who" block lg className="mb-2 font-weight-bold">
          <Select.Item value="1">Child</Select.Item>
          <Select.Item value="2">Teenager</Select.Item>
          <Select.Item value="3">Adult</Select.Item>
          <Select.Item value="4">Old</Select.Item>
        </Select>
      </Col>
      <Col lg="4">
        <Select placeholder="Where" block lg className="font-weight-bold">
          <Select.Item value="1">Foreign</Select.Item>
          <Select.Item value="2">domestic</Select.Item>
        </Select>
      </Col>
    </Row>
  )
}
