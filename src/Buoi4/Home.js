
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";

const HomeScreen = ({navigation}) => {
    return (
       <View style={styles.container}>
            <Text style={{marginBottom:20}}> Home Screen</Text>
            <Button mode="contained" onPress={()=> navigation.navigate('Detail') }> Go to detail</Button>
       </View>
    );
}

export default HomeScreen;
const styles = StyleSheet.create({  
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});