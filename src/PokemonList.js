import React, { Component } from 'react'
import './NameFilter.css';
import { PokeItem } from './PokemonItem.js';

export class PokeList extends Component {
    render() {
        const { 
            pokeState, 
            handleNextClick, 
            handlePrevClick,
            currentPage,
            totalPages
         } = this.props;

        return (
            <div>
                {
                    pokeState.length > 0 && 
                        <div className='pageDiv'>
                            {
                                Number(currentPage) !== 1 
                                && <button className='pageButtons' onClick={handlePrevClick}>Prev</button>
                            }
                            <p className='page'>Page {currentPage} of {totalPages}</p>
                            {
                                Number(currentPage) !== Number(totalPages) &&
                                <button className='pageButtons' onClick={handleNextClick}>Next</button>
                            }
                        </div>
                }
            <ul>
                {                
                    this.props.pokeState.reverse().map(creature => <PokeItem key={creature.pokemon} name={creature.pokemon} image={creature.url_image} type1={creature.type_1} type2={creature.type_2} attack={creature.attack} defense={creature.defense} hp={creature.hp} id={creature._id}/>)
                }
            </ul>
            </div>
        )
    }
}