import React from 'react';
import {
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../../constants/Colors';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../utils/ProductSlice';


export default AddToCartButton = ({data}) => {
    const dispatch = useDispatch();
    const handleAddToCart = () => {
        dispatch(addToCart(data));
    }
    
    return (
        <TouchableOpacity onPress={handleAddToCart}
        style={styles.mainContainer}>
            <Ionicons name='add-circle' size={30} color={Colors.HEADER_BLUE_DARK} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        position:'absolute',
        right: 10,
        bottom: 10,
        justifyContent:'center',
        alignItems:'center'
    }
});