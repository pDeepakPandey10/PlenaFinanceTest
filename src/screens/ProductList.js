import React from 'react';

import {
    View,
    Text,
    StyleSheet,
    ScrollView
} from 'react-native';
import ProductOfferContainer from '../components/ProductListHome/ProductOffer/ProductOfferContainer';
import HeaderViewHome from '../components/ProductListHome/HeaderSection/HeaderView';
import ProductListContainer from '../components/ProductListHome/ProductList/ProductListContainer';
import Colors from '../constants/Colors';
import {
    useGetAllProductsQuery
} from '../utils/ProductApi';

export default ProductList = () => {
    const {data} = useGetAllProductsQuery();
    return (
        <ScrollView style={{ flex: 1, marginBottom: 64}} showsVerticalScrollIndicator={false}>
            <HeaderViewHome />
            <ProductOfferContainer />
            <Text style={styles.headerText}>Recommended</Text>
            <ProductListContainer data={data} />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    headerText: {
        color: Colors.TEXT_HEADER,
        fontSize: 26,
        marginHorizontal: 10
    }
});