import {Dimensions,StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        backgroundColor:"white",
        margin:10,
        borderRadius:10,
    },
    img:{
        height:Dimensions.get("window").height/4,
        borderTopRightRadius:10,
        borderTopLeftRadius:10,
    },
    inner_container:{
        padding:10,
    },
    title:{
        fontSize:18,
        fontWeight:"bold",
    },
    description:{
        marginTop:5,
    },
    author:{
        fontStyle:"italic",
        textAlign:"right",
        marginTop:5,
    }

})