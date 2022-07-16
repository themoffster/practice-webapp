import { Button, Form } from 'react-bootstrap'
import { LANDING } from 'src/enums/routes'
import { routeAndScrollTo } from 'src/helpers/router'
import React from 'react'

const LoginPage = () => {
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')

  const onSubmit = async (event) => {
    event.preventDefault()
    routeAndScrollTo(LANDING)
  }

  return (
    <Form onSubmit={onSubmit}>
      <Form.Group className="mb-3" controlId="username">
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="username"
          onChange={(e) => setUsername(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>
      <Button aria-label="Login" variant="primary" type="submit">
        Login
      </Button>
    </Form>
  )
}

export default LoginPage
