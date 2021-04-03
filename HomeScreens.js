import 'react-native-gesture-handler';
import * as React from 'react';
import { Button, View, Text, Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AppButton from './AppButton';
import DecToBin from './DecToBin';
import DecToHex from './DecToHex';
import color from './color';

function Home({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start', paddingTop: 20, backgroundColor: color.blue}}>
        <AppButton
          title="Decimal to Binary"
          onPress={() => navigation.navigate('dectobin')}
          color={color.coral}
          position={'absolute'}
          top={250}
        />
        <AppButton
          title="Decimal to Hexadecimal"
          color={color.coral}
          onPress={() => navigation.navigate('dectohex')}
          position={'absolute'}
          top={325}
        />
      </View>
    );
}

function bin() {
    return (
        <DecToBin />
    );
}

function hex() {
    return (
        <DecToHex />
    );
  }



const Stack = createStackNavigator();

function HomeScreens() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreens">
        <Stack.Screen name="HomeScreens" component={Home} options={{
          title:'',
          
          headerTransparent: 'true',
          headerStyle: {
            backgroundColor: color.white,
            
          },
          headerTintColor: color.c2,
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 40,
            paddingBottom: 60
            
          },
        }}/>
        <Stack.Screen name="dectobin" component={bin} options={{
          title: '',
          headerTransparent: 'true',
          headerStyle: {
            backgroundColor: color.c1,
          },
          headerTintColor: color.c2,
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 40,
            paddingBottom: 60
            
          },
        }}/>
        <Stack.Screen name="dectohex" component={hex} options={{
          title: '',
          headerTransparent: 'true',
          headerStyle: {
            backgroundColor: color.c1,
          },
          headerTintColor: color.c2,
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 40,
            paddingBottom: 60
            
          },
        }}/>
        
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default HomeScreens;



