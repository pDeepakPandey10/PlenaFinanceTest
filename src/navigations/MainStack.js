import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProductDetails from '../screens/ProductDetails';
import ProductList from '../screens/ProductList';
import ProductCart from '../screens/Cart';
import ProductFavorites from '../screens/Favorites';
import CustomBottomTab from '../components/BottomTabs/CustomBottomTab';

const Stack = createNativeStackNavigator();
const TabNav = createBottomTabNavigator();


const HomeTab = () => {
    return (
        <TabNav.Navigator tabBar={props => <CustomBottomTab {...props} />} screenOptions={{
            headerShown: false
        }}>
            <TabNav.Screen name="ProductList" component={ProductList} />
            <TabNav.Screen name="Categories" component={ProductList} />
            <TabNav.Screen name="Favorites" component={ProductFavorites} />
            <TabNav.Screen name="More" component={ProductList} />
        </TabNav.Navigator>
    )
}

export default MainStack = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="HomeTab" component={HomeTab} />
            <Stack.Screen name="ProductDetails" component={ProductDetails} />
            <Stack.Screen name="ProductCart" component={ProductCart} />
        </Stack.Navigator>
    )
}
