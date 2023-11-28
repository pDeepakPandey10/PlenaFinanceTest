import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { SCREEN_WIDTH } from '../../../constants/Screen';
import Colors from '../../../constants/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default ProductOfferTile = () => {
    return (
        <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}}
        colors={[Colors.COLOR_GRAD1, Colors.COLOR_GRAD2]}
        style={styles.mainContainer}>
            <View style={[styles.childContainer,{alignItems: 'center'}]}>
                <Ionicons name='image-outline' size={50} color={Colors.OFF_WHITE}  />
            </View>
            <View style={[styles.childContainer,{alignItems: 'flex-start'}]}>
                <Text style={{color: Colors.WHITE, fontWeight: '400'}}>GET</Text>
                <Text style={{color: Colors.WHITE, fontWeight: 'bold'}}>50% OFF</Text>
                <Text style={{color: Colors.WHITE, fontWeight: '200'}}>On first <Text>03</Text> Orders</Text>
            </View>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: 'row',
        borderRadius: 16,
        width: SCREEN_WIDTH / 1.5,
        height: 100,
        marginHorizontal: 10
    },
    childContainer: {
        flex: 1,
        justifyContent: 'center'
    }
});