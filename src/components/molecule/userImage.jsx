import React from 'react'

export default function UserImage({src}) {
  return (
    <div>
          <img src={src} alt="user-image" className='w-[56px] h-[56px] rounded-full' />
    </div>
  )
}
