import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import color from './color';



function AppButton({title, onPress, color, position, top }) {
    return (
        <TouchableOpacity style={[styles.button, {backgroundColor: color}, {position: position}, {top: top}]} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 25,
        width: '95%', 
        marginTop: 30,
        padding: 15,
        alignItems: 'center',
    
    },
    text: {
        color: color.white,
        fontSize: 18,
        textTransform: 'uppercase',
        fontWeight: 'bold',
    }
})

export default AppButton;