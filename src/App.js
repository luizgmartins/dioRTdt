import React from "react";
import {View, Image, StyleSheet, SafeAreaView, StatusBar, Text, Linking} from 'react-native';
import { step0 } from "react-native/Libraries/Animated/Easing";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";

const colorGithub = '#010409';
const imageProfileGithub = 'https://avatars.githubusercontent.com/u/95441484?v=4';
const colorFontGithub = '#C9D1D9'
const colorDarkFontGithub = '#4F565E';
const urlToMyGithub = 'https://github.com/luizgmartins';

const App = () => {
    const handlePressGoToGitHub = async () => {
        console.log('Verificando Link...');
        const res = await Linking.canOpenURL(urlToMyGithub);
        if(res){
            console.log('Link aprovado!');
            Linking.openURL(urlToMyGithub);
            console.log('Abrindo link...');
        }
    }
    return (
        <SafeAreaView style={style.container}>
            <StatusBar backgroundColor={colorGithub} barStyle="light-content" />
            <View style={style.content}>
                <Image style={style.avatar} source={{uri: imageProfileGithub}}/>
                <Text style={[style.defaltText, style.name]}>Luiz Gabriel Martins</Text>
                <Text style={[style.defaltText, style.nickname]}>luizgmartins</Text>
                <Text style={[style.defaltText, style.description]}>Engenheiro Eletrônico</Text>
                <Pressable onPress={handlePressGoToGitHub}>
                    <View style={style.button}>
                        <Text style={[style.defaltText, style.textButton]}>Open in Github</Text>
                    </View>
                </Pressable>
            </View>
        </SafeAreaView>
    );
};

export default App;

const style = StyleSheet.create({
    container: {
        backgroundColor: colorGithub,
        flex: 1,
        justifyContent: 'center',
    },
    content: {
        alignItems: 'center',
        padding: 20,

    },
    text: {
        fontSize: 45,
        fontWeight: 'bold',
        color: 'white',
    },
    avatar: {
        height: 100,
        width: 100,
        borderRadius: 100,
        borderColor: 'white',
        borderWidth: 2,
    },
    defaltText: {
        color: colorFontGithub,
    },
    name: {
        fontWeight: 'bold',
        fontSize: 24,
    },
    nickname: {
        fontSize: 18,
        color: colorDarkFontGithub,
    },
    description: {
        fontWeight: 'bold',
        fontSize: 14,
    },
    button: {
        backgroundColor: colorDarkFontGithub,
        borderRadius: 10,
        padding: 20,
        marginTop: 20,
    },
    textButton: {
        fontWeight: 'bold',
        fontSize: 14,
    }
    
});