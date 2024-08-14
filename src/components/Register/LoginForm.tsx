import React from 'react'
import { Form } from '../Form'

function LoginForm() {
  return (
    <div className='border p-4 rounded-md'>
      <Form
    typeForm='register'
    onSubmit={(values) => {
      console.log(values)
    }}
    >
      <Form.Input
      label='Email'
      name='email'
      placeholder='Email'
      styleEdit="SignForm"
      />
      <Form.Input
      label='Password'
      name='password'
      placeholder='Password'
      type='password'
      styleEdit="SignForm"
      />
      <Form.SubmitButton
      buttonText='Sign In'
      />
    </Form></div>
  )
}

export default LoginForm