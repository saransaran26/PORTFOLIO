import React, { useState } from 'react'
import {
    FaBars,
    FaTimes,
    FaLinkedin,
    FaGithub,
  } from 'react-icons/fa';

import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import { Link } from 'react-scroll';

function Navbar() {
    const[navs,setnavs] = useState(false)

    const menuClick = () => {
      console.log("Clicked");
      setnavs(!navs)
    }
  
    return (
      <div className='w-full bg-[#0a192f] h-[80px] fixed flex justify-between items-center text-gray-300 px-10 md:px-24'>
        <div>
          <h1 className='text-3xl text-[#8892b0] uppercase font-bold font-body'>Portfolio</h1>
        </div>
        <ul className='hidden md:flex space-x-8'>
          <li className='cursor-pointer text-xl hover:border-b-4 border-white'>
          <Link to='home' smooth={true} duration={500}>
            Home
          </Link>
          </li>
          <li className='cursor-pointer text-xl hover:border-b-4 border-white'>
          <Link to='about' smooth={true} duration={500}>
            About
          </Link>
          </li>
          <li className='cursor-pointer text-xl hover:border-b-4 border-white'>
          <Link to='skills' smooth={true} duration={500}>
            Skills
          </Link>
          </li>
          <li className='cursor-pointer text-xl hover:border-b-4 border-white'>
          <Link to='work' smooth={true} duration={500}>
            Work
          </Link>
          </li>
          <li className='cursor-pointer text-xl hover:border-b-4 border-white'>
          <Link to='contact' smooth={true} duration={500}>
            Contact
          </Link>
          </li>
        </ul>
   <div onClick={menuClick} className='md:hidden z-10'>
          {!navs ? <FaBars /> : <FaTimes />}
        </div>
  
  
  <ul className={!navs ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center space-y-7'}>
          <li className='cursor-pointer text-xl hover:border-b-4 border-white'>
          <Link to='home' smooth={true} duration={500}>
            Home
          </Link>
          </li>
          <li className='cursor-pointer text-xl hover:border-b-4 border-white'>
          <Link to='about' smooth={true} duration={500}>
            About
          </Link>
          </li>
          <li className='cursor-pointer text-xl hover:border-b-4 border-white'>
          <Link to='skills' smooth={true} duration={500}>
            Skills
          </Link>
          </li>
          <li className='cursor-pointer text-xl hover:border-b-4 border-white'>
          <Link to='work' smooth={true} duration={500}>
            Work
          </Link>
          </li>
          <li className='cursor-pointer text-xl hover:border-b-4 border-white'>
          <Link to='contact' smooth={true} duration={500}>
            Contact
          </Link>
          </li>
        </ul>
  
        {/* social media */}
  
        <div className='hidden lg:flex flex-col fixed top-[35%] left-0'>
          <ul>
            <li className='w-[150px] h-[60px] bg-blue-600 flex justify-between items-center ml-[-100px] hover:ml-[-1px] duration-150'>
                <a href="https://www.linkedin.com/in/saran-chakravarthy-r-5752a5276/" target="_blank" className='flex justify-between items-center w-full text-gray-300 ml-2 text-xl'>Linkdin <FaLinkedin size={30}/></a>
            </li>
          </ul>
          <ul>
            <li className='w-[150px] h-[60px] bg-[#333333] flex justify-between items-center ml-[-100px] hover:ml-[-1px] duration-150'>
                <a href="https://github.com/saransaran26" className='flex justify-between items-center w-full text-gray-300 ml-2 text-xl' target="_blank">Github <FaGithub size={30}/></a>
            </li>
          </ul>
          <ul>
            <li className='w-[150px] h-[60px] bg-[#6fc2b0] flex justify-between items-center ml-[-100px] hover:ml-[-1px] duration-150'>
                {/* <a href="" className='flex justify-between items-center w-full text-gray-300 ml-2 text-xl' target="_blank">Email <HiOutlineMail size={30}/></a> */}
                <Link to='contact' smooth={true} duration={500} className='flex justify-between items-center w-full text-gray-300 ml-2 text-xl' target="_blank">
            Email <HiOutlineMail size={30}/>
          </Link>
            </li>
          </ul>
          <ul>
            <li className='w-[150px] h-[60px] bg-[#565f69] flex justify-between items-center ml-[-100px] hover:ml-[-1px] duration-150'>
                <a href="https://drive.google.com/file/d/1_M53sM6NwF6Bjz_POdHJcslgQfuwIktN/view?usp=sharing" target="_blank" className='flex justify-between items-center w-full text-gray-300 ml-2 text-xl'>Resume <BsFillPersonLinesFill size={30}/></a>
            </li>
          </ul>
        </div>
  
        
        </div>
    )
  }

export default Navbar