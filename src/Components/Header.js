import { useState } from "react";
import { Container, Col, Row, Button, Toast, ToastContainer } from "react-bootstrap"
import { Image } from "react-bootstrap"
import Try from '../Images/trydemo-white.png';
import Whitepaper from '../Images/whitepaper.png';
import Banner from '../Images/Banner.gif';

const Header = () => {

    const [showA, setShowA] = useState(true);

    const toggleShowA = () => setShowA(!showA);

    return (
        <div className="text-center py-4" style={{ backgroundColor: '#171717' }}>
            <Container className="py-5 d-flex align-items-center justify-content-center" >

                <Row className="text-white d-flex">
                    <Col sm={6} className="my-auto">
                        <h5>BATTLE AND <span className="text-warning">EARN PCOIN</span> </h5>
                        <h2>CHOOSE BETWEEN <span className="text-danger">DEMONS</span> OR <span className="text-warning">HUMANS</span> FIGHT</h2>
                        <div className="d-flex justify-content-center aling-items-center ">
                            <div className="pt-2">
                                <Button variant="link" href='https://whitepaper.pixelfights.com/' target='_blank'>
                                    <Image
                                        fluid
                                        alt="Read the whitepaper"
                                        src={Whitepaper}
                                        width="150"
                                        style={{ height: '35px' }}
                                    />
                                </Button>{' '}
                                <Button variant="link" href='https://acortar.link/dLAYS4' target='_blank'>
                                    <Image
                                        fluid
                                        alt="Try now"
                                        src={Try}
                                        width="150"
                                        style={{ height: '40px' }}
                                    />
                                </Button>

                            </div>
                        </div>
                    </Col>
                    <Col sm={6} >
                        <div
                            className='d-flex w-100'
                            aria-live="polite"
                            aria-atomic="true"
                            style={{ position: 'relative', zIndex: '9999', top: '-25%' }}>
                            <ToastContainer position="top-end" >
                                <Toast show={showA} onClose={toggleShowA}>
                                    <Toast.Header style={{ backgroundColor: '#e0c1ac' }} className='text-dark'>

                                        <strong className="me-auto">PIXEL-FIGHTS</strong>
                                        <small>PLEASE READ</small>
                                    </Toast.Header>
                                    <Toast.Body style={{ backgroundColor: '#9b4900' }}>This site is still under construction!</Toast.Body>
                                </Toast>
                            </ToastContainer>

                        </div>
                        <Image
                            fluid
                            src={Banner}
                        />

                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Header
