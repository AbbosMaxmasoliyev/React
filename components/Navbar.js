import React,{useState} from 'react';
import {FaBars, FaTimes} from 'react-icons/fa'
import './Navbar.css'
import { icons } from 'react-icons';

const Navbar = () => {
const [click, setClik] = useState(false)
const handleClik = () => setClik(!click)







  return <div className='header'>
      <div className='container'>
          <h1>Var<span className='primary'>Ys</span></h1>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li>
                  <a href="/">Home</a>
              </li>
              <li>
                  <a href="/">Featured</a>
              </li>
              <li>
                  <a href="/">Earn</a>
              </li>
              <li>
                  <a href="/">Contact</a>
              </li>
          </ul>
       <div className='btn-group'>
           <button className='btn'>Connect Wallet </button>
       </div>
       {/* btn-group */}
       <div className="hamburger" onClick={handleClik}>
       {click ? (<FaTimes size={20} style={{color:'#333'}} />) :(<FaBars size={20} style={{color:'#333'}} />)}

      
       </div>
      </div>

  </div>;
};

export default Navbar;
