import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';
import {movieDetails} from '../actions/searchMovieAction';

class Movie extends Component {
    
    render() {
        // console.log(this.props.loading)
        if(this.props.loading){
            return(
                <h3 className="text-primary">Loading...</h3>
            )
        }
        if(this.props.movieImage !==""){
            return (
                <div className="col-md-4">
                    <div className="card">
                        <img src={this.props.movieImage} alt="movies" className="card-img-top img-fluid"/>
                        <div className="card-footer p-0">
                            <Link to={`/details/${this.props.movieId}`} className="btn btn-primary btn-sm w-100 m-0 " >Go Details</Link>
                        </div>
                    </div>
                </div>
            )
        }else{
            return(
                <div></div>
            )
        }
        
    }
}
const mapStateToProps=({movieImage,movieId,loading})=>{
    return{
        movieImage,
        movieId,
        loading
    } 
}
const mapDispatchToProps=(dispatch)=>{
    return{
        getDetails:(movieId)=> dispatch(movieDetails(movieId))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Movie);
