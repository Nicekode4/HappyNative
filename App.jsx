import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [data,setData] = useState("")
  const emoji = [
    {happy: ":)"},
    {sad: ":("},
    {netrual: ":I"},
  ]
  function handleChange(e) {
    setData(e.target.value)
  }
  return (
    <View style={styles.container}>
      <p>Hi!</p>
      <p>Whats your mood today?</p>
      <select name="" id="" onChange={handleChange}>
      <option value=":)">Happy</option>
      <option value=":(">Sad</option>
      <option value=":I">Neutral</option>
      </select>
      
      <h2>{data}</h2>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    color: "white",
    alignItems: 'center',
    justifyContent: 'center',
  },
});
