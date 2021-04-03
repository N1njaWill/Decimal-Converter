import React, { useState } from 'react';
import { Text, TextInput, View, StyleSheet } from 'react-native';
import color from './color';


const DecToHex = () => {
  const [hex, setHex] = useState('');
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Write your decimal number here"
        placeholderTextColor= {color.white}
        onChangeText={hex => setHex(hex)}
        defaultValue={hex}
        keyboardType="numeric"
        
      />
      <Text style={styles.text}>Converted number in hexadecimal</Text>
      <Text style={styles.output}>
        {(hex >>> 0).toString(16)}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: color.blue
  },
  input:{
    marginTop: 200,
    alignSelf: 'center',
    borderWidth: 1,
    height: 40,
    borderColor: color.white,
    fontSize: 25,
    paddingHorizontal: 15,
    color: color.white
    
  },
  output:{
    marginTop: 30,
    fontSize: 32,
    marginRight: 20,
    marginLeft: 20,
    color: color.coral
  },
  text:{
    marginTop: 100,
    fontSize: 36,
    marginRight: 20,
    marginLeft: 20,
    color: color.coral,
    textDecorationLine: 'underline',
    textAlign: 'center'
  }
});

export default DecToHex;