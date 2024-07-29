import React from 'react'
import CardNotification
from '../cardNotification/cardNotification'
import CardPost from '../cardPost/cardPost'
import Posts from '../../static/data'

export default function PostPage({user}) {
  return (
    <div className="App p-16">
    <div className='absolute top-0 right-0 p-2'>
      <h3 className='font-bold text-base text-teal-700'>{user}</h3>
    </div>
    <div className="flex justify-center gap-3">
    <div className="media w-8/12 flex flex-col items-end">
    {Posts.map((post) => (
      <CardPost key={post.usernmae} />
    ))}
    </div>
    <CardNotification/>
    </div>

  </div>
  )
}
