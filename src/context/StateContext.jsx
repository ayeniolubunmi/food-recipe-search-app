import { createContext, useState } from "react";

export const GlobalContext=createContext(null)

export default function GlobalState({children}){
    const [searchParam, setSearchParam]=useState("");
    const [loading, setLoading]=useState(false);
    const [recipeList, setRecipeList]=useState([]);
    const [recipeDetailData, setRecipeDetailData]=useState(null);
    const [favoriteList, setFavoriteList]=useState([]);
    const handleSubmit=async(event)=>{
        event.preventDefault()
        try {
            const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`)
            const data = await response.json();
            if(data?.data?.recipes){
                setRecipeList(data?.data?.recipes)
                setLoading(false);
                setSearchParam('')
            }
            console.log(data);
        } catch (error) {
                setLoading(false);
                setSearchParam('')
        }

    }
    console.log(loading,recipeList);

    const handleAddToFavorite=(getCurrentItem)=>{
        let cpyFavorite = [...favoriteList]
        const index = cpyFavorite.findIndex((item)=>item.id===getCurrentItem.id);
        if(index===-1){
            cpyFavorite.push(getCurrentItem)
        }else{
            cpyFavorite.splice(index);
        }
        setFavoriteList(cpyFavorite);
    }
    return <GlobalContext.Provider value={{searchParam,
    loading, 
    recipeList, 
    setSearchParam, 
    handleSubmit,
    recipeDetailData,
    handleAddToFavorite,
    favoriteList, 
    setRecipeDetailData}}>
        {children}</GlobalContext.Provider>
}