import * as React from 'react';
import {View, Text, Image, StyleSheet, Dimensions, ScrollView} from 'react-native';

export default function Cloud(){
  return(
    <ScrollView>
<View style={estilo.container}>
  <Text style={estilo.titulo}> Cloud Computing: o recurso que definirá o futuro dos negócios </Text>

  <Image style={estilo.img} source={{uri:'http://s.glbimg.com/po/tt/f/original/2012/03/02/cloudcomputing.jpg'}} />

  <Text style={estilo.credito}> Por Marcos Aurélio Pereira -6 de agosto de 2021 </Text>

  <Text style={estilo.conteudo}> Assim como a chegada do computador impactou todo o mercado de trabalho com a troca da máquina de escrever, o armazenamento de dados em Cloud Computing começa a se consolidar como nova revolução empresarial.
  </Text>

<Text style={estilo.conteudo}>Cloud Computing, também chamado de nuvem – em português, é um recurso de armazenamento de conteúdo na web que já está presente na vida de muitos há um bom tempo, como nos sistemas de celulares, no GPS e softwares de serviço como Netflix e Whatsapp.
</Text>

<Text style={estilo.conteudo}>A cada notícia que desponta na mídia, o cenário vai ficando mais claro: grandes empresas como a TV Globo, Ferrari e operadora de celular Tim já anunciaram a transição de todos os seus sistemas para a nuvem na internet. Recentemente, a gigante da computação Microsoft avisou que a próxima versão do Windows (Windows 365), será distribuída por streaming para qualquer dispositivo com uma tela, seja um computador, um tablet ou um celular. Ao contrário de todas as versões, não será instalado na máquina, ocupando memória. Agora, quem não fazia ideia do que era "cloud computing", começará a ter uma noção, afinal, a maioria dos computadores – seja doméstico ou de trabalho – operam com o sistema Windows.
</Text>

<Text style={estilo.conteudo}>O que o pequeno empreendedor usava há alguns anos, seja um HD externo, pen-drive ou CD como armazenamento de dados, terá que lidar com seus dados "flutuando" num ambiente abstrato, a internet. O impacto da nuvem computacional será muito mais profundo do que imaginamos e temos que começar a discutir o assunto de maneira mais próxima do usuário.
</Text>

<Text style={estilo.credito}>Marcos Aurélio Pereira, CEO da Mais Dados Digital</Text>
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