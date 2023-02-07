import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function StoreListing() {
  return (
    <Container fluid='lg' style={{position: 'relative', marginTop: '40px', textAlign: 'center', top: '3em', fontWeight: 'bold', color: 'Red'}}>
    <Row style={{justifyContent:"space-evenly", display: 'flex'}}>
        <Row>
            <Col sm={8}><p>One of 2</p> </Col>
            <Col sm={4}><p>Two of 2</p> </Col>
        </Row>
        <Row>
            <Col><p>Row 2, One of 3</p></Col>
            <Col><p>Row 2, Two of 3</p></Col>
            <Col><p>Row 2, Three of 3</p></Col>
        </Row>
        <Row>
            <Col><p>Row 3, One of 1</p></Col>
        </Row>
    </Row>
    </Container>
  )
}
