import { View } from "react-native";
import DetailListItem from "../components/DetailListItem";
const options = () => {
    return (
        <View style={{ flex: 1, backgroundColor: "white" }}>
            <DetailListItem title={"Update Profile"} />
            <DetailListItem title={"Change Languge"} />
            <DetailListItem title={"Sign out"} />
        </View>
    )
}

export default options;