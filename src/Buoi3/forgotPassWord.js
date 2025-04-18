import React from "react";
import {  StyleSheet, View, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform } from "react-native"
import { Text, TextInput, Button } from "react-native-paper"

const Login = () => {
    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <Text style={styles.forgotText}>Reset your password</Text>

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
            <Button
            mode="contained"
            onPress={() => console.log("Login pressed")}
            style={styles.sendReset}
            contentStyle={styles.sendResetContent}
            labelStyle={styles.sendResetText}
            >
                Send Reset Email
            </Button>

            <TouchableOpacity style={styles.backLoginButton}>
            <Text style={styles.backLoginButtonText}>Go back to login</Text>
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
  forgotText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30,
    color: "#333",
  },
  inputContainer: {
    width: "100%",
    marginBottom: 15,
  },
  input: {
    width: "100%",
    backgroundColor: "#f9f9f9",
  },
  sendReset: {
    width: "100%",
    marginTop: 10,
    marginBottom: 15,
    backgroundColor: "#FF8C00",
    borderRadius: 8,
  },
  sendResetContent: {
    height: 50,
  },
  sendResetText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  backLoginButton: {
    marginBottom: 30,
  },
  backLoginButtonText: {
    color: "#3498db",
    fontSize: 16,
  },
})