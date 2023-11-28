import React from 'react';

import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../../../constants/Colors';
import { SCREEN_WIDTH, SCREEN_HEIGHT } from '../../../constants/Screen';
import { Dropdown } from 'react-native-element-dropdown';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

export default HeaderViewHome = () => {
    const navigation = useNavigation();
    const cartValue = useSelector(state => state.cart.cart);

    return (
        <View style={styles.main_container}>
            <View style={styles.rowView}>
                <Text style={{
                    fontSize: 20,
                    color: Colors.WHITE
                }}>Hey, Rahul</Text>
                <View style={styles.absoluteCircle}>
                    <Text style={{ color: '#fff' }}>{cartValue.length}</Text>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('ProductCart')}>

                    <Ionicons name='cart-outline' size={25} color={Colors.WHITE} />
                </TouchableOpacity>
            </View>
            <View style={{
                justifyContent: 'space-between',
                height: 50,
                marginHorizontal: 20,
                marginVertical: 10,
                borderRadius: 20,
                backgroundColor: Colors.HEADER_BLUE_DARK,
                paddingHorizontal: 10,
                flexDirection: 'row',
                alignItems: 'center'
            }}>
                <Ionicons name='search' size={20} color={Colors.WHITE} />
                <TextInput style={{
                    flex: 1,
                    borderRadius: 20,
                    height: 45,
                    backgroundColor: Colors.HEADER_BLUE_DARK,
                    color: '#fff'
                }} placeholder='    Search Products or store' placeholderTextColor={Colors.GREY_PLACE_HOLDER} />
            </View>
            <View style={styles.rowView}>
                <Text style={{
                    fontSize: 11,
                    color: Colors.GREY_LIGHT
                }}>DELIVERY TO</Text>
                <Text style={{
                    fontSize: 11,
                    color: Colors.GREY_LIGHT
                }}>WITHIN</Text>
            </View>
            <View style={styles.rowView}>
                <Dropdown
                    style={{ height: 20, width: 100 }}
                    data={[{ label: 'Green Way 3000, sylhet', value: '1' }]}
                    selectedTextStyle={{ color: Colors.WHITE }}
                    value={'Green Way 3000, sylhet'}
                />
                <Dropdown
                    style={{ height: 20, width: 100 }}
                    data={[{ label: 'Green Way 3000, sylhet', value: '1' }]}
                    selectedTextStyle={{ color: Colors.WHITE }}
                    value={'1 hour'}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    main_container: {
        height: SCREEN_HEIGHT / 4,
        width: SCREEN_WIDTH,
        backgroundColor: Colors.HEADER_BLUE_LIGHT,
        padding: 10
    },
    rowView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    absoluteCircle: {
        position: 'absolute',
        backgroundColor: '#FF8181',
        justifyContent: 'center',
        alignItems: 'center',
        height: 20,
        width: 20,
        borderRadius: 10,
        elevation: 2,
        right: 0,
        top: -5
    }
});