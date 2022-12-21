import React from 'react';
import { TextStyle } from 'react-native';
import { PanGestureHandler, PanGestureHandlerGestureEvent } from 'react-native-gesture-handler';
import Animated, {
    runOnJS,
    useAnimatedGestureHandler,
    useAnimatedStyle,
    useSharedValue,
    withSpring,
} from 'react-native-reanimated';
import { dragResultOptions } from './dragResultOptions';

type CustomViewProps = {
    children: React.ReactNode;
    setDragResult: (arg0: dragResultOptions) => void;
    style?: TextStyle | TextStyle[];
};

type ContextType = {
    x: number;
    y: number;
};

function timeout(delay: number) {
    return new Promise((res) => setTimeout(res, delay));
}

const DragableView: React.FC<CustomViewProps> = ({ children, setDragResult, style }) => {
    const x = useSharedValue(0);
    const y = useSharedValue(0);
    const panGestureEvent = useAnimatedGestureHandler<PanGestureHandlerGestureEvent, ContextType>({
        onStart: (_, context) => {
            // context.x = x.value;
            context.y = y.value;
        },
        onActive: (event, context) => {
            // x.value = event.translationX + context.x;
            y.value = event.translationY + context.y;
        },
        onEnd: () => {
            // x.value = withSpring(0);
            if (y.value < -200) {
                y.value = withSpring(-345);
                runOnJS(setDragResult)(dragResultOptions.FullScreen);
            } else if (y.value > 270) {
                runOnJS(setDragResult)(dragResultOptions.Minimize);
                y.value = withSpring(360);
            } else {
                runOnJS(setDragResult)(dragResultOptions.Normal);
                y.value = withSpring(0);
            }
        },
    });
    const panStyle = useAnimatedStyle(() => {
        'worklet';
        return {
            transform: [
                {
                    translateX: 0, // x.value,
                },
                {
                    translateY: y.value,
                },
            ],
        };
    }, [x, y]);

    return (
        <PanGestureHandler onGestureEvent={panGestureEvent}>
            <Animated.View style={[{}, panStyle, { ...style }]}>{children}</Animated.View>
        </PanGestureHandler>
    );
};

export { DragableView };
