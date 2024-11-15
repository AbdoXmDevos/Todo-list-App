import React,{useState} from 'react'
import {View,Text, TouchableOpacity, StyleSheet} from 'react-native'

const Task = (props) => {
    return(
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <TouchableOpacity style={styles.square}></TouchableOpacity>
                <Text style={styles.itemText}>{props.text}</Text>
            </View>
            <View style={styles.circularItemHolder}>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    item:{
        backgroundColor:'#FFF',
        borderRadius:10,
        padding:15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between',
        marginBottom:20,
    },
    itemLeft:{
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap:'wrap'
    },
    square:{
        width:24,
        height:24,
        backgroundColor: '#55BCF6',
        opacity:0.4,
        borderRadius:5,
        marginRight:15,
    },
    itemText:{
        maxWidth:'80%',
        fontSize:15,
    },
    circularItemHolder:{
        width:12,
        height:12,
        borderColor:'#55BCF6',
        borderWidth:2,
        borderRadius:5
    }
})
export default Task;
