import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Combinations1 from './Combinations1';
// import ReadMore from 'react-native-read-more-text';
// import { Avatar, Divider } from 'react-native-elements';

// import moment from 'moment';

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        height: 120,
        margin: 5,
        paddingTop: 20,
        backgroundColor: '#F5FCFF',
        flex:1,

    },
    container_text: {
        flex:1,
        alignItems: 'center',
        margin: 5,
    },
    stretch: {
        alignItems: 'center',
        height: 60,
        width: 60,
        marginHorizontal: 55,
        // marginTop: 5,
    },
    
     
   
});

const GridView = ({ title, basketImageURL }) => (
    <View style={styles.container} >
      <TouchableOpacity style={styles.btnContainer} onPress={() => Actions.Combinations1()}  >
        <Image source={{ uri: basketImageURL }} style={styles.stretch}  />
      </TouchableOpacity>
        <View style={styles.container_text}>
            <Text style={styles.title} >
                {title}
            </Text>


        </View>

       
    </View>
);



export default GridView;