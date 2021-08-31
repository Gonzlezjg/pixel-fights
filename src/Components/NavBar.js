import { Navbar, Container, Button, Nav } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import Logo from '../Images/logo-pixel.png';
import Try from '../Images/trydemo-white.png';
import Pancacke from '../Images/pancake.png';


const NavBar = () => {
    return (
        <div>
            <Navbar variant="dark" expand='lg' style={{backgroundColor: '#171717' }}>
                <Container>
                    <Navbar.Brand href="#">
                        <Image
                            fluid
                            alt="logo-pixel"
                            src={Logo}
                            width="350"
                            height="50"
                            className="d-inline-block align-top"
                        />{' '}
                    </Navbar.Brand>
                    <Nav className="mx-auto">
                        <Nav.Link href="#" className=" fs-5" >HOME</Nav.Link>
                        <Nav.Link href="#" className=" fs-5">GAME</Nav.Link>
                        <Nav.Link href="#" className=" fs-5">ROADMAP</Nav.Link>
                        <Nav.Link href="https://whitepaper.pixelfights.com/" className=" fs-5 " target='_blank'>WHITEPAPER</Nav.Link>
                    </Nav>
                    <Nav className="mx-auto d-flex align-items-center">
                        <Nav.Link href="https://acortar.link/dLAYS4" target='_blank'>
                         <Image 
                             fluid
                             alt="Try now"
                             src={Try}
                             width="150"
                             height="60"
                             className="d-inline-block align-top"
                         />
                        </Nav.Link>
                        <Nav.Link href="#features">
                        <Image 
                             fluid
                             alt="pancackeswap"
                             src={Pancacke}
                             width="60"
                             height="60"
                             className="d-inline-block align-top"
                         />
                        </Nav.Link>
                        
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar
