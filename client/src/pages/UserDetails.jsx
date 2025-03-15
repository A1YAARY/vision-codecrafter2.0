import React from 'react'
import UserDetailsCard from '../components/UserDetailsCard'
import Navbar from '../components/Navbar'
import UserIcon from '../components/UserIcon'

function UserDetails() {
  return (
    <div>

        <Navbar/>
        <div className=' flex items-center justify-center mt-6 mb-6'>
        <div className='flex flex-col w-5/12  bg-white rounded-lg shadow-sm border border-gray-100'>
        <UserIcon/>
        <div className=''>
        <UserDetailsCard />
        </div>
        </div>
        </div>

    </div>
  )
}

export default UserDetails