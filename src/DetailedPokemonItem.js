import React from 'react';
import './DetailedPokemonItem.css';

export class DetailedPokemonItem extends React.Component {
    render() {
        return (
            <li className="detailed-pokemon-item">
                <h3>Name: {this.props.name}</h3>
                <img src={this.props.image} alt={this.props.name}/>
                <p>Type 1: {this.props.type1}</p>
                <p>Type 2: {this.props.type2}</p>
                <p>Attack: {this.props.attack}</p>
                <p>Defense: {this.props.defense}</p>
                <p>HP: {this.props.hp}</p>
                <p>Weight: {this.props.weight}</p>
                <p>Height: {this.props.height}</p>
                <p>Shape: {this.props.shape}</p>
                <p>Ability 1: {this.props.ability1}</p>
                <p>Ability 2: {this.props.ability2}</p>
                <p>Hidden Ability: {this.props.abilityh}</p>
                <p>Egg Group 1: {this.props.egg1}</p>
                <p>Egg Group 2: {this.props.egg2}</p>
                <div></div>
                <a href={this.props.link}  target="_blank" rel="noopener noreferrer">Link to Furthur Infomation</a>
            </li>
        )
    }
}