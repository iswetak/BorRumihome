import React, {Component} from 'react';
import {Platform, StyleSheet, TouchableOpacity, Button, Text, View} from 'react-native';
import { FlatList } from 'react-native';
import CustomRow from './CustomRow';


export default class Pulse extends Component {
   constructor(props) {
    super(props);
    this.date = props.time;
    this.state = {
      loading: false,
      data: [],
      startId: null,
      error: null,
      refreshing: false
    };
  }

  componentDidMount(){ 
    this.makeRemoteRequest();
  }

    

  makeRemoteRequest = () => {
    
    const { startId } = this.state;
    var url= `https://b1ppljae3m.execute-api.ap-south-1.amazonaws.com/lkp/v1/pulse`;
    if(startId){
     url = `https://b1ppljae3m.execute-api.ap-south-1.amazonaws.com/lkp/v1/pulse?startId=${startId}`;
    }
    this.setState(
      { loading: true, 
    });
    fetch(url, 
     
    {
       method: 'GET',
        withCredentials: true,
        credentials: 'include', 
         headers: 
        {'x-api-key': 'fyX65yeBWd5RtlunH4ikc7voovP3Nn1Y5iHFx1Gv',
          'Content-Type': 'application/json'}
     })
      .then(
        res => res.json())
      .then(res => {

        
        this.setState({
          data: startId === null ? res : [...this.state.data, ...res],
          error: res.error || null,
          loading: false,
          refreshing: false
        });
         this.state.startId=res[res.length-1].eventID
      })
      .catch(error => {
        //console.log("error",res);
        this.setState({ error, loading: false });
      });
  };


render() {
    return (
       <View style={styles.container}>
        <FlatList
          onScrollEndDrag={() =>  this.makeRemoteRequest() }
          data={this.state.data}
          renderItem={({item}) => (
          <CustomRow
                    title={item.symbol}
                    subtitle1={item.eventDescription}
                    subtitle2={item.modelClose} 
                    subtitle3={item.eventTimestamp}
         />
        
      )}
       keyExtractor={item => item.eventID}
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
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  button: {
    backgroundColor: 'white',
      fontSize: 14,
  }
 
});








