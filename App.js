import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { render, unstable_renderSubtreeIntoContainer } from 'react-dom';
import { StyleSheet, Text, View, SafeAreaView, TextInput, Button, ScrollView, onPress, Picker} from 'react-native';

export default function App() {






  const [mass, setMass] = useState("")

  

  function padding(a, b, c, d) {
    return {
      paddingTop: a,
      paddingRight: b ? b : a,
      paddingBottom: c ? c : a,
      paddingLeft: d ? d : (b ? b : a)
    }
  }

  const [selectedValue, setSelectedValue] = useState("Mars");

  var weight = 0
  function calculate(mass, planet) {
    if (planet === "Mars") {
      var weight = (mass * 3.7) / 9.8
      return weight
    }

    if (planet === "Moon") {
      return (mass * 1.62) / 9.8

    }

    if (planet === "Jupiter") {
      return (mass * 24.79) / 9.8

    }

    if (planet === "Saturn") {
      return (mass * 10.74) / 9.8

    }

    if (planet === "Mercury") {
      return (mass * 3.70) / 9.8

    }

    if (planet === "Venus") {
      return (mass * 8.87) / 9.8

    }

    if (planet === "Uranus") {
      return (mass * 8.87) / 9.8

    }

    if (planet === "Neptune") {
      return (mass * 11.15) / 9.8

    }
  }

  var weight = (calculate(mass, selectedValue)).toFixed(2)

  return (
    <SafeAreaView style={styles.container}>

      <ScrollView>

        <Text style={{...padding(0,5, 5, 50), fontSize: 30,color: "#483D8B",fontWeight: 'bold',}}>Weight Planet Calculator</Text>

        <View style={styles.inputs}>


          <TextInput placeholder="Tell us your weight on earth!"

            onChangeText={(val) => setMass(val)}
            keyboardType='numeric'
            
          />


        </View>
        <View style={styles.inputs}>

        <Picker
          selectedValue={selectedValue}
          style={{ height: 50, width: 150 }}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
         
            
            <Picker.Item label="Moon" value="Moon" />
            <Picker.Item label="Jupiter" value="Jupiter" />
            <Picker.Item label="Saturn" value="Saturn" />
            <Picker.Item label="Mercury" value="Mercury" />
            <Picker.Item label="Venus" value="Venus" />
            <Picker.Item label="Uranus" value="Uranus" />
            <Picker.Item label="Neptune" value="Neptune" />
            <Picker.Item label="Mars" value="Mars" />
          </Picker>
        </View>
        <View>

          

        </View>
        <View>
          <Text style={styles.result} > Your weight on {selectedValue} is: </Text>
        </View>

        <View>
          <Text style={styles.result2} > {weight} KG </Text>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 35,
    backgroundColor: "#E8E8E8",
    paddingTop: 200,
    textAlign: "center"
  },

  texto: {

    fontSize: 30,
    color: "#483D8B",
    fontWeight: 'bold',
    flex: 1,
    width: 100,
    textAlign: "left"



  },

  inputs: {

    height: 60,
    margin: 20,
    borderWidth: 1,
    padding: 20,
    flex: 1,
    width: 250,
    justifyContent: 'center',
    textAlign: "center"


  },

  result: {


    fontSize: 20,
    color: "#9B9B9B",
    flex: 1,
    textAlign: "center"


  },

  result2: {


    fontSize: 50,
    color: "#483D8B",

    fontWeight: 'bold',
    flex: 1,
    textAlign: "center"

  }

});