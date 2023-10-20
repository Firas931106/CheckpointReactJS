import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Card from 'react-bootstrap/Card';
import image from './image.jpg'
import image2 from './image2.jpg'




function App() {
    return (
        <div className="App">
            <header>
                <Navbar bg="dark" variant="dark">
                    <Nav className="liste">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#About">About</Nav.Link>
                        <Nav.Link href="#Contact">Contact</Nav.Link>
                    </Nav>
                </Navbar>
            </header>
            <main>
                <Container>
                    <h1> Hello to my World</h1>
                        <Card>
                            <Card.Img variant="top" src={image} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    This is card num 1
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src={image2} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    This is card num 2
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    
                </Container>

            </main>
            <footer>

            </footer>
        </div>


    )
}
export default App;
