import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions, TouchableOpacity, Image } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Foundation, MaterialIcons, MaterialCommunityIcons, FontAwesome, AntDesign } from '@expo/vector-icons';
import { RadioButton } from 'react-native-paper';



const { width: WIDTH } = Dimensions.get('window')

export default class ForgottenPassword extends Component {
    state = {
        checked: 'Male',
    };
    render() {
        const { checked } = this.state;
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
                        <Text style={styles.logoText}>Đăng ký</Text>
                    </View>
                </View>
                <View style={styles.inputContainer}>
                    <MaterialCommunityIcons name="rename-box" size={32} color='black'
                        style={styles.inputIcon}></MaterialCommunityIcons>
                    <TextInput
                        style={styles.input}
                        placeholder={'Tên hiển thị'}
                        underlineColorAndroid='transparent'
                    />
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
                    <MaterialIcons name="email" size={32} color='black'
                        style={styles.inputIcon}></MaterialIcons>
                    <TextInput
                        style={styles.input}
                        placeholder={'Email'}
                        underlineColorAndroid='transparent'
                    />
                </View>

                <View style={styles.inputContainer}>
                    <FontAwesome name="calendar" size={32} color='black'
                        style={styles.inputIcon}></FontAwesome>
                    <TextInput
                        style={styles.input}
                        placeholder={'Ngày sinh'}
                        underlineColorAndroid='transparent'
                    />
                </View>
                <View style={styles.radioGroup} >
                    <Foundation name="male-female" size={32} color='black'
                        style={styles.genderIcon}></Foundation>
                    <RadioButton
                        value="Male"
                        checked = {true}
                        status={checked === 'Male' ? 'checked' : 'unchecked'}
                        onPress={() => { this.setState({ checked: 'Male' }); }}
                    />
                    <Text style={styles.radioName}>Nam</Text>
                    <RadioButton
                        value="Female"
                        status={checked === 'Female' ? 'checked' : 'unchecked'}
                        onPress={() => { this.setState({ checked: 'Female' }); }}
                    />
                    <Text style={styles.radioName}>Nữ</Text>
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
                <View style={styles.inputContainer}>
                    <MaterialCommunityIcons name="textbox-password" size={32} color='black'
                        style={styles.inputIcon}></MaterialCommunityIcons>
                    <TextInput
                        style={styles.input}
                        secureTextEntry={true}
                        placeholder={'Xác nhận mật khẩu'}
                        underlineColorAndroid='transparent'
                    />
                </View>
                <TouchableOpacity style={styles.btnRegister}>
                    <Text style={styles.textBtn}>Đăng ký</Text>
                </TouchableOpacity>
                <View>

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
    logoContainer: {
        marginTop: 10,
        alignItems: 'center',
        marginBottom: 10
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
    btnRegister: {
        width: WIDTH - 170,
        height: 45,
        borderRadius: 5,
        backgroundColor: '#0A6ADA',
        justifyContent: 'center',
        marginTop: 20,
        marginHorizontal: 85
    },
    textBtn: {
        color: 'white',
        textAlign: "center",
        fontSize: 16,
    },
    radioGroup: {
        // flex: 1,
        marginTop: 10,
        flexDirection: 'row',
        marginHorizontal: 25,
        borderWidth: 2,
        borderRadius: 15,
        borderColor: '#0A6ADA',
        backgroundColor: 'rgba(255,255,255,0.7)',
        paddingLeft: 55,
    },
    radioName: {
        marginTop: 7,
        fontSize: 16,
    },
    genderIcon: {
        position: "absolute",
        top: 2,
        left: 11,
        color: 'gray',
    },
})