import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
function Footer() {
    return (
        <div>
            <Row>
            <Container className="text-center py-3"> <Link to='xuunnis123@gmail.com'>Contact me</Link></Container>
            </Row>
        </div>
    )
}

export default Footer