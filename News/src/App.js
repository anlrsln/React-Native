import React from 'react';
import { View,Text,SafeAreaView,StyleSheet,TextInput,FlatList,Dimensions} from 'react-native';
import new_items from "./Components/items.json"
import Card from "./Components/Card"


const App=()=>{
  const renderItems=({item})=><Card prods={item}/>
  return(
    <SafeAreaView style={styles.container}>
      <View style={styles.head}>
        <Text style={styles.title}>PatikaStore</Text>
        <TextInput style={styles.input} placeholder="Ara..."/>
      </View>
      <View></View>
      <FlatList data={new_items} keyExtractor={(item,index)=>item.id.toString()} renderItem={renderItems} numColumns="2"/>
    </SafeAreaView>
  )
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"white",
  },
  head:{
    padding:10,
  },
  title:{
    fontSize:50,
    fontWeight:"bold",
    color:"purple"
  },
  input: {
    padding:10,
    height: 45,
    margin: 12,
    borderWidth: 1,
    borderRadius:10,
    backgroundColor:"#eceff1",
    borderWidth:0
  },
})


export default App;
