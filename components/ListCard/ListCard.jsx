import React from 'react'
import { View, Text } from 'react-native'
import { styles } from './ListCd'


export default function ListCard(props) {
    console.log(`props`, props)
    return (
        <View>
            <Text style={styles.card}>
                {props.listName} : {props.name}
            </Text>
        </View>
    )
}
