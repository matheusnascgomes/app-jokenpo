import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Image
} from 'react-native';
import Topo from './src/components/topo';
import Icone from './src/components/icone';

class app3 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      escolhaUsuario: '',
      escolhaComputador: '',
      resultado: ''
    };
  }
  jokenpo(escolhaUsuario) {
    // Geração de numero aleatório
    const randomNum = Math.floor(Math.random() * 3);

    let escolhaComputador = '';

    switch (randomNum) {
      case 0: escolhaComputador = 'Pedra'; break;
      case 1: escolhaComputador = 'Papel'; break;
      case 2: escolhaComputador = 'Tesoura'; break;
    }
    // Lógíca de resultado
    let resultado = '';

    if (escolhaComputador == 'Pedra' && escolhaUsuario == 'Pedra') {
         resultado = 'EMPATE';
     }
     if (escolhaComputador == 'Pedra' && escolhaUsuario == 'Papel') {
         resultado = 'VOCÊ GANHOU';
     }
     if (escolhaComputador == 'Pedra' && escolhaUsuario == 'Tesoura') {
        resultado = 'VOCÊ PERDEU';
     }
     if (escolhaComputador == 'Papel' && escolhaUsuario == 'Pedra') {
         resultado = 'VOCÊ PERDEU';
     }
     if (escolhaComputador == 'Papel' && escolhaUsuario == 'Papel') {
         resultado = 'EMPATE';
     }
     if (escolhaComputador == 'Papel' && escolhaUsuario == 'Tesoura') {
        resultado = 'VOCÊ GANHOU';
     }
     if (escolhaComputador == 'Tesoura' && escolhaUsuario == 'Pedra') {
         resultado = 'VOCÊ GANHOU';
     }
     if (escolhaComputador == 'Tesoura' && escolhaUsuario == 'Papel') {
         resultado = 'VOCÊ PERDEU';
     }
     if (escolhaComputador == 'Tesoura' && escolhaUsuario == 'Tesoura') {
        resultado = 'EMPATE';
     }

    this.setState({
      escolhaUsuario,
      escolhaComputador,
      resultado
    });
  }
  render() {
    const {
      containerEscolhas,
      btnEscolhas,
      palco,
      textoResultado
    } = styles;
    return (
      <View>
        <Topo />
        <View style={containerEscolhas}>
          <View style={btnEscolhas}>
            <Button title='Pedra' onPress={() => { this.jokenpo('Pedra'); }} />
          </View>
          <View style={btnEscolhas}>
            <Button title='Papel' onPress={() => { this.jokenpo('Papel'); }} />
          </View>
          <View style={btnEscolhas}>
            <Button title='Tesoura' onPress={() => { this.jokenpo('Tesoura'); }} />
          </View>
        </View>

        <View style={palco}>
          <Text style={textoResultado}>{this.state.resultado}</Text>

          <Icone escolha={this.state.escolhaUsuario} jogador='Usuário' />
          <Icone escolha={this.state.escolhaComputador} jogador='Computador' />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  btnEscolhas: {
    width: 100
  },
  containerEscolhas: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10
  },
  palco: {
    alignItems: 'center'
  },
  textoResultado: {
    height: 50,
    marginTop: 25,
    color: 'red',
    fontSize: 20,
    fontWeight: 'bold'
  }
});

AppRegistry.registerComponent('app3', () => app3);
