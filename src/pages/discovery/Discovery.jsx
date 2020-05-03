import React, { useState } from 'react'
import Section from 'components/Section'
import Select from 'components/Select'
import FilterCardList from './FilterCardList'
import { Alert, Breadcrumb, Nav, Row, Col } from 'react-bootstrap'
import FilterNav from './FilterNav'

const Discovery = () => {
  return (
    <>
      <Section className="border-bottom border-bright">
        <h1 className="mb-5 display-4 font-weight-bold">
          Discovery
        </h1>
        <FilterNav />
      </Section>
      <Section>
        {/* <FilterCardList /> */}
      </Section>
    </>
  )
}

export default Discovery
