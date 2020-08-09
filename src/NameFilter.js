import React from 'react';
import request from 'superagent';
import { PokeList } from './PokemonList.js';
import './NameFilter.css';

export class NameFilter extends React.Component {
  state = { 
    search: '',
    searchBy: 'pokemon',
    pokeState: [],
    currentPage: 1,
    totalPages: 1
  }

  makeRequest = async () => {
    
    const data = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?page=${this.state.currentPage}&perPage=20&${this.state.searchBy}=${this.state.search}`);

    await this.setState({ 
      pokeState: data.body.results,
      totalPages: Math.ceil(data.body.count / 20)
     })

     const params = new URLSearchParams(this.props.location.search);

     params.set('search', this.state.search);
     params.set('searchBy', this.state.searchBy);
     params.set('page', this.state.currentPage);


     this.props.history.push('?' + params.toString())
  }

  componentDidMount = async () => {
    const params = new URLSearchParams(this.props.location.search);

    const searchBy = params.get('searchBy');
    const page = params.get('page');
    const search = params.get('search');

    if (searchBy && page && search) {
      await this.setState({
        searchBy: searchBy,
        currentPage: page,
        search: search
      });
    }
    await this.makeRequest()
  }

  handleSearchInput = async (e) => {
    e.preventDefault();

    await this.setState({
      currentPage: 1
    })
    await this.makeRequest()
  }

  handleNextClick = async () => {
    await this.setState({ currentPage: this.state.currentPage + 1 })

    await this.makeRequest();
  }

  handlePrevClick = async () => {
    await this.setState({ currentPage: this.state.currentPage - 1 })

    await this.makeRequest();
  }

  render() {    
    return (
      <header>
        <section>
          <div className='labelDiv'>
              <label>
                  Search The Pokedex!
                  <input type='text' placeholder='Search Here!' value={this.state.search} onChange={(e) => this.setState({ search: e.target.value})} />
                  <p>Search By:</p>
                  <select value={this.state.searchBy} onChange={(e) => { this.setState({ searchBy: e.target.value })} }>
                    <option value='pokemon'>Name</option>
                    <option value='type_1'>Type 1</option>
                    <option value='type_2'>Type 2</option>
                    <option value='attack'>Min. Attack</option>
                    <option value='defense'>Min. Defense</option>
                    <option value='hp'>Min. HP</option>
                    <option value='weight'>Min. Weight</option>
                    <option value='height'>Min. Height</option>
                    <option value='shape'>Shape</option>
                    <option value='ability_1'>1st Ability</option>
                    <option value='ability_2'>2nd Ability</option>
                    <option value='ability_hidden'>Hidden Ability</option>
                    <option value='egg_group_1'>1st Egg Group</option>
                    <option value='egg_group_2'>2nd Egg Group</option>
                  </select>
                  <button onClick={this.handleSearchInput}>Search!</button>
              </label>
          </div>
          <ul>
          {
            <PokeList handleNextClick={this.handleNextClick} handlePrevClick={this.handlePrevClick} currentPage={this.state.currentPage} pokeState={this.state.pokeState} totalPages={this.state.totalPages}/>
          }
          </ul>
        </section>
      </header>
    );
  }
}