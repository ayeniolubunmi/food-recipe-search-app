import React from 'react';
import { useContext } from 'react';
import GlobalContext from '../context/StateContext';
import RecipeItem from '../components/RecipeItem'

const Favourites = () => {
  const{favoriteList}=useContext(GlobalContext);
  return (
    <div className='py-8 container flex justify-center flex-wrap gap-8 mx-auto'>
      {
        favoriteList && favoriteList.length > 0 ? favoriteList.map((item)=> <RecipeItem item={item}/>) : 
        <div>
          <div className='lg:text-4xl text-xl text-black font-semibold text-center'>
            Nothing is showing
          </div>
        </div>
      }
    </div>
  );
}

export default Favourites;
