import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomePage from "./pages/HomePage";
import UserProfile from "./pages/UserProfile";
import TravelPlans from "./pages/TravelPlans";
import InsideTravelPlan from "./pages/InsideTravelPlan";
import SignUp from "./pages/signUp";
import LoginPage from "./pages/loginPage";
import TouristSignUp from "./pages/TouristSignUp";
import LocationsMap from "./pages/LocationsMap";

import Home from "./pages/Home";
import SigiriyaPage from "./pages/sigiriyaPage";
import EllaPage from "./pages/ellaPage";
import PolonnaruwaPage from "./pages/polonnaruwaPage";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        {/* <Stack.Screen name="Home Page" component={HomePage} /> */}

        <Stack.Screen name="Login Page" component={LoginPage} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="TouristSignUp" component={TouristSignUp} />
        <Stack.Screen name="Profile" component={UserProfile} />
        <Stack.Screen name="Travel Plans" component={TravelPlans} />
        <Stack.Screen name="Inside Travel Plan" component={InsideTravelPlan} />
        <Stack.Screen name="Locations Map" component={LocationsMap} />
        <Stack.Screen name="Sigiriya" component={SigiriyaPage} />
        <Stack.Screen name="Ella" component={EllaPage} />
        <Stack.Screen name="Polonnaruwa" component={PolonnaruwaPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
