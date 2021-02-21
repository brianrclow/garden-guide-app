import 'react-native-gesture-handler';
import React, { useContext} from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { LoginScreen, SettingsScreen, RegistrationScreen, GardenScreen, CatalogScreen, AccountScreen, AppearanceScreen, AboutScreen, FeedbackScreen } from '../../screens'
import {decode, encode} from 'base-64'
import LogoutButton from '../logoutButton/logoutButton'
import { UserContext } from '../../providers/UserProvider'
import { COLORS } from '../../constants'
import PlantScreen from '../../screens/PlantScreen/PlantScreen';
import PersonalPlantScreen from '../../screens/PersonalPlantScreen/PersonalPlantScreen';

if (!global.btoa) {  global.btoa = encode }
if (!global.atob) { global.atob = decode }



export default function Application() {
const CatalogStack = createStackNavigator();
const GardenStack = createStackNavigator();
const SettingsStack = createStackNavigator();
function CatalogStackScreen() {
  return (
  <CatalogStack.Navigator>
    <CatalogStack.Screen
      name="catalogScreen"
      component={CatalogScreen}
      options={{
        headerShown: false,
        title: "Catalog"
      }}
    />
    <CatalogStack.Screen
      name="plantScreen"
      options={{
        title: "View Plant"
      }}
      component={PlantScreen}
    />
  </CatalogStack.Navigator>
  );
}
function GardenStackScreen() {
  return (
  <GardenStack.Navigator>
    <GardenStack.Screen
      name="gardenScreen"
      component={GardenScreen}
      options={{
        headerShown: false
      }}
    />
    <GardenStack.Screen
      name="plantScreen"
      options={{
        title: "View Plant"
      }}
      component={PersonalPlantScreen}
    />
  </GardenStack.Navigator>
  );
}
function SettingsStackScreen() {
  return (
  <SettingsStack.Navigator initialRouteName="Settings">
    <SettingsStack.Screen
      name="Settings"
      component={SettingsScreen}
      options={{
        headerShown: false
      }}
    />
    <SettingsStack.Screen
      name="Account"
      options={{
        title: "Account"
      }}
      component={AccountScreen}
    />
    <SettingsStack.Screen
      name="Appearance"
      options={{
        title: "Appearance"
      }}
      component={AppearanceScreen}
    />
    <SettingsStack.Screen
      name="About"
      options={{
        title: "About"
      }}
      component={AboutScreen}
    />
    <SettingsStack.Screen
      name="Feedback"
      options={{
        title: "Feedback"
      }}
      component={FeedbackScreen}
    />
  </SettingsStack.Navigator>
  );
}
const Tab = createBottomTabNavigator();
const user = useContext(UserContext);
  //TODO: Display splash screen until user is fully fetched as null or a user so we don't have weird tab switches
  return (
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName={user ? "GardenScreen" : "CatalogScreen"}
          tabBarOptions={{
            activeTintColor: COLORS.primaryGreen //This is where we would have our constant color
          }}
          screenOptions={({route}) => ({
              tabBarIcon: ({focused, color, size}) => {
                let iconName;
                switch (route.name) {
                  case 'Settings':
                    iconName = 'ios-settings';
                      break;
                  case 'GardenScreen':
                    iconName = 'ios-leaf';
                    break;
                  case 'CatalogScreen':
                    iconName = 'ios-book';
                    break;
                  case 'Login':
                    iconName = 'ios-person';
                    break;
                  case 'Register':
                    iconName = 'ios-add';
                    break;
                }

                return <Ionicons name={iconName} size={size} color={color} />;
              } 
          })}
          >
          { user ? (
            <>
            {/* <Tab.Screen name="GardenScreen" options={{tabBarLabel: 'My Garden'}} component={GardenScreen}/> */}
            <Tab.Screen name="GardenScreen" options={{tabBarLabel: 'My Garden'}}>
                {props => <GardenStackScreen {...props} navigation={GardenStack} />}
            </Tab.Screen>
            <Tab.Screen name="CatalogScreen" options={{tabBarLabel: 'Catalog'}}>
                {props => <CatalogStackScreen {...props} navigation={CatalogStack} />}
            </Tab.Screen>
            <Tab.Screen name="Settings" options={{tabBarLabel: 'Settings'}}>
                {props => <SettingsStackScreen {...props} navigation={SettingsStack} />}
            </Tab.Screen>
            </>
          ) : (
            <>
              <Tab.Screen name="CatalogScreen" options={{tabBarLabel: 'Catalog'}}>
                {props => <CatalogStackScreen {...props} navigation={CatalogStack} />}
              </Tab.Screen>
              <Tab.Screen name="Login" component={LoginScreen} />
              <Tab.Screen name="Register" component={RegistrationScreen} />
            </>
          )}
        </Tab.Navigator>
        {/* {user ? <TabNav /> : ""} */}
      </NavigationContainer>
      // {Tab.}
  );
}