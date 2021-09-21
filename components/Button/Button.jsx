import React, { useState } from 'react'
import { View, Text, Pressable, TouchableOpacity } from 'react-native'
import { styles } from "./Btn.js"
import { NativeRouter } from 'react-router-native'
import ListModal from '../Modal/ListModal.jsx'

export default function Button(props) {
   

    console.log(`props`, props)
    return (
        <View style={styles.container}>
           
            
                    <ListModal />
                
        </View>
    )
}
