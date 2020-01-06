// import React, {Component} from 'react';
// import {Platform, StyleSheet, Button, Text, View, TouchableOpacity, Image} from 'react-native';
// import { FlatList } from 'react-native';
// // import GridView from 'react-native-grid-view'
// import {PagerTabIndicator,IndicatorViewPager} from 'rn-viewpager';
// import GridView from './GridView';
// import Combinations1 from './Combinations1'



// export default class Combinations extends Component {

//   _renderTabIndicator() {
//     let tabs = [
//       {
//         text: 'One',
//       },
//       {
//         text: 'Two',
//       },
//       {
//         text: 'Three',
//       },
//     ];
//     return <PagerTabIndicator tabs={tabs} />
//   }

//     render() {
//          return (
//             <View style={styles.MainContainer}>
//               <IndicatorViewPager style={{ flex: 1, paddingTop: 20, backgroundColor: 'white' }}indicator={this._renderTabIndicator()}>
//              <Text style={{ color: 'white', fontSize: 30 }}>One</Text>
//              <Text style={{ color: 'white', fontSize: 30 }}>Two</Text>
//              <Text style={{ color: 'white', fontSize: 30 }}>Three</Text>
//              </IndicatorViewPager>
//             <FlatList
//           data={[
//             {key: 'One',
//      basketImageURL: 'https://www.msci.com/documents/1296102/8473352/145x145px-Volatility.jpg'},
//      {key: 'Two',
//      basketImageURL: 'https://www.msci.com/documents/1296102/8473352/145x145px-Volatility.jpg'},
//      {key: 'Three' ,
//      basketImageURL: 'https://www.msci.com/documents/1296102/8473352/145x145px-Volatility.jpg'},
//      {key: 'Four',
//      basketImageURL: 'https://www.msci.com/documents/1296102/8473352/145x145px-Volatility.jpg'},
//      {key: 'Five',
//      basketImageURL: 'https://www.msci.com/documents/1296102/8473352/145x145px-Volatility.jpg'},
//      {key: 'Six',
//      basketImageURL: 'https://www.msci.com/documents/1296102/8473352/145x145px-Volatility.jpg'},
//      {key: 'Seven',
//      basketImageURL: 'https://www.msci.com/documents/1296102/8473352/145x145px-Volatility.jpg'},
//      {key: 'Eight',
//      basketImageURL: 'https://www.msci.com/documents/1296102/8473352/145x145px-Volatility.jpg'},
//      {key: 'Nine',
//      basketImageURL: 'https://www.msci.com/documents/1296102/8473352/145x145px-Volatility.jpg'},
//      {key: 'Ten',
//      basketImageURL: 'https://www.msci.com/documents/1296102/8473352/145x145px-Volatility.jpg'},
    
//           ]}

//           renderItem={({item}) => (
//            <GridView
//         basketImageURL={item.basketImageURL}
//         title={item.key}
     
//       />
       

//            )}            
    
//          numColumns={2}


//           />
//           </View>
//          );
//     }

// }

// const styles = StyleSheet.create({
 
// MainContainer :{
 
// justifyContent: 'center',
// flex:1,
// // margin: 10,
 
// },
// GridViewContainer: {
//    flex:1,
// //    justifyContent: 'center',
//    alignItems: 'center',
//    height: 100,
//    margin: 5,
// //    backgroundColor: '#7B1FA2'
// },
 
// item: {
 
//   justifyContent: 'center',
//   flex:1,
//   alignItems: 'center',
//      fontSize: 18,

// //   height: 100,
// //   margin: 5,
// //   backgroundColor: '#00BCD4'
 
// },

 
// stretch: {
 
// //    color: '#fff',
//      alignItems: 'center',
//        height: 50,


// //    padding: 10,
// //    fontSize: 18,
  
//  },
 
// });