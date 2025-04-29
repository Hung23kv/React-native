import "react-native-gesture-handler";
import 'react-native-reanimated';
import { NavigationContainer } from "@react-navigation/native";
import { PaperProvider } from "react-native-paper";
//  import BottomTabNavigation from "./src/Lap02/route/BottomTabNavigation";
// import Drawernavigation from "./src/Lap02/route/DrawerNavigation";
import { SafeAreaProvider } from "react-native-safe-area-context";
import MyDrawer from "./src/Buoi4/MyDrawer";
// import Profile from "./src/Lap02/Screen/Profile";
// import Favorites from "./src/Lap02/Screen/Favorites";


const App = () => {
  return(
    <SafeAreaProvider>
      <PaperProvider>
        <NavigationContainer>
          {/* <Profile/> */}
          {/* <Favorites /> */}
          {/* <BottomTabNavigation /> */}
          {/* <Drawernavigation/> */}
          <MyDrawer/>
        </NavigationContainer>
      </PaperProvider>
    </SafeAreaProvider>
  );
}

export default App;