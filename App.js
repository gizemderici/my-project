import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const App = () => {
  const [text, setText] = useState('');
  const [items, setItems] = useState([]);
  const [isListVisible, setIsListVisible] = useState(true);

  const addItem = () => {
    if (text.trim() !== '') {
      setItems(prevItems => [...prevItems, text]);
      setText('');
    }
  };

  const toggleListVisibility = () => {
    setIsListVisible(prevState => !prevState);
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Add Todooo"
            value={text}
            onChangeText={setText}
          />
          <TouchableOpacity style={styles.addButton} onPress={addItem}>
            <Text style={styles.addButtonText}>+</Text>
          </TouchableOpacity>
        </View>
        {isListVisible && (
          <ScrollView style={styles.itemContainer}>
            {items.map((item, index) => (
              <Text key={index} style={styles.item}>
                {item}
              </Text>
            ))}
          </ScrollView>
        )}
        <TouchableOpacity style={styles.toggleButton} onPress={toggleListVisibility}>
          <Text style={styles.toggleButtonText}>
            {isListVisible ? 'Listeyi Gizle' : 'Listeyi Göster'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#23242e',
  },
  content: {
    width: '80%',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  input: {
    flex: 1,
    marginRight: 10,
    borderBottomWidth: 0.5,
    paddingVertical: 12,
  },
  addButton: {
    backgroundColor: '#02bfa6',
    padding: 15,
    borderRadius: 5,
  },
  addButtonText: {
    color: 'black',
    fontSize: 25,
    fontWeight: 'bold',
  },
  itemContainer: {
    marginTop: 10,
    maxHeight: 200,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  toggleButton: {
    backgroundColor: '#02bfa6',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  toggleButtonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default App;
