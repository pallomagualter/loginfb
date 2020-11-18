import React, { useState } from 'react';
import { StyleSheet, TextInput, View, TouchableOpacity, Text } from 'react-native';
//import firebase from 'firebase';

export default function App() {
  return (
    <View style={styles.container}>
      <TextInput 
        style={styles.input}
        placeholder="Type your email"
      />

      <TextInput 
        style={styles.input}
        placeholder="Type your password"
      />
      
      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.buttonText}>LOG IN</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131313',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    height: 45,
    backgroundColor: '#fff',
    alignSelf: 'stretch',
    borderColor: '#EEE',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  button: {
    height: 45,
    backgroundColor: '#8257E6',
    borderRadius: 8,
    alignSelf: 'stretch',
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
