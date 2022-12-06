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
  };

  onInputChange = ({ target }) => {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { ...state } = this.state;
    return (
      <div className={ styles.container }>
        <Form
          { ...state }
          onInputChange={ this.onInputChange }
        />
        <Card
          { ...state }
          onInputChange={ this.onInputChange }
        />
      </div>
    );
  }
}

export default App;
