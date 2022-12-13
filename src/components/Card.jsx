import { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Card.module.css';

class Card extends Component {
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
    } = this.props;
    return (
      <div className={ styles.container }>
        <div className={ styles.titleCard }>
          <h2 data-testid="name-card">{cardName}</h2>
        </div>
        <div className={ styles.cardImage }>
          <img
            src={ cardImage }
            alt={ cardName }
            data-testid="image-card"
            className={ styles.imgCard }
          />
        </div>
        <div className={ styles.description }>
          <p data-testid="description-card">{ cardDescription }</p>
          <p data-testid="attr1-card">
            Passe . . . . . . . . . . . . . . . .
            {cardAttr1 }
          </p>
          <p data-testid="attr2-card">
            Drible . . . . . . . . . . . . . . . .
            {cardAttr2 }
          </p>
          <p data-testid="attr3-card">
            Chute . . . . . . . . . . . . . . . .
            {cardAttr3 }
          </p>
          <p data-testid="rare-card">{ cardRare }</p>
          { cardTrunfo && <p data-testid="trunfo-card">Super Trunfo</p> }
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.boolean,
}.isRequired;

export default Card;
