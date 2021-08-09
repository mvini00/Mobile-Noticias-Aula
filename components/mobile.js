import * as React from 'react';
import {View, Text, Image, StyleSheet, Dimensions, ScrollView} from 'react-native';

export default function Cloud(){
  return(
    <ScrollView>
<View style={estilo.container}>
  <Text style={estilo.titulo}> Louis Vuitton cria jogo mobile Louis The Game
 </Text>

  <Image style={estilo.img} source={{uri:'https://br.bolavip.com/__export/1628271450247/sites/bolavip/img/2021/08/06/louis_vuitton_capa_crop1628271244749.png_1693159006.png'}} />

  <Text style={estilo.credito}> Por: Lucas Takashi Hagui </Text>

  <Text style={estilo.conteudo}> A marca de grife Louis Vuitton lançou o game mobile Louis The Game em comemoração aos 200 anos de existência da marca. O jogo é de aventura e traz diversos cenários para explorar – com símbolos bem famosos da empresa.
  </Text>

<Text style={estilo.conteudo}>Ao todo são seis cenários disponíveis para explorar e o jogador controlará a personagem Vivienne, que precisa coletar as 200 velas especiais que estão espalhadas pelos mapas, sendo uma para cada ano de existência da Louis Vuitton.
</Text>

<Text style={estilo.conteudo}>Essa não é a primeira movimentação da Louis Vuitton nos games, pois a marca realizou uma parceria com a Riot Games em 2019, criando skins no jogo da Louis Vuitton, o componente de armazenamento do Troféu do Mundial e também uma coleção especial e limitada inspirada nos personagens do jogo chamada Louis Vuitton x League of Legends.
</Text>

<Text style={estilo.conteudo}>Louis The Game já está disponível para download para Android na Google Play e para dispositivos iOS na App Store. Vale lembrar que o game é totalmente gratuito para ambas as plataformas.
</Text>

<Text style={estilo.credito}>Louis Vuitton cria jogo mobile Louis The Game</Text>
</View>
</ScrollView>
  );
}

const largura = Dimensions.get('screen').width;

const estilo = StyleSheet.create({
  img:{
    width: largura,
    height: 350,
  },
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10
  },
  titulo:{
    marginTop: 25,
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 20,
    backgroundColor: '#6495ED',
    color: '#FFFFFF'
  },
  conteudo:{
    textAlign: "justify",
    fontSize: 18,
    margin: 5,
    padding: 5,
  
  },
  credito:{
    marginTop: 20,
    marginBottom: 20,
    fontSize: 10,
    textAlign: 'left',

  },
});