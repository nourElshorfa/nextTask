"use client"

import React from 'react'

import { BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs';
import { FaFacebook, FaTiktok } from "react-icons/fa";
import { FaInstagram } from 'react-icons/fa6';

export default function page() {
  return <>
  
  <nav className='bg-sky-950 flex justify-between p-4 items-center'>

<div>
    <h2 className='text-white text-2xl'>logo</h2>
</div>




      <ul className='flex gap-6 text-white cursor-pointer'>
        <li className='text-xl hover:text-blue-400'><FaFacebook /></li>
        <li className='text-xl hover:text-sky-400 '><BsTwitter /></li>
        <li className='text-xl hover:text-red-400 '><FaTiktok /></li>
        <li className='text-xl hover:text-pink-400 '><FaInstagram /></li>
        <li className='text-xl hover:text-gray-400 '><BsGithub /></li>
        <li className='text-xl hover:text-blue-400 '><BsLinkedin /></li>
      </ul>
   

  </nav>
  
  </>
}
