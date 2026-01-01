import React from 'react'
import Slider from 'react-slick'
import TestimoniaData from './TestimoniaData'

const Testinomial = () => {
    var settings={
        dots:true,
        arrows:false,
        infinite:true,
        speed:500,
        slidesToScroll:1,
        autoplay:true,
        autoplaySpeed:2000,
        cssEase:"linear",
        pauseOnHover:true,
        pauseOnFocus:true,
        responsive:[
            {
                breakpoint:10000,
                settings:{
                    slideToShow:3,
                    slidesToScroll:1,
                    infinite:true,
                },
            },
            {
             breakpoint:1024,
             settings:{
                slidesToShow:2,
                slidesToScroll:1,
                initialSlide:2,
            },  
            },
            {
                breakpoint:640,
                settings:{
                    slidesToShow:1,
                    slideToScroll:1,
                },
            },
        ]
    }

  return (
    <div className="py-10 mb-10">
        <div className="container"> 
            {/* header section */}
            <div className="text-center mb-10 max-w-[600px] mx-auto">
                <p data-aos="fade-up" className="text-sm text-primary">What our customers say </p>
                <h1 data-aos="fade-up" className="text-3xl font-bold" >Testinomial</h1>
                <p data-aos="fade-up" className="text-xs text-gray-400">
                    Lorem ipsum dolor, sit amet consectetur
                    adipisicing elit.Sit asperiores modi
                </p>
            </div>
            {/* Testimonial cards */}
            <div data-aos="zoom-in">
                <Slider {...settings}>{
                    TestimoniaData.map((data)=>(
                        <div className="mb-6">
                            <div key={data.id}
                            className="flex flex-col gap-4 shadow-lg
                            py-8 px-6 mx-4 round-xl dark:bg-gray-800 
                            bg-primary/90 relative ">
                                <div className="mb-4">
                                    <img src={data.img}
                                    className="rounded-full w-20 h-20"/>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="space-y-3">
                                        <p className="text-xs text-black-500 dark:text-white">
                                            {data.text}
                                        </p>
                                        <h1 className="text-xl font-bold text-black/80 dark:text-white">
                                            {data.name}
                                        </h1>
                                    </div>
                                </div>
                                <p className="text-black/20 text-9xl
                                font-serif absolute -top-10 right-0">
                                    ,,

                                </p>
                            </div>
                        </div>        
                    ))}
                </Slider>
            </div>
        </div>
    </div>
  )
}

export default Testinomial