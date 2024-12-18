import { View, Text } from 'react-native'
import React from 'react'
import { styles } from '../_utils/utils';

const Navbar = () => {
    return (
        <View style={[styles.navbar]}>
            <Text style={[styles.headingText, styles.whiteText]}>Choose the component to render</Text>
        </View>
    )
}

export default Navbar;