import React from 'react';
import {Container, Row, Col} from "react-bootstrap";


const FooterComp = () => {
  return (
    <div className='footer pb-3 pt-4'>
        <Container>
            <Row>
                <Col className='fw-bold text-white'> <h3>Koleksi Lukisan</h3>
                </Col>
                <Col className='text-end'>
                <i class="fa-brands fa-instagram text-white fs-1 mx-lg-3 mx-3"></i>
                <i class="fa-brands fa-youtube text-white fs-1 mx-lg-3 mx-3"></i>
                <i class="fa-brands fa-twitter text-white fs-1 mx-lg-3 mx-3"></i>
                </Col>
            </Row>
            <Row>
                <Col>
                <p className='text-center text-white'>&copy; By Glenys Ilona Cantizz. </p>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default FooterComp