"use client";
import React from 'react'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'
import { Button } from '../ui/button';

function SignStatus() {
  
  
    const [signFlow, setSignFlow] = React.useState(true)

  
    return (
    
      <div className='flex flex-col gap-5'>
        You need to have an account to use the app


        <RegisterForm/> 
         <LoginForm/>
          <article className='flex gap-10 items-center'>
            <p>{signFlow ? "Need an account?" : "Have an account?"}</p>
            <Button onClick={() => setSignFlow(!signFlow)}>Switch</Button>
          </article>
        </div>
  )
}

export default SignStatus