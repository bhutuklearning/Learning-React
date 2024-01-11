import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams();
  return (
    <div className='text-3xl bg-zinc-600 text-neutral-300 font-bold text-center px-2 py-3'>
      User : {userid}
    </div>
  )
}

export default User
