import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import DetalhesDoLugarTela from '../telas/DetalhesDoLugarTela';
import ListaDeLugaresTela from '../telas/ListaDeLugaresTela';
import MapaTela from '../telas/MapaTela';
import NovoLugarTela from '../telas/NovoLugarTela';
import Cores from '../constantes/Cores';

const LugaresNavigator = createStackNavigator({
  ListaDeLugares: ListaDeLugaresTela,
  DetalhesDoLugar: DetalhesDoLugarTela,
  NovoLugar: NovoLugarTela,
  Mapa: MapaTela
},{
  defaultNavigationOptions:{
    headerStyle: {
      backgroundColor: Cores.primary
    },
    headerTintColor: 'white'
  }
});

export default createAppContainer(LugaresNavigator);




