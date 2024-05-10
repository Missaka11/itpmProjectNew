import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

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
import JaffnaPage from "./pages/jaffnaPage";
import HikkaPage from "./pages/hikkaPage";
import GallePage from "./pages/gallePage";

import BudgetCalHome from "./pages/BudgetCalHome";
import BudgetListPage from "./pages/BudgetListPage";
import BudgetCalEdit from "./pages/BudgetCalEdit";
import LocationsScreen from "./pages/LocationsScreen";


import UserProfilePage from "./pages/UserProfilePage";
import EditProfile from "./pages/EditProfile";


const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login Page" component={LoginPage} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="TouristSignUp" component={TouristSignUp} />
        <Stack.Screen name="Profile" component={UserProfile} />
        <Stack.Screen name="Travel Plans" component={TravelPlans} />
        <Stack.Screen name="Inside Travel Plan" component={InsideTravelPlan} />
        <Stack.Screen name="Locations Map" component={LocationsMap} />
        <Stack.Screen name="sigiriyaPage" component={SigiriyaPage} />
        <Stack.Screen name="ellaPage" component={EllaPage} />
        <Stack.Screen name="polonnaruwaPage" component={PolonnaruwaPage} />
        <Stack.Screen name="jaffnaPage" component={JaffnaPage} />
        <Stack.Screen name="hikkaPage" component={HikkaPage} />
        <Stack.Screen name="gallePage" component={GallePage} />
        <Stack.Screen name="BudgetCalHome" component={BudgetCalHome} />
        <Stack.Screen name="BudgetListPage" component={BudgetListPage} />
        <Stack.Screen name="BudgetCalEdit" component={BudgetCalEdit} />
        <Stack.Screen name="LocationsScreen" component={LocationsScreen} />
        <Stack.Screen name="UserProfilePage" component={UserProfilePage} />
        <Stack.Screen name="EditProfile" component={EditProfile} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
