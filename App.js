import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, SafeAreaView, Platform } from 'react-native';
import {
  useFonts,
  BungeeShade_400Regular 
} from '@expo-google-fonts/inter'
import Amplify from 'aws-amplify'
import config from './aws-exports'

import { API, graphqlOperation } from "aws-amplify";
import { createJoke } from "./graphql/mutations";
import { listJokes } from "./graphql/queries";
Amplify.configure(config)

const isWeb = Platform.OS === 'web'

function ShowPlatform() {
  return (
    isWeb ? <Text>On the Web</Text> : <Text>on Moble</Text>
  )
}

export default function App() {
  const [addJoke, setAddJoke] = useState(false)
  const [showJoke, setShowJoke] = useState(false)
  const [newJokeQuestion, setNewJokeQuestion] = useState("")
  const [newjokeAnswer, setNewJokeAnswer] = useState("")
  const [joke, setJoke] = useState({ "question": "", "answer": "" })

  let jokeQuestion = newJokeQuestion
  let jokeAnswer = newjokeAnswer

  async function addNewJoke() {
    const jokeDetails = {"question": jokeQuestion, 'answer': jokeAnswer}
    await API.graphql(graphqlOperation(createJoke, { input: jokeDetails }));
    setNewJokeQuestion("")
    setNewJokeAnswer("")
  }

  async function fetchJoke() {
    const jokeData = await API.graphql(graphqlOperation(listJokes));
    console.log(jokeData)
    const jokes = jokeData.data.listJokes.items;
    const numJokes = jokes.length - 1
    const jokeIndex = Math.floor(Math.random(2) * numJokes)
    setJoke(jokes[jokeIndex]);
    setAddJoke(false)
    setShowJoke(true)
  }

  console.log(isWeb)

  return (
    <SafeAreaView>
      <Text style={styles.pageTitle}>Joke Box</Text>
      <ShowPlatform />
    <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={fetchJoke}>
      <Text>Get Joke</Text>
      </TouchableOpacity>
    </View>
      <View>
        {addJoke && 
          (
          <View>
          <TextInput
          style={styles.textBox}
          value={jokeQuestion}
          onChangeText={(text) => setNewJokeQuestion(text)}  
          placeholder="Joke Question"
        />
          <TextInput
          style={styles.textBox}
          value={jokeAnswer}
          onChangeText={(text) => setNewJokeAnswer(text)}  
          placeholder="Answer"
            />
            <TouchableOpacity
          style={styles.button}
          onPress={addNewJoke}>
            <Text
            >Add</Text>
            </TouchableOpacity>
            </View>
        )
        }
      </View>
      <View>
        {showJoke &&
          (
          <View style={styles.jokeContainer}>
            <Text style={styles.jokeText}>{joke.question}</Text>
            <Text style={styles.jokeText}>{joke.answer}</Text>
          </View>
        )
        }
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
    flexDirection: "row",
  },
  button: {
    fontSize: 30,
    backgroundColor: 'teal',
    padding: 10,
    marginLeft: 20,
    borderRadius: 20,
  },
  textBox: {
    borderColor: "black",
    fontSize: 18,
    padding: 10,
    marginHorizontal: 30,
  },
  jokeContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
  },
  jokeText: {
    fontSize: 24
  },
  pageTitle: {
    fontSize: 30,
    textAlign: "center",
    fontFamily: "BungeeShade_400Regular"
  }
});
