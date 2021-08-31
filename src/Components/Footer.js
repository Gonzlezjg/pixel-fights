import { Container, Row, Col, Button, Form, Nav } from 'react-bootstrap'
import { Image } from 'react-bootstrap'
import Subscribe from '../Images/subscribe.png'
import Discord from '../Images/social/discord.png'
import Telegram from '../Images/social/telegram.png'
import Twitter from '../Images/social/twitter.png'


const Footer = () => {
    return (
        <div className='mt-4' style={{ backgroundColor: '#9b4900', borderTop: '6px solid #e0c1ac' }}>
            <Container>
                <Row className='py-4 text-white'>
                    <Col sm={8}>
                        <h3>SUBSCRIBE TO OUR NEWSLETTER</h3>
                        <p>WE ARE NOT ALIVE YET, BUT HOLD YOUR WARRIOR! JOIN THE WAITING LIST</p>
                    </Col>
                    <Col sm={4} className='d-flex justify-content-center align-items-center'>
                        <Form.Control type="text" placeholder="Not avaliable" readOnly style={{ border: '4px solid white', background: '#e0c1ac', borderRadius: '14px', width: '350px' }} />
                        <Button variant='link'>
                            <Image
                                alt='subscribe now'
                                src={Subscribe}
                            />
                        </Button>
                    </Col>
                </Row>
            </Container>
            <div style={{ background: 'black', borderTop: '6px solid #e0c1ac' }}>
                <Container className='py-5'>
                    <Row>
                        <Col md="auto" lg={12}>
                            <div className="d-flex align-items-center text-white justify-content-between w-100">
                                <div className="d-flex align-items-center" >
                                    <h3>OUR SOCIAL NETWORKS</h3>
                                    <Nav.Item className="d-flex ">
                                        <Nav.Link href="https://t.me/PixelFights" target='_blank'>
                                            <Image
                                                fluid
                                                alt='subscribe now'
                                                src={Telegram}
                                                width={50}
                                                height={50}
                                            />
                                        </Nav.Link>
                                        <Nav.Link href="https://twitter.com/pixel_fights" target='_blank'>
                                            <Image
                                                fluid
                                                alt='subscribe now'
                                                src={Twitter}
                                                width={50}
                                                height={50}
                                            />
                                        </Nav.Link>
                                        <Nav.Link href="https://discord.gg/3wteMdm6" target='_blank'>
                                            <Image
                                                fluid
                                                alt='subscribe now'
                                                src={Discord}
                                                width={50}
                                                height={50}
                                            />
                                        </Nav.Link>
                                    </Nav.Item>
                                </div>
                                <span >
                                    2021©COPYRIGHT PIXELFIGHTS
                                </span>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Footer
