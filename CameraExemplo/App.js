import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { Camera } from 'expo-camera';

export default function App() {
  return (
    <View style={styles.container}>
      <Camera
        style={ styles.Camera }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Camera : {
    flex : 1,
    height : '80%',
    width : '100%',
  }
});
