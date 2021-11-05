import React, { Component } from 'react'
import {connect} from 'react-redux';
import {searchKeyword} from '../actions/searchMovieAction';

export class BoxOffice extends Component {
    componentDidMount(){
        this.props.getBoxOffice("BoxOfficeAllTime")
    }
    render() {
        return (
            <div>
                <table className="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Year</th>
                            <th>World Wide Life Time Gross</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.boxOffice.map(movie=>(
                            <tr key={movie.id}>
                                <td className="w-50"><h6>{movie.title}</h6></td>
                                <td className="w-20"><h6>{movie.year}</h6></td>
                                <td className="w-30"><h6>{movie.worldwideLifetimeGross}</h6></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps=({movieOfKeyword})=>{
    return {
        boxOffice:movieOfKeyword
    }
}
const mapDispatchToProps=(dispatch=>{
    return{
        getBoxOffice:(keyword)=> dispatch(searchKeyword(keyword))
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(BoxOffice)
