import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

import MicButton from '../components/MicButton';

import Colors from '../theme/colors';

import Typography from '../theme/typography';

export default function HomeScreen() {

  const [text] = useState("Tap the microphone");

  return (

    <View style={styles.container}>

      <Text style={styles.title}>
        Vedra
      </Text>

      <View style={{ flex: 1 }} />

      <MicButton
        onPress={() => {
          console.log("Mic tapped");
        }}
      />

      <View style={{ height: 50 }} />

      <Text style={styles.text}>
        {text}
      </Text>

      <View style={{ flex: 1 }} />

    </View>

  );

}

const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: Colors.background,

    justifyContent: 'center',

    alignItems: 'center',

    padding: 20

  },

  title: {

    fontSize: Typography.title,

    color: Colors.white,

    fontWeight: '700',

    marginTop: 50

  },

  text: {

    color: Colors.text,

    fontSize: Typography.body,

    textAlign: 'center'

  }

});
