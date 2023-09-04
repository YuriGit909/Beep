import { createStackNavigator } from '@react-navigation/stack';
import { Profiler } from 'react';

const Stack = createStackNavigator();

export default function StackRoutes(){
    return (
        <Stack.Navigator screenOptions={{ title:' '}}>
            <Stack.Screen
            name="Home"
            component={Profiler}
            
            />
        </Stack.Navigator>
    )

}

