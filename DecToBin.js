import React, { useState } from 'react';
import { Text, TextInput, View, StyleSheet } from 'react-native';
import color from './color';


const DecToBin = () => {
  const [bin, setBin] = useState('');
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Write your decimal number here"
        placeholderTextColor= {color.white}
        onChangeText={bin => setBin(bin)}
        defaultValue={bin}
        keyboardType="numeric"
        
      />
      <Text style={styles.text}>Converted number in binary</Text>
      <Text style={styles.output}>
        {(bin >>> 0).toString(2)}
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

export default DecToBin;