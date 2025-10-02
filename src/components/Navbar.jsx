import React,{useState} from 'react'
import Logo from '../assets/Logo.png'
import { Menu,X } from 'lucide-react'
import ResponsiveMenu from './ResponsiveMenu';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className='bg-amber-950 px-4 md:px-0 fixed w-full z-50 top-0'>
      <div className='max-w-7xl mx-auto flex justify-between items-center py-2'>
        {/* logo section */}
        <div className='flex items-center'>
          <img src={Logo} alt="" className='h-10 w-10' />
          <h1 className='text-white text-2xl font-cursive'>Pure Brew</h1>
        </div>
        {/* menu section */}
        <nav className='md:flex hidden items-center gap-7'>
          <ul className='flex gap-7 items-center text-xl font-semibold text-white'>
            <a href='/'><li className='cursor-pointer'>Home</li></a>
            <a href='#menu'><li className='cursor-pointer'>Menu</li></a>
            <a href='#about'><li className='cursor-pointer'>About</li></a>
            <a href='#testimonial'><li className='cursor-pointer'>Testimonial</li></a>
          </ul>
          <a href="#contact"><button className='bg-amber-900 hover:bg-amber-800 text-white rounded-md py-1 px-4'>Contact</button></a>
        </nav>
        {
          open ? <X onClick={()=>setOpen(false)}className='w-7 h-7 text-white md:hidden' /> : <Menu onClick={()=>setOpen(true)}className='w-7 h-7 text-white md:hidden' />
        }
      </div>
        <ResponsiveMenu open={open} setOpen={setOpen} />
    </div>
  )
}

export default Navbar
