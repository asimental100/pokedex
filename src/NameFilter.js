import React from 'react';
import request from 'superagent';
import { PokemonItem } from './PokemonItem.js';
import './NameFilter.css';

export class NameFilter extends React.Component {
    state = { 
      search: '',
      searchBy: 'pokemon',
      pokeState: []
    }
  
    handleSearchInput = async () => {
      const data = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?perPage=801&${this.state.searchBy}=${this.state.search}`);
  
      this.setState({ 
        pokeState: data.body.results
       })
    }

    render() {
      return (
        <header>
          <section>
            <div className='labelDiv'>
              <label>
                  Search The Pokedex!
                  <input type='text' placeholder='Search Here!' onChange={(e) => this.setState({ search: e.target.value})} />
                  <p>Search By:</p>
                  <select onChange={(e) => { this.setState({ searchBy: e.target.value })} }>
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
                    this.state.pokeState.map(creature => <PokemonItem key={creature.pokemon} name={creature.pokemon} image={creature.url_image} type1={creature.type_1} type2={creature.type_2} attack={creature.attack} defense={creature.defense} hp={creature.hp} id={creature._id}/>)
                }
            </ul>
          </section>
        </header>
      );
    }
  }
