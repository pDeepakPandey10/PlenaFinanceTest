import React from 'react';
import {
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default LikeProductButton = ({data}) => {
    const [liked, setLiked] = React.useState(false);
    return (
        <TouchableOpacity style={styles.mainContainer} onPress={() => setLiked(!liked)}>
            {
                liked ? <Ionicons name='heart' size={20} color={'#FF8181'} /> : <Ionicons name='heart-outline' size={20} color={'#323743'} />
            }
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        position:'absolute',
        left: 10,
        top: 10,
        justifyContent:'center',
        alignItems:'center'
    }
});