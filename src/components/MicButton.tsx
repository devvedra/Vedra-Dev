import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import { colors } from '../theme/colors';
import { typography } from '../theme/typography';

export default function MicButton() {
  const [isRecording, setIsRecording] = useState(false);

  const handlePress = () => {
    setIsRecording(!isRecording);
  };

  return (
    <TouchableOpacity
      style={[
        styles.button,
        isRecording && styles.buttonActive,
      ]}
      onPress={handlePress}
    >
      <Text
        style={[
          styles.text,
          isRecording && styles.textActive,
        ]}
      >
        {isRecording ? '🔴 Recording...' : '🎤 Press to Record'}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  buttonActive: {
    backgroundColor: colors.danger,
  },
  text: {
    ...typography.button,
    color: colors.white,
  },
  textActive: {
    color: colors.white,
  },
});
