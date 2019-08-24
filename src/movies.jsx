import React, { Component } from "react";
import { getMovies } from "./services/fakeMovieService";

class Movies extends Component {
  state = { movies: getMovies() };

  handleDelete = movie => {
    const movies = this.state.movies.filter(m => m._id !== movie._id);
    this.setState({ movies });
    // Second Method;
    // deleteMovie(movie._id);
    // this.setState({ movies: getMovies() });
  };
  render() {
    return (
      <div>
        <h1 className="text-center m-2 ">This is the Movies Component</h1>
        <p className="mt-4">
          Currently showing {this.state.movies.length} Movies elements
        </p>
        <table className="table">
          <thead>
            <th>Title</th>
            <th>Genre</th>
            <th>Stock</th>
            <th>Rate</th>
            <th />
          </thead>
          <tbody>
            {this.state.movies.map(movie => (
              <tr key="movie._id">
                <td key={movie.title}>{movie.title}</td>
                <td key={movie.genre.name}>{movie.genre.name}</td>
                <td key={movie.numberInStock}>{movie.numberInStock}</td>
                <td key={movie.dailyRentalRate}>{movie.dailyRentalRate}</td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => this.handleDelete(movie)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Movies;
