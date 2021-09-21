import React, { useState } from 'react'
import { View, Text, Modal, Alert, TouchableOpacity, Pressable, Button } from 'react-native'
import { TextInput } from 'react-native-gesture-handler';
import ListCard from '../ListCard/ListCard';
import { styles } from './Modal';

export default function ListModal(props) {
    const [modalVisible, setModalVisible] = useState(false);
    const [name, setName] = useState("")
    const [listName, setListName] = useState("")
    const [data, setData] = useState([])

    // const util = require('util')

    const canSubmit = (e) => {


        if (listName.length < 5) {
            return <Button
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
                title="Annuler"
            >
                <Text style={styles.textStyle}></Text>
            </Button>
        } else {
            return <Button
                style={[styles.button, styles.buttonClose]}
                onPress={() => {

                    setModalVisible(!modalVisible)
                    setData({ name, listName} )
                   

                }}
                title="Enregistrer mes modifications"
            >
                <Text style={styles.textStyle}></Text>
            </Button>
        }
    }
    console.log(`listName`, listName)
    console.log(`name`, name)
    console.log("data", data)
    return (

        <View style={styles.centeredView}>
            <Pressable
                style={[styles.button, styles.buttonOpen]}
                onPress={() => {
                    setModalVisible(!modalVisible)
                    canSubmit()
                }}
            >
                <Text style={styles.textStyle}> {!modalVisible ? "+ Ajouter une liste" : "Fermer"} </Text>
            </Pressable>
            {modalVisible &&
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        setModalVisible(!modalVisible);
                    }}
                >
                    <View style={styles.centeredView}>

                        <View style={styles.modalView}>

                            <TextInput style={[styles.modalText, { fontWeight: "bold" }]}
                                placeholder="Nom de la liste"
                                value={listName}
                                onChangeText={setListName} />

                            <TextInput style={styles.modalText}
                                placeholder="Que dois-tu faire?"
                                value={name}
                                onChangeText={setName} />

                            {canSubmit()}
                        </View>
                    </View>
                </Modal>
            }{name && listName &&
            <ListCard listName={listName} name={name}/>
}
        </View>
    )
}


