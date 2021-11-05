import React, { Component } from 'react'
import MovieView from './movieView'
import {connect} from 'react-redux';
import {searchCategory} from '../actions/searchMovieAction';



class Categories extends Component {
    
    componentDidMount(){
            this.props.getCategory(this.props.match.params.category)
        }
    componentDidUpdate(prevProps) {
        if (this.props.match.params.category !== prevProps.match.params.category) {
            this.props.getCategory(this.props.match.params.category)
        }
    }
    
    render() {
        
        return (
            <div>
                <MovieView  keyWord={this.props.match.params.category} movies={this.props.movies} />
            </div>
        )
    }
}
const mapStateToProps=({movieOfCategory},ownProps)=>{
    return{
        movies: movieOfCategory,
        ownProps
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        getCategory:(category)=>dispatch(searchCategory(category))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Categories);
