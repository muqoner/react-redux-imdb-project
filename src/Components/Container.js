import React, { Component } from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Navbar from './Navbar'
import ListGroup from './ListGroup'
import Search from './Search'
import Movie from './Movie'
import Details from './Details'
import ComingSoon from './ComingSoon'
import Top250 from './Top250'
import BoxOffice from './BoxOffice'
import Categories from './Categories'
import NotFound from './NotFound'
import {connect} from 'react-redux';
import {searchMovie} from '../actions/searchMovieAction';


class Container extends Component {
    
    componentDidMount(){
        this.setState({apiKey:"k_2hco2jzn"})
    }

    searchMovie=(movieName)=>{
        if(movieName !==""){
            this.setState({isLoading:true})
            this.props.getMovie(movieName)
        }
    }

    render() {
        return (
            <BrowserRouter>
                <Navbar/>
                <div className="container my-2">
                    <div className="row">
                        <Route path="/" render={props=>(
                            <ListGroup {...props}/>
                        )} />
                            
                        <div className="col-md-9">
                            <Search searchMovie={this.searchMovie} />
                            {/* {this.state.isLoading?<h6>Loading...</h6>:""} */}
                            <div className="row my-2">
                                <Switch>
                                    <Route exact path="/" component={Movie}/>
                                    <Route exact path="/details/:id" component={Details}/>
                                    <Route exact path="/comingsoon" component={ComingSoon}/>
                                    <Route exact path="/top250" component={Top250} />
                                    <Route exact path="/boxoffice" component={BoxOffice}/>
                                    <Route exact strict path="/categories/:category" component={Categories}/>
                                    <Route component={NotFound} />
                                </Switch>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </BrowserRouter>
        )
    }
}
const mapStateToProps=(state)=>{
    return{
        
    }
}
const mapDispatchToProps=dispatch=>{
    return{
        getMovie:(movieName)=>{
            dispatch(searchMovie(movieName))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Container)
