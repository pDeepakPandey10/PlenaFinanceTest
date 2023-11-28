import React from 'react';

import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    ScrollView
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../constants/Colors';
import { useNavigation } from '@react-navigation/native';
import Carousel from 'react-native-reanimated-carousel';
import { SCREEN_WIDTH } from '../constants/Screen';
import { AirbnbRating } from 'react-native-ratings';
import { useDispatch } from 'react-redux';
import { addToCart } from '../utils/ProductSlice';

export default ProductDetails = (props) => {
    const { data } = props.route.params;
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const handleAddToCart = () => {
        dispatch(addToCart(data));
    }
    return (
        <ScrollView showsVerticalScrollIndicator={false}
            contentContainerStyle={{ flexGrow: 1, backgroundColor: '#fff', padding: 10 }}>
            <View style={styles.HeaderContainer}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name='arrow-back-circle' size={30} color={Colors.HEADER_BLUE_DARK} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('ProductCart')}>
                    <Ionicons name='cart-outline' size={30} color={Colors.HEADER_BLUE_DARK} />
                </TouchableOpacity>
            </View>
            <View style={{ marginTop: 10, alignSelf: 'flex-start' }}>
                <Text style={styles.headerTexts}>
                    {data.brand}
                </Text>
                <Text style={[styles.headerTexts, { fontWeight: 'bold' }]}>
                    {data.title}
                </Text>
            </View>
            <AirbnbRating size={16} showRating={false} starContainerStyle={{ alignSelf: 'flex-start', marginVertical: 4 }} defaultRating={data.rating} />
            <Carousel
                loop
                width={SCREEN_WIDTH - 20}
                height={SCREEN_WIDTH / 2}
                autoPlay={true}
                data={data.images}
                scrollAnimationDuration={1000}
                onSnapToItem={(index) => console.log('current index:', index)}
                renderItem={({ item, index }) => (
                    <View
                        style={{
                            flex: 1
                        }}
                    >
                        <Image source={{ uri: item }} style={{ height: SCREEN_WIDTH / 2, width: SCREEN_WIDTH - 20 }} />
                    </View>
                )}
            />
            <View style={{
                flexDirection: 'row',
                alignItems: 'center'
            }}>
                <Text style={{ fontSize: 12, color: Colors.HEADER_BLUE_DARK }}>
                    {
                        '$ ' + data.price
                    }
                </Text>
                <View style={{
                    borderRadius: 16,
                    width: 'auto',
                    paddingHorizontal: 8,
                    marginVertical: 20,
                    marginHorizontal: 10,
                    height: 30,
                    backgroundColor: Colors.HEADER_BLUE_LIGHT,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Text style={{ fontSize: 12, color: '#fff' }}>
                        {
                            data.discountPercentage + "% OFF"
                        }
                    </Text>
                </View>
            </View>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                alignSelf: 'center'
            }}>
                <TouchableOpacity onPress={handleAddToCart}
                style={{
                    borderRadius: 16,
                    flex: 1,
                    paddingHorizontal: 8,
                    marginVertical: 20,
                    marginHorizontal: 20,
                    height: 60,
                    backgroundColor: Colors.OFF_WHITE,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderWidth: 1,
                    borderColor: Colors.HEADER_BLUE_DARK
                }}>
                    <Text style={{ fontSize: 12, color: Colors.HEADER_BLUE_LIGHT }}>Add To Cart</Text>
                </TouchableOpacity>
                <View style={{
                    borderRadius: 16,
                    flex: 1,
                    paddingHorizontal: 8,
                    marginVertical: 20,
                    marginHorizontal: 10,
                    height: 60,
                    backgroundColor: Colors.HEADER_BLUE_LIGHT,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Text style={{ fontSize: 12, color: '#fff' }}>Buy Now</Text>
                </View>
            </View>
            <Text style={{
                color: Colors.TEXT_LIGHT,
                fontSize: 16
            }}>Details</Text>
            <Text style={{
                color: Colors.TEXT_LIGHT,
                fontSize: 12,
                flexWrap:'wrap'
            }}>{data.description}</Text>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    HeaderContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    headerTexts: {
        fontSize: 40,
        alignSelf: 'flex-start',
        color: Colors.TEXT_HEADER
    }
});