import React,{useState} from "react";
import {  StyleSheet, View, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform } from "react-native"
import { Text, TextInput, Button } from "react-native-paper"

const Login = ({ navigation }) => {
    const [showPassword, setShowPassword] = useState(false)
    const [confshowPassword, setConfShowPassword] = useState(false)
    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <Text style={styles.createText}>Create a new account</Text>
            <View style={styles.inputContainer}>
            <TextInput
                placeholder="phone"
                left={<TextInput.Icon icon="phone" />}
                style={styles.input}
                mode="outlined"
                outlineColor="#ddd"
                activeOutlineColor="#FF8C00"
            />
            </View>

            <View style={styles.inputContainer}>
            <TextInput
                placeholder="Password"
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
            </View>
            <View style={styles.inputContainer}>
            <TextInput
                placeholder="Confirm password"
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
              onPress={() => navigation.navigate("Logins")}
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
    color: "#FF3366",
  },
  inputContainer: {
    width: "100%",
    marginBottom: 15,
  },
  input: {
    width: "100%",
    backgroundColor: "#f9f9f9",
  },
  SignupButton: {
    width: "100%",
    marginTop: 10,
    marginBottom: 15,
    backgroundColor: "#FF3366",
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