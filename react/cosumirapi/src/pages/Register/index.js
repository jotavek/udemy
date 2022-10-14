import React from 'react';

import { Container } from '../../styles/GlobalStyles';
import { Form } from './styled';

export default function Register() {
  return (
    <Container>
      <h1>Register</h1>

      <Form>
        <label htmlFor="nome">
          Nome:
          <input type="text" />
        </label>
        <label htmlFor="email">
          Email:
          <input type="text" />
        </label>
        <label htmlFor="senha">
          Senha:
          <input type="password" />
        </label>
      </Form>
    </Container>
  );
}
