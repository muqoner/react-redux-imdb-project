import axios from "axios"


const apiKey="k_51h0ljh4"

export const searchMovie =(movieName)=>{
    return dispatch=> {
        dispatch({type:"LOADING",payload:true})
        axios.get(`https://imdb-api.com/API/Search/${apiKey}/${movieName}`)
            .then(res=>{
                if(res.data.results.length > 0){
                    dispatch({type:"SEARCH_MOVIE",payload:{image:res.data.results[0].image,id:res.data.results[0].id}})
                }else{
                    alert("movie not found")
                }
            })
    }
}

export const movieDetails =(movieId)=>{
    return dispatch=>{
        dispatch({type:"LOADING",payload:true})
        axios.get(`https://imdb-api.com/en/API/Ratings/${apiKey}/${movieId}`)
            .then(res=>{
                dispatch(({type:"MOVIE_DETAILS",payload:res.data}))
            })
    }
}

export const searchKeyword =(keyword)=>{
    return dispatch=>{
        dispatch({type:"LOADING",payload:true})
        axios.get(`https://imdb-api.com/en/API/${keyword}/${apiKey}`)
            .then(res=>dispatch({type:"SEARCH_KEYWORD",payload:res.data.items}))
    }
}

export const searchCategory =(category)=>{
    return dispatch=>{
        dispatch({type:"LOADING",payload:true})
        axios.get(`https://imdb-api.com/en/API/Keyword/${apiKey}/${category}`)
            .then(res=>dispatch({type:"SEARCH_CATEGORY",payload:res.data.items}))
    }
}
