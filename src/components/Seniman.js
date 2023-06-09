 import React from 'react';
 import {Container, Row, Col} from "react-bootstrap";
 
 const Seniman = () => {
   return (
     <div className='min-vh-100 d-flex align-items-center' id='seniman'>
        <Container className='mb-5'>
            <Row>
                <Col><h1 className='text-center fw-bold'>Seniman</h1>
                <p className='text-center'>Para Seniman Lukis</p>
                </Col>
            </Row>
            <Row className='row-cols-lg-3 row-cols-md-2 row-cols-1'>
                <Col className='text-center py-5 px-3 border'>
                <h5 className='fw-bold'>Pelukis indonesia</h5>
                <p>Nama-Nama Pelukis yang terkenal di indonesia</p>
                
                </Col>
                <Col className='text-center py-5 px-3 border'>
                <h5 className='fw-bold'>Pelukis Luar Negeri</h5>
                <p>Nama-Nama Pelukis yang terkenal di Luar Negeri</p>
                </Col>
                <Col className='text-center py-5 px-3 border'>
                <h5 className='fw-bold'>Pelukis Legendaris </h5>
                <p>Nama-Nama Pelukis yang Legendaris</p>
                </Col>
            </Row>
        </Container>
     </div>
   )
 }
 
 export default Seniman