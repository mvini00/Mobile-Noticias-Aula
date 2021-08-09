import * as React from 'react';
import {View, Text, Image, StyleSheet, Dimensions, ScrollView} from 'react-native';

export default function Cloud(){
  return(
    <ScrollView>
<View style={estilo.container}>
  <Text style={estilo.titulo}> Abertura de empresas de tecnologia cresce 210% em dez anos no Brasil </Text>

  <Image style={estilo.img} source={{uri:'https://oimparcial.com.br/app/uploads/2021/08/crescimento-tecnologia.jpg'}} />

  <Text style={estilo.credito}> Por: Da Redação </Text>

  <Text style={estilo.conteudo}> De acordo com dados da Datahub, a quantidade de aberturas de empresas de tecnologia no Brasil subiu 210% em 2020, em comparação ao último levantamento, em 2011. Isso demonstra o quanto esse negócio está em franca expansão no país (assim como em todo o mundo). 
  </Text>

<Text style={estilo.conteudo}>A região sudeste é a que concentrou o maior número de criação de empresas de tecnologia na última década, com um total de 107.499. Em seguida, mas muito atrás, está a região Sul, que registrou a abertura de 29.582 empresas de tecnologia. A região Nordeste vem em terceiro lugar, com 19.626 empresas do ramo abertas na última década. Em penúltimo lugar, com 13.152 aberturas de empresas de tecnologia está a região Centro-Oeste, seguida da região Norte, que, com 5.856 novas empresas no setor, ficou com o quinto lugar.
</Text>

<Text style={estilo.conteudo}>Considerando a abertura por estado, o primeiro colocado foi São Paulo (44.326), seguido do Rio de Janeiro (8.783). O Paraná vem em terceiro lugar, com 6.879 empresas abertas na capital, Curitiba. Belo Horizonte, capital de Minas Gerais, registrou 5.705 novas empresas e Brasília, representando o Distrito Federal, teve 5.464. 
</Text>

<Text style={estilo.conteudo}>“No mundo todo, a indústria da tecnologia cresce a passos largos. Entender como ela vem se desenvolvendo no Brasil nos dá um panorama importante sobre para onde estamos indo. É inegável que a pandemia impactou o setor. Todas as mudanças pelas quais passamos nesse período, pessoas físicas e empresas, intensificou a necessidade de criar soluções para atender às novas demandas do dia a dia. Tivemos uma aceleração na transformação digital e há muito espaço ainda para crescer”, disse José Renato Raposo, chefe de operações da DataHub, em nota para a revista Exame.
</Text>

<Text style={estilo.credito}>Por: Da Redação</Text>
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