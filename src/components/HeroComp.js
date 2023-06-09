import React from 'react';

import {Container, Row, Col} from "react-bootstrap";

const HeroComp = () => {
  return ( 
  <div className='hero min-vh-100 w-100' id='home'>
    <Container>
        <Row> 
            <Col>
            <h1 className="text-white text-center fs-1 animate__animated animate__fadeInUp" > Jiwa Seni</h1>
            <p className="text-white-50 text-center animate__animated animate__fadeIn animated__delay-3s"> Lukisan adalah seni visual yang menggambarkan keindahan, ekspresi, dan kreativitas melalui medium cat dan kuas. Setiap goresan dan warna yang diaplikasikan pada kanvas mengungkapkan pesan yang mendalam, membangkitkan emosi, dan menceritakan kisah yang tak terucapkan. Dalam keheningannya, lukisan menjadi jendela menuju dunia yang lain, menghadirkan imajinasi dan keajaiban bagi para pengamatnya. Dari goresan abstrak hingga potret realistis, lukisan adalah bentuk seni yang mampu memikat, menginspirasi, dan memperkaya jiwa manusia.</p>
            </Col>
        </Row>
    </Container>
    </div>
  );
};

export default HeroComp;