import Seo from '@/shared/layout-components/seo/seo';
import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import { DayCounter } from '../../../../shared/data/pages/extension/dataunderconstruction';

const UnderConstruction = () => {
    
    return (

    <div >
    <Seo title="UnderConstruction"/>

        <div className='login-img'>
            <div className="page">
                <div className='container'>
                    <Row className="text-center mx-auto">
                        <Col lg={11} sm={12} className="center-block construction">
                            <div className="text-white">
                                <Card.Body className="p-0">
                                    <h1 className="display-2 mb-0 fw-semibold mb-5">Coming Soon</h1>
                                    <div >
                                        <DayCounter />
                                    </div>
                                    <p className='mt-5'>we apologize for your in-convenience....any quaries contact me </p>
                                    <h4 className='mt-5'><strong>Contact:</strong> sash@demo.com</h4>
                                    <div className="mt-5">
                                        <Button className="btn btn-icon" type="button">
                                            <span className="btn-inner--icon"><i className="fa fa-facebook-f"></i></span>
                                        </Button>
                                        <Button className="btn btn-icon" type="button">
                                            <span className="btn-inner--icon"><i className="fa fa-google"></i></span>
                                        </Button>
                                        <Button className="btn btn-icon" type="button">
                                            <span className="btn-inner--icon"><i className="fa fa-twitter"></i></span>
                                        </Button>
                                        <Button className="btn btn-icon" type="button">
                                            <span className="btn-inner--icon"><i className="fa fa-pinterest-p"></i></span>
                                        </Button>
                                    </div>
                                </Card.Body>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    </div>
);
    };
UnderConstruction.layout = "Authenticationlayout";
export default UnderConstruction;
