import React from 'react';
import { Link } from 'react-router-dom';

const RecipeItem = ({item}) => {
  return (
    <div className='flex flex-col w-80 shadow-xl gap-5 overflow-hidden bg-white/75 p-5 border-2 rounded-2xl border-white'> 
        <div className='h-40 justify-center overflow-hidden items-center flex rounded-xl'>
            <img src={item?.image_url} alt="recipe-item" className='block w-full'/>
        </div>
        <div>
            <span className='text-sm text-cyan-400 font-medium'>{item?.publisher}</span>
            <h3 className='font-bold text-2xl truncate text-black'>{item?.title}</h3>
            <Link to={`/recipe-item/${item?.id}`} className='bg-black text-white py-3 px-8 mt-4 text-sm uppercase shadow-lg rounded-lg font-medium tracking-wider inline-block'>Recipe details</Link>
        </div>
    </div>
  );
}

export default RecipeItem;
