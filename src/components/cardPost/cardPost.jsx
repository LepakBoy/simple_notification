import React from 'react'
import UserImage from '../molecule/userImage'
import LocationIcon from '../../icons/location'
import HeartIcon from '../../icons/heart'
import ShareIcon from '../../icons/share'

export default function CardPost({usernname, locaiton, ...props}) {
  return (
    <div className='mb-8 bg-violet-50 w-3/4 p-4 rounded-lg'>
        <section>
            <div className="flex gap-4">
               <UserImage src="./images/compressed.jpeg"/>
               <div>
                <h3 className='font-semibold text-lg px-1'>Username username</h3>
                <div className='flex gap-0 items-center'>
                <LocationIcon/>
                <p className='text-xs'>Jakarta, Indonesia</p>
                </div>
                </div>
            </div>
        </section>
        <section className='py-3'>
            <p className='font-normal text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione praesentium, nemo tempore, omnis at perferendis illum aspernatur labore iure non enim qui! Libero omnis laborum suscipit quidem blanditiis deserunt sit expedita quibusdam!</p>
        </section>
        <section className='py-3'>
            <img src="./images/image2.jpg" alt="post-image" />
        </section>
        <section className='py-3 flex gap-3'>
            <button><HeartIcon/></button>
            <button><ShareIcon/></button>
        </section>
    </div>
  )
}
