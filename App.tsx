import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { PaperProvider } from "react-native-paper";
import BottomTabNavigation from "./src/Lap02/route/BottomTabNavigation";
// import Profile from "./src/Lap02/Screen/Profile";
// import Favorites from "./src/Lap02/Screen/Favorites";


const App = () => {
  return(
    <PaperProvider>
      <NavigationContainer>
        {/* <Profile/> */}
        {/* <Favorites /> */}
        <BottomTabNavigation />
      </NavigationContainer>
    </PaperProvider>
  );
}

export default App;