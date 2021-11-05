
const initialState={
    movieImage:"",
    movieId:"",
    movieDetails:{},
    movieOfKeyword:[],
    movieOfCategory:[],
    loading:false
}

const movieReducers=(state=initialState,action)=>{
    switch(action.type){
        case "LOADING":
            return{
                ...state,
                loading:action.payload
            }
        case "SEARCH_MOVIE":
            state.loading= true
                return{
                    ...state,
                    movieImage:action.payload.image,
                    movieId:action.payload.id,
                    loading: false
                }
            
            
        case "MOVIE_DETAILS":
            return{
                ...state,
                movieDetails:action.payload,
                loading:false
            }
        case "SEARCH_KEYWORD":
            return{
                ...state,
                movieOfKeyword: action.payload,
                loading:false
            }   
        case "SEARCH_CATEGORY":
            return{
                ...state,
                movieOfCategory:action.payload,
                loading:false
            }
        default:
            return state
    }
}

export default movieReducers