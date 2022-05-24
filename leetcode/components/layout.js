import React from 'react';
import Head from 'next/head';
import Link from 'next/link'
import { Container, Navbar, Nav } from 'react-bootstrap';

const Layout = (props) => {
  const title = "Leetcode";


  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="stylesheet"
          crossOrigin="anonymous"
        />
      </Head>
      <Container>
      <header>
        <Navbar>
          <Container fluid>
            <Navbar.Brand href="/">Leetcode</Navbar.Brand>


          </Container>
        </Navbar>
      </header>
      
        {props.children}
        <br />
        <footer>
          Leetcode Learning Tutorial Ⓡ
        </footer>
      </Container>
    </div>
  );
}

export default Layout;