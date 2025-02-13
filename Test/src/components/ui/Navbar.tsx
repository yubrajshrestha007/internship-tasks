import { Link, BrowserRouter, Routes, Route } from 'react-router-dom';
import {About} from './About';
import HomePage from './Homepage';
// import Home from './Home';
// import Contact from './Contact';
// import Services from './Services';
// import Project from './Project';

const navLinks = [
  { to: '/', text: 'Home' },
  { to: '/about', text: 'About' },
  { to: '/contact', text: 'Contact' },
  { to: '/services', text: 'Services' },
  { to: '/project', text: 'Project' },
];

const Navbar = () => {
  return (
      <nav className='bg-green-200'>
        <div className="h-10vh flex justify-between z-50 text-black lg:py-5 px-20 py-4">
          <div className="flex items-center flex-1">
            <span className="text-3xl font-bold">logo</span>
          </div>
          <div className="lg:flex md:flex lg:flex-1 items-center justify-end font-normal hidden">
            <ul className="flex gap-8 mr-16 text-[18px]">
              {navLinks.map((link, index) => (
                <li key={index}>
                  {link.text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
  );
};

export default Navbar;
