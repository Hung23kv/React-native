import { useState } from "react"
import { Image, StyleSheet, View, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform } from "react-native"
import { HelperText, Text, TextInput, Button } from "react-native-paper"

const Login = () => {
  const [email, setEmail] = useState("hung@tdmu.edu.vn")
  const [password, setPassword] = useState("123")
  const [showPassword, setShowPassword] = useState(false)

  const checkEmail = () => {
    return !email.includes("@")
  }

  const checkPassword = () => {
    var regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-zA-Z]).{6,16}$/
    return !regularExpression.test(password)
  }

  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.logoContainer}>
          <Image source={require("../../images/logo.png")} style={styles.logo} resizeMode="contain" />
        </View>

        <Text style={styles.welcomeText}>Welcome back!</Text>

        <View style={styles.inputContainer}>
          <TextInput
            value={email}
            onChangeText={setEmail}
            placeholder="Enter email"
            left={<TextInput.Icon icon="email" />}
            style={styles.input}
            mode="outlined"
            outlineColor="#ddd"
            activeOutlineColor="#FF8C00"
          />
          {checkEmail() && (
            <HelperText type="error" visible={checkEmail()} style={styles.errorText}>
              Nhập email
            </HelperText>
          )}
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
            placeholder="Nhập mật khẩu"
            left={<TextInput.Icon icon="key" />}
            right={
              <TextInput.Icon icon={showPassword ? "eye-off" : "eye"} onPress={() => setShowPassword(!showPassword)} />
            }
            style={styles.input}
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

        <Button
          mode="contained"
          //onPress={() => console.log("Login pressed")}
          style={styles.loginButton}
          contentStyle={styles.loginButtonContent}
          labelStyle={styles.loginButtonText}
        >
          Login
        </Button>

        <TouchableOpacity style={styles.createAccountButton}>
          <Text style={styles.createAccountText}>Create a new account</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.forgotPasswordButton}>
          <Text style={styles.forgotPasswordText}>Forgot Password</Text>
        </TouchableOpacity>

        <View style={styles.footer}>
          <Text style={styles.footerText}>Free Premium Starter Pack: Based on Premium Functions</Text>
        </View>
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
  logoContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  logo: {
    height: 100,
    width: 100,
  },
  welcomeText: {
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
  errorText: {
    color: "#FF6347",
    fontSize: 12,
    marginTop: 2,
    marginLeft: 5,
  },
  loginButton: {
    width: "100%",
    marginTop: 10,
    marginBottom: 15,
    backgroundColor: "#FF8C00",
    borderRadius: 8,
  },
  loginButtonContent: {
    height: 50,
  },
  loginButtonText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  createAccountButton: {
    marginBottom: 10,
  },
  createAccountText: {
    color: "#FF8C00",
    fontSize: 16,
  },
  forgotPasswordButton: {
    marginBottom: 30,
  },
  forgotPasswordText: {
    color: "#3498db",
    fontSize: 16,
  },
  footer: {
    position: "absolute",
    bottom: 30,
    width: "100%",
    alignItems: "center",
  },
  footerText: {
    color: "#FF8C00",
    fontSize: 12,
    textAlign: "center",
  },
})