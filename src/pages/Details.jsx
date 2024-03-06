import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../context/StateContext';
import { useParams } from 'react-router';

const Details = () => {
const{recipeDetailData, 
  setRecipeDetailData, 
  favoriteList, 
  handleAddToFavorite} = useContext(GlobalContext);
  const id = useParams();
  useEffect(()=>{
    const getRecipeDetails=async()=>{
      try {
        const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`)
        const data = await response.json();
        console.log(data);
        if(data?.data){
          setRecipeDetailData(data?.data)
        }
      } catch (error) {
      }
    }
    getRecipeDetails();
  },[]);
  console.log(recipeDetailData,'recipe details')
  return (
    <div className='container mx-auto py-10 gird grid-cols-1 lg:grid-cols-2 gap-10'>
      <div className='row-start-2 lg:row-start-auto'>
        <div className='h-96 overflow-hidden rounded-xl group'>
          <img src={recipeDetailData?.recipe?.image_url} alt="" className='h-full w-full block object-cover group-hover:scale-105 duration-300' />
        </div>
      </div>
      <div className='flex flex-col gap-3'>
        <span className='text-sm text-cyan-300 font-medium'>{recipeDetailData?.recipe?.publisher}</span>
        <h3 className='font-bold text-2xl truncate text-black'>{recipeDetailData?.recipe?.title}</h3>
      </div>
      <div>
        <button onClick={()=>handleAddToFavorite(recipeDetailData?.recipe)}
        className='tracking-wider p-3 bg-black text-sm text-white rounded-xl outline-none uppercase font-medium px-8'>
          {favoriteList && favoriteList.length > 0 && 
          favoriteList.findIndex((item)=>item.id === recipeDetailData?.recipe?.id) !==-1 ?
          "Remove from favorite":"Add to favorite"}
        </button>
      </div>
      <div className=''>
        <span className='text-2xl font-semibold text-black'>Ingredients: </span>
        <ul className='flex flex-col gap-3'>
          {recipeDetailData?.recipe?.ingredients((ingredient)=> <li>
            <span className='text-2xl font-semibold text-black'>{ingredient.quantity} {ingredient.unit}</span>
            <span className='text-2xl font-semibold text-black'>{ingredient.description}</span>
          </li>)}
        </ul>
      </div>
    </div>
  );
}

export default Details;
