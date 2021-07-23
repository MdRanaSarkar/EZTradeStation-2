import React from 'react'
import Navbar from '../components/NavbarComponent'
import { Container } from 'react-bootstrap'
const Layout = ({ children }) => {
  return (
    <Container>
      <Navbar />
      {children}
    </Container>
  )
}

export default Layout
