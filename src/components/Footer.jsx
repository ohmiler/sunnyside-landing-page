import React from 'react'
import { FaFacebookSquare, FaInstagram, FaTwitter, FaPinterest } from 'react-icons/fa'

function Footer() {
  return (
    <footer className='bg-[#458C7E] flex text-center justify-center text-white p-[3rem]'>
        <div>
            <h3 className='font-bold text-3xl'>sunnyside</h3>
            <ul className='flex my-[2rem]'>
                <li className='mx-[1rem]'><a href="#">About</a></li>
                <li className='mx-[1rem]'><a href="#">Services</a></li>
                <li className='mx-[1rem]'><a href="#">Projects</a></li>
            </ul>
            <ul className='grid grid-cols-4 place-items-center'>
                <li className='mx-[1rem]'><a href="#"><FaFacebookSquare /></a></li>
                <li className='mx-[1rem]'><a href="#"><FaInstagram /></a></li>
                <li className='mx-[1rem]'><a href="#"><FaTwitter /></a></li>
                <li className='mx-[1rem]'><a href="#"><FaPinterest /></a></li>
            </ul>
        </div>
    </footer>
  )
}

export default Footer