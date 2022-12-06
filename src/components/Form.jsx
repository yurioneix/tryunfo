import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Form.module.css';

class Form extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      //   hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    return (
      <form>
        <label className={ styles.displayFlex } htmlFor="name">
          {' '}
          Nome da carta
          <input
            type="text"
            name="cardName"
            value={ cardName }
            id="name"
            data-testid="name-input"
            onChange={ onInputChange }
          />
        </label>
        <label className={ styles.displayFlex } htmlFor="description">
          {' '}
          Descrição
          <textarea
            name="cardDescription"
            value={ cardDescription }
            id="description"
            cols="30"
            rows="10"
            data-testid="description-input"
            onChange={ onInputChange }
          />
        </label>
        <label className={ styles.displayFlex } htmlFor="attr1">
          {' '}
          Passe
          <input
            min="0"
            type="number"
            name="cardAttr1"
            value={ cardAttr1 }
            id="attr1"
            data-testid="attr1-input"
            onChange={ onInputChange }
            placeholder="Máximo 90 pontos"
          />

        </label>
        <label className={ styles.displayFlex } htmlFor="attr2">
          {' '}
          Drible
          <input
            min="0"
            type="number"
            name="cardAttr2"
            value={ cardAttr2 }
            id="attr2"
            data-testid="attr2-input"
            onChange={ onInputChange }
            placeholder="Máximo 90 pontos"
          />

        </label>
        <label className={ styles.displayFlex } htmlFor="attr3">
          {' '}
          Chute
          <input
            min="0"
            type="number"
            name="cardAttr3"
            value={ cardAttr3 }
            id="attr3"
            data-testid="attr3-input"
            onChange={ onInputChange }
            placeholder="Máximo 90 pontos"
          />

        </label>
        <label className={ styles.displayFlex } htmlFor="image-input">
          {' '}
          Imagem
          <input
            type="text"
            name="cardImage"
            value={ cardImage }
            id="image-input"
            data-testid="image-input"
            onChange={ onInputChange }
          />

        </label>
        <label className={ styles.displayFlex } htmlFor="select-input">
          {' '}
          Raridade
          <select
            name="cardRare"
            value={ cardRare }
            id="select-input"
            data-testid="rare-input"
            onChange={ onInputChange }
          >
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito raro</option>
          </select>
        </label>
        <label className={ styles.flex } htmlFor="trunfo-input">
          {' '}
          Super Trunfo
          <input
            type="checkbox"
            name="cardTrunfo"
            checked={ cardTrunfo }
            id="trunfo-input"
            data-testid="trunfo-input"
            onChange={ onInputChange }
          />
        </label>
        <button
          type="submit"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.boolean,
  hasTrunfo: PropTypes.boolean,
  isSaveButtonDisabled: PropTypes.boolean,
  onInputChange: PropTypes.func,
  onSaveButtonClick: PropTypes.func,
}.isRequired;

export default Form;
