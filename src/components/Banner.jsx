import React from 'react';
import CountUp from 'react-countup';
import { FaFacebook, FaGithub, FaHeart, FaInstagram, FaLinkedin } from "react-icons/fa";
import Rotate from 'react-reveal/Rotate';
import { Typewriter } from 'react-simple-typewriter';
import img1 from '../assets/MYXJ_20221019174719215_save(1).jpg';





const Banner = () => {
    return (
      



        <div  style={{ background: 'linear-gradient(90deg, #07233B 1.67%, #041D34 39.95%, #04192D 58.24%, #040E18 80.28%, #050C16 101.48%)' }} className=" min-h-96 p-5 mx-auto  mt-10">
            <div className="lg:flex space-y-10 lg:space-y-0 lg:space-x-10 items-center justify-center ">
                <div className='relative'>

                    <img src={img1} className=" h-96 rounded-lg shadow-2xl" />

                    <div className='bg-purple-800 bg-opacity-50 text-white p-2 py-3 rounded-lg absolute top-60 shadow-2xl'> <p className='flex items-center'><FaHeart className='text-red-500 mr-2'></FaHeart> Projects</p>

                        <h3 className='text-2xl  font-bold whitespace-nowrap'> <CountUp start={0} end={50} ></CountUp>+ projects</h3> </div>


                    {/* <div className='absolute right-0 bottom-20 flex items-center  bg-white p-2 py-3 rounded-lg'>

                        <p className='flex items-center font-bold'> <FaCircle className='mr-2 text-green-700 '></FaCircle> MERN Stack Developer</p>
                    </div> */}


                </div>

                <div className='text-white space-y-3 max-w-lg'>
                    <h1 className="text-3xl font-bold">Hi 👋 I'm Abdullah Al Mamun Shovo</h1>
                    <h1 className='text-3xl font-bold h-10' style={{ margin: 'auto 0' }}>
                        I am a{' '}
                        <span className='text-red-400' style={{ fontWeight: 'bold' }}>
                            {/* Style will be inherited from the parent element */}
                            <Typewriter
                                words={['WEB DEVELOPER', 'MERN STACK DEVELOPER', 'FRONT-END DEVELOPER']}
                                loop={false}
                                cursor
                                cursorStyle='_'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}

                            />
                        </span>
                    </h1>                    <p className="py-6">I have a strong set of technical skills, a problem-solving mindset, great teamwork abilities, a love for learning, keen attention to detail, and a strong commitment to my work.</p>


                    <div>
                        <p className='text-gray-300'>FIND WITH ME</p>

                        <Rotate top left>


                            <div className='flex  space-x-2 my-2'>
                                <button className=' flex justify-center items-center btn-circle bg-purple-800 border-0 text-white shadow-2xl hover:bg-transparent  '>

                                    <a href="https://www.linkedin.com/in/sahriar-shovo-826035179/"> <FaLinkedin className='text-xl'></FaLinkedin></a>
                                </button>
                                <button className=' flex justify-center items-center btn-circle bg-purple-800 border-0 text-white shadow-2xl hover:bg-transparent'>

                                    <a href="https://github.com/shovo123"> <FaGithub className='text-xl'></FaGithub></a>
                                </button>
                                <button className=' flex justify-center items-center btn-circle bg-purple-800 border-0 text-white shadow-2xl hover:bg-transparent'>

                                    <a href="https://www.facebook.com/shovo.shovo.92167"> <FaFacebook className='text-xl'></FaFacebook></a>
                                </button>

                                <button className=' flex justify-center items-center btn-circle bg-purple-800 border-0 text-white shadow-2xl hover:bg-transparent'>

                                    <a href="https://www.instagram.com/sahriarshovo/"> <FaInstagram className='text-xl'></FaInstagram></a>
                                </button>



                            </div>
                        </Rotate>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;