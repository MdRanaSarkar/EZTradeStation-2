import React from 'react'
import Navbar from '../components/NavbarComponent'
import { Container } from 'react-bootstrap'
const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Container>{children}</Container>
    </>
  )
}

export default Layout
