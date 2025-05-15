import React,{useState} from "react";
import {  StyleSheet, View, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform, Alert } from "react-native";
import { Text, TextInput, Button, HelperText } from "react-native-paper";
import fireStore from "@react-native-firebase/firestore";
import auth from "@react-native-firebase/auth";

const Login = ({ navigation }) => {
    const [showPassword, setShowPassword] = useState(false)
    const [confshowPassword, setConfShowPassword] = useState(false)

    const [password,setPassWord] = useState("");
    const [passWordCofirm,setPassWordConfirm] = useState("");
    const [email,setEmail] = useState("")
    const [fullName,setFullName] = useState("");
    const [phone,setPhone]  = useState("");
    const [address,setAddress] = useState("");
    const hasErrorFullName = () => fullName === "";
    const hasErrorEmail = () => !email.includes("@");
    const hasErrorPassWord = () =>  password.length < 6;
    const hasErrorConfirmPassWord = () => passWordCofirm != password
    const hasErrorPhone = () => {
      const phoneInput = /^\d{10}$/;
      return !phoneInput.test(phone); 
    }
    const USER = fireStore().collection("Users");
    const handleCreateAccount = () => {
      if (hasErrorFullName() || hasErrorEmail() || hasErrorPassWord() || 
        hasErrorConfirmPassWord() || hasErrorPhone()) {
        Alert.alert("Error", "Vui lòng kiểm tra lại thông tin!");
        return;
      }
      auth().createUserWithEmailAndPassword(email,password)
      .then (response => {
        USER.doc(email)
        .set({
          fullName,
          email,
          phone,
          address,
          role: "customer",
        })
        Alert.alert("success", "Đăng ký thành công !!!");
        navigation.navigate("Logins")
      })
      .catch(e => Alert.alert("Tài khoản đã tồn tại !!!"))
    }

    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <Text style={styles.createText}>Create a new account</Text>
            <View style={styles.inputContainer}>
            <TextInput
                placeholder="Full name"
                left={<TextInput.Icon icon="add-user" />}
                style={styles.input}
                mode="outlined"
                outlineColor="#ddd"
                activeOutlineColor="#FF8C00"
                onChangeText={setFullName}
            />
            <HelperText type="error" visible = {hasErrorFullName()}>
              Full name không được để trống
            </HelperText>
            </View>

            <View style={styles.inputContainer}>
            <TextInput
                placeholder="Phone"
                left={<TextInput.Icon icon="phone" />}
                style={styles.input}
                mode="outlined"
                outlineColor="#ddd"
                activeOutlineColor="#FF8C00"
                onChangeText={setPhone}
            />
           <HelperText type="error" visible={hasErrorPhone()}>
                Số điện thoại phải gồm 10 chữ số
            </HelperText>
            </View>

            <View style={styles.inputContainer}>
            <TextInput
                placeholder="Address ... "
                style={styles.input}
                mode="outlined"
                outlineColor="#ddd"
                activeOutlineColor="#FF8C00"
                onChangeText={setAddress}
            />
            </View>

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
            <HelperText type="error" visible = {hasErrorEmail()}>
              Địa chỉ email không hợp lệ
            </HelperText>
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
                onChangeText={setPassWord}
            />
            <HelperText type="error" visible = {hasErrorPassWord()}>
              Password có ít nhất 6 ký tự
            </HelperText>
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
                onChangeText={setPassWordConfirm}
            />
            <HelperText type="error" visible = {hasErrorConfirmPassWord()}>
              Confirm không khớp với password
            </HelperText>
            </View>

            <Button
            mode="contained"
            onPress={() => handleCreateAccount()}
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