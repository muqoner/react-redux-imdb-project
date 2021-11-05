import React, { Component } from 'react'
import {connect} from 'react-redux';
import {movieDetails} from '../actions/searchMovieAction';


class Details extends Component {
    
    componentDidMount(){
        this.props.getDetails(this.props.match.params.id)
    }

    render() {
        if(this.props.loading){
            return(
                <h3 className="text-primary">Loading...</h3>
            )
        }
        const {fullTitle,type,year,imDb} =this.props.movieDetails
            return (
                <div className="details-card">
                    <div className="card px-0">
                        <div className="row">
                            <div className="col-md-4">
                                <img src={this.props.movieImage} alt="movies" className="img-top img-fluid" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h6>Title: <span className="text-primary">{fullTitle}</span></h6>
                                    <hr />
                                    <h6>Type: <span className="text-primary">{type}</span></h6>
                                    <hr />
                                    <h6>Year: <span className="text-primary">{year}</span></h6>
                                    <hr />
                                    <h6>İmdb: <span className="text-primary">{imDb}</span></h6>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        
    ) 
        
    }
}

const mapStateToProps=({movieImage,movieId,movieDetails,loading})=>{
    return{
        movieImage,
        movieId,
        movieDetails,
        loading
    }
}

const mapDispatchToProps=dispatch=>{
    return{
        getDetails:(movieId)=>dispatch(movieDetails(movieId))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Details)
