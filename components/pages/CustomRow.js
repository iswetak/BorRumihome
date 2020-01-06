import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import {  Divider } from 'react-native-elements';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';


import moment from 'moment';


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 10,
        marginLeft: 1,
        marginRight:1,
        marginTop: 8,
        marginBottom: 8,
        borderRadius: 5,
        backgroundColor: '#FFF',
       
    },
    title: {
        fontSize: 14,
        color: '#006EA6',
        textAlign: 'left',
        fontFamily: 'Roboto',
        flex: 1, 
        flexDirection: 'row', 
        paddingLeft: 10,
        marginLeft: 0,
    },
    container_text: {
        flex: 1,
        flexDirection: 'column',
        marginLeft: 10,
        display: 'flex',
        justifyContent: 'space-around',
        marginLeft: 1,
    },
    subtitle1: {
        flex: 1,
        fontSize: 14,
        color: '#000',
        textAlign: 'left',
       marginHorizontal: 10,
    },
      btn:{
    position:'absolute',
    width:50,height:50,
    backgroundColor:'green',
    borderRadius:30,
    bottom:10,right:10,
    alignItems:'center',
    justifyContent:'center'
},
plus:{
    color:'white',
    fontSize:25
},

     
    
});

const CustomRow = ({ title,subtitle1, subtitle2, publishedAt, main }) => (
    //        

    <View style={styles.container}>
        <View style={styles.container_text}>
            <Text style={styles.title}>
                {title}
            </Text>
            <Text style={styles.subtitle1}>
                {subtitle1}
            </Text>
        </View>

        <View style={styles.container_text1}>
            <Text style={styles.subtitle2}>
            {subtitle2}
            </Text>
        {/* </View> */}
             
        {/* <View style={styles.container_text2} > */}
            <Text style={styles.publishedAt }>
              {moment().format('"hh:mm a"')}
              {publishedAt}
            </Text>
        </View>
       
       
    </View>
);


// style={Moment(day).format('x')}

export default CustomRow;