import React from 'react'
import {Platform, StyleSheet, Text, View} from 'react-native';
import { Router, Scene, Stack, Tabs, Actions } from 'react-native-router-flux';

import Pulse from './Pulse';
import News from './News';
import RoboTalk from './RoboTalk'
import Baskets from './pages/Baskets';

const Routes = () => (
  <Router >
    <Stack>
    <Scene key = 'Tabbar' tabs={true}  hideNavBar={true}  labelStyle={{fontSize: 14}} title="" >
    
    <Scene key = "Pulse" component = {Pulse}  title = "PULSE" back={true} initial = {true}   />  
    <Scene key = "News" component = {News} title = "NEWS"  />
    <Scene key = "RoboTalk" component = {RoboTalk} title = "Robotalk"  />
    <Scene key = "Baskets" component = {Baskets} title = "BASKETS" />

    </Scene>
    </Stack>
  </Router>
);
export default Routes;

const styles = StyleSheet.create({
  tabBar: {
  height: 40,
  borderTopColor: 'black',
  borderTopWidth: 1,
  justifyContent:'space-between'
  },
  title: {
    fontFamily: 'Roboto',
    fontSize: 30,
    color: '#006EA6',
  
  }

  });
