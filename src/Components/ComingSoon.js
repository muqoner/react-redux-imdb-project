import React, { Component } from 'react'
// import axios from 'axios'
import MovieView from './movieView'
import {searchKeyword} from '../actions/searchMovieAction';
import {connect} from 'react-redux';


class ComingSoon extends Component {
    
    componentDidMount(){
        const keyword="ComingSoon"
        this.props.comingSoon(keyword)
    }
    render() {
        return (
            <>
                <MovieView movies={this.props.movieOfKeyword} />  
            </>
        )
    }
}

const mapStateToProps=({movieOfKeyword})=>{
    return{
        movieOfKeyword
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        comingSoon: (keyword)=>dispatch(searchKeyword(keyword))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ComingSoon)
