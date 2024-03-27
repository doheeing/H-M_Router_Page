import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const LoginPage = ({setAuthenticate}) => {
  const navigate = useNavigate()
  const LoginUser = (event) => {
    event.preventDefault();
    setAuthenticate(true)
    navigate('/')
  };
  return (
    <Container className="login-area">
      <Form className="login-input-text" onSubmit={(event) => LoginUser(event)}>
        <Form.Group className="mb-3 basic-font" controlId="formBasicEmail">
          <Form.Label className="basic-font">Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted basic-font">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3 basic-font" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" className="basic-font"/>
        </Form.Group>
        <Button variant="primary" type="submit" className="basic-font">
          login
        </Button>
      </Form>
    </Container>
  );
};

export default LoginPage;
