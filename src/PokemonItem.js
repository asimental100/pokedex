import React from 'react';
import './PokemonItem.css';

export class PokemonItem extends React.Component {
    render() {
        return (
            <li className="pokemon-item">
                <p>Name: {this.props.name}</p>
                <img src={this.props.image} alt={this.props.alt}/>
                <p>Type 1: {this.props.type1}</p>
                <p>Type 2: {this.props.type2}</p>
                <p>Attack: {this.props.attack}</p>
                <p>Defense: {this.props.defense}</p>
                <p>HP: {this.props.hp}</p>
            </li>
        )
    }
}