import React from 'react'
import { Container, Row, Col} from 'react-bootstrap'
import Topbar from '../dashboard/components/topbar/Topbar'
import Sidebar from '../dashboard/components/sidebar/Sidebar'
import Home from '../dashboard/pages/home/Home'
const ProfileScreen = () => {
  return (
    <Container className='mt-5'>
      <Row>
        <Topbar />
      </Row>
      <Row>
        <Col md={4}>
          <Sidebar />
        </Col>
        <Col md={8}>
            <Home/>
        </Col>
      </Row>
    </Container>
  )
}

export default ProfileScreen
