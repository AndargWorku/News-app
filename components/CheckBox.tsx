
import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { AntDesign } from "@expo/vector-icons";
import Animated, {
  FadeIn,
  FadeOut,
  Layout,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";

type Props = {
  label: string;
  checked: boolean;
  onPress: () => void;
};

const CheckBox = ({ label, checked, onPress }: Props) => {
  const reAnimatedContainerStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: withTiming(
        checked ? "rgba(139, 142, 82, 0.1)" : "transparent",
        { duration: 150 }
      ),
      borderColor: withTiming(checked ? Colors.tint : Colors.black, {
        duration: 150,
      }),
      paddingLeft: 16,
      paddingRight: checked ? 10 : 16,
    };
  }, [checked]);

  const rnTextStyle = useAnimatedStyle(() => {
    return {
      color: withTiming(checked ? Colors.tint : Colors.black, {
        duration: 150,
      }),
    };
  }, [checked]);

  return (
    <Pressable onPress={onPress}>
      <Animated.View
        style={[styles.container, reAnimatedContainerStyle]}
        layout={Layout.springify().mass(0.8)}
      >
        <Animated.Text style={[styles.label, rnTextStyle]}>
          {label}
        </Animated.Text>

        {checked && (
          <Animated.View
            style={styles.iconWrapper}
            entering={FadeIn.duration(350)}
            exiting={FadeOut}
          >
            <AntDesign name="checkcircle" size={14} color={Colors.tint} />
          </Animated.View>
        )}
      </Animated.View>
    </Pressable>
  );
};

export default CheckBox;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    borderColor: Colors.black,
    borderWidth: 1,
    paddingVertical: 8,
  },
  label: {
    fontSize: 14,
    color: Colors.black,
  },
  iconWrapper: {
    marginLeft: 8,
    height: 14,
    width: 14,
  },
});


// import { StyleSheet, Text, View } from "react-native";
// import React from "react";
// import { Colors } from "@/constants/Colors";
// import { AntDesign } from "@expo/vector-icons";
// import Animated, {
//   FadeIn,
//   FadeOut,
//   LinearTransition,
//   useAnimatedStyle,
//   withTiming,
// } from "react-native-reanimated";

// type Props = {
//   label: string;
//   checked: boolean;
//   onPress: () => void;
// };

// const CheckBox = ({ label, checked, onPress }: Props) => {
//   const reAnimatedContainerStyle = useAnimatedStyle(() => {
//     return {
//       backgroundColor: withTiming(
//         checked ? "rgba(139, 142, 82, 0.1)" : "transparent",
//         { duration: 150 }
//       ),
//       borderColor: withTiming(checked ? Colors.tint : Colors.black, {
//         duration: 150,
//       }),
//       paddingLeft: 16,
//       paddingRight: checked ? 10 : 16,
//     };
//   }, [checked]);

//   const rnTextStyle = useAnimatedStyle(() => {
//     return {
//       color: withTiming(checked ? Colors.tint : Colors.black, {
//         duration: 150,
//       }),
//     };
//   }, [checked]);

//   return (
//     <Animated.View
//       style={[styles.container, reAnimatedContainerStyle]}
//       onTouchEnd={onPress}
//       layout={LinearTransition.springify().mass(0.8)}
//     >
//       <Animated.Text style={[styles.label, rnTextStyle]}>{label}</Animated.Text>

//       {checked && (
//         <Animated.View
//           style={styles.iconWrapper}
//           entering={FadeIn.duration(350)}
//           exiting={FadeOut}
//         >
//           <AntDesign name="checkcircle" size={14} color={Colors.tint} />
//         </Animated.View>
//       )}
//     </Animated.View>
//   );
// };

// export default CheckBox;

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: "row",
//     justifyContent: "center",
//     alignItems: "center",
//     borderRadius: 12,
//     borderColor: Colors.black,

//     borderWidth: 1,
//     paddingVertical: 8,
//     // paddingHorizontal:16
//   },
//   label: {
//     fontSize: 14,
//     color: Colors.black,
//   },
//   iconWrapper: {
//     marginLeft: 8,
//     height: 14,
//     width: 14,
//   },
// });
