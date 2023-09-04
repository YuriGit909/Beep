import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Feather} from '@expo/vector-icons'
import Home from './screens/Home';
import New from './screens/New';

const Tab =createBottomTabNavigator();

export default function TabRoutes(){

    return (
        <Tab.Navigator screenOptions={{headerShown: false}}>
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel:'Inicio',
                    tabBarIcon: ({color,size}) => <Feather name="home" color={color} size={size} />
                }}
            />
            <Tab.Screen
                name="New"
                component={New}
                options={{
                    tabBarLabel:'Novo',
                    tabBarIcon: ({color,size}) => <Feather name="plus" olor={color} size={size}/>
                }}
                
            />
            
        </Tab.Navigator>
    )

}