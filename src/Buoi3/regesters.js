import React,{useState} from "react";
import {  StyleSheet, View, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform } from "react-native"
import { HelperText,Text, TextInput, Button } from "react-native-paper"
import firestore from "@react-native-firebase/firestore"

const ref = firestore().collection('Users')

const Login = ({ navigation }) => {
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState('');
    const [confshowPassword, setConfShowPassword] = useState(false);

    const checkPassword = () => {
    var regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-zA-Z]).{6,16}$/
    return !regularExpression.test(password)
    }
    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <Text style={styles.createText}>Create a new account</Text>

            <View style={styles.inputContainer}>
            <TextInput
                placeholder="test@test.com"
                left={<TextInput.Icon icon="email" />}
                style={styles.input}
                mode="outlined"
                outlineColor="#ddd"
                activeOutlineColor="#FF8C00"
            />
            </View>

            <View style={styles.inputContainer}>
            <TextInput
                placeholder="Nhập mật khẩu"
                left={<TextInput.Icon icon="key" />}
                secureTextEntry={!showPassword}
                style={styles.input}
                right={
                <TextInput.Icon icon={showPassword ? "eye-off" : "eye"} onPress={() => setShowPassword(!showPassword)} />
                }
                mode="outlined"
                outlineColor="#ddd"
                activeOutlineColor="#FF8C00"      
            />
            {checkPassword() && (
            <HelperText type="error" visible={checkPassword()} style={styles.errorText}>
              Password từ 6-16 ký tự gồm chữ hoa, thường và ký tự đặc biệt
            </HelperText>
          )}
            </View>
            <View style={styles.inputContainer}>
            <TextInput
                placeholder="Xác thực  mật khẩu"
                left={<TextInput.Icon icon="key" />}
                secureTextEntry={!confshowPassword}
                style={styles.input}
                right={
                    <TextInput.Icon icon={confshowPassword ? "eye-off" : "eye"} onPress={() => setConfShowPassword(!confshowPassword)} />
                }
                mode="outlined"
                outlineColor="#ddd"
                activeOutlineColor="#FF8C00"
            />
            </View>

            <Button
            mode="contained"
            //onPress={() => console.log("Login pressed")}
            style={styles.SignupButton}
            contentStyle={styles.SignupButtonContent}
            labelStyle={styles.SignupButtonText}
            >
            Signup
            </Button>

            <TouchableOpacity style={styles.HaveAccountButton}
              onPress={() => navigation.navigate("Login")}
            >
            <Text style={styles.HaveAccountText}>Have already an account ?</Text>
            </TouchableOpacity>

        </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 20,
  },
  createText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30,
    color: "#333",
  },
  inputContainer: {
    width: "100%",
    marginBottom: 15,
  },
  errorText: {
    color: "#FF6347",
    fontSize: 12,
    marginTop: 2,
    marginLeft: 5,
  },
  input: {
    width: "100%",
    backgroundColor: "#f9f9f9",
  },
  SignupButton: {
    width: "100%",
    marginTop: 10,
    marginBottom: 15,
    backgroundColor: "#FF8C00",
    borderRadius: 8,
  },
  SignupButtonContent: {
    height: 50,
  },
  SignupButtonText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  HaveAccount: {
    marginBottom: 30,
  },
  HaveAccountText: {
    color: "#3498db",
    fontSize: 16,
  },
})