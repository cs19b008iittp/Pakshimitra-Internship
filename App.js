import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignUp from './SignUp';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{
            headerTitle: () => (
              <Image
                source={require('./assets/logo-zoho.png')}
                style={styles.logo}
              />
        
            ),
            
            headerTintColor: '#fff',
            headerTitleAlign: 'left',
            headerTitleContainerStyle: {
              left: 60 // Adjust this value according to your requirement
            },
            headerStyle: {
              backgroundColor: '#0084ff',
              height: 40 // Adjust this value according to your requirement
            },
            headerStyle: {
              backgroundColor: '#0084ff',
            },
            headerLeft: () => (
              <View style={styles.blueHeader} />
            ),
            headerRight: () => (
              <View style={styles.signInContainer}>
                <Text style={styles.signInText}>
                Already have a Zoho account? {' '}
                <Text
    style={styles.link}
    onPress={() => Linking.openURL('Sign in')}
  >
   Sign in
  </Text>{' '}
                </Text>
                
              </View>
            )
          }}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 140,
    height: 30,
    resizeMode: 'contain',
  },
  blueHeader: {
    flex: 1,
    backgroundColor: '#0084ff',
  },
  signInContainer: {
    marginRight: 20,
  },
  link: {
    color: 'white',
    textDecorationLine: 'underline',
  },
  signInText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
