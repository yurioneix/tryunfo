import React, { Component } from 'react';
import styles from './Form.module.css';

class Form extends Component {
  render() {
    return (
      <form>
        <label className={ styles.displayFlex } htmlFor="name">
          {' '}
          Nome da carta
          <input
            type="text"
            name=""
            id="name"
            data-testid="name-input"
          />
        </label>
        <label className={ styles.displayFlex } htmlFor="description">
          {' '}
          Descrição
          <textarea
            name=""
            id="description"
            cols="30"
            rows="10"
            data-testid="description-input"
          />
        </label>
        <label className={ styles.displayFlex } htmlFor="attr1">
          {' '}
          Atributo 1
          <input
            type="number"
            name=""
            id="attr1"
            data-testid="attr1-input"
          />

        </label>
        <label className={ styles.displayFlex } htmlFor="attr2">
          {' '}
          Atributo 2
          <input
            type="number"
            name=""
            id="attr2"
            data-testid="attr2-input"
          />

        </label>
        <label className={ styles.displayFlex } htmlFor="attr3">
          {' '}
          Atributo 3
          <input
            type="number"
            name=""
            id="attr3"
            data-testid="attr3-input"
          />

        </label>
        <label className={ styles.displayFlex } htmlFor="image-input">
          {' '}
          Imagem
          <input
            type="text"
            name=""
            id="image-input"
            data-testid="image-input"
          />

        </label>
        <label className={ styles.displayFlex } htmlFor="select-input">
          {' '}
          Raridade
          <select name="" id="select-input" data-testid="rare-input">
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito raro</option>
          </select>
        </label>
        <label className={ styles.flex } htmlFor="trunfo-input">
          {' '}
          Super Trunfo
          <input type="checkbox" name="" id="trunfo-input" data-testid="trunfo-input" />
        </label>
        <button type="submit" data-testid="save-button">Salvar</button>
      </form>
    );
  }
}

export default Form;
