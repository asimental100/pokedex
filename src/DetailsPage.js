import React from 'react';
import request from 'superagent';
import { DetailedPokemonItem } from './DetailedPokemonItem.js';
import './DetailsPage.css';

export class DetailsPage extends React.Component {
    state = {
        creature: {}
      }

    componentDidMount = async () => {
        const id = this.props.match.params.booger;

        const data = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex/${id}`);

        this.setState({ 
            creature: data.body
           })
    }

    render() {
        const creature = this.state.creature;
        return (
            <ul className='detailsUl'>

            <DetailedPokemonItem key={creature.pokemon} name={creature.pokemon} image={creature.url_image} type1={creature.type_1} type2={creature.type_2} attack={creature.attack} defense={creature.defense} hp={creature.hp} weight={creature.weight} height={creature.height} shape={creature.shape} ability1={creature.ability_1} ability2={creature.ability_2} abilityh={creature.ability_hidden} egg1={creature.egg_group_1} egg2={creature.egg_group_2} link={creature.pokedex} />

            </ul>
        )
    }
}