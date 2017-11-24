import React, { Component } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

class Icone extends Component
{
  render(){
    const { icones, textoJogador} = styles;
    // this.props.escolha
    // this.props.jogador
    if (this.props.escolha == 'Pedra') {
      return(
        <View style={icones}>
          <Text style={textoJogador}>{this.props.jogador}</Text>
          <Image source={require('../../imgs/pedra.png')} />
        </View>
      );
    } else if(this.props.escolha == 'Papel'){
      return(
        <View style={icones}>
          <Text style={textoJogador}>{this.props.jogador}</Text>
          <Image source={require('../../imgs/papel.png')} />
        </View>
      );
    } else if(this.props.escolha == 'Tesoura'){
      return(
        <View style={icones}>
          <Text style={textoJogador}>{this.props.jogador}</Text>
          <Image source={require('../../imgs/tesoura.png')} />
        </View>
      );
    } else {return false}
  }
}
const styles = StyleSheet.create({
  icones: {
    alignItems: 'center',
    marginBottom: 20
  },
  textoJogador: {
    fontSize: 15
  }
});


export default Icone;
