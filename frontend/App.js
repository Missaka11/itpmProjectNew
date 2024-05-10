import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

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

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home Page" component={Home} />
      <Stack.Screen name="Travel Plans" component={TravelPlans} />
      <Stack.Screen name="Inside Travel Plan" component={InsideTravelPlan} />
      <Stack.Screen name="Locations Map" component={LocationsMap} />
      <Stack.Screen name="LocationsScreen" component={LocationsScreen} />
      <Stack.Screen name="sigiriyaPage" component={SigiriyaPage} />
      <Stack.Screen name="ellaPage" component={EllaPage} />
      <Stack.Screen name="polonnaruwaPage" component={PolonnaruwaPage} />
      <Stack.Screen name="jaffnaPage" component={JaffnaPage} />
      <Stack.Screen name="hikkaPage" component={HikkaPage} />
      <Stack.Screen name="gallePage" component={GallePage} />
    </Stack.Navigator>
  );
};

const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={UserProfile} />
      <Stack.Screen name="BudgetListPage" component={BudgetListPage} />
    </Stack.Navigator>
  );
};

const BudgetStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Budget Cal" component={BudgetCalHome} />
      <Stack.Screen name="BudgetCalEdit" component={BudgetCalEdit} />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* Login screen as the initial route */}
        <Stack.Screen name="Login" component={LoginPage} options={{ headerShown: false }} />
		<Stack.Screen name="TouristSignUp" component={TouristSignUp} />
		<Stack.Screen name="SignUp" component={SignUp} />
        {/* Drawer navigator with nested stacks */}
        <Stack.Screen name="App" component={DrawerNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="Home Page">
      <Drawer.Screen name="Home" component={HomeStack} />
      <Drawer.Screen name="Profile" component={ProfileStack} />
      <Drawer.Screen name="Budget Calculator" component={BudgetStack} />
    </Drawer.Navigator>
  );
};
