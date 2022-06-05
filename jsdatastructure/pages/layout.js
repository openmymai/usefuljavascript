import React from 'react';
import Head from 'next/head';
import { Container, Navbar, Nav } from 'react-bootstrap';

const Layout = (props) => {
  const title = "JS Data Structure";


  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="stylesheet" crossOrigin="anonymous" />
      </Head>
      <Container>
      <header>
        <Navbar>
          <Container fluid>
            <Navbar.Brand href="/">Data Structure</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/binarysearch">Binary Search</Nav.Link>
              <Nav.Link href="/sorting">Sorting</Nav.Link>
              <Nav.Link href="/distinctive">Distinctive</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </header>
        {props.children}
        <br />
      <footer>
      JavaScript Data Structure Learning Tutorial
      </footer>
      </Container>
    </div>
  );
}

export default Layout;