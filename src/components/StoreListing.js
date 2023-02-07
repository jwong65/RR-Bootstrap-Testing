import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function StoreListing() {
  return (
    <Container fluid='lg' style={{position: 'relative'}}>
        <Row>
            <Col sm={8}>One of 2 </Col>
            <Col sm={4}>Two of 2 </Col>
        </Row>
        <Row>
            <Col></Col>
            <Col></Col>
        </Row>
    </Container>
  )
}
