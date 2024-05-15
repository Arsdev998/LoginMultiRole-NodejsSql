import React from 'react'
import { useSelector } from 'react-redux'
const Welcome = () => {
  const {user} = useSelector((state)=> state.auth)
  return (
    <div className="p-8 bg-gray-100  flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Dashboard</h1>
      <h2 className="text-2xl text-gray-600">Welcome Back <strong>{user && user.name}</strong></h2>
    </div>
  )
}

export default Welcome
