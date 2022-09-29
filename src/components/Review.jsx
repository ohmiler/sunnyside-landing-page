import React from 'react'
import imgEmily from '../assets/img/image-emily.jpg'
import imgThosmas from '../assets/img/image-thomas.jpg'
import imgJennie from '../assets/img/image-jennie.jpg'

const usersData = [
    {
        img: imgEmily,
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate incidunt voluptatem ex aliquam quidem exercitationem placeat magni velit quos modi.',
        name: 'Emily R.',
        position: 'Marketing Director'     
    },
    {
        img: imgThosmas,
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate incidunt voluptatem ex aliquam quidem exercitationem placeat magni velit quos modi.',
        name: 'Thosmas S.',
        position: 'Chief Operating Officer'     
    },
    {
        img: imgJennie,
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate incidunt voluptatem ex aliquam quidem exercitationem placeat magni velit quos modi.',
        name: 'Jennie F.',
        position: 'Business Owner'     
    }
]

function Review() {
  return (
    <div className='text-center py-[10rem] px-[5rem]'>
        <h3 className='uppercase text-3xl'>Client Testimonials</h3>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-[5rem]'>
            {usersData.map((data, key) => (
                <div key={key.name} className="py-[5rem]">
                    <img src={data.img} className="inline-block rounded-full" alt={data.name} />
                    <p className='py-[5rem]'>{data.content}</p>
                    <h4 className='font-bold'>{data.name}</h4>
                    <p className='text-slate-400'>{data.position}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Review