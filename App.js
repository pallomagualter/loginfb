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
      
      <TouchableOpacity style={styles.btnLogIn} onPress={() => {}}>
        <Text style={styles.buttonText}>LOG IN</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btnLogOut} onPress={() => {}}>
        <Text style={styles.buttonText}>LOG OUT</Text>
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
  btnLogIn: {
    height: 45,
    backgroundColor: '#04d361',
    borderRadius: 8,
    alignSelf: 'stretch',
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  btnLogOut: {
    height: 45,
    backgroundColor: '#EB5757',
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
