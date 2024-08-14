import React from 'react'
import { Form } from '../Form'

function RegisterForm() {
  return (
    <div className='border p-4 rounded-md'>
      <Form
      typeForm='register'
      onSubmit={(values) => {
        console.log(values)
      }}
      >
        <Form.Input
        label='Name'
        name='name'
        placeholder='Name'
        styleEdit="SignForm"
        />
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
        <Form.Input
        label='Confirm Password'
        name='confirmPassword'
        placeholder='Confirm Password'
        type='password'
        styleEdit="SignForm"
        />
        <Form.SubmitButton
        buttonText='Register'
        />
      </Form>
    </div>
  )
}

export default RegisterForm