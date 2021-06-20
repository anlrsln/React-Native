import React from "react"
import {View,Text,SafeAreaView,TouchableOpacity,StyleSheet,FlatList,Image,ScrollView,Dimensions} from "react-native"
import news_data from "./news_data.json";
import news_banner from "./news_banner_data.json"
import NewsCard from "./Components/NewsCard";


function App(){
  const renderNews=({item})=><NewsCard news={item}/>
  return(
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>News</Text>
        <FlatList
          ListHeaderComponent={()=>(
            <ScrollView horizontal showsHorizontalScrollIndicator={false} stickyHeaderIndices={[0]}>
              {news_banner.map(bannerNews=><Image style={styles.banner_img} source={{uri:bannerNews.imageUrl}}/>)}
            </ScrollView>
          )}
          data={news_data} 
          keyExtractor={(item,index)=>item.u_id.toString()}
          renderItem={renderNews}
        />
      </View>
    </SafeAreaView>
  );  
}
 
const styles= StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#eceff1",
  },
  title:{
    fontSize:50,
    fontWeight:"bold",
    margin:10
  },
  banner_img:{
    height:Dimensions.get("window").height/5,
    width:Dimensions.get("window").width/2
  },
})



export default App;