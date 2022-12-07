import React, { Component } from 'react';
import Card from './components/Card';
import Form from './components/Form';
import styles from './App.module.css';

class App extends Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '',
    cardAttr2: '',
    cardAttr3: '',
    cardImage: '',
    cardRare: '',
    cardTrunfo: false,
    hasTrunfo: false,
    savedCards: [],
    isSaveButtonDisabled: true,
  };

  onInputChange = ({ target }) => {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;

    this.setState({
      [name]: value,
    });
    this.setState(({
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
    }) => {
      const attr1 = parseInt(cardAttr1, 10);
      const attr2 = parseInt(cardAttr2, 10);
      const attr3 = parseInt(cardAttr3, 10);

      const max = 210;
      const maxAttr = 90;
      const sumAttr = attr1 + attr2 + attr3;
      const maxAttr1 = attr1 >= 0 && attr1 <= maxAttr;
      const maxAttr2 = attr2 >= 0 && attr2 <= maxAttr;
      const maxAttr3 = attr3 >= 0 && attr3 <= maxAttr;
      const length = cardName.length
      && cardImage.length
      && cardDescription.length
      && cardRare.length;

      if (sumAttr <= max && maxAttr1 && maxAttr2 && maxAttr3 && length) {
        return { isSaveButtonDisabled: false };
      }
      return { isSaveButtonDisabled: true };
    });
  };

  onSaveButtonClick = (e) => {
    e.preventDefault();
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      savedCards,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.state;

    const newCard = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      savedCards,
      cardImage,
      cardRare,
      cardTrunfo,
    };

    if (cardTrunfo) {
      this.setState({
        cardTrunfo: true,
        hasTrunfo: true,
      });
    }
    this.setState({
      savedCards: [...savedCards, newCard],
      isSaveButtonDisabled: true,
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
    });
  };

  render() {
    const { ...state } = this.state;
    const { savedCards } = this.state;
    return (
      <div className={ styles.container }>
        <Form
          { ...state }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card
          { ...state }
          onInputChange={ this.onInputChange }
        />
        <div>
          {savedCards.map((card) => (
            <Card { ...card } key={ card.cardName } />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
