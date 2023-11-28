import React from 'react';
import {
    StyleSheet,
    ScrollView
} from 'react-native';
import ProductOfferTile from './OfferComp';

export default ProductOfferContainer = () => {
    return (
        <ScrollView horizontal contentContainerStyle={styles.mainContainer} showsHorizontalScrollIndicator={false}>
            <ProductOfferTile/>
            <ProductOfferTile/>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        height: 120,
        justifyContent: 'center',
        flexGrow: 1,
        padding: 10
    },
    childContainer: {
        flex: 1,
        justifyContent: 'center'
    }
});