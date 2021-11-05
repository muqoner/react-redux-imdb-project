import React, { Component } from 'react'
import MovieView from './movieView'
import {connect} from 'react-redux';
import {searchKeyword} from '../actions/searchMovieAction';

class TopTen extends Component {
   
    componentDidMount(){
        this.props.getTopTen("Top250Movies")
    }
    render() {
        if(this.props.loading){
            return (
                <h3 className="text-primary">Loading...</h3>
            )
        }
        return (
            <div>
                <MovieView movies={this.props.top250} />
            </div>
        )
    }
}

const mapStateToProps=({movieOfKeyword,loading})=>{
    return{
        top250: movieOfKeyword,
        loading
    }
}
const mapDispatchToProps=dispatch=>{
    return{
        getTopTen:(keyword)=>dispatch(searchKeyword(keyword))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TopTen)
