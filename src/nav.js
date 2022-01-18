import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './pages/home'

const Stack = createNativeStackNavigator();
class Nav extends React.Component {
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
                    {/* <Stack.Screen name="Details" component={Details} />
                    <Stack.Screen name="setPage" component={setPage} /> */}
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}

export default Nav