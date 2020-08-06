import React from 'react';
import request from 'superagent';
import { PokemonItem } from './PokemonItem.js';
import './NameFilter.css';

export class NameFilter extends React.Component {
    state = { 
      search: '',
      num: 0,
      pokeState: []
    }
  
    handleNameInput = async () => {
      const data = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?perPage=801&pokemon=${this.state.search}`);
  
      this.setState({ 
        pokeState: data.body.results
       })
    }

    handleType1Input = async () => {
      const data = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?perPage=801&type_1=${this.state.search}`);
  
      this.setState({ 
        pokeState: data.body.results
       })
    }

    handleType2Input = async () => {
      const data = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?perPage=801&type_2=${this.state.search}`);
  
      this.setState({ 
        pokeState: data.body.results
       })
    }

    handleAttackInput = async () => {
      const data = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?perPage=801&attack=${this.state.num}`);
  
      this.setState({ 
        pokeState: data.body.results
       })
    }

    handleDefenseInput = async () => {
      const data = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?perPage=801&attack=${this.state.num}`);
  
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
                    Search Pokemon by Name!
                    <input type='text' placeholder='Search Pokemon by Name' onChange={(e) => this.setState({ search: e.target.value})} />
                    <button onClick={this.handleNameInput}>Search!</button>
              </label>
              <label>
                    Search by 1st Type!
                    <input type='text' placeholder='Search Pokemon by Type' onChange={(e) => this.setState({ search: e.target.value})} />
                    <button onClick={this.handleType1Input}>Search!</button>
              </label>
              <label>
                    Search by 2nd Type!
                    <input type='text' placeholder='Search Pokemon by Type' onChange={(e) => this.setState({ search: e.target.value})} />
                    <button onClick={this.handleType2Input}>Search!</button>
              </label>
              <label>
                    Search by Min Attack!
                    <input type='number' placeholder='Search Pokemon by Type' onChange={(e) => this.setState({ num: e.target.value})} />
                    <button onClick={this.handleAttackInput}>Search!</button>
              </label>
              <label>
                    Search by Min Defense!
                    <input type='number' placeholder='Search Pokemon by Type' onChange={(e) => this.setState({ num: e.target.value})} />
                    <button onClick={this.handleDefenseInput}>Search!</button>
              </label>
            </div>
            <ul>
                {                
                    this.state.pokeState.map(creature => <PokemonItem key={creature.pokemon} name={creature.pokemon} image={creature.url_image} type1={creature.type_1} type2={creature.type_2} attack={creature.attack} defense={creature.defense} hp={creature.hp} />)
                }
            </ul>
          </section>
        </header>
      );
    }
  }
