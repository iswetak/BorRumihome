import React, {Component} from 'react';
import {Platform, StyleSheet, Button, Text, View, TouchableOpacity, Image} from 'react-native';
import { FlatList } from 'react-native';
import { Actions } from 'react-native-router-flux'

// import ReadMore from 'react-native-read-more-text';
import CustomListView from './CustomListView';

export default class News extends Component {
render() {
  // Moment.locale('en');
  //   var dt = '2016-05-02T00:00:00';
    return (
       <View style={styles.container}>
        <FlatList
              data={[
            {title: 'Onion prices on fire even with produce touching over decade high; here’s why',
             description: 'While onion production has been on a 12 year high in 2018-19, the prices, nonetheless, have skyrocketed and have breached Rs 200 per kg mark in some regions.',
             image_url: 'https://cdn.lolwot.com/wp-content/uploads/2015/11/10-of-the-most-shocking-headlines-you-will-ever-read-1.jpg',
             avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
             twitterHandle: 'https://pmcvariety.files.wordpress.com/2018/04/twitter-logo.jpg?w=1000',
             source: 'sssssss'},
             
            {title: 'Not many new players will enter UPI space: Report', 
             description: 'The report also came out with a list of top-30 fintech influencers, which includes Niti Aayog Advisor Anna Roy, Ujjivan Small Finance Bank CEO Nitin Chugh and CreditMantri co-founder Gowri Mukherjee.',
            image_url: 'https://cdn.lolwot.com/wp-content/uploads/2015/11/10-of-the-most-shocking-headlines-you-will-ever-read-1.jpg',
             avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
             twitterHandle: 'https://pmcvariety.files.wordpress.com/2018/04/twitter-logo.jpg?w=1000',
              source: 'sssssss'},
            
            {title:'Forex kitty continues to swells, scales past $451 bn mark',  
             description: 'Announcing the fifth bi-monthly monetary policy on Thursday, governor Shaktikanta Das had said the reserves touched USD 451.7 billion as of December 3, an increase of USD 38.8 billion since April.',
            image_url: 'https://cdn.lolwot.com/wp-content/uploads/2015/11/10-of-the-most-shocking-headlines-you-will-ever-read-1.jpg',
             avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
             twitterHandle: 'https://pmcvariety.files.wordpress.com/2018/04/twitter-logo.jpg?w=1000',
              source: 'sssssss'},


             {title: 'Not many new players will enter UPI space: Report', 
             description: 'The report also came out with a list of top-30 fintech influencers, which includes Niti Aayog Advisor Anna Roy, Ujjivan Small Finance Bank CEO Nitin Chugh and CreditMantri co-founder Gowri Mukherjee.',
                         image_url: 'https://cdn.lolwot.com/wp-content/uploads/2015/11/10-of-the-most-shocking-headlines-you-will-ever-read-1.jpg',
                          avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                          twitterHandle: 'https://pmcvariety.files.wordpress.com/2018/04/twitter-logo.jpg?w=1000',
                           source: 'sssssss'},


              {title: 'Not many new players will enter UPI space: Report', 
             description: 'The report also came out with a list of top-30 fintech influencers, which includes Niti Aayog Advisor Anna Roy, Ujjivan Small Finance Bank CEO Nitin Chugh and CreditMantri co-founder Gowri Mukherjee.',
                         image_url: 'https://cdn.lolwot.com/wp-content/uploads/2015/11/10-of-the-most-shocking-headlines-you-will-ever-read-1.jpg',
                          avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                          twitterHandle: 'https://pmcvariety.files.wordpress.com/2018/04/twitter-logo.jpg?w=1000',
                           source: 'sssssss'},


            {title: 'Not many new players will enter UPI space: Report', 
             description: 'The report also came out with a list of top-30 fintech influencers, which includes Niti Aayog Advisor Anna Roy, Ujjivan Small Finance Bank CEO Nitin Chugh and CreditMantri co-founder Gowri Mukherjee.',
                         image_url: 'https://cdn.lolwot.com/wp-content/uploads/2015/11/10-of-the-most-shocking-headlines-you-will-ever-read-1.jpg',
                          avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                          twitterHandle: 'https://pmcvariety.files.wordpress.com/2018/04/twitter-logo.jpg?w=1000',
                           source: 'sssssss'},


            {title: 'Not many new players will enter UPI space: Report', 
             description: 'The report also came out with a list of top-30 fintech influencers, which includes Niti Aayog Advisor Anna Roy, Ujjivan Small Finance Bank CEO Nitin Chugh and CreditMantri co-founder Gowri Mukherjee.',
                         image_url: 'https://cdn.lolwot.com/wp-content/uploads/2015/11/10-of-the-most-shocking-headlines-you-will-ever-read-1.jpg',
                          avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                          twitterHandle: 'https://pmcvariety.files.wordpress.com/2018/04/twitter-logo.jpg?w=1000',
                           source: 'sssssss'},


            {title: 'Not many new players will enter UPI space: Report', 
             description: 'The report also came out with a list of top-30 fintech influencers, which includes Niti Aayog Advisor Anna Roy, Ujjivan Small Finance Bank CEO Nitin Chugh and CreditMantri co-founder Gowri Mukherjee.',
                         image_url: 'https://cdn.lolwot.com/wp-content/uploads/2015/11/10-of-the-most-shocking-headlines-you-will-ever-read-1.jpg',
                          avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                          twitterHandle: 'https://pmcvariety.files.wordpress.com/2018/04/twitter-logo.jpg?w=1000',
                           source: 'sssssss'},



          ]}
          
          // data={this.state.data}
          renderItem={({item}) => (
          <CustomListView
                    publishedAt={item.publishedAt}
                    avatar_url={item.avatar_url}
                    twitterHandle={item.twitterHandle}
                    source={item.source}
                    image_url={item.image_url}
                    title={item.title}
                    subtitle1={item.description }
                    subtitle2={item.twitter1}
                    subtitle3={item.twitter2}
                    
          />
        
      )}
      

        />

      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
     paddingTop: 22
  },
  welcome: {
    fontSize: 18,
    fontFamily: 'Roboto',
    paddingLeft: 10,


  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
 
});
