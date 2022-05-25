import React from 'react'
import Link from 'next/link'
import { Container } from 'react-bootstrap'

const App = () => {
  return (
    <div>
      <br />
      <hr />
      <Container>
        <Link href="/array">Array</Link>
      </Container>
      <hr />
    </div>
  )
}

export default App