import React from 'react';
import {
    Platform,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from 'react-native';

interface Props {
  title: string;
  position?: 'br' | 'bl';
  onPress: () => void;
}

export const Fab = ({title, onPress, position = 'br'}: Props) => {
  const ios = () => {
    return (
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.8}
        style={[
          styles.fabLocation,
          position === 'bl' ? styles.left : styles.right,
        ]}>
        <View style={styles.fab}>
          <Text style={styles.fabText}>{title}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  const android = () => {
    return (
      <View
        style={[
          styles.fabLocation,
          position === 'bl' ? styles.left : styles.right,
        ]}>
        <TouchableNativeFeedback
          onPress={onPress}
          background={TouchableNativeFeedback.Ripple('#196F3D ', true, 30)}>
          <View style={styles.fab}>
            <Text style={styles.fabText}>{title}</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  };

  return (Platform.OS==='ios') ? ios():android(); 
};
const styles = StyleSheet.create({
  fab: {
    backgroundColor: '#58D68D',
    width: 50,
    height: 50,
    borderRadius: 100,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  fabText: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  left: {
    left: 25,
  },
  right: {
    right: 25,
  },
  fabLocation: {
    position: 'absolute',
    bottom: 25,
  },
});
