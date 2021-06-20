import {Dimensions,StyleSheet} from "react-native";

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#eceff1",
        padding:10,
        marginTop:10,
        marginRight:5,
        marginLeft:5,
        borderRadius:10,
        width:187,
        alignItems:"center",

    },
    card_body:{
        flex:1,
    },
    title:{
        fontSize:20,
        fontWeight:"bold",
    },
    price:{
        marginTop:10,
        marginBottom:10,
        fontSize:20
    },
    img_container:{
        flex:1
    },
    img:{
        flex:1,
        margin:5,
        resizeMode:"contain",
        height:200,
        width:200,
        borderRadius:10

    },
    stock:{
        fontSize:20,
        fontWeight:"bold",
        color:"red"
    }

})