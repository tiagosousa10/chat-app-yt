import React from 'react'
import Message from './Message'
import useGetMessages from '../../hooks/useGetMessages'
import MessageSkeleton from '../skeletons/MessageSkeletons'

const Messages = () => {
  const {messages, loading} = useGetMessages()
  console.log("messages: ",messages)

  return (
    <div className='px-4 flex-1 overflow-auto'>
      {loading && [...Array(3)].map((_,index) => <MessageSkeleton key={index} />) }

    </div>
  )
}

export default Messages
