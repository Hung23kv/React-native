import { Text, View } from "react-native";
import { StyleSheet } from "react-native";
const Profile = () => {
    return (
       <View style={styles.container}>
            <Text variant="displayLarge">Profile</Text>
       </View>
    );
}

export default Profile;

const styles = StyleSheet.create({  
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});