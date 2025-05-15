import { useEffect, useState } from "react"
import { Image, StyleSheet, View, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform } from "react-native"
import { HelperText, Text, TextInput, Button } from "react-native-paper"
import { login,useMyContextController } from "../store"

const Login = ({ navigation }) => {
  const [controller, dispatch] = useMyContextController()
  const { userLogin } = controller 
  const handleLogin = () => {login(dispatch,email,password)};

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const checkEmail = () => {
    return !email.includes("@")
  }

  const checkPassword = () => {
    return password.length < 6
  }
  useEffect(() =>{
    console.log(userLogin)
    if(userLogin!= null){
      if(userLogin.role === "admin")
        navigation.navigate('Admins')
      else if(userLogin.role === "customer")
        navigation.navigate('Customer')
    }
  },[userLogin,navigation])

  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.logoContainer}>
          <Image source={require("../../../images/logolab3.png")} style={styles.logo} resizeMode="contain" />
        </View>

        <Text style={styles.welcomeText}>LOGIN</Text>

        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Email"
            left={<TextInput.Icon icon="email" />}
            style={styles.input}
            mode="outlined"
            outlineColor="#ddd"
            activeOutlineColor="#FF8C00"
            onChangeText={setEmail}
          />
          
            <HelperText type="error" visible={checkEmail()} style={styles.errorText}>
              Địa chỉ email không hợp lệ
            </HelperText>
        
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            secureTextEntry={!showPassword}
            placeholder="Password"
            left={<TextInput.Icon icon="key" />}
            right={
              <TextInput.Icon icon={showPassword ? "eye-off" : "eye"} onPress={() => setShowPassword(!showPassword)} />
            }
            style={styles.input}
            mode="outlined"
            outlineColor="#ddd"
            activeOutlineColor="#FF8C00"
            onChangeText={setPassword}
          />
            <HelperText type="error" visible={checkPassword()} style={styles.errorText}>
              Password có ít nhất 6 ký tự
            </HelperText>
          
        </View>

        <Button
          mode="contained"
          style={styles.loginButton}
          contentStyle={styles.loginButtonContent}
          labelStyle={styles.loginButtonText}
           onPress={handleLogin}
        >
          Login
        </Button>

        <TouchableOpacity style={styles.createAccountButton}
           onPress={() => navigation.navigate("Registerss")}
        >
          <Text style={styles.createAccountText}>Create a new account</Text>
        </TouchableOpacity>

        {/* <TouchableOpacity style={styles.forgotPasswordButton}
        //   onPress={() => navigation.navigate("ForgotPassWord")}
        >
          <Text style={styles.forgotPasswordText}>Forgot Password</Text>
        </TouchableOpacity>

        <View style={styles.footer}>
          <Text style={styles.footerText}>Free Premium Starter Pack: Based on Premium Functions</Text>
        </View> */}
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
    backgroundColor: "#FF3366",
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
    color: "blue",
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