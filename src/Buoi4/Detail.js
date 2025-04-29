import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";

const DetailScreen = () => {
    return (
       <View style={styles.container}>
            <Text style={{marginBottom:20}}> Detail Screen</Text>
       </View>
    );
}

export default DetailScreen;

const styles = StyleSheet.create({  
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});