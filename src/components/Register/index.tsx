
import React from 'react'
import SignStatus from './SignFlow';

function SignFlow() {
    

    console.log("SignFlow")

  return (
    <div className='h-full flex flex-col justify-center items-center gap-10'>
        
        <SignStatus  />
        <span></span>
    </div>
  )
}

export default SignFlow