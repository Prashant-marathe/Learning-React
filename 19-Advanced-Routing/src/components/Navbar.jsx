import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between px-6 py-4 bg-blue-500 text-white mb-4'>
        <h1 className="text-xl font-bold" >Prince</h1>
        <div className='flex gap-6'>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/courses'>Courses</Link>
            <Link to='/product'>Product</Link>
        </div>
    </div>
  )
}

export default Navbar