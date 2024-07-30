import React from "react";
import { Text, View } from "react-native"
// import CompassHeading from 'react-native-compass-heading';

//   React.useEffect(() => {
//     const degree_update_rate = 3;

//     CompassHeading.start(degree_update_rate, ({heading, accuracy}) => {
//       console.log('CompassHeading: ', heading, accuracy);
//     });

//     return () => {
//       CompassHeading.stop();
//     };
//   }, []);
export const Compass = () => {
    return(
        <View>
            <Text>Compass</Text>
        </View>
    )
}