import React from "react"
import {View,Text,Image} from "react-native"
import styles from "./Card.style.js"

const Card=({prods})=>{
    console.log(prods.title)
    return(
        <View style={styles.container}>
            <View style={styles.img_container}>
                <Image style={styles.img} source={{uri:prods.imgURL}}/>
            </View>
            <View style={styles.card_body}>
                <Text style={styles.title}>{prods.title}</Text>
                <Text style={styles.price}>{prods.price}</Text>
                <Text style={styles.stock}>{prods.inStock ? (null) : "STOKTA YOK"}</Text>
            </View>
        </View>
    )
}

export default Card;