import React from 'react';
import { View, TextInput, StyleSheet } from "react-native";
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
    return <View style={styles.background}>
        <Feather name={"search"} style={styles.iconStyle}/>
        <TextInput
            autoCapitalize={"none"}
            autoCorrect={false}
            placeholder={"Search"}
            style={styles.inputStyle}
            value={term}
            onChangeText={newTerm => onTermChange(newTerm)}
            onEndEditing={onTermSubmit}
        />
    </View>
};

const styles = StyleSheet.create({
    background: {
        marginTop: 15,
        backgroundColor: 'grey',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        marginBottom: 10,
        flexDirection: 'row',
    },
    inputStyle: {
        flex: 1,
        fontSize: 18,
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15,
    }
});

export default SearchBar;