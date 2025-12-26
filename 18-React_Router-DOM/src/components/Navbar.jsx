import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
      <nav className="flex bg-green-500 text-white items-center justify-between px-8 py-2">
        <h2 className="font-semibold text-2xl text-red-800 underline">Prince</h2>
        <div className="flex items-center gap-6">
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
