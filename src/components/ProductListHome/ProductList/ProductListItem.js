import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import Colors from '../../../constants/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AddToCartButton from '../../ShoppingCart/AddToCartComponent';
import LikeProductButton from '../../LikeComponent';
import { useNavigation } from '@react-navigation/native';

export default ProductListItem = ({ data }) => {
    const navigation = useNavigation();
    const handleItemClick = () => {
        navigation.navigate('ProductDetails',{
            data: data
        });
    }
    
    return (
        <TouchableOpacity 
        style={styles.mainContainer}
        onPress={handleItemClick}>
            <LikeProductButton data={data} />
            <View style={{ alignSelf: 'center'}}>
                <Ionicons name='image-outline' size={70} color={'#A1ABC0'} />
            </View>
            <View>
                <Text style={styles.priceText}>{'$ ' + data.price}</Text>
                <Text style={styles.descText}>{data.title}</Text>
            </View>
            <AddToCartButton data={data} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        height: 200,
        width: 160,
        backgroundColor: Colors.GREY_LIGHT,
        margin: 10,
        borderRadius: 16,
        padding: 10,
        justifyContent:'space-between'
    },
    priceText: {
        color: Colors.TEXT_HEADER
    },
    descText: {
        color: Colors.TEXT_LIGHT
    }
});