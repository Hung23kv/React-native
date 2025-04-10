import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
  ImageBackground,
  SafeAreaView,
  StatusBar,
} from 'react-native';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username && password) {
      Alert.alert(
        'Login Information',
        `Username: ${username}\nPassword: ${password}`,
        [{ text: 'OK' }]
      );
    } else {
      Alert.alert('Error', 'Please enter username and password');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      
      {/* Background with bokeh effect */}
      <ImageBackground
        source={{ uri: 'https://i.pinimg.com/736x/04/ab/c9/04abc994bd6b40ed9a148f56b37d68a6.jpg' }}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        {/* Pokemon GO Logo */}
        <View style={styles.logoContainer}>
          <Image
            source={{ uri: 'https://lh3.googleusercontent.com/3Pu9wd7lO3p6WCQpBCZshWRVVpIoW6mwgqgdV_Ra_kWGI_CcywB_01bS28ccYlw8ekaj1LNFmDwTfxKVpN2yppjKuBnlWJgNacRKuIOKUUKrYQ=s2400-rj' }}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>

       
        <View style={styles.formContainer}>
          <Text style={styles.registerText}>REGISTER</Text>
          <TextInput
            style={styles.input}
            placeholder="USERNAME"
            placeholderTextColor="#8B7D00"
            value={username}
            onChangeText={setUsername}
          />
          
          <TextInput
            style={styles.input}
            placeholder="PASSWORD"
            placeholderTextColor="#8B7D00"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
          
          <TouchableOpacity 
            style={styles.loginButton}
            onPress={handleLogin}
          >
            <Text style={styles.loginButtonText}>LOGIN</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 80,
    marginBottom: 20,
  },
  logo: {
    width: 400,
    height: 100,
  },
  registerText: {
    left:300,
    marginBottom: 20,
    color: 'red',
    fontWeight: 'bold',
  },
  formContainer: {
    flex: 1,
    padding: 20,
    paddingTop: 30,
  },
  input: {
    backgroundColor: '#FFE066',
    height: 50,
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
    color: '#333',
  },
  loginButton: {
    backgroundColor: '#E95B5B', 
    height: 50,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default LoginScreen;



