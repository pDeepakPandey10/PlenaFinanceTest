import React from 'react';

import {
    View,
    TouchableOpacity,
    StyleSheet,
    Text
} from 'react-native';
import Colors from '../../constants/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { addToCart, removeFromCart } from '../../utils/ProductSlice';
import { useDispatch } from 'react-redux';

export default CartComp = ({data}) => {
    const dispatch = useDispatch();
    const handleAddToCart = () => {
        dispatch(addToCart(data));
    }
    const handleRemoveFromCart = () => {
        dispatch(removeFromCart(data));
    }
    return (
        <View style={styles.mainContainer}>
            <View style={styles.childContainer}>
                <Ionicons name='image-outline' size={40} color={'#A1ABC0'} />
                <View style={{ marginHorizontal: 15 }}>
                    <Text style={styles.textStyle}>{data.value.title}</Text>
                    <Text style={styles.textStyle}>{'$ '+data.value.price}</Text>
                </View>
            </View>
            <View style={[styles.childContainer,{justifyContent:'flex-end'}]}>
                <TouchableOpacity onPress={handleRemoveFromCart}>
                    <Ionicons name='remove-circle' size={25} color={'#A1ABC0'} />
                </TouchableOpacity>
                <Text style={[styles.textStyle,{marginHorizontal: 8}]}>{data.count}</Text>
                <TouchableOpacity onPress={handleAddToCart}>
                    <Ionicons name='add-circle' size={25} color={'#A1ABC0'} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        height: 70,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10,
        backgroundColor: Colors.OFF_WHITE,
        borderRadius: 16,
        paddingHorizontal: 10
    },
    childContainer: {
        height: 70,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    textStyle: {
        fontSize: 14,
        color: Colors.TEXT_HEADER
    }
});