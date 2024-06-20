import { Image, StyleSheet, Platform, View, TouchableOpacity, Text } from 'react-native';



export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.resultContainer}>
        <Text style={styles.resultText}>0</Text>
      </View>
      <View style={styles.buttonsContainer}>
        {renderButtons()}
      </View>
    </View>
  );
}

const renderButtons = () => {
  const buttons = [
    ['C', '±', '%', '/'],
    ['7', '8', '9', '*'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '='],
  ];

  return buttons.map((row, rowIndex) => (
    <View key={rowIndex} style={styles.row}>
      {row.map((button, buttonIndex) => (
        <TouchableOpacity key={buttonIndex} style={styles.button}>
          <Text style={styles.buttonText}>{button}</Text>
        </TouchableOpacity>
      ))}
    </View>
  ));
};

const styles = StyleSheet.create({
  // Styles from the first object
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  resultContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'flex-end',
    backgroundColor: '#fff',
    padding: 20,
  },
  resultText: {
    fontSize: 48,
    color: '#000',
  },
  buttonsContainer: {
    flex: 5,
    backgroundColor: '#d3d3d3',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: 5,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#fff',
  },
  buttonText: {
    fontSize: 32,
    color: '#000',
  },
  
  // Styles from the second object
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});

