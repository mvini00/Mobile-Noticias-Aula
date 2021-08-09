import * as React from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MaterialCommunityIcons} from '@expo/vector-icons';

import Cloud from './cloud';
import Mobile from './mobile';
import Tecnologia from './Tecnologia';

const Tab = createBottomTabNavigator();

export default function Rotas(){
  return(
    <Tab.Navigator
    initialRouteName="Tecnologia"
    tabBarOptions={{
      activeTintColor:'#0000FF',
    }}
    >
      <Tab.Screen 
      name="Mobile" component={Mobile} 
      options={{
        tabBarLabel:'Mobile',
        tabBarIcon:({color, size})=>(
          <MaterialCommunityIcons name="cellphone-basic" color={color}
          size={size}/>
        ),
      }}
      />
      <Tab.Screen 
      name="Tecnologia" component={Tecnologia}
      options={{
        tabBarLabel:'Tecnologia',
        tabBarIcon:({color, size})=>(
          <MaterialCommunityIcons name="monitor" color={color}
          size={size}/>
        ),
      }}
      />
      <Tab.Screen 
      name="Cloud" component={Cloud}
            options={{
        tabBarLabel:'Tecnologia',
        tabBarIcon:({color, size})=>(
          <MaterialCommunityIcons name="cloud-check" color={color}
          size={size}/>
        ),
      }}
      />
    </Tab.Navigator>
  );
}