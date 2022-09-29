import React from 'react'
import imgGraphicDesign from '../assets/img/desktop/image-graphic-design.jpg'
import imgPhotography from '../assets/img/desktop/image-photography.jpg'

function SectionThree() {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 h-[700px]'>
        <div className="left flex justify-center items-end p-[2rem] lg:px-[15rem] lg:pb-[5rem] text-center bg-sec-three-left bg-cover">
            <div>
                <h3 className='text-3xl mb-4'>Graphic Design</h3>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi nihil distinctio a eos nesciunt magnam doloremque totam eveniet asperiores laudantium.
                </p>
            </div>
        </div>
        <div className="right flex justify-center items-end p-[2rem] lg:px-[15rem] lg:pb-[5rem] text-center bg-sec-three-right bg-cover">
            <div>
                <h3 className='text-3xl mb-4'>Photography</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, aperiam quibusdam debitis ipsa excepturi commodi ab quam obcaecati sapiente blanditiis?
                </p>
            </div>
        </div>
    </div>
  )
}

export default SectionThree