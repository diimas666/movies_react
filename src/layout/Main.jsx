import { Component } from 'react';
import { Movies } from '../components/Movies';
import { Preloader } from '../components/Preloader';
import { Search } from '../components/Search';

const API_KEY = process.env.REACT_APP_API_KEY;
class Main extends Component {
  state = {
    movies: [],
    loading: true
  };

  componentDidMount() {
    fetch(`https://www.omdbapi.com/?s=matrix&apikey=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search, loading: false }))
      .catch((err)=> {
        console.error(err);
        this.setState({loading: false})
      })
  }
  searchMovies = (str, type = 'all') => {
    this.setState({loading: true});
    fetch(`https://www.omdbapi.com/?s=${str}&apikey=${API_KEY}${type !== 'all'? `&type=${type}`: ''}`)
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search, loading: false }))
      .catch((err)=> {
        console.error(err);
        this.setState({loading: false})
      })
  }
  render() {
    const { movies, loading } = this.state;
    return (
      <main className="content container">
        <Search searchMovies={this.searchMovies} />
        {loading ? (
          <Preloader />
        ) : (
          <Movies movies={movies} />
        )}
      </main>
    );
  }
}

export { Main };
