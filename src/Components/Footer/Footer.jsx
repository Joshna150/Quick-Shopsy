import React from 'react'
import footerLogo from '../../assets/logo.png'
import Banner from '../../assets/website/footer-pattern.jpg'
import FooterLink from './FooterLink'

import {
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaLocationArrow,
    FaMobileAlt,
} from 'react-icons/fa'


const BannerImg={
    backgroundImage:`url(${Banner})`,
    backgroundPosition:"bottom",
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover",
    height:"100%",
    width:"100%",
};
const Footer = () => {
  return (
    <div style={BannerImg} className="text-white  ">
        <div className="container">
            <div data-aos="zoom-in" className="grid md:grid-cols-3 pb-14 pt-5">
                {/* company details */}
                <div className="py-8 px-4">
                    <div className="flex items-center gap-3 mb-3">
                        <img src={footerLogo} alt=""
                        className="max-w-[50px]"/>
                        <h1 className="sm:text-3xl text-xl 
                        font-bold sm:text-left text-justify">
                             Shopsy
                        </h1>
                    </div>                   
                    <p>
                        Lorem ipsum dolor sit amet consectetur
                        adipiscicing elit.Cum in beatae ee
                        recusandae blandititis vertatis
                    </p>                  
                </div>
                 {/* Footer Links */}
                 <div className="grid grid-cols-2 sm:grid-cols-3
                 col-span-2 md:pl-10">
                    <div>
                        <div className="py-8 px-4 ">
                            <h1 className="sm:text-3xl text-xl
                            font-bold sm:text-left text-justify mb-3">
                                Important Links
                            </h1>
                            <ul className="flex flex-col gap-3">
                                {
                                    FooterLink.map((link)=>(
                                        <li className="cursor-pointer 
                                        hover:text-primary hover:translate-x-1
                                        duration-300 text-gray-200" key={link.title}>
                                            <span>
                                                {link.title}
                                            </span>
                                        </li>   
                                    ))
                                }
                            </ul>
                        </div>
                    </div>

                     <div>
                        <div className="py-8 px-4 ">
                            <h1 className="sm:text-3xl text-xl
                            font-bold sm:text-left text-justify mb-3">
                               Links
                            </h1>
                            <ul className="flex flex-col gap-3">
                                {
                                    FooterLink.map((link)=>(
                                        <li className="cursor-pointer 
                                        hover:text-primary hover:translate-x-1
                                        duration-300 text-gray-200" key={link.title}>
                                            <span>
                                                {link.title}
                                            </span>
                                        </li>   
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
    
                   {/* social Links */}
                   <div>
                    <div className="flex items-center gap-3
                    mt-6">
                        <a href="#">
                            <FaInstagram className="text-3xl" />
                        </a>
                        <a href="#">
                            <FaFacebook className="text-3xl" />
                        </a>
                        <a href="#">
                            <FaLinkedin className="text-3xl" />
                        </a>
                    </div>
                    <div className="mt-6">
                        <div className="flex items-center gap-3">
                            <FaLocationArrow/>
                            <p>Nodia,Uttar Pradesh</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <FaMobileAlt/>
                            <p>+91 123456789</p>
                        </div>
                    </div>
                   </div>
                 </div>
            </div>
        </div>
    </div>
  )
}

export default Footer