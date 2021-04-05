import React, { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'

interface Props {}

export const Main: React.FC<Props> = () => {
  const [text1, setText1] = useState<string>('')
  const [text2, setText2] = useState<string>('')
  const [textConverted1, setTextConverted1] = useState<string>('')
  const [textConverted2, setTextConverted2] = useState<string>('')

  const onPressConvertString1 = () => {
    setTextConverted1(text1.toLocaleUpperCase()) // usage of the .toUpperCase() method is not allowed^ however there is toLocaleUpperCase method also
  }

  const onPressConvertString2 = () => {
    let textConverted = ''
    for (let x = 0; x < text2.length; x++) {
      textConverted += String.fromCharCode(
        text2.charCodeAt(x) > 96 && text2.charCodeAt(x) < 123 ? text2.charCodeAt(x) - 32 : text2.charCodeAt(x),
      )
    }
    setTextConverted2(textConverted)
  }
  return (
    <View style={styles.root}>
      <Text style={styles.text}>Type a string</Text>
      <TextInput value={text1} onChangeText={setText1} style={styles.input} />
      <View style={styles.buttonWrapper}>
        <Button onPress={onPressConvertString1} title="Press to convert" />
      </View>
      <Text style={styles.outputText}>
        Here is converted string: {'\n'} {textConverted1}
      </Text>
      <Text style={styles.text}>
        also another upper case string conversation if in some case the first one was tricky (only for english letters)
      </Text>
      <TextInput value={text2} onChangeText={setText2} style={styles.input} />
      <View style={styles.buttonWrapper}>
        <Button onPress={onPressConvertString2} title="Press to convert" />
      </View>
      <Text style={styles.outputText}>
        Here is converted string: {'\n'} {textConverted2}
      </Text>
    </View>
  )
}
const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  text: { color: 'black', marginTop: 40 },
  input: {
    width: '80%',
    height: 40,
    marginTop: 20,
    color: 'black',
    borderWidth: 1,
    borderColor: 'black',
    paddingHorizontal: 20,
  },
  buttonWrapper: {
    marginTop: 20,
    width: '50%',
  },
  buttonText: {
    color: 'black',
  },
  outputText: {
    color: 'black',
    marginTop: 40,
    textAlign: 'center',
  },
})
