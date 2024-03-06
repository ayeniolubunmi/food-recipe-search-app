import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { GlobalContext } from '../context/StateContext';

const NavBar = () => {
  const {searchParam, setSearchParam,handleSubmit }=useContext(GlobalContext);
  return (
    <nav className='flex justify-between items-center py-8 container flex-col mx-auto gap-5 lg:flex-row lg:gap-0'>
      <h2 className='text-2xl font-semibold'>
          <NavLink to='/'>FoodRecipe</NavLink>
      </h2>
      <form onSubmit={handleSubmit}>
        <input 
        type="text" 
        name='search' 
        placeholder='Enter item...'
        value={searchParam}
        onChange={(e)=>setSearchParam(e.target.value)}
        className='bg-white/75 p-3 px-8 outline-none lg:w-96 shadow-lg rounded-full shawdow-red-100 focus:shadow-red-200' />
      </form>
      <ul className='flex gap'>
        <li>
          <NavLink to='/' className='text-black hover:text-gray-600 duration-300 mr-2'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/favorites' className='text-black hover:text-gray-600 duration-300'>Favorites</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
