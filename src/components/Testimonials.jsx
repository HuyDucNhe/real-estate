import React from 'react'
import { assets, testimonialsData } from '../assets/assets'

const Testimonials = () => {
  return (
    <div className='py-10 container mx-auto lg:px-32 w-full overflow-hidden' id='Testimonials'>
        <h1 className='text-2xl md:text-4xl font-bold mb-2 text-center '>Customer <span className='underline underline-offset-4 decoration-1 under font-light'>Testimonials</span></h1>
        <p className='text-gray-500 text-center mb-12 max-w-full mx-auto'>Real Stories from Those Who Found Home with Us</p>
        <div className='flex flex-wrap justify-center gap-9'>
            {testimonialsData.map((testimonials,index)=>(
                <div key={index} className='shadow-lg border rounded max-w-[340px] px-8 py-12 text-center'>
                    <img className='w-20 h-20 rounded-full mx-auto mb-4' src={testimonials.image} alt={testimonials.alt} />
                    <h2 className='text-xl text-gray-700 font-medium'>{testimonials.name}</h2>
                    <p className='text-gray-500 mb-4 text-sm'>{testimonials.title}</p>
                    <div className='flex justify-center gap-1 text-red-500 mb-4'>
                        {Array.from({length: testimonials.rating},(item,index)=>(
                            <img key={index} src={assets.star_icon} alt="" />
                        ))}
                    </div>
                    <p className='text-gray-600'>
                        {testimonials.text}
                    </p>
                </div>
            ))}
        </div>
    
    </div>
  )
}

export default Testimonials