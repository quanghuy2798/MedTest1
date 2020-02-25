import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions, TouchableOpacity, Image } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Foundation, MaterialCommunityIcons,AntDesign } from '@expo/vector-icons';



const { width: WIDTH } = Dimensions.get('window')

export default class Login extends Component {
    render() {
        return (
            <View>
                <View style={styles.nameHeader}>
                    <AntDesign name='caretleft' size={32} color='white'
                        onPress={() => { alert("Back") }}
                        style={styles.backIcon}
                    ></AntDesign>
                    <Text style={styles.nameText}>MedTest</Text>
                </View>
                <View>
                    <View style={styles.logoContainer}>
                        <Image
                            source={{ uri: 'https://getdrawings.com/free-icon/react-icon-69.png' }}
                            style={styles.logo}
                        ></Image>
                        <Text style={styles.logoText}>Đăng nhập</Text>
                    </View>
                </View>
                <View style={styles.inputContainer}>
                    <Foundation name="telephone" size={32} color='black'
                        style={styles.inputIcon}></Foundation>
                    <TextInput
                        style={styles.input}
                        placeholder={'Số điện thoại'}
                        underlineColorAndroid='transparent'
                    />
                </View>
                <View style={styles.inputContainer}>
                    <MaterialCommunityIcons name="textbox-password" size={32} color='black'
                        style={styles.inputIcon}></MaterialCommunityIcons>
                    <TextInput
                        style={styles.input}
                        secureTextEntry={true}
                        placeholder={'Mật khẩu'}
                        underlineColorAndroid='transparent'
                    />
                </View>
                <TouchableOpacity style={styles.btnLogin}>
                    <Text style={styles.textBtn}>Đăng nhập</Text>
                </TouchableOpacity>
                <View style={styles.textLinkView} >
                    <Text
                        style={styles.textLink}
                        onPress={() => { alert("Change password") }}
                    >Quên mật khẩu?</Text>
                </View>
                <View style={styles.textLinkView} >
                    <Text
                        style={styles.textLink}
                        onPress={() => { alert("Signup") }}
                    >Đăng ký ngay</Text>
                </View>
            </View>
        );
    }
}
//#25345D
//#0A6ADA
//#27CDCB
const styles = StyleSheet.create({
    backIcon: {
        position: "absolute",
        top: 10,
        left: 20,
    },
    nameHeader: {
        alignItems: "center",
        backgroundColor: '#25345D',
    },
    nameText: {
        margin: 10,
        fontSize: 25,
        color: 'white',
    },
    logo: {
        width: 120,
        height: 120,

    },
    logoContainer: {
        marginTop: 30,
        alignItems: 'center',
        marginBottom: 30
    },
    logoText: {
        fontSize: 40,
        color: '#25345D',
    },
    input: {
        width: WIDTH - 55,
        height: 45,
        borderRadius: 15,
        fontSize: 16,
        paddingLeft: 65,
        borderWidth: 2,
        borderColor: '#0A6ADA',
        backgroundColor: 'rgba(255,255,255,0.7)',
        color: 'rgba(255,255,255,0.7)',
        marginHorizontal: 25
    },
    inputIcon: {
        position: 'absolute',
        top: 7,
        left: 37,
    },
    inputContainer: {
        marginTop: 10
    },
    btnLogin: {
        width: WIDTH - 170,
        height: 45,
        borderRadius: 5,
        backgroundColor: '#0A6ADA',
        justifyContent: 'center',
        marginTop: 40,
        marginHorizontal: 85
    },
    textBtn: {
        color: 'white',
        textAlign: "center",
        fontSize: 16,
    },
    textLinkView: {
        marginHorizontal: 120,
    },
    textLink: {
        marginTop: 20,
        textAlign: "center",
        textDecorationLine: 'underline',
        fontSize: 16,
    },

})