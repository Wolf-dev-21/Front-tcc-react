import logo from './logo.svg';
import { Button, } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.css';

function App() {
  return (
    <Container style={{justifyContent: 'center', width:'30%'}}>
      <h1>Login</h1>

      <Form>
        <Form.Group className="mt-3" as={Row}>
          <Form.Label collum sm="2">Email</Form.Label>
            <Col sm='10'>
              <Form.Control type='email' placeholder='Digite email'/>
            </Col>
        </Form.Group>

        <Form.Group className="mt-3" as={Row}>
          <Form.Label collum sm="2">Senha</Form.Label>
            <Col sm='10'>
              <Form.Control type='password' placeholder='Digite email'/>
            </Col>
        </Form.Group>

        <Form.Group className="mt-3" as={Row}>
          <Button variant="primary" type="">Log-in</Button>
        </Form.Group>

      </Form>

    </Container>
  );
}

export default App;
