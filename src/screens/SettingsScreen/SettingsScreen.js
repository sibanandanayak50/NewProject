import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

import { useDispatch, useSelector } from 'react-redux';
import { addTextValue } from '../../actions/action';
export default function SettingsScreen() {
    const dispatch = useDispatch();
    const initialData = useSelector(state => state.allTextVlaue);
    console.log('mano :' + JSON.stringify(initialData))
    const [text, onChangeText] = useState(initialData.inputText);
    const list = useState(initialData.inputTextList)[0];

    const onPress = () => {
        dispatch(addTextValue({ input: text, list: list }))
        onChangeText('')
    }

    const printText = () => {
        if (list.length) {
            return list.map((item, index) => <Text key={index.toString()}>{item + "\n"}</Text>)
        }
        return null
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text>{printText()}</Text>
            </View>
            <View style={styles.footer}>
                <View style={styles.footerArea}>
                    <TextInput
                        value={text}
                        onChangeText={onChangeText}
                        placeholder="Enter Your Text Here"
                        style={styles.textInputVal}
                    />
                    <TouchableOpacity onPress={onPress}>
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>Submit</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        flex: 4,
        justifyContent: 'flex-start',
        marginVertical: 20,
        marginHorizontal: 20
    },
    footer: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 10,
        paddingVertical: 10
    },
    footerArea: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textInputVal: {
        height: 40,
        width: '60%',
        borderWidth: 1,
        borderRadius: 10,
        padding: 10
    },
    button: {
        height: 40,
        width: 100,
        backgroundColor: 'steelblue',
        borderRadius: 10,
        marginHorizontal: 5,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5
    },
    buttonText: {
        fontSize: 18,
        fontWeight: '600',
        color: '#fff',

    }
})
