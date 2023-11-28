import React from 'react';

import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    FlatList
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../constants/Colors';
import { useSelector } from 'react-redux';
import CartComp from '../components/ShoppingCart/CartComponent';

const DELIVERY_CHARGES = 2;

export default ProductCart = () => {
    const cartValue = useSelector((state) => state.cart.cart);
    const navigation = useNavigation();
    const [subTotal, setSubTotal] = React.useState(0);
    React.useEffect(() => {
        console.log(cartValue)
        let val = 0;
        cartValue.map((x) => {
            val = val + (x.value.price * x.count);
        });
        setSubTotal(val);
    },[cartValue]);

    return (
        <View style={{ flex: 1, backgroundColor: '#fff', paddingHorizontal: 10, paddingTop: 15 }}>
            <View style={styles.HeaderContainer}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name='arrow-back-circle' size={30} color={Colors.HEADER_BLUE_DARK} />
                </TouchableOpacity>
                <Text style={{ marginHorizontal: 20, color: Colors.TEXT_LIGHT }}>Shopping Cart {`(${cartValue.length})`}</Text>
            </View>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={cartValue}
                renderItem={({ item, index }) => <CartComp key={index} data={item} />}
                keyExtractor={item => item.value.id} />

            <View style={styles.footerContainer}>
                <View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10 }}>
                        <Text style={{
                            color: Colors.TEXT_LIGHT
                        }}>Subtotal</Text>
                        <Text style={{
                            color: Colors.TEXT_HEADER
                        }}>{'$ '+subTotal}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10 }}>
                        <Text style={{
                            color: Colors.TEXT_LIGHT
                        }}>Delivery</Text>
                        <Text style={{
                            color: Colors.TEXT_HEADER
                        }}>{'$ '+DELIVERY_CHARGES}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10 }}>
                        <Text style={{
                            color: Colors.TEXT_LIGHT
                        }}>Total</Text>
                        <Text style={{
                            color: Colors.TEXT_HEADER
                        }}>{'$ '+(subTotal + DELIVERY_CHARGES)}</Text>
                    </View>
                </View>
                <TouchableOpacity style={styles.proceedToCheckout}>
                    <Text style={{
                        color: Colors.WHITE
                    }}>Proceed To checkout</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    HeaderContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    footerContainer: {
        height: 164,
        backgroundColor: Colors.OFF_WHITE,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        justifyContent: 'space-between',
        paddingVertical: 10
    },
    proceedToCheckout: {
        height: 45,
        width: '90%',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.HEADER_BLUE_LIGHT,
        borderRadius: 16
    }
});