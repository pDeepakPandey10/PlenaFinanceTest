import React from 'react';
import {
    StyleSheet,
    ScrollView
} from 'react-native';
import ProductListItem from './ProductListItem';

export default ProductListContainer = ({data}) => {
    return (
        <ScrollView
            horizontal
            contentContainerStyle={styles.mainContainer}
            showsHorizontalScrollIndicator={false}>
                {
                    data?.products?.map((item, index) => <ProductListItem key={index} data={item} />)
                }
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        justifyContent: 'center',
        flex: 1,
        flexWrap:'wrap'
    },
    childContainer: {
        flex: 1,
        justifyContent: 'center'
    }
});