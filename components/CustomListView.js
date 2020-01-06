import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import ReadMore from 'react-native-read-more-text';
import { Avatar, Divider } from 'react-native-elements';

import moment from 'moment';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
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
        justifyContent: 'center',
        flex: 1, 
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'stretch',
        width: 280,
        marginRight:5,
        paddingRight: 7,
        marginRight: 1,
    },
    container_text: {
        flex: 1,
        marginRight: 1 ,
        display: 'flex',
        justifyContent: 'center',
        borderColor: 'black',
        borderWidth: 1,
         borderTopLeftRadius: 3, 
        borderTopRightRadius: 3,
        borderRadius: 5,
        paddingLeft : 4,
                paddingRight : 4,

        marginHorizontal: 66,
       


    },
    subtitle1: {
           justifyContent: 'space-between',


    }, 
    stretch: {
        height: 100,
        width: 270,
        marginHorizontal: 67,
        marginTop: 5,
    },
    avatard: {
        textAlign: 'left',
        position: 'absolute',
        top: 10,
        flex: 1,
        flexDirection: 'row',
         paddingLeft: 10 ,
         marginLeft: 5,
        // justifyContent: 'flex-start',   //    top: 1, //         display: 'flex',
    },
    twitterHandlei: {
        position:'absolute',
        top:30,
        paddingTop: 32 , 
        marginHorizontal: 15,
     },
    source: {
        flex: 1,
        flexDirection: 'row',
        paddingRight: 10 ,
        marginTop: -20,
        marginHorizontal: 60,
        justifyContent: 'center'
    },
    publishedAt:{
        textAlign: 'right',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingRight: 10 , 
       
    },
    
     
   
});


const CustomRow = ({ title,subtitle1, image_url, avatar_url, publishedAt, source, twitterHandle, subtitle2, subtitle3}) => (
    <View style={styles.container}>
    <View> 

     <Text style={styles.publishedAt}>
      {moment().format('hh:mm')}
                {publishedAt}
     </Text>
    </View>
        <View style={styles.avatard}>

        <Avatar size="medium"  source={{ uri: avatar_url }} />
         </View>
         <View style={styles.twitterHandlei}>

        <Avatar size="medium"  source={{ uri: twitterHandle }} />
         </View>
         <View >
         <Text style={styles.source}>
                {source}
          </Text>
          </View>
         <Image source={{ uri: image_url }} style={styles.stretch} />


     {/* <Divider style={{ height: 2, backgroundColor: 'white' }} /> */}

        <View style={styles.container_text}>

            <Text style={styles.title}>
                {title}
            </Text>
             <View style={styles.cardBody}>
            <ReadMore
            numberOfLines={2}
            onReady={this._handleTextReady}>
            <Text style={styles.subtitle1}>
                {subtitle1 }
            </Text>
             </ReadMore>
             </View> 
        </View>
        <View>
        <Text style={styles.subtitle2}>{'\u0024'} {subtitle2}</Text>
        <Text style={styles.subtitle3}>
                {subtitle3}
            </Text>
            </View>
    </View>
);



export default CustomRow;