import React, { Component } from 'react';
import Characters from '../components/characters/Characters';
import { getCharacters } from '../services/rickMortiApi';

export default class CharacterContainer extends Component {
  state = {
    results: []
  }

  componentDidMount() {
    getCharacters()
      .then(({ results }) => {
        this.setState({ results });
      });
  }

  render() {
    return <Characters characters={this.state.results} />;
  }
}
