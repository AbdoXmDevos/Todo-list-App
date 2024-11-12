import React, { useState } from "react";
import {Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import Task from "./components/Task"

export default function App() {
  const [task,setTask] = useState();
  const [tasks,setTasks] = useState([]);
  
  const handleAddTask = () =>{
    Keyboard.dismiss();
    setTasks([...tasks,task])
    setTask(null)
  }
  const completeTask = (index) => {
    let copy = [...tasks];
    copy.splice(index,1);
    setTasks(copy);
  }

  return(
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's Tasks</Text>
        <View style={styles.items}>
            {
              tasks.map((item, index) => {
                return <TouchableOpacity onPress={() => completeTask(index)}>
                  <Task key={index} text={item}/>
                </TouchableOpacity>
                
              })
            }
        </View>
      </View>
      <KeyboardAvoidingView 
      behavior={Platform.OS === "ios"?"padding":"height"}
      style={styles.writeTaskWrapper}>
        <TextInput style={styles.taskInput} placeholder="Add a task !" value={task} onChangeText={text=> setTask(text)}/>
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  )
  
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#F0F0FF'
  },
  tasksWrapper:{
    paddingTop: 80,
    paddingHorizontal: 30,
  },
  sectionTitle:{
    fontSize:24,
    fontWeight:'bold'
  },
  items:{
    marginTop:30,
  },
  writeTaskWrapper:{
    position:'absolute',
    bottom:60,
    width:'100%',
    flexDirection:'row',
    justifyContent:'space-evenly',
    alignItems:'center',
  },
  taskInput:{
    paddingHorizontal:15,
    paddingVertical:15,
    backgroundColor:'#FFF',
    borderRadius:60,
    borderColor:'#C0C0C0',
    borderWidth:1,
    height:50,
    width:300,
  },
  addWrapper:{
    width:60,
    height:60,
    backgroundColor:'#FFF',
    borderRadius:60,
    justifyContent:'center',
    alignItems:'center',
    borderColor:'#C0C0C0',
    borderWidth:1,
  },
  addText:{

  },
});
