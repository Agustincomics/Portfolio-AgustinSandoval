import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Banner = () => {
    return (
        <Container fluid="xs" id='home' >
            <Row className="portada m-0">
                <Col xs={12} md={6} className='contenedor-imagen  '>
                </Col>
                <Col xs={12} md={6} className='contenedor-textoPortada  '>
                    <article className='articleInfo'>
                        <h1 className='text-light fw-bold text-nombre'>Agustín Sandoval</h1>
                        <h3 className='text-puesto'>Desarrollador Web Full Stack</h3>
                    </article>
                </Col>
            </Row>
        </Container>
    );
};

export default Banner;