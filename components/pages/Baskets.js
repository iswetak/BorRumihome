import React, {Component} from 'react';
// import { Scene, Router } from 'react-native-router-flux';
import {Platform, StyleSheet, Button, Text, View, TouchableOpacity, Image} from 'react-native';
import GridView from './GridView';
import { FlatList } from 'react-native';

import {PagerTabIndicator,PagerTitleIndicator,IndicatorViewPager} from 'rn-viewpager';

// import Combinations from './Combinations';
// import Combinations1 from './Combinations1';
// import Routeb from './Routeb'

// import { createBottomTabNavigator } from 'react-navigation-tabs';

  
export default class Baskets extends Component {
  _renderTitleIndicator() {
    return <PagerTitleIndicator titles={['One', 'Two', 'Three']} />;
  }
  // _renderTabIndicator() {
  //   let tabs = [
  //     {
  //       text: 'One',
  //     },
  //     {
  //       text: 'Two',
  //     },
  //     {
  //       text: 'Three',
  //     },
  //   ];
  //   return <PagerTabIndicator tabs={tabs} />
  // }

  render() {

    return (
      <View>
      <IndicatorViewPager  style={{ flex: 1,  backgroundColor: 'white', tabContainerPosition:'top' }}indicator={this._renderTitleIndicator()}>
      {/* <View style={{backgroundColor: '#C70039',flex: 1,justifyContent: 'center',alignItems: 'center'}}>
     <Text>One</Text>
     </View>
     <View style={{ backgroundColor: '#FF5733', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
     <Text>Two</Text></View>
     <View style={{ backgroundColor: '#FFC300', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
     <Text>Three</Text></View> */}
           <View style={styles.MainContainer}>

    <FlatList
  data={[
    {key: 'One',
basketImageURL: 'https://www.msci.com/documents/1296102/8473352/145x145px-Volatility.jpg'},
{key: 'Two',
basketImageURL: 'https://www.msci.com/documents/1296102/8473352/145x145px-Volatility.jpg'},
{key: 'Three' ,
basketImageURL: 'https://www.msci.com/documents/1296102/8473352/145x145px-Volatility.jpg'},
{key: 'Four',
basketImageURL: 'https://www.msci.com/documents/1296102/8473352/145x145px-Volatility.jpg'},
{key: 'Five',
basketImageURL: 'https://www.msci.com/documents/1296102/8473352/145x145px-Volatility.jpg'},
{key: 'Six',
basketImageURL: 'https://www.msci.com/documents/1296102/8473352/145x145px-Volatility.jpg'},
{key: 'Seven',
basketImageURL: 'https://www.msci.com/documents/1296102/8473352/145x145px-Volatility.jpg'},
{key: 'Eight',
basketImageURL: 'https://www.msci.com/documents/1296102/8473352/145x145px-Volatility.jpg'},
{key: 'Nine',
basketImageURL: 'https://www.msci.com/documents/1296102/8473352/145x145px-Volatility.jpg'},
{key: 'Ten',
basketImageURL: 'https://www.msci.com/documents/1296102/8473352/145x145px-Volatility.jpg'},

  ]}

  renderItem={({item}) => (
   <GridView
basketImageURL={item.basketImageURL}
title={item.key}

/>


   )}            

 numColumns={2}


  />
      </View>
       </IndicatorViewPager>
       

  </View>

    );
  }
}

const styles = StyleSheet.create({
 
  MainContainer :{
   
  justifyContent: 'center',
  flex:1,
  // margin: 10,
   
  },
  GridViewContainer: {
     flex:1,
  //    justifyContent: 'center',
     alignItems: 'center',
     height: 100,
     margin: 5,
  //    backgroundColor: '#7B1FA2'
  },
   
  item: {
   
    justifyContent: 'center',
    flex:1,
    alignItems: 'center',
       fontSize: 18,
  
  //   height: 100,
  //   margin: 5,
  //   backgroundColor: '#00BCD4'
   
  },
  
   
  stretch: {
   
  //    color: '#fff',
       alignItems: 'center',
         height: 50,
  
  
  //    padding: 10,
  //    fontSize: 18,
    
   },
   
  });



// const MainNavigator = createStackNavigator({
//     Combinations: { screen: Combinations },
// }
// //  {
// //     initialRouteName: 'Pulse',
// // }
// );
// const AppContainer = createAppContainer(MainNavigator);

 

