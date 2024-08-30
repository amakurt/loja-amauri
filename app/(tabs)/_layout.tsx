import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from "expo-router";

export default function TabLayout() {
    return (
        <Tabs screenOptions={{ tabBarActiveTintColor: '#0000FF'}}>
            <Tabs.Screen 
                name="home"
                options={{
                    title: 'Inicio',
                    tabBarIcon: ({ color }) => <FontAwesome 
                    size={28}
                    name="home"
                    color={color}
                    />
                }}
            />
            <Tabs.Screen 
                name="categorias"
                options={{
                    title: 'Categorias',
                    tabBarIcon: ({ color }) => <FontAwesome 
                    size={28}
                    name="archive"
                    color={color}
                    />
                }}
            />
            <Tabs.Screen 
                name="about"
                options={{
                    title: 'Sobre mim',
                    tabBarIcon: ({ color }) => <FontAwesome 
                    size={28}
                    name="user"
                    color={color}
                    />
                }}
            />
        </Tabs>
    );
}