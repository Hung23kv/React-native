import "react-native-gesture-handler";
import 'react-native-reanimated';
import { NavigationContainer } from "@react-navigation/native";
import { PaperProvider } from "react-native-paper";
// import BottomTabNavigation from "./src/Lap02/route/BottomTabNavigation";
// import Drawernavigation from "./src/Lap02/route/DrawerNavigation";
import { SafeAreaProvider } from "react-native-safe-area-context";
// import Route from "./src/Lap03/routers/Route";
// import { MyContextControllerProvider } from "./src/Lap03/store";
// import Route from "./src/Lap03/routers/Route";
import TodoScreens from "./src/Buoi5/TodoScreens"
// import MyDrawer from "./src/Buoi4/MyDrawer";


const App = () => {
  return(
    <SafeAreaProvider>
      <PaperProvider>
        {/* <MyContextControllerProvider> */}
        <NavigationContainer>
          {/* <BottomTabNavigation /> */}
          {/* <Drawernavigation/> */}
          {/* <MyDrawer/> */}
          <TodoScreens/>
          {/* <Route/> */}
        </NavigationContainer>
        {/* </MyContextControllerProvider> */}
      </PaperProvider>
    </SafeAreaProvider>
  );
}

export default App;