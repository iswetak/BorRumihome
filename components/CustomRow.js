import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import moment from 'moment';


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 10,
        marginLeft: 1,
        marginRight:1,
        marginTop: 5,
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

});

const CustomRow = ({ title,subtitle1,subtitle2,subtitle3 }) => (
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

            <Text style={styles.subtitle3}>
                {moment( subtitle3 || moment.now()).format("hh:mm a")}
            </Text>
        </View>

    </View>
);

export default CustomRow;