import { Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import Animated, {
    useAnimatedProps,
    useAnimatedStyle,
    useSharedValue,
    withTiming,
} from 'react-native-reanimated';
import Feather from 'react-native-vector-icons/Feather';
import { getPathXCenterByIndex } from '../../utils/Path';
import usePath from '../../hooks/usePath';
import { SCREEN_WIDTH } from '../../constants/Screen';

const ICON_SIZE = 25;
const LABEL_WIDTH = SCREEN_WIDTH / 4;

const TabItem = ({
    label,
    icon,
    index,
    activeIndex,
    onTabPress,
}) => {

    const AnimatedIcon = Animated.createAnimatedComponent(Feather);
    const { curvedPaths } = usePath();
    const animatedActiveIndex = useSharedValue(activeIndex);
    const iconPosition = getPathXCenterByIndex(curvedPaths, index);
    const labelPosition = getPathXCenterByIndex(curvedPaths, index);

    const tabStyle = useAnimatedStyle(() => {
        const translateY = animatedActiveIndex.value - 1 === index ? -15 : 10;
        const iconPositionX = iconPosition - index * ICON_SIZE;
        return {
            width: ICON_SIZE,
            height: ICON_SIZE,
            transform: [
                { translateY: withTiming(translateY) },
                { translateX: iconPositionX - ICON_SIZE / 2 },
            ],
        };
    });
    const labelContainerStyle = useAnimatedStyle(() => {
        const translateY = 40;
        return {
            transform: [
                { translateY: withTiming(translateY) },
                { translateX: labelPosition - LABEL_WIDTH / 2 },
            ],
        };
    });

    const iconColor = useSharedValue(
        activeIndex === index + 1 ? 'yellow' : 'rgba(128,128,128,0.8)',
    );

    let labelColor = activeIndex === index + 1 ? '#fff' : 'rgba(128,128,128,0.8)';

    //Adjust Icon color for this first render
    useEffect(() => {
        animatedActiveIndex.value = activeIndex;
        if (activeIndex === index + 1) {
            iconColor.value = withTiming('yellow');
            labelColor = '#fff';
        } else {
            iconColor.value = withTiming('rgba(128,128,128,0.8)');
            labelColor = 'rgba(128,128,128,0.8)';
        }
    }, [activeIndex]);

    const animatedIconProps = useAnimatedProps(() => ({
        color: iconColor.value,
    }));
    return (
        <>
            <Animated.View style={[tabStyle]}>
                <Pressable
                    testID={`tab${label}`}
                    hitSlop={{ top: 30, bottom: 30, left: 50, right: 50 }}
                    onPress={onTabPress}>
                    <AnimatedIcon
                        name={icon}
                        size={ICON_SIZE}
                        animatedProps={animatedIconProps}
                    />
                </Pressable>
            </Animated.View>
            <Animated.View style={[labelContainerStyle, styles.labelContainer]}>
                <Text style={[styles.label, { color: labelColor }]}>{label}</Text>
            </Animated.View>
        </>
    );
};

export default TabItem;

const styles = StyleSheet.create({
    labelContainer: {
        position: 'absolute',
        alignItems: 'center',
        width: LABEL_WIDTH,
    },
    label: {
        fontSize: 12,
    },
});