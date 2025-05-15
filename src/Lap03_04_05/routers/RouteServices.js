import { createStackNavigator } from "@react-navigation/stack";
import { useMyContextController } from "../store";
import Services from "../screens/Service"
import AddNewService from "../screens/AddNewService"
import DetailService from "../screens/DetailService"
import UpdateServices from "../screens/UpdateService";
import { IconButton } from "react-native-paper";
const Stack = createStackNavigator();

const RouterService = () => {
    const [controller,dispatch] =  useMyContextController()
    const {userLogin} = controller

    return(
        <Stack.Navigator
            initialRouteName="Services"
            screenOptions={{
                title:(userLogin!= null) && (userLogin.fullName),
                headerTitleAlign:'center',
                headerStyle:{
                    backgroundColor:"#FF6B81",
                },
                headerTitleStyle: {
                    color: 'white',
                    fontSize: 20,
                    fontWeight: 'bold'
                },
                headerRight: (props) => <IconButton icon={"account"}/>
            }}
        >
            <Stack.Screen name = "Services" component={Services}
                options={{
                    title: (userLogin != null) ? userLogin.fullName : "KAMI SPA",
                    headerLeft: () => null,
                }}
            />
            <Stack.Screen name = "AddNewService" component={AddNewService}
                options={({ navigation }) => ({
                    title: "Add Service",
                    headerLeft: () => (
                        <IconButton
                            icon="arrow-left"
                            iconColor="white"
                            size={24}
                            onPress={() => navigation.navigate("Services")}
                        />
                    ),
                })}
            />
            <Stack.Screen name = "DetailService" component={DetailService}
                options={{
                    title: "Detail Service",
                }}
            />
            <Stack.Screen name = "UpdateService" component={UpdateServices}
                options={{
                    title: "Update Service",
                }}
            />
        </Stack.Navigator>
    )
}

export default RouterService;