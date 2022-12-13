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
    savedCardFiltered: [],
    isSaveButtonDisabled: true,
    superTrunfoFilterChecked: false,
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
      savedCardFiltered,
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
      savedCardFiltered: [...savedCardFiltered, newCard],
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

  removeCard = (cardName) => {
    const { savedCards } = this.state;
    console.log(savedCards);
    const filterCard = savedCards.filter((card) => card.cardName !== cardName);
    const isTrunfo = savedCards.some((card) => card.hasTrunfo === true);
    console.log(filterCard);
    this.setState({
      savedCards: filterCard,
      savedCardFiltered: filterCard,
      hasTrunfo: isTrunfo,
    });
  };

  filterCardName = ({ target }) => {
    const inputValue = target.value;
    const { savedCards } = this.state;
    const filteredCards = savedCards
      .filter((card) => card.cardName.includes(inputValue));

    this.setState({
      savedCardFiltered: filteredCards,
    });
  };

  filterRare = ({ target }) => {
    const selectValue = target.value;
    const { savedCards } = this.state;
    const filteredCards = savedCards
      .filter((card) => (selectValue === 'todas' ? card : card.cardRare === selectValue));

    this.setState({
      savedCardFiltered: filteredCards,
    });
  };

  filterTrunfo = ({ target }) => {
    const inputCheckbox = target.checked;
    const { savedCards } = this.state;
    const filteredCards = savedCards
      .filter((card) => (inputCheckbox ? card.cardTrunfo === true : card));

    if (inputCheckbox) {
      this.setState({
        savedCardFiltered: filteredCards,
        superTrunfoFilterChecked: true,
      });
    } else {
      this.setState({
        superTrunfoFilterChecked: false,
      });
    }
  };

  render() {
    const { ...state } = this.state;
    const { savedCardFiltered, superTrunfoFilterChecked } = this.state;
    return (
      <>
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
        </div>
        <div className={ styles.filter }>
          <label htmlFor="filter-card">
            Filtre sua busca:

            <input
              type="text"
              data-testid="name-filter"
              id="filter-card"
              placeholder="Filtre por atributos"
              className={ styles.inputFilter }
              onChange={ this.filterCardName }
              disabled={ superTrunfoFilterChecked }
            />

          </label>
          <label htmlFor="rare-select">
            Raridade:
            <select
              id="rare-select"
              data-testid="rare-filter"
              onChange={ this.filterRare }
              disabled={ superTrunfoFilterChecked }
              className={ styles.inputFilter }
            >
              <option value="todas">todas</option>
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>

          </label>
          <label htmlFor="checkbox">
            {' '}
            Super Trunfo:
            <input
              type="checkbox"
              data-testid="trunfo-filter"
              id="checkbox"
              onChange={ this.filterTrunfo }
              className={ styles.inputFilter }
            />
          </label>
        </div>
        <div className={ styles.container }>
          {savedCardFiltered.map((card) => (
            <div key={ card.cardName }>
              <Card { ...card } key={ card.cardName } />
              <button
                data-testid="delete-button"
                type="button"
                id={ card.cardName }
                onClick={ () => this.removeCard(card.cardName) }
              >
                Excluir
              </button>
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default App;
