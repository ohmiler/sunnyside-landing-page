import React from 'react'
import imgStandOut from '../assets/img/desktop/image-stand-out.jpg'


function SectionTwo() {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2'>
        <div className="left row-start-2 row-end-3">
            <img className='w-full' src={imgStandOut} alt="stand out" />
        </div>
        <div className="right flex justify-center items-center p-[5rem] row-start-1 row-end-2 lg:row-start-2 lg:row-end-3">
            <div>
                <h3 className='text-5xl'>Stand out to the right audience</h3>
                <p className='text-gray-500 my-[2rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis odit, dolores, vitae suscipit asperiores atque ipsa explicabo saepe fugit magnam quas non autem vero incidunt?</p>
                <a href="#" className='border-b-4 border-b-pink-500'>Learn More</a>
            </div>
        </div>
    </div>
  )
}

export default SectionTwo