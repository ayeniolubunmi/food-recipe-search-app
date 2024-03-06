import React, { useContext } from 'react';
import { GlobalContext } from '../context/StateContext';
import RecipeItem from '../components/RecipeItem';

const Home = () => {
  const{recipeList,loading}=useContext(GlobalContext)
  if(loading)return <div>Loading...please wait</div>
  return (
    <div className='py-8 container flex justify-center flex-wrap gap-8 mx-auto'>
      {
        recipeList && recipeList.length > 0 ? recipeList.map((item)=> <RecipeItem item={item}/>) : 
        <div>
          <div className='lg:text-4xl text-xl text-black font-semibold text-center'>
            Nothing show....please search something else
          </div>
        </div>
      }
    </div>
  );
}

export default Home;
