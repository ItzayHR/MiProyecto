import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import GodsScreen from '../Screens/GodsScreen';
import InfoGodScreen from '../Screens/InfoGodScreen';

const Stack = createStackNavigator();

export default function StackNavigation1() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Gods" component={GodsScreen}
                options={{headerShown:false, headerTitle:'Gods'}}
            />
            <Stack.Screen
                name="Info" component={InfoGodScreen}
                options={{headerShown:false, headerTitle:'Información'}}
            />
        </Stack.Navigator>
    )
}
