import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import { Button, Form, Container, Row, Col } from 'react-bootstrap'
import { useState } from 'react'

function App() {
  const [validated, setValidated] = useState(false)

    const handleSubmit = (e) => {
      const form = e.currentTarget;
      if (form.checkValidity() === false) {
        e.preventDefault();
        e.stopPropagation();
      }
      setValidated(true)
    }

  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <Form noValidate validated={ validated } onSubmit={ handleSubmit }>
            <Row>
              <Form.Label class="p-4 text-info">Test email addresses and phone numbers to see if they pass the input validation regular expressions!</Form.Label>
              <Col md>
                <Form.Group controlid="email">
                  <Form.Label>Email Adress</Form.Label>
                  <Form.Control 
                  type="email" 
                  placeholder="example@examplemail.com" 
                  controlId="validationEmail"
                  required pattern="[a-zA-Z0-9.!#$%&'*+\-=?^_`{|]+@[a-zA-Z]+[.][a-zA-Z]+"
                  />
                  <Form.Control.Feedback class="text-Success">Valid</Form.Control.Feedback>
                  <Form.Control.Feedback class="text-warning" type="invalid">Invalid</Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col md>
                <Form.Group controlid="phoneNumber">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control 
                  type="phone-number" 
                  placeholder="123-123-1234" 
                  controlId="validationPhoneNumber" 
                  required pattern="[0-9]{3}[-\\\/. ]{0,1}[0-9]{3}[-\\\/]{0,1}[0-9. ]{4}"
                  />
                  <Form.Control.Feedback class="text-Success">Valid</Form.Control.Feedback>
                  <Form.Control.Feedback class="text-warning" type="invalid">Invalid</Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>
            <Button type="submit">Submit</Button>
          </Form>
        </Container>
      </header>
    </div>
  );
}

export default App;
