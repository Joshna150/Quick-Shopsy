import React from 'react'
import TopRatedproducts from './TopRatedproducts'
import {FaStar} from 'react-icons/fa'

const TopProducts = ({handleOrderPopup}) => {
  return (
    <div>
        <div className="container">
            {/* Header section */}
            <div className="text-center mb-24 max-w-[600px] mx-auto">
                <p data-aos="fade-up"  className="text-sm text-primary">
                    Top Rated products for you
                </p>
                <h1 data-aos="fade-up" className="text-3xl">
                    Best Products
                </h1>
                <p data-aos="fade-up" className="text-xs text-gray-400">
                    Lorem ipsum dolor sit amet consectetur
                    adipisicing elit.Sit asperiories modi sit 
                    asperiories modi
                </p>
            </div>

            {/* body section */}

            <div className="grid grid-cols-1 sm:grid-cols-2
            md:grid-cols-3 gap-20 md:gap-5 place-items-center">
                {
                  TopRatedproducts.map((data)=>(
                    <div data-aos="zoom-in"
                    className="rounded-2xl bg-white dark:bg-gray-800
                    hover:bg-black/80 dark:hover:bg-primary
                    hover:text-white realtive shadow-xl duration-300
                    group max-w-[300px]" >

                        {/* Image section */}
                        <div className="h-[100px]">
                            <img src={data.img} className="max-w-[140px] 
                            block mx-auto transform -translate-y-20
                            group-hover:scale-105 duration-300 drop-shadow-md"/>
                        </div>
                        {/* details section */}
                        <div className="p-4 text-center">
                             {/* star rating */}
                             <div className="w-full flex justify-center gap-1">
                                <FaStar className="text-yellow-500"/>
                                <FaStar className="text-yellow-500"/>
                                <FaStar className="text-yellow-500"/>
                                <FaStar className="text-yellow-500"/>
                             </div>
                             <p className="text-gray-500 
                             group-hover:text-white duration-300
                             text-sm line-clamp-2">
                                {data.description}
                             </p>
                             <button className="bg-primary hover:scale-105
                             duration-300 text-white py-1 px-4 rounded-full mt-4
                             group-hover:text-primary "
                               onClick={handleOrderPopup} >
                                Order Now
                             </button>
                        </div>
                    </div>
                  ))  
                }
            </div>

        </div>
    </div>
  )
}

export default TopProducts