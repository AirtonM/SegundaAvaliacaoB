import React, { useState, useCallback, useEffect } from "react";
import {  Text, SafeAreaView, StatusBar, View, TouchableOpacity, 
          FlatList, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import TaskList from './src/components/TaskList';
import TaskListC from './src/components/TaskListC';
import styles from "./style.js";
import * as Animatable from 'react-native-animatable';
import { Modal } from 'react-native-web';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AnimateBtn = Animatable.createAnimatableComponent(TouchableOpacity);

// function main
export default function App() {
  const [task, setTask] = useState([]);
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [inputC, setInputC] = useState('');

  // Buscando todas as tarefas ao iniciar o app
   useEffect(() => {

     async function loadTask(){
       const taskStorage = await AsyncStorage.getItem('@task');
      
       if(taskStorage){
         setTask(JSON.parse(taskStorage));
       }
     }
     loadTask();
   }, []);

   useEffect(() => {

     async function saveTask(){
       await AsyncStorage.setItem('@task',JSON.stringify(task));
     }
     saveTask();
   },[task]);

  function handleAdd(){
    if(input === '' || inputC === '') return

    const data = 
        {
        key: input,
        task: inputC,

      }


    setTask([...task, data])

    setInput('')
    setInputC('')
    setOpen(false)
  }

  const handleDelete = useCallback((data) => {
    const find = task.filter(r => r.key !== data.key);
    setTask(find);
  })
  
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#171d31" barStyle="light-content" />

      <View style={styles.container} >
        <Text style={styles.title}>Compromissos do Airton Marinho</Text>
      </View>

      <FlatList 
        marginHorizontal={10}
        showsHorizontalScrollIndicator={false}
        data={task}
        keyExtractor={(item) => String(item.key)}
        renderItem={({ item }) => <TaskList data={item} handleDelete={handleDelete}/>}  
      />



      <Modal animationType="slide" transparent={false} visible={open}>
        <SafeAreaView style={styles.modal}>
          <View style={styles.modalHeader}>
            <TouchableOpacity onPress={ () => setOpen(false)}>
              <Ionicons style={{marginLeft:5, marginRight: 5}} name="md-arrow-back" size={40} color="#FFF" />
            </TouchableOpacity>
            <Text style={styles.modalTitle}>Novo Compromisso</Text>
          </View>

          <Animatable.View style={styles.modalBody} animation="fadeInUp" useNativeDriver>
            <TextInput
              multiline={false}
              placeholderTextColor="#747474"
              autoCorrect={false}
              placeholder="Entre com a Data"
              style={styles.input}
              value={input}
              onChangeText={(texto) => setInput(texto)}
            />
            <TextInput
              multiline={false}
              placeholderTextColor="#747474"
              autoCorrect={false}
              placeholder="Entre com o Compromisso"
              style={styles.input}
              value={inputC}
              onChangeText={(texto) => setInputC(texto)}
            />

            <TouchableOpacity style={styles.handleAdd} onPress={handleAdd}>
              <Text style={styles.handleAddText}>Agendar</Text>
            </TouchableOpacity>
          </Animatable.View>
        </SafeAreaView>
      </Modal>

      {/* Aqui vai a lista */}
        <AnimateBtn 
          style={styles.fab}
          useNativeDriver
          animation="bounceInUp"
          duration={1500}
          onPress={ () => setOpen(true)}
        >
          <Ionicons name="ios-add" size={35} color="#FFF" />
        </AnimateBtn>

    </SafeAreaView> 
  );
}